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
  IslamicStoryGPlayAudioSVG,
  IslamicStoryGPauseAudioSVG,
} from "../../assets/icons";

import { Colors } from "../../theme";

import reciters from "../../containers/Reciters/newreciters";

export default function MiniPlayer() {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reciter, setReciter] = useState(null);

  const playbackState = usePlaybackState();

  const { position, duration } = useProgress(250);

  const progressAnim = useRef(new Animated.Value(0)).current;

  const progressBarWidth = useRef(0);

  const screenWidth = Dimensions.get("window").width;

  const translateX = useRef(new Animated.Value(0)).current;

  /*
   * IMPORTANT:
   * true = user manually closed MiniPlayer
   *
   * This prevents stop/reset playback events from
   * immediately showing the MiniPlayer again.
   */
  const isMiniPlayerClosed = useRef(false);

  const lastDirection = useRef(-1); // -1 = left, 1 = right

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

    const search = reciterMap[slug] || slug.replace(/\_/g, " ");

    return reciters.find((item) =>
      normalize(item.name).includes(normalize(search))
    );
  };

  /*
   * Swipe responder
   *
   * LEFT or RIGHT swipe:
   * 1. Animate MiniPlayer away
   * 2. Mark MiniPlayer as manually closed
   * 3. Stop audio
   * 4. Reset TrackPlayer
   * 5. Remove MiniPlayer
   */

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 20 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
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
          lastDirection.current = gestureState.dx < 0 ? -1 : 1;

          Animated.timing(translateX, {
            toValue:
              lastDirection.current === -1
                ? -screenWidth
                : screenWidth,
            duration: 220,
            useNativeDriver: true,
          }).start(async () => {
            /*
             * VERY IMPORTANT:
             * Set this BEFORE stop/reset.
             *
             * TrackPlayer will fire playback events when
             * stop/reset happens. This prevents those events
             * from recreating the MiniPlayer.
             */
            isMiniPlayerClosed.current = true;

            // Remove MiniPlayer immediately
            setTrack(null);
            setReciter(null);
            setIsPlaying(false);

            translateX.setValue(0);

            try {
              // Stop current audio
              await TrackPlayer.stop();

              // Clear current queue
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

  /*
   * Load current track whenever playback state changes.
   */
  useEffect(() => {
    if (isMiniPlayerClosed.current) {
      return;
    }

    loadTrack();
  }, [playbackState]);

  /*
   * Sync play/pause state.
   */
  useEffect(() => {
    syncPlayerState();
  }, [playbackState]);

  /*
   * Progress animation.
   */
  useEffect(() => {
    if (!duration) return;

    Animated.timing(progressAnim, {
      toValue: position / duration,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [position, duration]);

  /*
   * Update reciter whenever track changes.
   */
  useEffect(() => {
    if (track?.url) {
      setReciter(getReciterInfo(track.url));
    }
  }, [track]);

  /*
   * IMPORTANT:
   * When a NEW audio track becomes active, show MiniPlayer again.
   *
   * When reset() happens after manually closing the player,
   * current will be null, so MiniPlayer stays closed.
   */
  useTrackPlayerEvents(
    [Event.PlaybackActiveTrackChanged],
    async () => {
      try {
        const current = await TrackPlayer.getActiveTrack();

        // TrackPlayer.reset() -> no active track
        if (!current) {
          return;
        }

        // Don't show MiniPlayer for Quran
        if (current.type === "quran") {
          setTrack(null);
          setReciter(null);
          return;
        }

        /*
         * A real new track has started.
         * Allow MiniPlayer to appear again.
         */
        isMiniPlayerClosed.current = false;

        setTrack(current);
      } catch (error) {
        console.log(
          "Active track change error:",
          error
        );
      }
    }
  );

  const loadTrack = async () => {
    try {
      /*
       * Don't recreate MiniPlayer after user manually
       * dismissed it.
       */
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
              <IslamicStoryGPauseAudioSVG />
            ) : (
              <IslamicStoryGPlayAudioSVG />
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
    borderColor: Colors.wasilgreenborder,
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
    color: Colors.wasilgreenthemecolor,
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
      Colors.wasilgreenthemecolor,
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