import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
  NativeModules,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import moment from 'moment';
import {cachedGet, DAY} from '../../../services/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';

import {useTheme, Fonts, TypeScale, Spacing, Radius} from '../../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScreenState} from '../../../components';
import {refreshLocation} from '../../../services/location';

import {
  PrayerFajrIcon,
  PrayerDhuhrIcon,
  PrayerAsrIcon,
  PrayerMaghribIcon,
  PrayerIshaIcon,
  StepExpandedIcon,
  StepCollapsedIcon,
} from '../../../assets/icons/themed';
import {
  WasilNewFajrIcon,
  WasilNewDhuhrIcon,
  WasilNewMagrhibIcon,
  WasilNewIshaIcon,
} from '../../../assets/icons';

import PrayerHeader from '../../HomeNew/PrayerHeader';
import PrayerTimeSectionNew from './PrayerTimeSectionNew';

const { AzanScheduler } = NativeModules;

const TEST_MODE = false;

const PRAYER_NAMES = [
  'Fajr',
  'Dhuhr',
  'Asr',
  'Maghrib',
  'Isha',
];

const DEFAULT_LATITUDE = '24.8607';
const DEFAULT_LONGITUDE = '67.0011';

const LOCATIONIQ_API_KEY =
  'pk.9c1fc2948e48c019aee6f13b6a961796';

