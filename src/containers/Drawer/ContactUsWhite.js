import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors } from '../../theme';

const ContactUsWhite = () => {
  return (
    <View style={{ flex: 1}}>
      <StatusBar backgroundColor={Colors.black}/>

      <WebView
        source={{ uri: 'https://wasil.io/mobileContact' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default ContactUsWhite;