import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors } from '../../theme';

const RateFeedbackGreen = () => {
  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor={Colors.wasilgreenthemecolor}
      />

      <WebView
        source={{ uri: 'https://wasil.io/mobileReview' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default RateFeedbackGreen;