import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import YoutubePlayer from '@dooboo/react-native-youtube-iframe';
import TooltipNew from './TooltipNew';

export const getYoutubeIdFromURL = (url) => {
  if (url.includes('?')) url = url.split('?')[0];
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  let id = arr[2] !== undefined ? arr[2].split(/[^\w-]/i)[0] : arr[0];
  if (id.includes('https://youtube.com/shorts/')) {
    id = id.replace('https://youtube.com/shorts/', '');
  }
  return id;
};

function ShortItemNew({ visible, playing, url, layout, onNext }) {
  const youtubeId = getYoutubeIdFromURL(url);
  const playerRef = useRef(null);
  const [showHint, setShowHint] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.playerWrapper}>
        <YoutubePlayer
          ref={playerRef}
          height={layout.height}
          width={layout.width}
          videoId={youtubeId}
          play={playing}
          mute={muted}
          forceAndroidAutoplay
          initialPlayerParams={{
            controls: false,
            modestbranding: true,
            rel: false,
            showinfo: false,
            iv_load_policy: 3,
            fs: false,
          }}
          onChangeState={(state) => {
            if (state === 'ended' && visible) {
              playerRef.current?.seekTo(0, true);
            }
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.muteButton}
        onPress={() => setMuted(!muted)}
      >
        <Text style={styles.muteText}>{muted ? '🔇' : '🔊'}</Text>
      </TouchableOpacity>

      {/* TikTok-style bouncing arrow */}
      {showHint && <TooltipNew onPress={onNext} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  playerWrapper: {
    flex: 1,
    marginTop: -3, // hides top iframe line
  },
  muteButton: {
    position: 'absolute',
    right: 16,
    bottom: 120,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 24,
  },
  muteText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ShortItemNew;
