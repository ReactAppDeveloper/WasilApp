import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

const Privacypolicy = () => {
 

  return (
    <WebView source={{ uri: 'https://wasil.io/mobilePrivacy'}} style={{ flex: 1 }} />
  );
}

export default Privacypolicy;