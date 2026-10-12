import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  FlatList,
} from 'react-native';

import { Colors } from '../../theme';

import {
  WasilGQuranIcon,
  WasilGDuaIcon,
  WasilGHadithsIcon,
  WasilGStoriesIcon,
  WasilGTasbihIcon,
  WasilGReciterIcon,
  WasilGQiblaIcon,
  WasilGPrayerIcon,
  WasilGWudhuIcon,
  WasilGMosqueIcon,
  WasilGHijriCalendarSvg,
  WasilGShahdahIcon,
  WasilGReelIcon,
  WasilGVideosIcon,
  WasilGGreetingIcon,
} from '../../assets/icons';

const { width } = Dimensions.get('window');

const NUM_COLUMNS = 5;
const SPACING = 8;
const CONTAINER_PADDING = 10;

// Calculate exact width for 5 items in a row
const ITEM_WIDTH =
  (width - CONTAINER_PADDING * 2 - SPACING * (NUM_COLUMNS - 1)) /
  NUM_COLUMNS;

const getFontSize = () => {
  if (width >= 720) return 14;
  if (width >= 480) return 12;
  return 10;
};

export default class HomeGridGreen extends Component {
  gridItems = [
    { label: 'Quran', icon: <WasilGQuranIcon />, screen: 'QuranMainDashboard', iconStyle: { marginBottom: 10 } },
    { label: 'Dua', icon: <WasilGDuaIcon />, screen: 'DuasScreen', iconStyle: { marginBottom: 15, top: 5 } },
    { label: 'Hadiths', icon: <WasilGHadithsIcon />, screen: 'HadithsBooksDashboard', iconStyle: { marginBottom: 15,top:2 } },
    { label: 'Stories', icon: <WasilGStoriesIcon />, screen: 'IslamicStoriesScreen', iconStyle: { marginBottom: 10,right:4 } },
    { label: 'Tasbih', icon: <WasilGTasbihIcon />, screen: 'Tasbih', iconStyle: { marginBottom: 10,top: 3  } },
    { label: 'Reciters', icon: <WasilGReciterIcon />, screen: 'RecitersList', iconStyle: { marginBottom: 10 } },
    { label: 'Qibla', icon: <WasilGQiblaIcon />, screen: 'QiblaCompassNew', iconStyle: { marginBottom: 15,top: 5  } },
    { label: 'Prayer', icon: <WasilGPrayerIcon />, screen: 'PrayerGuide', iconStyle: { marginBottom: 12, left: 5,top: 3  } },
    { label: 'Wudhu', icon: <WasilGWudhuIcon />, screen: 'AblutionNew', iconStyle: { marginBottom: 12 ,top: 3 } },
    { label: 'Mosque', icon: <WasilGMosqueIcon />, screen: 'PrayerMosque', iconStyle: { marginBottom: 12,top: 3  } },
    { label: 'Calendar', icon: <WasilGHijriCalendarSvg />, screen: 'CalendarScreen', iconStyle: { marginBottom: 10 } },
    { label: 'Shahadah', icon: <WasilGShahdahIcon />, screen: 'ShahadahNew', iconStyle: { marginBottom: 5 } },
    { label: 'Reels', icon: <WasilGReelIcon />, screen: 'ReelsNew', iconStyle: { marginBottom: 15 ,top: 5 } },
    { label: 'Videos', icon: <WasilGVideosIcon />, screen: 'VideoDashboard', iconStyle: { marginBottom: 18, top: 5 } },
    { label: 'Greeting', icon: <WasilGGreetingIcon />, screen: 'GreetingsNew', iconStyle: { marginBottom: 15,top: 5  } },
  ];
  renderGridItem = ({ item, index }) => {
    const { navigation } = this.props;

    // Remove right margin for every 5th item
    const isLastColumn = (index + 1) % NUM_COLUMNS === 0;

    return (
      <TouchableOpacity
        style={[
          styles.gridButton,
          !isLastColumn && { marginRight: SPACING },
        ]}
        onPress={() => navigation.navigate(item.screen)}
        activeOpacity={0.8}
      >
        <View style={[styles.iconWrapper, item.iconStyle]}>
          {item.icon}
        </View>

        <Text style={styles.labelText} numberOfLines={2}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.gridItems}
          renderItem={this.renderGridItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={NUM_COLUMNS}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  gridContainer: {
    paddingHorizontal: CONTAINER_PADDING,
  },

  gridButton: {
    width: ITEM_WIDTH,
    height: 78,
    marginBottom: 10,
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.wasilgreenborder,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },

  iconWrapper: {
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelText: {
    fontSize: getFontSize(),
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
    lineHeight: getFontSize() + 2,
  },
});