import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, PermissionsAndroid, Alert, ImageBackground, Vibration } from "react-native";
import CompassHeading from "react-native-compass-heading";
import Geolocation from 'react-native-geolocation-service';
import { Colors } from "../../theme";

const QiblaCompass = () => {
  const [direction, setDirection] = useState(0);
  const [qibla, setQibla] = useState(0);
  
  useEffect(() => {
    checkDeviceSensors();
    requestLocationPermission();
  }, []);

  const checkDeviceSensors = async () => {
    const hasCompass = await CompassHeading.hasCompass();
    if (!hasCompass) {
      Alert.alert(
        "Alert",
        "Your device doesn't have the required sensors to run the Qibla.",
        [{ text: "OK"}],
        { cancelable: false }
      );
    } else {
      const degreeUpdateRate = 3;
      const compassListener = CompassHeading.start(degreeUpdateRate, ({ heading }) => {
        setDirection(heading);
      });

      return () => {
        CompassHeading.stop(compassListener);
      };
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Your App',
          message: 'Allow app to access your location'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            getDirection(latitude, longitude);
          },
          () => Alert.alert('Please ensure that your current location is enabled to display the Qibla direction.'),
          { enableHighAccuracy: true }
        );
      } else {
        Alert.alert(
          "Location Permission Required",
          "Please grant permission to access your location.",
          [
            {
              text: "OK",
              onPress: () => requestLocationPermission(),
            },
          ],
          { cancelable: false }
        );
      }
    } catch (err) {
      console.log("No Access to location" + err);
    }
  };

  const getDirection = (latitude, longitude) => {
    const kaabaLatitude = 21.4225;
    const kaabaLongitude = 39.8262;
    const userLatRad = deg2rad(latitude);
    const kaabaLatRad = deg2rad(kaabaLatitude);
    const deltaLon = deg2rad(kaabaLongitude - longitude);

    const y = Math.sin(deltaLon);
    const x = Math.cos(userLatRad) * Math.tan(kaabaLatRad) -
      Math.sin(userLatRad) * Math.cos(deltaLon);

    const qiblaDirection = rad2deg(Math.atan2(y, x));
    setQibla(qiblaDirection);

    // Trigger vibration when Qibla direction is found
    Vibration.vibrate(500); // Vibrate for 500 milliseconds
  };

  const deg2rad = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const rad2deg = (radians) => {
    return radians * (180 / Math.PI);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <ImageBackground source={require('../../assets/bg.png')} style={{ width: "100%", height: "100%" }}>
        <View style={styles.directionContainer}>
          <Text style={styles.directionText}>Qibla: </Text>
          <Text style={[styles.directionText, { bottom: 40 }]}>{direction}°</Text>
        </View>
        <ImageBackground source={require('../../assets/qibla.png')} style={[styles.image, { transform: [{ rotate: `${360 - direction}deg` }] }]}>
          <View style={[styles.compassContainer, { transform: [{ rotate: `${qibla}deg` }] }]}>
          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Please keep your cellphone horizontal for more accurate direction</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center"
  },
  directionContainer: {
    flex: 0.2,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center"
  },
  directionText: {
    textAlign: 'center',
    color: Colors.primary,
    fontFamily:"headerfont",
    fontSize: 22,
    bottom: 40
  },
  image: { 
    width:"100%",
    height:"100%",
    resizeMode:"contain",
    flex: 0.5,
    alignSelf:"center",
  },
  compassContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30
  },
  infoText: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 16,
    fontFamily:"headerfont",
  }
});

export default QiblaCompass;
