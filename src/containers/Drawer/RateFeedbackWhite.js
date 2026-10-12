import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors } from '../../theme';

const RateFeedbackWhite = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        backgroundColor={Colors.black}
      />

      <WebView
        source={{ uri: 'https://wasil.io/mobileReview' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default RateFeedbackWhite;