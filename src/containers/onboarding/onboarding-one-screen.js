import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, PermissionsAndroid, StyleSheet, Dimensions, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Images, Colors } from "../../theme";
import Geolocation from "react-native-geolocation-service";
import { Onboardingone } from '../../assets/icons';

const { width, height } = Dimensions.get('window');

const ImagesOnbaord = () => (
  <Image
    source={Images.OnboardFirst}
    style={{ width: '100%'}}
  />
);

export const OnboardingOneScreen = ({ navigation }) => {

  const [currentLongitude, setCurrentLongitude] = useState("");
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [locationStatus, setLocationStatus] = useState('');
  let watchID = null;

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
            setCurrentLatitude("24.860735");
            setCurrentLongitude("67.115903");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const onPressContinue = () => {
    navigation.navigate('onboarding-two', {
      currentlatitudeone: currentLatitude,
      currentlongitudeone: currentLongitude,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.secondary} />
      <View style={styles.imageContainer}>
        <ImagesOnbaord />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textBox}>
          <Text style={styles.headingText}>
            Welcome to Wasil - {"\n"}"The Islamic App"
          </Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            Wasil is your all-in-one app for every Islamic need, offering knowledge, practice, community engagement, and beyond. Dive in for a comprehensive and enriching Islamic learning journey.
          </Text>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.iconContainer}>
            <Onboardingone />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onPressContinue}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 0.7,
    backgroundColor: Colors.transparent,
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  headingText: {
    fontSize: width * 0.07, 
    fontFamily: 'heading',
    color: Colors.secondary,
    lineHeight: height * 0.05,
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  descriptionText: {
    fontSize: width * 0.04,
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
    lineHeight: height * 0.03,
  },
  bottomView: {
    width: '95%',

    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.02,
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'flex-start',
    flex: 1,
    left:20
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  nextButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    height: height * 0.04,
    width: width * 0.2,
    justifyContent: 'center',
  },
  nextButtonText: {
    top:1,
    fontSize: width * 0.035,
    alignSelf: 'center',
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
  },
});

export default OnboardingOneScreen;
