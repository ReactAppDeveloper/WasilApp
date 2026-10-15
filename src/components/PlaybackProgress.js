import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';

const formatTime = (sec) => {
  if (!sec || !isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// Seekable progress bar + times. It owns the progress subscription so only this bar re-renders
// while audio plays, instead of the whole screen around it.
// styles needs: progressHit, progressTrack, progressFill, progressThumb, timeRow.
export default function PlaybackProgress({ styles, timeStyle, interval = 500 }) {
  const { position, duration } = useProgress(interval);
  const [barWidth, setBarWidth] = useState(0);
  const progress = duration ? Math.min(position / duration, 1) : 0;
  return (
    <>
      <Pressable
        style={styles.progressHit}
        onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
        onPress={(e) => duration && barWidth && TrackPlayer.seekTo((e.nativeEvent.locationX / barWidth) * duration)}
        accessibilityRole="adjustable"
        accessibilityLabel="Playback position">
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <View style={[styles.progressThumb, { left: Math.max(0, progress * barWidth - 8) }]} />
      </Pressable>
      <View style={styles.timeRow}>
        <Text style={timeStyle}>{formatTime(position)}</Text>
        <Text style={timeStyle}>{formatTime(duration)}</Text>
      </View>
    </>
  );
}
