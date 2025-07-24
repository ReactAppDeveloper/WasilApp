// src/screens/BaseScreen.js
import React, { Component } from 'react';
import { PermissionsAndroid, Platform, Alert ,BackHandler} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class BaseScreen extends Component {
  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return true;
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  getCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    });
  };

  showExitAlert = () => {
    Alert.alert('Exit', 'Are you sure you want to exit?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Yes', onPress: () => BackHandler.exitApp() },
    ]);
  };
}
