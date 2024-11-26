import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {Text, TextInput} from 'react-native';

AppRegistry.registerComponent(appName, () => App);
// Override Text scaling
if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
  } else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }
  
  // Override Text scaling in input fields
  if (TextInput.defaultProps) {
    TextInput.defaultProps.allowFontScaling = false;
  } else {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
