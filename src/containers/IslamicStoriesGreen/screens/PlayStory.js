import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Animated,
  Pressable,
  StatusBar
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from '../../../theme';
import axios from "axios";
import TrackPlayer, {
  useProgress,
  State,
  useTrackPlayerEvents,
  Event
} from "react-native-track-player";
import { useFocusEffect } from '@react-navigation/native';
import {
  IslamicStoryPlayPreviousBTSVG,
  IslamicStoryPlayRewindBTSVG,
  IslamicStoryGPlayAudioSVG,
  IslamicStoryGPauseAudioSVG,
  IslamicStoryPlayForwardBTSVG,
  IslamicStoryPlayNextBTSVG
} from '../../../assets/icons';

const SPEEDS = [1.0, 1.5, 2.0];

const PlayStory = ({ route }) => {
  const { storyid } = route.params;
  const [storydata, setstorydata] = useState([]);
  const [audiodata, setaudiodata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [playerReady, setPlayerReady] = useState(false); 
  const [playerLoadingTracks, setPlayerLoadingTracks] = useState(false);
  const { position, duration } = useProgress(250);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(0);
  const [currentSpeedIndex, setCurrentSpeedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await TrackPlayer.setupPlayer();
        if (!mounted) return;
        setPlayerReady(true);
      } catch (e) {
        console.log("setupPlayer init error:", e);
      }
    })();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setisLoading(true);
      console.log(storyid);
      try {
        const responsedata = await axios.get(`https://islamicapp.vercel.app/api/islamicstorybystoryid?storyId=${storyid}`);
        const responseaudios = await axios.get(`https://islamicapp.vercel.app/api/islamicstoryaudiosbystoryid?storyId=${storyid}`);
        if (!mounted) return;
        setstorydata(responsedata.data || []);
        setaudiodata(responseaudios.data || []);
        setisLoading(false);
      } catch (e) {
        console.log(e);
        if (!mounted) return;
        seterror(e);
        setisLoading(false);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, [storyid]);

  useEffect(() => {
  const resetPlayer = async () => {
    try {
      await TrackPlayer.reset(); 
      setPlayerReady(false);
    } catch (e) {
      console.log("Error resetting TrackPlayer on story change", e);
    }
  };

  resetPlayer();
  }, [storyid]);

  useEffect(() => {
    if (!playerReady) {
      return;
    }
    if (!audiodata || audiodata.length === 0) return;

    
    let cancelled = false;
    const loadTracks = async () => {
      try {
        setPlayerLoadingTracks(true);
        await TrackPlayer.reset();

        const tracks = audiodata.map((a, idx) => ({
          id: String(a._id ?? idx),
          url: a.audiourl,
          title: a.title || storydata[0]?.title || `Track ${idx + 1}`,
          artist: storydata[0]?.reference || 'Islamic Story',
          artwork: storydata[0]?.path || undefined,
          type: "story",
        }));

        await TrackPlayer.add(tracks);

        try {
          if (TrackPlayer.setRate) {
            await TrackPlayer.setRate(SPEEDS[currentSpeedIndex]);
          } else if (TrackPlayer.setPlaybackRate) {
            await TrackPlayer.setPlaybackRate(SPEEDS[currentSpeedIndex]);
          }
        } catch (e) {
          console.log("setRate error (non-fatal):", e);
        }

        if (!cancelled) {
          setPlayerLoadingTracks(false);
        }
      } catch (e) {
        console.log("Error loading tracks:", e);
        if (!cancelled) {
          setPlayerLoadingTracks(false);
        }
      }
    };

    loadTracks();

    return () => { cancelled = true; };
  }, [audiodata, playerReady]);

  useEffect(() => {
  const pct = duration > 0 ? Math.min(1, position / duration) : 0;
  Animated.timing(progressAnim, {
    toValue: pct,
    duration: 180,
    useNativeDriver: false,
  }).start();
  }, [position, duration]);

  useFocusEffect(
  React.useCallback(() => {
    return () => {
      TrackPlayer.stop();
    };
  }, [])
  );

  const formatTime = (sec) => {
    if (!sec || !isFinite(sec)) return "00:00";
    const s = Math.floor(sec % 60);
    const m = Math.floor((sec % 3600) / 60);
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  };

  const ensurePlayerAndTracksReady = async () => {
    if (!playerReady) {
      try {
        await TrackPlayer.setupPlayer();
        setPlayerReady(true);
      } catch (e) {
        console.log("setupPlayer fallback error:", e);
      }
    }

    try {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if ((currentTrack === null || currentTrack === undefined) && audiodata && audiodata.length > 0) {
        setPlayerLoadingTracks(true);
        await TrackPlayer.reset();
        const tracks = audiodata.map((a, idx) => ({
          id: String(a._id ?? idx),
          url: a.audiourl,
          title: a.title || storydata[0]?.title || `Track ${idx + 1}`,
          artist: storydata[0]?.reference || 'Islamic Story',
          artwork: storydata[0]?.path || undefined,
          type: "story",
        }));
        await TrackPlayer.add(tracks);
        setPlayerLoadingTracks(false);

        try {
          if (TrackPlayer.setRate) await TrackPlayer.setRate(SPEEDS[currentSpeedIndex]);
          else if (TrackPlayer.setPlaybackRate) await TrackPlayer.setPlaybackRate(SPEEDS[currentSpeedIndex]);
        } catch (e) {
          console.log("setRate during ensure error:", e);
        }
      }
    } catch (e) {
      console.log("ensurePlayerAndTracksReady - getCurrentTrack error:", e);
    }
  };

  useTrackPlayerEvents(['playback-state'], (event) => {
  setIsPlaying(event.state === State.Playing);
  });

  const togglePlayPause = async () => {
try {
await ensurePlayerAndTracksReady();

if (playerLoadingTracks || audiodata.length === 0) return;

const state = await TrackPlayer.getState();
if (state === State.Playing) {
  await TrackPlayer.pause();
  setIsPlaying(false);
} else {
  await TrackPlayer.play();
  setIsPlaying(true);
}

} catch (e) {
console.log("togglePlayPause error", e);
}
  };

  const playNext = async () => {
  try {
    await ensurePlayerAndTracksReady();
    const currentTrackIndex = await TrackPlayer.getCurrentTrack(); 
    const trackQueue = await TrackPlayer.getQueue();
    const lastIndex = trackQueue.length - 1;

    if (currentTrackIndex < lastIndex) {
      await TrackPlayer.skipToNext();
      await TrackPlayer.play();
    } else {
      await TrackPlayer.stop(); 
    }
  } catch (e) {
    console.log("No next track or error", e);
  }
  };

  const playPrevious = async () => {
    try {
      await ensurePlayerAndTracksReady();
      await TrackPlayer.skipToPrevious();
      await TrackPlayer.play();
    } catch (e) {
      console.log("No previous track", e);
    }
  };

  const forward10 = async () => {
    try {
      await ensurePlayerAndTracksReady();
      const pos = await TrackPlayer.getPosition();
      const dur = await TrackPlayer.getDuration();
      await TrackPlayer.seekTo(Math.min(dur, pos + 10));
    } catch (e) {
      console.log("forward10 error", e);
    }
  };

  const rewind10 = async () => {
    try {
      await ensurePlayerAndTracksReady();
      const pos = await TrackPlayer.getPosition();
      await TrackPlayer.seekTo(Math.max(0, pos - 10));
    } catch (e) {
      console.log("rewind10 error", e);
    }
  };

  const setPlaybackRate = async (rate) => {
    try {
      if (TrackPlayer.setRate) {
        await TrackPlayer.setRate(rate);
      } else if (TrackPlayer.setPlaybackRate) {
        await TrackPlayer.setPlaybackRate(rate);
      }
    } catch (e) {
      console.log("setPlaybackRate error", e);
    }
  };

  const toggleSpeed = async () => {
    const nextIndex = (currentSpeedIndex + 1) % SPEEDS.length;
    setCurrentSpeedIndex(nextIndex);
    await setPlaybackRate(SPEEDS[nextIndex]);
  };

  const onProgressLayout = (event) => {
  progressBarWidth.current = event.nativeEvent.layout.width;
  };

  const onProgressPress = async (evt) => {
    if (!progressBarWidth.current || !duration) return;
    const x = evt.nativeEvent.locationX;
    const pct = Math.max(0, Math.min(1, x / progressBarWidth.current));
    const seekTo = pct * duration;
    try {
      await ensurePlayerAndTracksReady();
      await TrackPlayer.seekTo(seekTo);
    } catch (e) {
      console.log("seek error", e);
    }
  };

  useTrackPlayerEvents([Event.PlaybackQueueEnded], async (event) => {
  if (event.position > 0 && audiodata.length > 0) {
    try {
      await TrackPlayer.pause(); 
      await TrackPlayer.seekTo(0);
      await TrackPlayer.skip(0);
    } catch (e) {
      console.log("Queue reset error:", e);
    }
  }
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:Colors.wasilgreenthemecolor }}>
        <ActivityIndicator size={"large"} color={Colors.white} />
      </View>
    );
  }
  
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in Fetching Data..... Please Check Your Internet Connection.
        </Text>
      </View>
    );
  }

  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });


  const playDisabled = playerLoadingTracks || (!playerReady && audiodata.length === 0) || audiodata.length === 0;

  return (
    <ScrollView style={styles.container}>
       <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
      {storydata.map((story, index) => (
        <View key={story._id || index}>

          <LinearGradient
            colors={["#01401C", "#01401C", "#00240D", "#00240D"]}
            style={styles.header}
          >
            <Image
              source={
                story.path
                  ? { uri: story.path }
                  : require("../../../images/musa.png")
              }
              style={styles.storyImage}
              resizeMode="cover"
            />
          </LinearGradient>

          <View style={styles.content}>
            <View style={styles.titleRow}>
              <View>
                <Text style={styles.title}>{story.title}</Text>
                <Text style={styles.reference}>
                  Reference: {story.reference || "Wasil Islamic"}
                </Text>
              </View>

            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Category</Text>
                <Text style={styles.infoValue}>
                  {story.categoryname || "Prophet Stories"}
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Language</Text>
                <Text style={styles.infoValue}>
                  {story.language || "English"}
                </Text>
              </View>


            </View>

            <View style={styles.audioContainer}>

            

              <View style={{ width: "100%", marginTop: 30, paddingHorizontal: 35 }}>
               <Pressable onPress={onProgressPress} onLayout={onProgressLayout} style={{ width: '100%' }}>
  <View style={styles.progressBarBackground}>

    <Animated.View
      style={[
        styles.progressFill,
        { width: widthInterpolated },
      ]}
    />

    <Animated.View
      style={[
        styles.progressThumb,
        {
         left: progressAnim.interpolate({
  inputRange: [0, 1],
  outputRange: [0, Math.max(0, progressBarWidth.current - 16)],
})
        },
      ]}
    />
  </View>
               </Pressable>

                <View style={styles.timeRow}>
                  <Text style={styles.timeText}>{formatTime(position)}</Text>
                  <Text style={styles.timeText}>{formatTime(duration)}</Text>
                </View>
              </View>

              <View style={styles.controlRow}>
                <Pressable onPress={playPrevious}><IslamicStoryPlayPreviousBTSVG /></Pressable>

                <Pressable onPress={rewind10}><IslamicStoryPlayRewindBTSVG /></Pressable>

               <Pressable onPress={togglePlayPause} disabled={playDisabled}>
  <View style={[styles.playButton, playDisabled && { opacity: 0.6 }]}>
    {playerLoadingTracks || (!playerReady && audiodata.length === 0) ? (
      <ActivityIndicator color={Colors.white} />
    ) : isPlaying ? (
      <IslamicStoryGPauseAudioSVG />
    ) : (
      <IslamicStoryGPlayAudioSVG />
    )}
  </View>
               </Pressable>

                <Pressable onPress={forward10}><IslamicStoryPlayForwardBTSVG /></Pressable>

                <Pressable onPress={playNext}><IslamicStoryPlayNextBTSVG /></Pressable>
              </View>

              <View style={{ marginTop: 25,borderRadius: 20,borderWidth:1,borderColor:Colors.wasilgreenborder,alignSelf:"center",backgroundColor:Colors.wasilgreenthemecolor}}>
                <Pressable onPress={toggleSpeed} style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                  <Text style={styles.speedText}>{SPEEDS[currentSpeedIndex]}x speed</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: Colors.wasilgreenthemecolor },
  header: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  storyImage: {
    width: 200,
    height: 250,
    borderRadius: 16,
    resizeMode:"contain",
    marginTop: 10,
  },
  content: {
    padding: 15,
  },
  titleRow: {
    top:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.wasilgreenthemecolorfifth,
    fontFamily:"Poppins-Light",
  },
  reference: {
    fontSize: 13,
    color: Colors.white,
    fontFamily:"Poppins-Light",
    marginTop: 2,
  },
  ratingRow: {
    right:100,
    flexDirection: "row",
    marginTop: 46,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.wasilgreenthemecolorfourth,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  infoBox: {
    flex: 1,
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 15,
     color: Colors.wasilgreenthemecolorfifth,
    fontFamily:"Poppins-Light",
  },
  infoValue: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
    textAlign:"center",
    marginTop: 3,
    fontFamily:"Poppins-Light",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    top:20
  },
 
  divider: {
  width: 1,
  backgroundColor: '#e0e0e0',
  marginHorizontal: 5,
},
  audioContainer: {
    marginTop: 30,
    paddingVertical: 20,
  },

  topPlayerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35
  },

  progressBarBackground: {
  height: 4,
  width: '100%',
  backgroundColor: Colors.wasilgreenthemecolorfourth,
  borderRadius: 2,
  justifyContent: 'center',
  position: 'relative',
},

progressFill: {
  height: 4,
  backgroundColor: Colors.wasilgreenthemecolorsecond,
  borderRadius: 2,
  position: 'absolute',
  left: 0,
  top: 0,
},

progressThumb: {
  width: 16,
  height: 16,
  borderRadius: 8,
  backgroundColor: Colors.white,
  position: 'absolute',
  zIndex: 10,
  
},
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  timeText: {
    fontSize: 14,
    color: Colors.white,
  },

  controlRow: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
  },

  controlIcon: {
    width: 30,
    height: 30,
  },

  playButton: {
    width: 70,
    height: 70,
  
    justifyContent: "center",
    alignItems: "center",
  },

  speedText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 12,
  },
});

export default PlayStory;