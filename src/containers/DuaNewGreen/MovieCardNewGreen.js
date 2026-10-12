import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';

import Share from 'react-native-share';

import useStore from '../../store';

import {
  WasilNewBTTasbihHeartUnFilled,
  WasilNewHeartfilledBTSVG,
  DuaDetailBismillah,
  WasilNewBTShareSVG,
} from '../../assets/icons';
const { height } = Dimensions.get('window');
import { Colors } from '../../theme';

const MovieCardNewGreen = ({
  movie,
  favourites,
  cardWidth = '100%',
  spacing = 0,
  index = 0,
  scrollX,
}) => {
  const { addMovie, deleteMovie } = useStore.getState();

  const [mode, setMode] = useState('arabic');

  const isFavourite = favourites?.some(item => item._id === movie._id);

  const getArabicFontSize = (text = '') => {
    const len = text.length;

    if (len < 120) return 34;
    if (len < 180) return 30;
    if (len < 250) return 27;

    return 24;
  };

 const inputRange = [
  (index - 1) * (cardWidth + spacing),
  index * (cardWidth + spacing),
  (index + 1) * (cardWidth + spacing),
];

const scale = scrollX
  ? scrollX.interpolate({
      inputRange,
      outputRange: [0.88, 1, 0.88],
      extrapolate: 'clamp',
    })
  : 1;

const translateY = scrollX
  ? scrollX.interpolate({
      inputRange,
      outputRange: [25, 0, 25],
      extrapolate: 'clamp',
    })
  : 0;

const opacity = scrollX
  ? scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    })
  : 1;

const zIndex = scrollX
  ? scrollX.interpolate({
      inputRange,
      outputRange: [0, 10, 0],
      extrapolate: 'clamp',
    })
  : 10;

  const borderColor = scrollX
    ? scrollX.interpolate({
        inputRange: [
          (index - 1) * (cardWidth + spacing),
          index * (cardWidth + spacing),
          (index + 1) * (cardWidth + spacing),
        ],
        outputRange: [
          'rgba(0,0,0,.08)',
           "#396345",
          'rgba(0,0,0,.08)',
        ]
      })
    : "#396345";

  const shadowOpacity = scrollX
  ? scrollX.interpolate({
      inputRange,
      outputRange: [0.08, 0.22, 0.08],
      extrapolate: 'clamp',
    })
  : 0.22;

  const onShare = async () => {
    try {
      await Share.open({
        message:
          `${movie.duanameenglish}\n\n` +
          `${movie.duainarabic}\n\n` +
          `${movie.duatranslation}\n\n` +
          `${movie.duareferrence}\n\n` +
          `Wasil Islamic App`,
      });
    } catch {}
  };

  return (
    <View
      style={[
        styles.page,
        {
          width: cardWidth,
          marginHorizontal: spacing / 2,
        },
      ]}>
      <Animated.View
  style={[
    styles.card,
    {
      borderColor,
      opacity,
      zIndex,
      shadowOpacity,
      transform: [
        { translateY },
        { scale },
      ],
    },
  ]}>
        {/* Header Icons */}

        <View style={styles.iconRow}>
          <TouchableOpacity onPress={onShare}>
            <WasilNewBTShareSVG />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              isFavourite ? deleteMovie(movie) : addMovie(movie)
            }>
            {isFavourite ? <WasilNewHeartfilledBTSVG /> : <WasilNewBTTasbihHeartUnFilled />}
          </TouchableOpacity>
        </View>

      <ScrollView
  style={{ flex: 1 }}
  contentContainerStyle={styles.scrollContent}
  showsVerticalScrollIndicator={false}
  nestedScrollEnabled={true}
  bounces={false}>

          <Text style={styles.title}>
            {movie.duanameenglish?.toUpperCase()}
          </Text>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                mode === 'arabic' && styles.activeTab,
              ]}
              onPress={() => setMode('arabic')}>
              <Text
                style={[
                  styles.tabText,
                  mode === 'arabic' && styles.activeTabText,
                ]}>
                ARABIC
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                mode === 'transliteration' && styles.activeTab,
              ]}
              onPress={() => setMode('transliteration')}>
              <Text
                style={[
                  styles.tabText,
                  mode === 'transliteration' &&
                    styles.activeTabText,
                ]}>
                TRANSLITERATION
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                mode === 'translation' && styles.activeTab,
              ]}
              onPress={() => setMode('translation')}>
              <Text
                style={[
                  styles.tabText,
                  mode === 'translation' &&
                    styles.activeTabText,
                ]}>
                TRANSLATION
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bismillah */}

          <View style={styles.bismillah}>
            <DuaDetailBismillah />
          </View>

          {/* Content */}

          {mode === 'arabic' && (
            <Text
              style={[
                styles.arabic,
                {
                  fontSize: getArabicFontSize(
                    movie.duainarabic,
                  ),
                },
              ]}>
              {movie.duainarabic}
            </Text>
          )}

          {mode === 'translation' && (
            <Text style={styles.translation}>
              {movie.duatranslation}
            </Text>
          )}

          {mode === 'transliteration' && (
            <Text style={styles.translation}>
              {movie.duatransliteration}
            </Text>
          )}

          {/* Reference */}

          <Text style={styles.reference}>
            {movie.duareferrence}
          </Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default MovieCardNewGreen;

const styles = StyleSheet.create({
 page: {
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
},

 card: {
    width: '100%',
    height: height * 0.65,
    backgroundColor: Colors.wasilgreenthemecolor,
    borderRadius: 26,
    borderWidth: 8,
    borderColor: Colors.wasilgreenborder,
    shadowColor: Colors.white,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 6,
    overflow: 'visible',
},

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingBottom: 40,
},
  title: {
    marginTop: 25,

    fontSize: 26,

    textAlign: 'center',

    color: Colors.yellowgoldcolor,

    fontFamily:
      Platform.OS === 'ios'
        ? 'NunitoSans-Bold'
        : 'NunitoSansBold',
  },

  tabContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 28,

    marginBottom: 28,
  },

  tab: {
    flex: 1,

    marginHorizontal: 4,

    borderWidth: 1,

    borderColor: '#DDD',

    borderRadius: 6,

    paddingVertical: 8,

    backgroundColor: '#F6F6F6',
  },

  activeTab: {
    borderColor: Colors.wasilgreenborder,

    backgroundColor: Colors.white,
  },

  tabText: {
    fontSize: 8.5,

    textAlign: 'center',

    color: '#666',

    fontWeight: '600',
  },

  activeTabText: {
    color: Colors.wasilgreentext,
  },

  bismillah: {
    alignItems: 'center',

    marginBottom: 18,
  },

  arabic: {
    textAlign: 'center',

    color: Colors.white,

    lineHeight: 58,

    fontFamily:
      Platform.OS === 'ios'
        ? 'Al Qalam Quran Majeed Web'
        : 'AlQalamQuran',
  },

  translation: {
    fontSize: 18,

    lineHeight: 34,

    textAlign: 'center',

    color: Colors.white,
  },

  reference: {
    marginTop: 28,

    marginBottom: 10,

    fontSize: 15,

    textAlign: 'center',

    color: Colors.white,
fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular"
  },
});