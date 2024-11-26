import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

const RateFeedback = () => {
 

  return (
    <WebView source={{ uri: 'https://wasil.io/mobileReview'}} style={{ flex: 1 }} />
  );
}

export default RateFeedback;