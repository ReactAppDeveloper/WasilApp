import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  Alert,
  ImageBackground,
  Vibration,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import CompassHeading from "react-native-compass-heading";
import Geolocation from "react-native-geolocation-service";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../theme";
const { width } = Dimensions.get("window");
const dials = [
   {
    dialImage: require("../QiblaWhite/qibla.png"),
  },
  {
   dialImage: require("../QiblaWhite/qibla1.png"),
  },
];

const QiblaCompassNew = () => {
  const [direction, setDirection] = useState(0);
  const [qibla, setQibla] = useState(0);
  const [selectedDialIndex, setSelectedDialIndex] = useState(0);

  useEffect(() => {
    checkDeviceSensors();
    handlePermissionFlow();
  }, []);

  const checkDeviceSensors = async () => {
    const hasCompass = await CompassHeading.hasCompass();
    if (!hasCompass) {
      Alert.alert(
        "Alert",
        "Your device doesn't have the required sensors to run the Qibla.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    const degreeUpdateRate = 3;
    const compassListener = CompassHeading.start(degreeUpdateRate, ({ heading }) => {
      setDirection(heading);
    });

    return () => {
      CompassHeading.stop(compassListener);
    };
  };

  const handlePermissionFlow = async () => {
    try {
      const storedStatus = await AsyncStorage.getItem("locationPermissionStatus");

      if (storedStatus === "granted") {
        // Already granted
        getUserLocation();
        return;
      } else if (storedStatus === "blocked") {
        // Previously blocked
        Alert.alert(
          "Location Access Blocked",
          "Please enable location permission in Settings → Privacy → Location Services."
        );
        return;
      }

      // Ask permission for the first time
      await requestLocationPermission();
    } catch (err) {
      console.log("Permission flow error:", err);
    }
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Required",
            message: "This app needs your location to show the Qibla direction.",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await AsyncStorage.setItem("locationPermissionStatus", "granted");
          getUserLocation();
        } else {
          await AsyncStorage.setItem("locationPermissionStatus", "blocked");
          Alert.alert("Permission Required", "Please allow location access from settings.");
        }
      } else if (Platform.OS === "ios") {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        if (result === RESULTS.GRANTED) {
          await AsyncStorage.setItem("locationPermissionStatus", "granted");
          getUserLocation();
        } else if (result === RESULTS.BLOCKED) {
          await AsyncStorage.setItem("locationPermissionStatus", "blocked");
          Alert.alert(
            "Location Permission Blocked",
            "Please enable location access in iPhone Settings → Privacy → Location Services."
          );
        } else {
          await AsyncStorage.setItem("locationPermissionStatus", "denied");
          Alert.alert("Location Access Required", "Please allow location access.");
        }
      }
    } catch (err) {
      console.log("Permission request error:", err);
    }
  };

  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        getDirection(latitude, longitude);
      },
      (error) => {
        console.log("Location error:", error);
        Alert.alert(
          "Location Error",
          "Please make sure your location is enabled for accurate Qibla direction."
        );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const getDirection = (latitude, longitude) => {
    const kaabaLatitude = 21.4225;
    const kaabaLongitude = 39.8262;
    const userLatRad = deg2rad(latitude);
    const kaabaLatRad = deg2rad(kaabaLatitude);
    const deltaLon = deg2rad(kaabaLongitude - longitude);

    const y = Math.sin(deltaLon);
    const x =
      Math.cos(userLatRad) * Math.tan(kaabaLatRad) -
      Math.sin(userLatRad) * Math.cos(deltaLon);

    const qiblaDirection = rad2deg(Math.atan2(y, x));
    setQibla(qiblaDirection);
    Vibration.vibrate(500);
  };

  const deg2rad = (degrees) => degrees * (Math.PI / 180);
  const rad2deg = (radians) => radians * (180 / Math.PI);
  const selectedDial = dials[selectedDialIndex];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.black} />
      <ImageBackground
        style={{ width: "100%", height: "100%" ,backgroundColor:Colors.white}}
      >
        <View style={styles.directionContainer}>
          <Text style={styles.directionText}>Qibla:</Text>
          <Text style={[styles.directionText, { bottom: 40 }]}>{direction}°</Text>
        </View>

        <ImageBackground
          source={selectedDial.dialImage}
          style={[styles.image, { transform: [{ rotate: `${360 - direction}deg` }] }]}
        >
          <View
            style={[styles.compassContainer, { transform: [{ rotate: `${qibla}deg` }] }]}
          />
        </ImageBackground>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Please keep your phone flat (horizontal) for accurate Qibla direction.
          </Text>
        </View>

         <View style={styles.dialSelectorContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dials.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDialIndex(index)}
                style={[
                  styles.dialThumbnail,
                  selectedDialIndex === index && styles.selectedDial,
                ]}
              >
                <ImageBackground source={item.dialImage} style={styles.thumbnailImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  directionContainer: {
    flex: 0.15,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  directionText: {
    textAlign: "center",
    color: Colors.wasilnewthemecolorthird,
    fontFamily: Platform.OS === "ios" ? "Poppins-SemiBold" : "headerfont",
    fontSize: 22,
    bottom: 40,
  },
 image: {
  top:150,
  position:"absolute",
  width: width * 0.9,
  height: width * 0.9,
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
},
  compassContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 0.2,
    top:600,
    position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  infoText: {
    textAlign: "center",
    color: Colors.wasilnewthemecolorthird,
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Poppins-SemiBold" : "headerfont",
  },
  dialSelectorContainer: { alignItems:"center",justifyContent:"space-around",position: "absolute", bottom: 0, width: "100%", backgroundColor: Colors.wasilnewthemecolorsecond, },
  dialThumbnail: {width: 70,height: 70,marginHorizontal: 8,borderRadius: 10,borderWidth: 2,borderColor: Colors.wasilnewthemecolorthird,overflow: "hidden"},
  selectedDial: { borderColor: Colors.transparent },
  thumbnailImage: { width: "100%", height: "100%", resizeMode: "cover" },
});

export default QiblaCompassNew;

