import { AppRegistry, Text, TextInput } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

// ✅ Register the main app
AppRegistry.registerComponent(appName, () => App);


// ✅ Prevent font scaling globally
if (Text.defaultProps == null) Text.defaultProps = {};
if (TextInput.defaultProps == null) TextInput.defaultProps = {};

Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;