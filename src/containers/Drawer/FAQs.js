import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

const FAQs = () => {
  return (
    <WebView source={{ uri: 'https://wasil.io/mobileFaqs'}} style={{ flex: 1 }} />
  );
}

export default FAQs;