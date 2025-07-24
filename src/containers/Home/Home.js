// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import BaseScreen from './BaseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import { Colors } from '../../theme';
import HomeHeader from './HomeHeader';
import PrayerTimeSection from './PrayerTimeSection';
import HomeGrid from './HomeGrid';
import Banner from './Banner';
import DuaCardList from './DuaCardList';
import SpeakerList from './SpeakerList';
import GreetingList from './GreetingList';
import SpeakerJSON from './speaker.js';
import GreetingJSON from './greeting.js';
import AzanSetupComponent, { runAzanSetup } from './AzanSetupComponent';

export default class HomeScreen extends BaseScreen {
  focusListener;
  blurListener;

  state = {
    loading: true,
    error: false,
    prayerTimes: {},
    hijriDate: '',
    address: '',
    duaList: [],
    speakerListData: [],
    greetingList: [],
    hasFocusedOnce : false,
  };

  componentDidMount() {
    this.requestNotificationPermission();

    this.hasFocusedOnce = false;

    this.focusListener = this.props.navigation.addListener('focus', async () => {
    const { refresh } = this.props.route.params || {};

    if (this.hasFocusedOnce) {
      console.log('🔁 Home focused again — running Azan setup...');
      await runAzanSetup();
    } else {
      this.hasFocusedOnce = true;
    }
    if (refresh) {
    this.fetchData();
    }
    else{
    this.fetchData();
    }
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  });

  this.blurListener = this.props.navigation.addListener('blur', () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  });
}


  componentWillUnmount() {
    if (this.focusListener) this.focusListener();
    if (this.blurListener) this.blurListener();
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Allow Azan Notifications',
            message: 'We need notification access to alert you at prayer times.',
            buttonPositive: 'Allow',
          }
        );
        console.log('Notification permission granted:', granted === PermissionsAndroid.RESULTS.GRANTED);
      } catch (e) {
        console.warn('Notification permission error:', e);
      }
    }
  };

  onBackPress = () => {
    this.showExitAlert();
    return true;
  };

  fetchData = async () => {
    try {
      const lat = await AsyncStorage.getItem('ONLATI') || '24.8607';
      const lon = await AsyncStorage.getItem('ONLONGI') || '67.0011';
      const date = moment().format('DD-MM-YYYY');

      const [prayerRes, addressRes, duaRes] = await Promise.all([
        axios.get(`https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lon}&school=1`),
        axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.9c1fc2948e48c019aee6f13b6a961796&lat=${lat}&lon=${lon}&format=json`),
        axios.get('https://islamicapp.vercel.app/api/homedua'),
      ]);

      const prayerData = prayerRes.data.data;
      const address = addressRes.data.address.state;
      const duaList = duaRes.data;

      const offsetString = await AsyncStorage.getItem('HIJRI_OFFSET');
      const hijriOffset = parseInt(offsetString) || 0;

      const hijriDateOriginal = moment(prayerData.date.hijri.date, 'DD-MM-YYYY');
      const hijriAdjusted = hijriDateOriginal.add(hijriOffset, 'days');
      const hijriDateFormatted = `${hijriAdjusted.format('D')} ${prayerData.date.hijri.month.en} ${hijriAdjusted.format('YYYY')}`;

      this.setState({
        prayerTimes: prayerData.timings,
        hijriDate: hijriDateFormatted,
        address,
        duaList,
        loading: false,
      });

    } catch (error) {
      console.error('❌ Failed to fetch home data:', error);
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const {
      loading,
      error,
      prayerTimes,
      hijriDate,
      address,
      duaList,
    } = this.state;

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centered}>
          <Text>Error loading data.</Text>
        </View>
      );
    }

    return (
      <View style={styles.vcontainer}>
        <StatusBar backgroundColor={Colors.primary} />
        <HomeHeader hijriDate={hijriDate} address={address} onLocationPress={this.requestLocationPermission} />
        <PrayerTimeSection timings={prayerTimes} />
        <AzanSetupComponent />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor={Colors.primary} />
          <HomeGrid navigation={this.props.navigation} />
          <Banner />
          <DuaCardList data={duaList} />
          <SpeakerList navigation={this.props.navigation} data={SpeakerJSON} />
          <GreetingList navigation={this.props.navigation} data={GreetingJSON} />
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  vcontainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  });
