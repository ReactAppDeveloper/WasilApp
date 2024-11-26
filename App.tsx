import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/reduxToolkit/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
   setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    LogBox.ignoreLogs([
      'Warning: ...', // Ignore specific warning messages
      'Deprecation warning: ...', // Ignore specific deprecation warnings
    ]);

    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
