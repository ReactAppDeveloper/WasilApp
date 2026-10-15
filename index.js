import React from 'react';
import { AppRegistry, Text, TextInput } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

// Release builds: drop debug logging. The app has 200+ console.log calls, several of which
// serialise whole API responses on the JS thread. Warnings and errors are kept.
if (!__DEV__) {
  console.log = () => {};
  console.info = () => {};
  console.debug = () => {};
}
const TextRender = Text.render;
Text.render = function (...args) {
  const origin = TextRender.call(this, ...args);

  return React.cloneElement(origin, {
    allowFontScaling: false,
    maxFontSizeMultiplier: 1,
  });
};

const TextInputRender = TextInput.render;
TextInput.render = function (...args) {
  const origin = TextInputRender.call(this, ...args);

  return React.cloneElement(origin, {
    allowFontScaling: false,
    maxFontSizeMultiplier: 1,
  });
};

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));