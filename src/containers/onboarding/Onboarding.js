// Onboarding.js
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  PermissionsAndroid,
  Animated,
  Platform,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from '../../theme';
import slides from './slides';
import OnbaordingItem from './OnbaordingItem';
import Paginator from './Paginator';
import Nextbutton from './Nextbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const watchIdRef = useRef(null);

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        try {
          const auth = await Geolocation.requestAuthorization('whenInUse');
          if (auth === 'granted') {
            getOneTimeLocation();
            subscribeLocation();
          } else {
            setLocationStatus('Permission Denied');
            setCurrentLatitude('24.860735');
            setCurrentLongitude('67.115903');
          }
        } catch (err) {
          console.warn('iOS requestAuthorization error', err);
          setLocationStatus('Permission Error');
          setCurrentLatitude('24.860735');
          setCurrentLongitude('67.115903');
        }
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocation();
          } else {
            setLocationStatus('Permission Denied');
            setCurrentLatitude('24.860735');
            setCurrentLongitude('67.115903');
          }
        } catch (err) {
          console.warn(err);
          setLocationStatus('Permission Error');
          setCurrentLatitude('24.860735');
          setCurrentLongitude('67.115903');
        }
      }
    };

    requestLocationPermission();

    return () => {
      clearTimeout(hideTimeout);

      if (watchIdRef.current !== null) {
        Geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
      Geolocation.stopObserving && Geolocation.stopObserving();
    };
  }, []);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        const lat = currentLatitude || '24.860735';
        const lon = currentLongitude || '67.115903';
        await AsyncStorage.setItem('ONLATI', lat.toString());
        await AsyncStorage.setItem('ONLONGI', lon.toString());
        await AsyncStorage.setItem('ONBOARDED', 'true');
        navigation.navigate('GuestNew');
      } catch (err) {
        console.log('Error @setItem:', err);
      }
    }
  };

  const oSkip = async () => {
    try {
      const lat = currentLatitude || '24.860735';
      const lon = currentLongitude || '67.115903';
      await AsyncStorage.setItem('ONLATI', lat.toString());
      await AsyncStorage.setItem('ONLONGI', lon.toString());
      await AsyncStorage.setItem('ONBOARDED', 'true');
      navigation.navigate('GuestNew');
    } catch (err) {
      console.log('Error @setItem:', err);
    }
  };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('You are Here');
        setCurrentLongitude(position.coords.longitude?.toString() || '');
        setCurrentLatitude(position.coords.latitude?.toString() || '');
      },
      error => {
        console.log('getCurrentPosition error', error);
        setLocationStatus(error?.message || 'Error getting location');
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true, 
      },
    );
  };

  const subscribeLocation = () => {
    // clear old watch if any
    if (watchIdRef.current !== null) {
      Geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    watchIdRef.current = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        setCurrentLongitude(position.coords.longitude?.toString() || '');
        setCurrentLatitude(position.coords.latitude?.toString() || '');
      },
      error => {
        console.log('watchPosition error', error);
        setLocationStatus(error?.message || 'Error watching location');
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
    <View style={styles.container}>
     
        <FlatList
  data={slides}
  renderItem={({ item }) => <OnbaordingItem item={item} />}
  horizontal
  pagingEnabled
  bounces={false}
  showsHorizontalScrollIndicator={false}
  keyExtractor={item => item.id}
  onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollx } } }],
    { useNativeDriver: false },
  )}
  scrollEventThrottle={32}
  onViewableItemsChanged={viewableItemsChanged}
  viewabilityConfig={viewConfig}
  ref={slidesRef}
/>


      <Paginator data={slides} scrollx={scrollx} />
      <Nextbutton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
          position: 'absolute',
          left: 10,
          bottom: 35, 
        }}>
        <TouchableOpacity onPress={oSkip}>
          <Text style={styles.headingText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    left: 20,
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Light',
    color: Colors.white,
    lineHeight: height * 0.03,
  },
});

export default Onboarding;
