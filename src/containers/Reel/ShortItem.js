import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from '@dooboo/react-native-youtube-iframe';
import Tooltip from './Tooltip';

export const getYoutubeIdFromURL = (url) => {
  if (url.includes('?')) {
    const arr = url.split('?');
    arr.pop();
    url = arr[0];
  }

  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const youtubeId = arr[2] !== undefined ? arr[2].split(/[^\w-]/i)[0] : arr[0];

  if (youtubeId.includes('https://youtube.com/shorts/')) {
    return youtubeId.replace('https://youtube.com/shorts/', '');
  }

  return youtubeId;
};

function ShortItem({ visible, playing, url, layout }) {
  const youtubeId = getYoutubeIdFromURL(url);
  const youtubePlayerRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        ref={youtubePlayerRef}
        height={layout.height}
        width={layout.width}
        videoId={youtubeId}
        play={playing}
        onChangeState={(event) => {
          if (event === 'ended' && visible) {
            youtubePlayerRef?.current?.seekTo(0, true);
          }
        }}
      />
      {showTooltip && <Tooltip message="Scroll down for more!" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensure the container has relative positioning for the tooltip
  },
});

export default ShortItem;