const PrayerGuide = ({ navigation }) => {
  const {Colors} = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  const [locating, setLocating] = useState(false);

  const locationWatchId = useRef(null);
  const isMounted = useRef(true);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [address, setAddress] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');

  const [timings, setTimings] = useState({});
  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState('');

  const [prayerToggles, setPrayerToggles] = useState({
    Fajr: true,
    Dhuhr: true,
    Asr: true,
    Maghrib: true,
    Isha: true,
  });
  const [expandedPrayer, setExpandedPrayer] = useState(null);

  const gregorianDate = useMemo(
    () => moment().format('dddd, MMM D, YYYY'),
    []
  );

  const prayerSections = useMemo(
    () => [
      {
        key: 'Fajr',
        english: 'Fajr',
        arabic: 'فجر',
        icon: <PrayerFajrIcon />,
        items: [
          {
            title: 'Sunnah: 2 rak’ah',
            route: 'FajrSunnah',
          },
          {
            title: 'Farz: 2 rak’ah',
            route: 'FajrFarz',
          },
        ],
      },

      {
        key: 'Dhuhr',
        english: 'Dhuhr',
        arabic: 'ظہر',
        icon: <PrayerDhuhrIcon />,
        items: [
          {
            title: 'Sunnah: 4 rak’ah',
            route: 'DhuhrFirst4Sunnah',
          },
          {
            title: 'Farz: 4 rak’ah',
            route: 'DhuhrFirst4Farz',
          },
          {
            title: 'Sunnah: 2 rak’ah',
            route: 'Dhuhr2Sunnah',
          },
          {
            title: 'Nafil: 2 rak’ah',
            route: 'Dhuhr2Nafil',
          },
        ],
      },

      {
        key: 'Asr',
        english: 'Asr',
        arabic: 'عصر',
        icon: <PrayerAsrIcon />,
        items: [
          {
            title: 'Sunnah: 4 rak’ah',
            route: 'AsrFirst4Sunnah',
          },
          {
            title: 'Farz: 4 rak’ah',
            route: 'AsrFirst4Farz',
          },
        ],
      },

      {
        key: 'Maghrib',
        english: 'Maghrib',
        arabic: 'مغرب',
        icon: <PrayerMaghribIcon />,
        items: [
          {
            title: 'Farz: 3 rak’ah',
            route: 'MaghribFarz',
          },
          {
            title: 'Sunnah: 2 rak’ah',
            route: 'Maghrib2Sunnah',
          },
          {
            title: 'Nafil: 2 rak’ah',
            route: 'Maghrib2Nafil',
          },
        ],
      },

      {
        key: 'Isha',
        english: 'Isha',
        arabic: 'عشاء',
        icon: <PrayerIshaIcon />,
        items: [
          {
            title: 'Sunnah: 4 rak’ah',
            route: 'IshaFirst4Sunnah',
          },
          {
            title: 'Farz: 4 rak’ah',
            route: 'IshaFirst4Farz',
          },
          {
            title: 'Sunnah: 2 rak’ah',
            route: 'Isha2Sunnah',
          },
          {
            title: 'Nafil: 2 rak’ah',
            route: 'Isha2Nafil',
          },
          {
            title: 'Witr: 3 rak’ah',
            route: 'IshaWitr',
          },
          {
            title: 'Nafil: 2 rak’ah',
            route: 'IshaLast2Nafil',
          },
        ],
      },
    ],
    []
  );


  const loadPrayerToggles = useCallback(async () => {
    try {
      const stored = await AsyncStorage.getItem(
        'azan_prayer_toggles'
      );

      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored);

      if (!parsed || typeof parsed !== 'object') {
        return;
      }

      const safeToggles = {
        Fajr:
          typeof parsed.Fajr === 'boolean'
            ? parsed.Fajr
            : true,

        Dhuhr:
          typeof parsed.Dhuhr === 'boolean'
            ? parsed.Dhuhr
            : true,

        Asr:
          typeof parsed.Asr === 'boolean'
            ? parsed.Asr
            : true,

        Maghrib:
          typeof parsed.Maghrib === 'boolean'
            ? parsed.Maghrib
            : true,

        Isha:
          typeof parsed.Isha === 'boolean'
            ? parsed.Isha
            : true,
      };

      if (isMounted.current) {
        setPrayerToggles(safeToggles);
      }
    } catch (err) {
      console.error(
        'Failed to load prayer toggles:',
        err
      );
    }
  }, []);


  const getOneTimeLocation = useCallback(() => {
    setLocationStatus('Getting Location ...');

    Geolocation.getCurrentPosition(
      position => {
        if (!isMounted.current) {
          return;
        }


        const currentLatitude =
          position.coords.latitude;

        const currentLongitude =
          position.coords.longitude;

        setLatitude(String(currentLatitude));
        setLongitude(String(currentLongitude));

        setLocationStatus('You are Here');

        AsyncStorage.multiSet([
          ['ONLATI', String(currentLatitude)],
          ['ONLONGI', String(currentLongitude)],
        ]).catch(storageError => {
          console.warn(
            'Unable to save location:',
            storageError
          );
        });
      },

      locationError => {
        console.warn(
          'Location error:',
          locationError
        );

        if (isMounted.current) {
          setLocationStatus(
            locationError?.message ||
              'Unable to get location'
          );
        }
      },

      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
        forceRequestLocation: true,
        showLocationDialog: true,
      }
    );
  }, []);


  const subscribeLocation = useCallback(() => {

    if (locationWatchId.current !== null) {
      return;
    }

    locationWatchId.current =
      Geolocation.watchPosition(
        position => {
          if (!isMounted.current) {
            return;
          }

          const currentLatitude =
            position.coords.latitude;

          const currentLongitude =
            position.coords.longitude;

          setLatitude(String(currentLatitude));
          setLongitude(String(currentLongitude));

          setLocationStatus('You are Here');
        },

        locationError => {
          console.warn(
            'Location watch error:',
            locationError
          );

          if (isMounted.current) {
            setLocationStatus(
              locationError?.message ||
                'Location unavailable'
            );
          }
        },

        {
          enableHighAccuracy: false,
          distanceFilter: 100,
          interval: 10000,
          fastestInterval: 5000,
          maximumAge: 1000,
        }
      );
  }, []);


  const requestLocationPermission =
    useCallback(async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocation();
        return;
      }

      try {
        const granted =
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS
              .ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message:
                'This App needs to Access your location',
              buttonPositive: 'Allow',
              buttonNegative: 'Cancel',
            }
          );

        if (
          granted ===
          PermissionsAndroid.RESULTS.GRANTED
        ) {
          getOneTimeLocation();
          subscribeLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(
          'Location permission error:',
          err
        );

        setLocationStatus(
          'Unable to request location permission'
        );
      }
    }, [
      getOneTimeLocation,
      subscribeLocation,
    ]);

  /*
   * =========================================================
   * FETCH PRAYER DATA
   * =========================================================
   */

  const fetchHomeData = useCallback(async () => {
  try {
    if (isMounted.current) {
      setIsLoading(true);
      setError(null);
    }
    const storedLatitude =
      await AsyncStorage.getItem('ONLATI');

    const storedLongitude =
      await AsyncStorage.getItem('ONLONGI');

    const lat =
      storedLatitude || DEFAULT_LATITUDE;

    const lon =
      storedLongitude || DEFAULT_LONGITUDE;

    if (isMounted.current) {
      setLatitude(lat);
      setLongitude(lon);
    }

    const date =
      moment().format('DD-MM-YYYY');

    const prayerResponse =
      await cachedGet(
        `https://api.aladhan.com/v1/timings/${date}`,
        {
          params: {
            latitude: lat,
            longitude: lon,
            school: 1,
          },
          timeout: 15000,
        }, {ttl: DAY});

    const prayerData =
      prayerResponse?.data?.data;

    if (!prayerData) {
      throw new Error(
        'Prayer timings were not returned.'
      );
    }

    const prayerTimings =
      prayerData.timings || {};


    const offsetString =
      await AsyncStorage.getItem(
        'HIJRI_OFFSET'
      );

    const parsedOffset =
      parseInt(offsetString, 10);

    const hijriOffset =
      Number.isNaN(parsedOffset)
        ? 0
        : parsedOffset;

    let hijriDay =
      parseInt(
        prayerData.date.hijri.day,
        10
      );

    let hijriMonth =
      parseInt(
        prayerData.date.hijri.month.number,
        10
      );

    let hijriYear =
      parseInt(
        prayerData.date.hijri.year,
        10
      );


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

    const getHijriMonthDays = (
      month,
      year
    ) => {

      if (month === 12) {
        const isLeapYear =
          ((11 * year + 14) % 30) < 11;

        return isLeapYear ? 30 : 29;
      }

      return month % 2 === 1
        ? 30
        : 29;
    };


    if (hijriOffset > 0) {
      for (
        let i = 0;
        i < hijriOffset;
        i++
      ) {
        hijriDay++;

        const daysInMonth =
          getHijriMonthDays(
            hijriMonth,
            hijriYear
          );

        if (
          hijriDay >
          daysInMonth
        ) {
          hijriDay = 1;
          hijriMonth++;

          if (hijriMonth > 12) {
            hijriMonth = 1;
            hijriYear++;
          }
        }
      }
    }


    if (hijriOffset < 0) {
      for (
        let i = 0;
        i > hijriOffset;
        i--
      ) {
        hijriDay--;

        if (hijriDay < 1) {
          hijriMonth--;

          if (hijriMonth < 1) {
            hijriMonth = 12;
            hijriYear--;
          }

          hijriDay =
            getHijriMonthDays(
              hijriMonth,
              hijriYear
            );
        }
      }
    }

    // ---------------------------------------
    // FINAL HIJRI DATE
    // ---------------------------------------

    const hijriDateFormatted =
      `${hijriDay} ` +
      `${hijriMonths[hijriMonth - 1]} ` +
      `${hijriYear}`;

    // ---------------------------------------
    // DEBUG LOGS
    // ---------------------------------------

    console.log(
      'Hijri API Date:',
      prayerData.date.hijri.date
    );

    console.log(
      'Hijri Offset:',
      hijriOffset
    );

    console.log(
      'Final Hijri Date:',
      hijriDateFormatted
    );


    if (isMounted.current) {
      setHijriDate(
        hijriDateFormatted
      );

      setTimings(
        prayerTimings
      );

      setPrayerTimes(
        prayerTimings
      );
    }


    try {
      const addressResponse =
        await cachedGet(
          'https://us1.locationiq.com/v1/reverse',
          {
            params: {
              key: LOCATIONIQ_API_KEY,
              lat,
              lon,
              format: 'json',
            },
            timeout: 10000,
          }, {ttl: 30 * DAY});

      const addressValue =
        addressResponse?.data?.address
          ?.state ||
        addressResponse?.data?.address
          ?.city ||
        addressResponse?.data?.address
          ?.town ||
        addressResponse?.data?.address
          ?.village ||
        null;

      if (isMounted.current) {
        setAddress(
          addressValue
        );
      }
    } catch (addressError) {
      console.warn(
        'Reverse geocoding failed:',
        addressError?.message ||
          addressError
      );

      if (isMounted.current) {
        setAddress(null);
      }
    }

    if (isMounted.current) {
      setIsLoading(false);
    }

  } catch (err) {
    console.error(
      'Home API error:',
      err?.response?.data ||
        err?.message ||
        err
    );

    if (isMounted.current) {
      setError(
        err?.message ||
          'Unable to fetch prayer timings.'
      );

      setIsLoading(false);
    }
  }
}, []);


  const scheduleAzans = useCallback(
    (prayerTimings, toggles) => {
      if (TEST_MODE) {
        return;
      }

      if (
        !prayerTimings ||
        !AzanScheduler?.scheduleAzan
      ) {
        return;
      }

      const today =
        moment().format('YYYY-MM-DD');

      PRAYER_NAMES.forEach(prayer => {
        if (!toggles?.[prayer]) {
          return;
        }

        const timeString =
          prayerTimings[prayer];

        if (!timeString) {
          return;
        }


        const cleanTime =
          String(timeString)
            .trim()
            .substring(0, 5);

        if (
          !/^\d{2}:\d{2}$/.test(
            cleanTime
          )
        ) {
          return;
        }

        const target = moment(
          `${today} ${cleanTime}:00`,
          'YYYY-MM-DD HH:mm:ss'
        );

        if (!target.isValid()) {
          return;
        }

        if (
          target.isBefore(moment())
        ) {
          target.add(1, 'day');
        }

        const fullTime =
          target.format(
            'YYYY-MM-DD HH:mm:ss'
          );

        try {
          AzanScheduler.scheduleAzan(
            prayer,
            fullTime
          );

          AzanScheduler.savePrayerTime?.(
            prayer,
            fullTime
          );

          console.log(
            `Scheduled ${prayer} at ${fullTime}`
          );
        } catch (scheduleError) {
          console.warn(
            `Unable to schedule ${prayer}:`,
            scheduleError
          );
        }
      });
    },
    []
  );


  const togglePrayerAzan = useCallback(
    async (prayer, value) => {
      const updatedToggles = {
        ...prayerToggles,
        [prayer]: Boolean(value),
      };

      setPrayerToggles(
        updatedToggles
      );

      try {
        await AsyncStorage.setItem(
          'azan_prayer_toggles',
          JSON.stringify(
            updatedToggles
          )
        );
      } catch (storageError) {
        console.warn(
          'Unable to save prayer toggle:',
          storageError
        );
      }


      try {
        AzanScheduler?.cancelAzan?.(
          prayer
        );
      } catch (cancelError) {
        console.warn(
          `Unable to cancel ${prayer}:`,
          cancelError
        );
      }


      if (
        value &&
        timings?.[prayer]
      ) {
        const cleanTime =
          String(timings[prayer])
            .trim()
            .substring(0, 5);

        const today =
          moment().format(
            'YYYY-MM-DD'
          );

        const target = moment(
          `${today} ${cleanTime}:00`,
          'YYYY-MM-DD HH:mm:ss'
        );

        if (!target.isValid()) {
          return;
        }

        if (
          target.isBefore(moment())
        ) {
          target.add(1, 'day');
        }

        const fullTime =
          target.format(
            'YYYY-MM-DD HH:mm:ss'
          );

        try {
          AzanScheduler?.scheduleAzan?.(
            prayer,
            fullTime
          );

          AzanScheduler?.savePrayerTime?.(
            prayer,
            fullTime
          );

          console.log(
            `Rescheduled ${prayer} for ${fullTime}`
          );
        } catch (scheduleError) {
          console.warn(
            `Unable to reschedule ${prayer}:`,
            scheduleError
          );
        }
      }
    },
    [
      prayerToggles,
      timings,
    ]
  );

  useEffect(() => {
    isMounted.current = true;

    const initialize = async () => {
      await loadPrayerToggles();
      await fetchHomeData();
    };

    initialize();

    return () => {
      isMounted.current = false;
    };
  }, [
    loadPrayerToggles,
    fetchHomeData,
  ]);


  useEffect(() => {
    return () => {
      if (
        locationWatchId.current !== null
      ) {
        Geolocation.clearWatch(
          locationWatchId.current
        );

        locationWatchId.current =
          null;
      }
    };
  }, []);


  useEffect(() => {
  

    if (
      latitude == null ||
      longitude == null
    ) {
      return;
    }

  }, [
    latitude,
    longitude,
  ]);

  const getCurrentPrayer =
    useCallback(() => {
      if (
        !prayerTimes ||
        Object.keys(prayerTimes)
          .length === 0
      ) {
        return {
          currentPrayer: 'Fajr',
          currentTime: '',
        };
      }

      const now = moment();

      let currentPrayer = 'Isha';
      let currentTime =
        prayerTimes.Isha || '';

      for (
        const prayer of PRAYER_NAMES
      ) {
        const timeString =
          prayerTimes[prayer];

        if (!timeString) {
          continue;
        }

        const cleanTime =
          String(timeString)
            .trim()
            .substring(0, 5);

        const prayerMoment =
          moment(
            cleanTime,
            'HH:mm'
          );

        if (
          prayerMoment.isSameOrBefore(
            now
          )
        ) {
          currentPrayer =
            prayer;

          currentTime =
            timeString;
        }
      }

      if (
        prayerTimes.Fajr
      ) {
        const fajrMoment =
          moment(
            String(
              prayerTimes.Fajr
            ).substring(0, 5),
            'HH:mm'
          );

        if (
          now.isBefore(
            fajrMoment
          )
        ) {
          currentPrayer = 'Isha';
          currentTime =
            prayerTimes.Isha || '';
        }
      }

      return {
        currentPrayer,
        currentTime,
      };
    }, [
      prayerTimes,
    ]);


  const getNextPrayer =
    useCallback(() => {
      if (
        !prayerTimes ||
        Object.keys(prayerTimes)
          .length === 0
      ) {
        return {
          nextPrayer: 'Fajr',
          nextPrayerTime: '',
        };
      }

      const now = moment();

      for (
        const prayer of PRAYER_NAMES
      ) {
        const timeString =
          prayerTimes[prayer];

        if (!timeString) {
          continue;
        }

        const cleanTime =
          String(timeString)
            .trim()
            .substring(0, 5);

        const prayerMoment =
          moment(
            cleanTime,
            'HH:mm'
          );

        if (
          prayerMoment.isAfter(now)
        ) {
          return {
            nextPrayer: prayer,
            nextPrayerTime:
              timeString,
          };
        }
      }


      return {
        nextPrayer: 'Fajr',
        nextPrayerTime:
          prayerTimes.Fajr || '',
      };
    }, [
      prayerTimes,
    ]);


  useEffect(() => {
    if (
      !prayerTimes ||
      Object.keys(prayerTimes)
        .length === 0
    ) {
      return undefined;
    }

    const {
      currentPrayer,
    } = getCurrentPrayer();

    setExpandedPrayer(
      currentPrayer
    );

    const interval =
      setInterval(() => {
        const {
          currentPrayer:
            updatedCurrentPrayer,
        } = getCurrentPrayer();

        setExpandedPrayer(
          updatedCurrentPrayer
        );
      }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [
    prayerTimes,
    getCurrentPrayer,
  ]);


  useEffect(() => {
    if (
      !timings ||
      Object.keys(timings)
        .length === 0
    ) {
      return;
    }

    if (!TEST_MODE) {
      scheduleAzans(
        timings,
        prayerToggles
      );
    }

    if (
      Platform.OS === 'android'
    ) {
      try {
        AzanScheduler?.rescheduleAllAzans?.();
      } catch (err) {
        console.warn(
          'Unable to reschedule Azans:',
          err
        );
      }
    }
  }, [
    timings,
    prayerToggles,
    scheduleAzans,
  ]);

  const handlePrayerPress =
    useCallback(prayer => {
      setExpandedPrayer(
        previous =>
          previous === prayer
            ? null
            : prayer
      );
    }, []);


  const handleRetry =
    useCallback(() => {
      fetchHomeData();
    }, [
      fetchHomeData,
    ]);


  const {
    nextPrayer,
    nextPrayerTime,
  } = getNextPrayer();

  const {
    currentPrayer,
    currentTime,
  } = getCurrentPrayer();


  const onLocationPress = async () => {
    setLocating(true);
    try {
      const coords = await refreshLocation();
      if (coords) {
        await fetchHomeData();
      }
    } finally {
      setLocating(false);
    }
  };

  if (isLoading || error) {
    return (
      <View style={styles.containerMain}>
        <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.headerBg} />
        <ScreenState
          status={error ? 'error' : 'loading'}
          title={error ? 'Unable to load prayer times' : undefined}
          message={error || undefined}
          onRetry={handleRetry}
        />
      </View>
    );
  }

  return (
    <View style={styles.containerMain}>
      <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.headerBg} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.scrollContent, {paddingBottom: insets.bottom + Spacing.xxl}]}>
        <PrayerHeader
          timings={timings}
          hijriDate={hijriDate}
          gregorianDate={gregorianDate}
          address={address}
          onLocationPress={onLocationPress}
          locating={locating}
        />

        <PrayerTimeSectionNew
          prayerTimes={prayerTimes}
          currentPrayer={currentPrayer}
          icons={{
            Fajr: <WasilNewFajrIcon />,
            Dhuhr: <WasilNewDhuhrIcon />,
            Asr: <WasilNewFajrIcon />,
            Maghrib: <WasilNewMagrhibIcon />,
            Isha: <WasilNewIshaIcon />,
          }}
        />

        <Text style={styles.sectionTitle} accessibilityRole="header">
          How to pray
        </Text>
        <View style={styles.prayerListContainer}>
          {prayerSections.map(section => (
            <PrayerAccordion
              key={section.key}
              section={section}
              isExpanded={expandedPrayer === section.key}
              isCurrent={currentPrayer === section.key}
              onPress={() => handlePrayerPress(section.key)}
              navigation={navigation}
              styles={styles}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const PrayerAccordion = ({section, isExpanded, isCurrent, onPress, navigation, styles}) => (
  <View style={[styles.accordion, isExpanded && styles.accordionExpanded]}>
    <Pressable
      onPress={onPress}
      style={styles.accordionHeader}
      accessibilityRole="button"
      accessibilityState={{expanded: isExpanded}}
      accessibilityLabel={`${section.english} prayer${isCurrent ? ', current prayer' : ''}`}>
      <View style={styles.prayerIcon}>{section.icon}</View>
      <View style={styles.prayerNames}>
        <Text numberOfLines={1} style={styles.prayerEnglishText}>
          {section.english}
        </Text>
        {isCurrent ? <Text style={styles.nowBadge}>Now</Text> : null}
      </View>
      <Text numberOfLines={1} style={styles.prayerArabicText}>
        {section.arabic}
      </Text>
      {isExpanded ? <StepExpandedIcon /> : <StepCollapsedIcon />}
    </Pressable>

    {isExpanded ? (
      <View style={styles.accordionContent}>
        {section.items.map((item, index) => (
          <TouchableOpacity
            key={`${section.key}-${item.route}-${index}`}
            activeOpacity={0.75}
            onPress={() => navigation.navigate(item.route)}
            style={styles.actionButton}
            accessibilityRole="button">
            <Text style={styles.actionText}>{item.title}</Text>
            <Text style={styles.actionChevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    ) : null}
  </View>
);

const makeStyles = Colors =>
  StyleSheet.create({
    containerMain: {flex: 1, backgroundColor: Colors.background},
    scrollContent: {paddingTop: Spacing.md},
    sectionTitle: {
      marginTop: Spacing.xl,
      marginBottom: Spacing.md,
      marginHorizontal: Spacing.lg,
      color: Colors.sectionTitle,
      fontSize: TypeScale.title,
      fontFamily: Fonts.heading,
    },
    prayerListContainer: {paddingHorizontal: Spacing.lg, gap: Spacing.md},
    accordion: {
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: Colors.stepCardBorder,
      backgroundColor: Colors.ayahBg,
      overflow: 'hidden',
    },
    accordionExpanded: {backgroundColor: Colors.stepCard},
    accordionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.md,
      minHeight: 70,
      paddingHorizontal: Spacing.md,
    },
    prayerIcon: {width: 44, alignItems: 'center', justifyContent: 'center'},
    prayerNames: {flex: 1, flexDirection: 'row', alignItems: 'center', gap: Spacing.sm},
    prayerEnglishText: {color: Colors.stepTitle, fontSize: TypeScale.subtitle, fontFamily: Fonts.bodyBold},
    nowBadge: {
      overflow: 'hidden',
      paddingHorizontal: Spacing.sm,
      paddingVertical: 2,
      borderRadius: Radius.pill,
      backgroundColor: Colors.button,
      color: Colors.onButton,
      fontSize: TypeScale.caption,
      fontFamily: Fonts.bodyBold,
    },
    prayerArabicText: {color: Colors.quranArabic, fontSize: 24, fontFamily: Fonts.arabic},
    accordionContent: {paddingHorizontal: Spacing.md, paddingBottom: Spacing.md, gap: Spacing.sm},
    actionButton: {
      minHeight: 48,
      borderRadius: Radius.sm,
      backgroundColor: Colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.lg,
    },
    actionText: {color: Colors.textPrimary, fontSize: TypeScale.body + 1, fontFamily: Fonts.bodySemiBold},
    actionChevron: {color: Colors.textSecondary, fontSize: 22},
  });

export default PrayerGuide;
