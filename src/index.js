import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppNavigator } from './navigation';

const App = () => {
  const [onboarded, setOnboarded] = useState();

  useEffect(() => {
    getStorage();
  }, []);

  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('ONBOARDED');
    setOnboarded(JSON.parse(onboarded));
  };
  
  return (
    <SafeAreaProvider>
      <NavigationContainer> 
         <AppNavigator onboarded={onboarded} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;