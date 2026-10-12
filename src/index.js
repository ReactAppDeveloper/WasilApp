import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import ThemeProvider from '../src/theme/ThemeProvider';
import {useTheme} from '../src/theme';

import {
  NetworkProvider,
} from '../src/network/NetworkProvider';

import NetworkStatus from '../src/network/NetworkStatus';

import {AppNavigator} from './navigation';
import store from './containers/Quran/redux/reduxToolkit/store';

import TrackPlayer, {
  Capability,
} from 'react-native-track-player';

import {
  loadPlayerState,
} from './containers/Reciters/playerStorage';

import MiniPlayer from './containers/Reciters/MiniPlayer';
import MiniPlayerWhite from './containers/RecitersWhite/MiniPlayer';
import MiniPlayerGreen from './containers/RecitersGreen/MiniPlayer';


const App = () => {

  return (
    <ThemeProvider>

        <AppContent />


    </ThemeProvider>
  );
};


const AppContent = () => {

  const [onboarded, setOnboarded] = useState(null);
  const [currentRoute, setCurrentRoute] = useState(null);

  const {theme} = useTheme();

  const navigationRef = useRef();


  useEffect(() => {

    getStorage();

  }, []);


  useEffect(() => {

    const setupPlayer = async () => {

      try {

        await TrackPlayer.setupPlayer();

        await TrackPlayer.updateOptions({

          stopWithApp: false,

          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo,
          ],

          compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
          ],

        });

      } catch (e) {

        console.log(
          'Player setup error',
          e,
        );

      }

    };


    const restorePlayer = async () => {

      try {

        const saved =
          await loadPlayerState();

        if (
          saved &&
          saved.queue?.length > 0
        ) {

          await TrackPlayer.reset();

          await TrackPlayer.add(
            saved.queue,
          );

          if (saved.index !== null) {

            await TrackPlayer.skip(
              saved.index,
            );

          }

          if (saved.position) {

            await TrackPlayer.seekTo(
              saved.position,
            );

          }

        }

      } catch (error) {

        console.log(
          'Restore player error',
          error,
        );

      }

    };


    setupPlayer();

    restorePlayer();

  }, []);


  const getStorage = async () => {

    try {

      const onboarded =
        await AsyncStorage.getItem(
          'ONBOARDED',
        );

      setOnboarded(
        JSON.parse(onboarded),
      );

    } catch (error) {

      console.log(
        'Storage error',
        error,
      );

    }

  };


  const hideMiniPlayerScreens = [

    'Setting',
    'SettingWhite',
    'SettingGreen',

    'FullView',
    'FullViewWhite',
    'FullViewGreen',

    'TranslatePage',
    'TranslatePageWhite',
    'TranslatePageGreen',

    'SurahDetailPage',
    'SurahDetailPageWhite',
    'SurahDetailPageGreen',

    'AddTafseer',
    'AddTafseerWhite',
    'AddTafseerGreen',

    'ReciterDetail',
    'ReciterDetailWhite',
    'ReciterDetailGreen',

    'PlayStory',
    'PlayStoryWhite',
    'PlayStoryGreen',

    'ReelsComponentNew',
    'ReelsComponentNewWhite',
    'ReelsComponentNewGreen',

    'PrayerMosque',
    'PrayerMosqueWhite',
    'PrayerMosqueGreen',

    'QiblaCompassNew',
    'QiblaCompassNewWhite',
    'QiblaCompassNewGreen',

    'TranslatorDetail',
    'TranslatorDetailGreen',
    'TranslatorDetailWhite'

  ];


  const showMiniPlayer =
    currentRoute &&
    !hideMiniPlayerScreens.includes(
      currentRoute,
    );

  const renderMiniPlayer = () => {
    if (theme === 'blue') {
      return <MiniPlayer />;
    }
    if (theme === 'green') {
      return <MiniPlayerGreen />;
    }
    if (theme === 'white') {
      return <MiniPlayerWhite />;
    }

    return null;
  };


 return (
  <GestureHandlerRootView style={{flex: 1}}>

    <SafeAreaProvider>

      <NavigationContainer
        ref={navigationRef}
        onStateChange={() => {

          const route =
            navigationRef.current?.getCurrentRoute();

          setCurrentRoute(route?.name);

        }}>

        <Provider store={store}>

          <AppNavigator
            onboarded={onboarded}
          />

        </Provider>

      </NavigationContainer>

    </SafeAreaProvider>


    {showMiniPlayer &&
      renderMiniPlayer()}



  </GestureHandlerRootView>
);

};


export default App;