import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Pressable,
  Animated,
  Platform
} from "react-native";
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
  useProgress,
} from "react-native-track-player";
import { SURAH_NAMES } from "./surahNames";
import {
  WasilNewRecitersBTPlayIcon,
  WasilNewRecitersBTPauseIcon,
  SearchSVG,
  IslamicStoryPlayPreviousSVG,
  IslamicStoryPlayNextSVG,
  IslamicStoryPlayRewindSVG,
  IslamicStoryPlayForwardSVG,
  IslamicStoryPlayBTAudioSVG,
  IslamicStoryPauseBTAudioSVG,
  DuaListNumberBTSVGG
} from "../../assets/icons";
import { Colors } from "../../theme";
import { savePlayerState } from "./playerStorage";

export default function ReciterDetail({ route }) {
  const { reciterId } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerLoadingTracks, setPlayerLoadingTracks] = useState(false);
  const flatListRef = useRef(null);
  const isUserScrolling = useRef(false);
  const shouldAutoScroll = useRef(false);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(0);
  const { position, duration } = useProgress(250);

 useEffect(() => {
  fetchRecitations();

  setCurrentIndex(null);
  setIsPlaying(false);

  const syncTrack = async () => {
    try {
      const activeTrack = await TrackPlayer.getActiveTrack();

      if (activeTrack?.reciterId === reciterId) {
        const index = await TrackPlayer.getActiveTrackIndex();
        setCurrentIndex(index);

        const state = await TrackPlayer.getState();
        setIsPlaying(state === State.Playing);
      } else {
        setCurrentIndex(null);
        setIsPlaying(false);
      }
    } catch (e) {}
  };

  syncTrack();
}, [reciterId]);

  const fetchRecitations = async () => {
    try {
      const res = await fetch(
        `https://api.quran.com/api/v4/chapter_recitations/${reciterId}`
      );
      const json = await res.json();
      setData(json.audio_files || []);
      console.log(json)
      console.log(reciterId)
    } catch (e) {
      console.error("API Error", e);
    } finally {
      setLoading(false);
    }
  };

  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackState],
    async (event) => {
      if (event.type === Event.PlaybackTrackChanged) {
        if (event.nextTrack !== null) {
          setCurrentIndex(event.nextTrack);
          shouldAutoScroll.current = true;

          if (!isUserScrolling.current) {
            flatListRef.current?.scrollToIndex({
              index: event.nextTrack,
              animated: true,
              viewPosition: 0.5,
            });
          }
        }
      }
      if (event.type === Event.PlaybackState) {
        setIsPlaying(event.state === State.Playing);
      }
    }
  );

  useEffect(() => {
    if (!duration) return;
    Animated.timing(progressAnim, {
      toValue: position / duration,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [position, duration]);

  useEffect(() => {
  if (currentIndex !== null) {
    savePlayerState();
  }
}, [currentIndex, isPlaying, position]);

const filteredData = data.filter((item) => {
  const surah = SURAH_NAMES[item.chapter_id];
  if (!surah) return false;

  return surah.english
    .toLowerCase()
    .includes(search.toLowerCase());
});

const playTrack = async (index) => {
  try {
    setPlayerLoadingTracks(true);

    await TrackPlayer.reset();

   let tracks;
     if(Platform.OS == 'android')
     {
      
    tracks = data.map((item, idx) => ({
       id: `${reciterId}-${idx}`, 
       url: item.audio_url,
       title:
         SURAH_NAMES[item.chapter_id]?.english ||
         `Surah ${item.chapter_id}`,
       artist: "Wasil Islamic App",
       reciterId: reciterId,
       chapterId: item.chapter_id,
       type: "reciter",
       artwork: "https://res.cloudinary.com/daof5pne5/image/upload/v1786029254/notificationbg.png",
     }));
     }
     else{
   tracks = data
     .filter(item => item.audio_url)
     .map((item, idx) => ({
       id: `${reciterId}-${idx}`,
       url: item.audio_url,
       title: SURAH_NAMES[item.chapter_id]?.english || `Surah ${item.chapter_id}`,
       artist: "Wasil Islamic App",
       reciterId,
       type: "reciter",
       chapterId: item.chapter_id,
     }));
     }

    await TrackPlayer.add(tracks);
    console.log("Tracks added");

    await TrackPlayer.skip(index);
    console.log("Skipped");

    await TrackPlayer.play();
    console.log("Playing");

    const state = await TrackPlayer.getState();
    console.log("Player state:", state);

    const active = await TrackPlayer.getActiveTrack();
    console.log("Active track:", active);

    setCurrentIndex(index);
  } catch (e) {
    console.log("PLAY ERROR:", e);
  } finally {
    setPlayerLoadingTracks(false);
  }
};

const onPressTrack = async (index) => {
  const activeTrack = await TrackPlayer.getActiveTrack();

  const sameReciter =
    activeTrack?.reciterId === reciterId;

  if (sameReciter && currentIndex === index) {
    togglePlayPause();
  } else {
    playTrack(index);
  }
};

const togglePlayPause = async () => {
  const state = await TrackPlayer.getState();
  console.log(state);

  if (state === State.Playing) {
    await TrackPlayer.pause();
    setIsPlaying(false);
  } else {
    await TrackPlayer.play();
    setIsPlaying(true);
  }
};

  const playPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  };

  const playNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) {}
  };

  const rewind10 = async () => {
    const pos = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(Math.max(0, pos - 10));
  };

  const forward10 = async () => {
    const pos = await TrackPlayer.getPosition();
    const dur = await TrackPlayer.getDuration();
    await TrackPlayer.seekTo(Math.min(dur, pos + 10));
  };

  const onProgressLayout = (e) => {
    progressBarWidth.current = e.nativeEvent.layout.width;
  };
  const onProgressPress = async (e) => {
    if (!duration) return;
    const x = e.nativeEvent.locationX;
    const percentage = x / progressBarWidth.current;
    const seekTime = percentage * duration;
    await TrackPlayer.seekTo(seekTime);
  };
  const formatTime = (sec = 0) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const onScrollToIndexFailed = (info) => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
      });
    }, 300);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchSVG />
        <TextInput
          placeholder="Search Surah"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          placeholderTextColor={Colors.white}
        />
      </View>
{filteredData.length === 0 ? (
  <View style={{ alignItems: 'center', marginTop: 40 }}>
    <Text style={styles.noMatch}>No Match Found</Text>
  </View>
) : (
      <FlatList
        ref={flatListRef}
        data={filteredData}
        keyExtractor={(item) => item.chapter_id.toString()}
        onScrollToIndexFailed={onScrollToIndexFailed}
        onScrollBeginDrag={() => { isUserScrolling.current = true; }}
        onScrollEndDrag={() => { isUserScrolling.current = false; }}
        onMomentumScrollEnd={() => { isUserScrolling.current = false; }}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item, index }) => {
          const surah = SURAH_NAMES[item.chapter_id];
          if (!surah) return null;
          const isCurrent = currentIndex === index;

          return (
       
            <View style={[styles.row, isCurrent && styles.activeRow]}>
               <View style={{flex: 0.8,}}>
            <View style={{ height: Platform.OS === 'ios' ? 30 : 30}}></View>
            <View style={{ left: Platform.OS === 'ios' ? 16 : 16}}>
             <DuaListNumberBTSVGG />
             </View>
            <Text style={{ left: Platform.OS === 'ios' ? 0 : 2,bottom: Platform.OS === 'ios' ? 33 : 33, textAlign: "center", fontWeight: "500", color: Colors.white, fontSize: 18, fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway' }}>{item.chapter_id}</Text>
         </View>
           
              <View style={styles.left}>
                <Text style={[styles.english, isCurrent && styles.activeText]}>
                  {surah.english}
                </Text>
                <Text style={styles.meaning}>{surah.meaning}</Text>
              </View>
             
              
              <View style={styles.middle}>
                <Text style={[styles.arabic, isCurrent && styles.activeArabic]}>
                  {surah.arabic}
                </Text>
              </View>
             <TouchableOpacity
  style={styles.playButton}
  onPress={() => onPressTrack(index)}
>
  {isCurrent && isPlaying ? (
    <WasilNewRecitersBTPauseIcon />
  ) : (
    <WasilNewRecitersBTPlayIcon />
  )}
</TouchableOpacity>
            </View>
         
          );
        }}
      />
      )}

      {currentIndex !== null && (
        <View style={styles.audioContainer}>
          <View style={{ width: "100%", marginTop: 30, paddingHorizontal: 24 }}>
            <Pressable onPress={onProgressPress} onLayout={onProgressLayout}>
              <View style={styles.progressBarBackground}>
                <Animated.View
                  style={[
                    styles.progressFill,
                    { width: progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                      }) },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.progressThumb,
                    {
                      left: progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, Math.max(0, progressBarWidth.current - 16)],
                      }),
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
            <Pressable onPress={playPrevious}><IslamicStoryPlayPreviousSVG /></Pressable>
            <Pressable onPress={rewind10}><IslamicStoryPlayRewindSVG /></Pressable>

            <Pressable onPress={togglePlayPause} disabled={playDisabled}>
              <View style={[styles.playButton, playDisabled && { opacity: 0.6 }]}>
                {playerLoadingTracks || (!playerReady && data.length === 0) ? (
                  <ActivityIndicator color={Colors.white} />
                ) : isPlaying ? (
                  <IslamicStoryPauseBTAudioSVG />
                ) : (
                  <IslamicStoryPlayBTAudioSVG />
                )}
              </View>
            </Pressable>

            <Pressable onPress={forward10}><IslamicStoryPlayForwardSVG /></Pressable>
            <Pressable onPress={playNext}><IslamicStoryPlayNextSVG /></Pressable>
          </View>

         
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.intermediate1 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.bordercolor1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 46,
    width: "95%",
    marginVertical: 14,
  },
  searchInput: { flex: 1, marginLeft: 5, top: 2, fontSize: 14,paddingBottom:Platform.OS==='ios'?4:10, color: Colors.white, fontFamily: "Poppins-Medium" },
  row: { 

  flexDirection: 'row',
   alignItems: 'center',
   width: "95%",
   height: 70,
   alignSelf:"center",
   borderRadius:10,
   borderWidth:1,
   marginTop:10,
   borderColor: Colors.bordercolor1, },
  left: { flex: 1.5, justifyContent: "center"},
  middle: { flex: 1.5, alignSelf: "flex-start",top:15 },
  english: { fontSize: 12, color: Colors.white,  fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",fontWeight:"400" },
  meaning: { fontSize: 9, color: Colors.white, fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold" },
  arabic: { fontSize: 32, right: 30, color: Colors.white, textAlign: "right", fontFamily: "sura_names" },
  activeRow: { backgroundColor: Colors.secondary1 },
  activeText: { color: Colors.white, fontWeight: "600" },
  activeArabic: { color: Colors.white },
  playButton: { padding: 10 },
  playAllButton: { margin: 10, padding: 12, backgroundColor: Colors.wasilnewthemecolorsecond, borderRadius: 8, alignItems: "center" },
  playAllText: { color: Colors.white, fontSize: 16 },


  audioContainer: { position: "absolute", bottom: 0, width: "100%", backgroundColor: Colors.white, padding: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderTopWidth: 1, borderColor: "#eaeaea" },
  topPlayerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  progressBarBackground: { height: 4, backgroundColor: "#E0E0E0", borderRadius: 2, overflow: "hidden" },
  progressFill: { height: 4, backgroundColor: Colors.wasilnewthemecolorsecond, borderRadius: 2 },
  progressThumb: { position: "absolute", width: 16, height: 16, borderRadius: 8, backgroundColor: Colors.wasilnewthemecolorsecond, top: -6 },
  timeRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  timeText: { fontSize: 12, color: "#666" },
  controlRow: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 20 },
  speedContainer: { marginTop: 25, borderRadius: 20, borderWidth: 1, borderColor: Colors.wasilnewthemecolorthird, alignSelf: "center", backgroundColor: Colors.wasilnewthemecolorthird },
  speedButton: { paddingHorizontal: 12, paddingVertical: 8 },
  speedText: { color: Colors.white, fontWeight: "600" },
  noMatch: {
    height: '100%',
    top: 300,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Light',
  },
});
