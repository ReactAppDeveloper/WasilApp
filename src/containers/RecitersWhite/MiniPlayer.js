import React, { useEffect, useState, useRef } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Animated,
  Image,
  Platform,
  PanResponder,
  Dimensions,
} from "react-native";

import TrackPlayer, {
  usePlaybackState,
  useProgress,
  State,
  Event,
  useTrackPlayerEvents,
} from "react-native-track-player";

import {
  IslamicStoryPlayNextSVG,
  IslamicStoryPlayPreviousSVG,
  IslamicStoryPlayAudioSVG,
  IslamicStoryPauseAudioSVG,
} from "../../assets/icons";

import { Colors } from "../../theme";

import reciters from "../../containers/Reciters/newreciters";

export default function MiniPlayer() {
  const [track, setTrack] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [visible, setVisible] = useState(true);

  const [reciter, setReciter] = useState(null);

  const playbackState = usePlaybackState();

  const { position, duration } = useProgress(250);

  const progressAnim = useRef(new Animated.Value(0)).current;

  const progressBarWidth = useRef(0);

  const screenWidth = Dimensions.get("window").width;

  const translateX = useRef(new Animated.Value(0)).current;

  const lastDirection = useRef(-1); // -1 = left, 1 = right

  // ADDED: prevents TrackPlayer events from showing MiniPlayer again
  // after user manually swipes it away
  const isMiniPlayerClosed = useRef(false);

  const getReciterInfo = (url) => {
    if (!url) return null;

    const slug = url.split("/")[4]?.toLowerCase();

    if (!slug) return null;

    const normalize = (text = "") =>
      text
        .toLowerCase()
        .replace(/[\`']/g, "")
        .replace(/-/g, "_")
        .replace(/\s+/g, "_")
        .replace(/\./g, "");

    const reciterMap = {
      mishari_al_afasy: "mishari rashid al afasy",
      abdulbasit_murattal: "abdul baset abdul samad",
      abdulbasit_mujawwad: "abdul baset abdul samad",
      abdurrahmaan_as_sudais: "abdur rahman as sudais",
      "saud_ash-shuraym": "saud ash shuraim",
      husary: "mahmoud khalil al husary",
      abu_bakr_shatri: "abu bakr al shatri",
      hani_ar_rifai: "hani ar rifai",
      siddiq_minshawi: "mohamed siddiq al minshawi",
      khalifah_taniji: "khalifah al tunaiji",
    };

    const search =
      reciterMap[slug] || slug.replace(/\_/g, " ");

    return reciters.find((item) =>
      normalize(item.name).includes(normalize(search))
    );
  };

  const restorePlayer = () => {
    setVisible(true);

    // ADDED: allow MiniPlayer again when manually restored
    isMiniPlayerClosed.current = false;

    translateX.setValue(
      lastDirection.current * screenWidth
    );

    Animated.spring(translateX, {
      toValue: 0,
      friction: 7,
      tension: 60,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 20 &&
          Math.abs(gestureState.dx) >
            Math.abs(gestureState.dy)
        );
      },

      onPanResponderMove: (_, gestureState) => {
        translateX.setValue(gestureState.dx);
      },

      onPanResponderRelease: (_, gestureState) => {
        const shouldDismiss =
          Math.abs(gestureState.dx) > 120 ||
          Math.abs(gestureState.vx) > 0.8;

        if (shouldDismiss) {
          // Save which direction the user swiped
          lastDirection.current =
            gestureState.dx < 0 ? -1 : 1;

          Animated.timing(translateX, {
            toValue:
              lastDirection.current === -1
                ? -screenWidth
                : screenWidth,
            duration: 220,
            useNativeDriver: true,
          }).start(async () => {
            /*
             * IMPORTANT:
             * Set this BEFORE stop/reset.
             *
             * TrackPlayer fires events during stop/reset.
             * This prevents loadTrack() from bringing the
             * MiniPlayer back immediately.
             */
            isMiniPlayerClosed.current = true;

            // Hide MiniPlayer
            setVisible(false);

            // Clear UI state
            setTrack(null);
            setReciter(null);
            setIsPlaying(false);

            translateX.setValue(0);

            try {
              // Stop audio
              await TrackPlayer.stop();

              // Clear queue / active track
              await TrackPlayer.reset();
            } catch (error) {
              console.log(
                "MiniPlayer close error:",
                error
              );
            }
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            friction: 7,
            tension: 60,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    // Don't load track again after manual swipe close
    if (isMiniPlayerClosed.current) {
      return;
    }

    loadTrack();
  }, [playbackState]);

  useEffect(() => {
    syncPlayerState();
  }, [playbackState]);

  useEffect(() => {
    if (!duration) return;

    Animated.timing(progressAnim, {
      toValue: position / duration,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [position, duration]);

  useEffect(() => {
    if (track?.url) {
      setReciter(getReciterInfo(track.url));
    }
  }, [track]);

  useTrackPlayerEvents(
    [Event.PlaybackActiveTrackChanged],
    async () => {
      try {
        const current =
          await TrackPlayer.getActiveTrack();

        /*
         * reset() after swipe means there is no active track.
         * Don't recreate MiniPlayer.
         */
        if (!current) {
          return;
        }

        // Don't show MiniPlayer for Quran
        if (current.type === "quran") {
          setTrack(null);
          return;
        }

        /*
         * A real new active track means new audio started.
         * Allow MiniPlayer to appear again.
         */
        isMiniPlayerClosed.current = false;

        setVisible(true);
        setTrack(current);
      } catch {}
    }
  );

  const loadTrack = async () => {
    try {
      // Don't show MiniPlayer after manual swipe close
      if (isMiniPlayerClosed.current) {
        return;
      }

      const current =
        await TrackPlayer.getActiveTrack();

      // Don't show MiniPlayer for Quran
      if (current?.type === "quran") {
        setTrack(null);
        return;
      }

      setTrack(current);
    } catch {}
  };

  const syncPlayerState = async () => {
    try {
      const state = await TrackPlayer.getState();

      setIsPlaying(state === State.Playing);
    } catch {}
  };

  const togglePlay = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      await TrackPlayer.pause();

      setIsPlaying(false);
    } else {
      await TrackPlayer.play();

      setIsPlaying(true);
    }
  };

  const playNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch {}
  };

  const playPrev = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch {}
  };

  const onProgressLayout = (e) => {
    progressBarWidth.current =
      e.nativeEvent.layout.width;
  };

  const onSeek = async (e) => {
    if (!duration) return;

    const percent =
      e.nativeEvent.locationX /
      progressBarWidth.current;

    await TrackPlayer.seekTo(
      percent * duration
    );
  };

  const imageSource = reciter?.image
    ? reciter.image
    : track?.artwork
    ? { uri: track.artwork }
    : require("../../assets/speakerbg.png");

  if (!track) return null;

  if (!visible) {
    return (
      <TouchableOpacity
        style={styles.restoreButton}
        activeOpacity={0.8}
        onPress={restorePlayer}
      >
        <Image
          source={imageSource}
          style={styles.cover}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {
          opacity: translateX.interpolate({
            inputRange: [
              -screenWidth,
              0,
              screenWidth,
            ],
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          }),

          transform: [
            {
              translateX,
            },
          ],
        },
      ]}
    >
      <View style={styles.row}>
        <Image
          source={imageSource}
          style={styles.cover}
        />

        <View style={styles.info}>
          <Text
            numberOfLines={1}
            style={styles.title}
          >
            {track.title}
          </Text>

          <Text
            numberOfLines={1}
            style={styles.artist}
          >
            {reciter?.name || track.artist}
          </Text>

          <Pressable
            onLayout={onProgressLayout}
            onPress={onSeek}
          >
            <View
              style={styles.progressBackground}
            >
              <Animated.View
                style={[
                  styles.progressFill,
                  {
                    width:
                      progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          "0%",
                          "100%",
                        ],
                      }),
                  },
                ]}
              />
            </View>
          </Pressable>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            onPress={playPrev}
            activeOpacity={0.7}
          >
            <IslamicStoryPlayPreviousSVG />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playButton}
            onPress={togglePlay}
            activeOpacity={0.7}
          >
            {isPlaying ? (
              <IslamicStoryPauseAudioSVG />
            ) : (
              <IslamicStoryPlayAudioSVG />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playNext}
            activeOpacity={0.7}
          >
            <IslamicStoryPlayNextSVG />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: "95%",
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.wasilnewthemecolorsecond,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  cover: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
  },

  info: {
    flex: 1,
    marginHorizontal: 10,
  },

  title: {
    color: Colors.secondary,
    fontSize: 16,
    fontFamily:
      Platform.OS === "ios"
        ? "Asul-Regular"
        : "AsulRegular",
  },

  artist: {
    color: "#555",
    marginTop: 2,
    marginBottom: 8,
    fontSize: 13,
  },

  progressBackground: {
    height: 3,
    backgroundColor: "#E5E5E5",
    borderRadius: 5,
    overflow: "hidden",
  },

  progressFill: {
    height: 3,
    backgroundColor:
      Colors.wasilnewthemecolorsecond,
    borderRadius: 5,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  playButton: {
    marginHorizontal: 12,
  },

  closeButton: {
    position: "absolute",
    right: 8,
    bottom: 75,
    zIndex: 10,
    backgroundColor: "#F3F3F3",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  closeText: {
    color: "#555",
    fontSize: 12,
  },

  restoreButton: {
    position: "absolute",
    bottom: 110,
    right: 16,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});