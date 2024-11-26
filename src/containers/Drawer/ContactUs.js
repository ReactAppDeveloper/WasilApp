import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

const ContactUs = () => {
 

  return (
    <WebView source={{ uri: 'https://wasil.io/mobileContact'}} style={{ flex: 1 }} />
  );
}

export default ContactUs;