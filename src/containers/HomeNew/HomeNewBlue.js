import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  BackHandler,
  PermissionsAndroid,
  Alert
} from 'react-native';


import HomeHeader from './HomeHeader';
import AzanSetuoComponent, { runAzanSetup } from './AzanSetuoComponent.android';
import DuaCardNewList from './DuaCardNewList';
import QuranCompletionCard from './QuranCompletionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import { Colors } from '../../theme';
import {getStorageItem} from '../Quran/mmkvStorage/storeData';
import HomeGrid from './HomeGrid';
const { width } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import RecitersSection from './RecitersSection';
import IslamicStoriesSection from './IslamicStoriesSection';
import WallOfRemembrance from './WallOfRemembrance';
import SupportWasilSection from './SupportWasilSection';

const HomeNewBlue = ({ navigation, route }) => {
  const backHandler = useRef(null);
  const hasFocusedOnce = useRef(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState('');

  const [gregorianDate] = useState(
    moment().format('dddd, MMM D, YYYY'),
  );

  const [address, setAddress] = useState('');

  const [toggles, setToggles] = useState({
    Fajr: true,
    Dhuhr: true,
    Asr: true,
    Maghrib: true,
    Isha: true,
  });

  const [hasOpenedSurah, setHasOpenedSurah] = useState(false);

  const [duaList, setDuaList] = useState([]);

  const showExitAlert = () => {
  Alert.alert(
    'Exit',
    'Are you sure you want to exit?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ],
  );
  };
  useEffect(() => {
  loadSavedToggles();

  runAzanSetup();

  requestNotificationPermission();

  const focusListener = navigation.addListener(
    'focus',
    async () => {
      const { refresh } = route.params || {};

      const opened = getStorageItem('hasOpenedSurah');

      setHasOpenedSurah(!!opened);

      if (hasFocusedOnce.current) {
        runAzanSetup();
      } else {
        hasFocusedOnce.current = true;
      }

      fetchHomeData();

      backHandler.current =
        BackHandler.addEventListener(
          'hardwareBackPress',
          onBackPress,
        );
    },
  );

  const blurListener = navigation.addListener(
    'blur',
    () => {
      backHandler.current?.remove();
    },
  );

  return () => {
    focusListener();

    blurListener();

    backHandler.current?.remove();
  };
  }, []);

  const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Allow Azan Notifications',
          message: 'We need notification access to alert you at prayer times.',
          buttonPositive: 'Allow',
        },
      );

      console.log(
        'Notification permission granted:',
        granted === PermissionsAndroid.RESULTS.GRANTED,
      );
    } catch (e) {
      console.warn('Notification permission error:', e);
    }
  }
  };

  const onBackPress = () => {
  showExitAlert();
  return true;
  };

  const loadSavedToggles = async () => {
  const stored = await AsyncStorage.getItem('azan_prayer_toggles');

  if (stored) {
    setToggles(JSON.parse(stored));
  }
  };

  const fetchHomeData = async () => {
  try {
    const lat =
      (await AsyncStorage.getItem('ONLATI')) || '24.8607';

    const lon =
      (await AsyncStorage.getItem('ONLONGI')) || '67.0011';

    const date = moment().format('DD-MM-YYYY');

    const [prayerRes, addressRes, duaRes] =
      await Promise.all([
        axios.get(
          `https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lon}&school=1`,
        ),
        axios.get(
          `https://us1.locationiq.com/v1/reverse?key=pk.9c1fc2948e48c019aee6f13b6a961796&lat=${lat}&lon=${lon}&format=json`,
        ),
        axios.get(
          'https://islamicapp.vercel.app/api/homedua',
        ),
      ]);

    const prayerData = prayerRes.data.data;

    const addressValue =
      addressRes.data.address.state;

    // -----------------------------
    // HIJRI DATE + OFFSET
    // -----------------------------

    const offsetString =
      await AsyncStorage.getItem('HIJRI_OFFSET');

    const hijriOffset =
      parseInt(offsetString, 10) || 0;

    let hijriDay =
      parseInt(prayerData.date.hijri.day, 10);

    let hijriMonth =
      parseInt(prayerData.date.hijri.month.number, 10);

    let hijriYear =
      parseInt(prayerData.date.hijri.year, 10);

    // Hijri month names from API
    const hijriMonths = [
      'Muharram',
      'Safar',
      'Rabi al-Awwal',
      'Rabi al-Thani',
      'Jumada al-Awwal',
      'Jumada al-Thani',
      'Rajab',
      "Sha'ban",
      'Ramadan',
      'Shawwal',
      "Dhu al-Qi'dah",
      'Dhu al-Hijjah',
    ];

    // Days in Hijri month
    // Using 30/29 alternating pattern.
    // Dhu al-Hijjah is handled as 29 here.
    const getDaysInHijriMonth = month => {
      return month % 2 === 1 ? 30 : 29;
    };

    // Apply HIJRI_OFFSET
    let remainingOffset = hijriOffset;

    while (remainingOffset > 0) {
      const daysInMonth =
        getDaysInHijriMonth(hijriMonth);

      hijriDay++;

      if (hijriDay > daysInMonth) {
        hijriDay = 1;
        hijriMonth++;

        if (hijriMonth > 12) {
          hijriMonth = 1;
          hijriYear++;
        }
      }

      remainingOffset--;
    }

    while (remainingOffset < 0) {
      hijriDay--;

      if (hijriDay < 1) {
        hijriMonth--;

        if (hijriMonth < 1) {
          hijriMonth = 12;
          hijriYear--;
        }

        hijriDay =
          getDaysInHijriMonth(hijriMonth);
      }

      remainingOffset++;
    }

    const hijriDateFormatted =
      `${hijriDay} ${hijriMonths[hijriMonth - 1]} ${hijriYear}`;

    console.log(
      'Hijri API:',
      prayerData.date.hijri.date,
    );

    console.log(
      'Hijri Offset:',
      hijriOffset,
    );

    console.log(
      'Final Hijri:',
      hijriDateFormatted,
    );

    setPrayerTimes(prayerData.timings);
    setHijriDate(hijriDateFormatted);
    setAddress(addressValue);
    setDuaList(duaRes.data);

    setLoading(false);
    setError(false);
  } catch (e) {
    console.error('❌ Home API error', e);

    setError(true);
    setLoading(false);
  }
};

  const getNextPrayer = () => {
  const prayersOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const now = new Date();

  for (let prayer of prayersOrder) {
    if (!prayerTimes[prayer]) continue;
    const [hour, minute] = prayerTimes[prayer].split(':').map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hour);
    prayerTime.setMinutes(minute);
    prayerTime.setSeconds(0);

    if (prayerTime > now) {
      return { nextPrayer: prayer, nextPrayerTime: prayerTimes[prayer] };
    }
  }

  return { nextPrayer: 'Fajr', nextPrayerTime: prayerTimes['Fajr'] };
  };

  const getCurrentPrayer = () => {
 
  const prayersOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const now = new Date();

  let currentPrayer = 'Fajr';
  let currentTime = prayerTimes['Fajr'];

  for (let prayer of prayersOrder) {
    if (!prayerTimes[prayer]) continue;

    const [hour, minute] = prayerTimes[prayer].split(':').map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hour);
    prayerTime.setMinutes(minute);
    prayerTime.setSeconds(0);

    if (prayerTime <= now) {
      currentPrayer = prayer;
      currentTime = prayerTimes[prayer];
    }
  }

  return { currentPrayer, currentTime };
  };

    
    const { nextPrayer, nextPrayerTime } = getNextPrayer();     
    const { currentPrayer, currentTime } = getCurrentPrayer();
   
    if (loading)
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );

    if (error)
      return (
        <View style={{ flex: 1, justifyContent: 'center' ,alignItems:"center"}}>
          <Text>Error loading home data</Text>
        </View>
      );

    return (
       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={Colors.intermediate1}/>
         <HomeHeader navigation={navigation}
          hijriDate={hijriDate}
          gregorianDate={gregorianDate}
          address={address}
          nextPrayer={nextPrayer}
          nextPrayerTime={nextPrayerTime}
          currentPrayer={currentPrayer}
          currentTime={currentTime}/>
        <AzanSetuoComponent />
        <LinearGradient
          colors={['#43288A', '#43288A', '#43288A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientSection}>
         {hasOpenedSurah ? <QuranCompletionCard /> : null}
         <HomeGrid navigation={navigation} />
         <IslamicStoriesSection navigation={navigation} />
         <RecitersSection navigation={navigation} />
         <WallOfRemembrance navigation={navigation} />
         <SupportWasilSection navigation={navigation}/>
         <DuaCardNewList data={duaList} />
         <View style={{ height: 70 }} />
         </LinearGradient>
        </ScrollView>
    )
  };

export default HomeNewBlue;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.intermediate1 },
  tabsRow: {
  flexDirection: 'row',
  marginTop: Platform.OS === 'ios' ? 65 : 40,
  paddingHorizontal: 10,
  justifyContent: 'space-between',
},
  tabButton: { paddingVertical: 10, borderRadius: 10, backgroundColor: '#FAFAFA', marginHorizontal: 4 },
  tabText: {
  fontSize: 13,
  textAlign: 'center',
  color: Colors.lightblack,
  fontFamily: "NunitoSans-SemiBold"
},
  carouselCard: { height: 220, borderRadius: 20, overflow: 'hidden', marginTop: 20 },
  quranImage: { width: '100%', height: '100%' },
  quranOverlay: { bottom: 0, padding: 16, width: '100%' },
  quranTitle: { color: Colors.white, fontSize: 25, bottom: 25, marginLeft: 10,fontFamily:Platform.OS === 'ios' ? "Asul-Regular" : "AsulRegular" },
  quranDesc: { color: '#EEE', fontSize: 12, bottom: 15, marginLeft: 10,fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },
  grid: { paddingHorizontal: 10, },
  gridItem: { flex: 1, alignItems: 'center', marginVertical: 8 },
  gridIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#30196C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridLabel: { fontSize: 11,fontFamily:"NunitoSans-SemiBold" ,color:Colors.white},
  duaheading: { marginTop: 50, paddingLeft: 25, fontSize: 20, fontWeight: '600',fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",marginBottom: 12, color: Colors.white},
  headerWrapper: {width: width*0.95, height: 150, alignSelf:"center" },
  headerImage: { width: '95%', height: '100%',resizeMode:"contain",borderRadius:15,alignSelf:"center" },
  headerOverlay: { bottom: 125,left:Platform.OS === 'ios'?40:28,flexDirection:"column"},
  headerText: {fontSize: 12, left:42,top:10,color: Colors.white,fontWeight: '500',fontFamily:"Poppins-Light"},
  card: {height: 210, overflow: 'hidden'},
  image: {
    width: '100%', 
    height: 150,
    resizeMode: 'contain',
  },
  labelWrapper: {
    height: 100,
    justifyContent: 'center',
    marginTop: -30,
  },
  labelText: {
    left:5,
    color: Colors.white,
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? "Asul-Regular" : "AsulRegular",
  },
  labelText1: {
    left:5,
    color: Colors.white,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  gradientSection: {
    top:40,
    minHeight: '70%',
  },
});
