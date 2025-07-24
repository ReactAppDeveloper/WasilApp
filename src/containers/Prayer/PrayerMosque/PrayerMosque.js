import React, { useState, useEffect} from "react";
import {View,StyleSheet,Text, Alert} from "react-native";
import { Colors} from '../../../theme';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PrayerMosque = () => { 

  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  
  useEffect(() => {  
    const fetchData = async () => {
      try {
        const storedLatitude = await AsyncStorage.getItem('ONLATI');
        const storedLongitude = await AsyncStorage.getItem('ONLONGI');
        
        if (storedLatitude && storedLongitude) {
          setlatitude(storedLatitude);
          setlongitude(storedLongitude);
        }
  
        const latitudeValue = storedLatitude || 24.860735;
        const longitudeValue = storedLongitude || 67.001137;

        setlatitude(latitudeValue);
        setlongitude(longitudeValue);
        console.log(latitude+""+longitude)

        return;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <View style={styles.containerMain}>
        <WebView source={{ uri: `https://www.google.com/maps/search/Mosque/@${latitude},${longitude},14z`}} style={{ flex: 1 }} />
    </View>
  );
};
// 
export default PrayerMosque;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
 
});
