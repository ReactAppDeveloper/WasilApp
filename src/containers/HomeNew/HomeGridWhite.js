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
  WasilNewQuranIcon,
  WasilNewDuaIcon,
  WasilNewHadithsIcon,
  WasilNewStoriesIcon,
  WasilNewTasbihIcon,
  WasilNewReciterIcon,
  WasilNewQiblaIcon,
  WasilNewPrayerIcon,
  WasilNewWudhuIcon,
  WasilNewMosqueIcon,
  WasilHijriCalendarSvg,
  WasilNewShahdahIcon,
  WasilNewReelIcon,
  WasilNewVideosIcon,
  WasilNewGreetingIcon,

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

export default class HomeGridWhite extends Component {
  gridItems = [
    { label: 'Quran', icon: <WasilNewQuranIcon />, screen: 'QuranMainDashboard', iconStyle: { marginBottom: 10 } },
    { label: 'Dua', icon: <WasilNewDuaIcon />, screen: 'DuasScreen', iconStyle: { marginBottom: 15, top: 5 } },
    { label: 'Hadiths', icon: <WasilNewHadithsIcon />, screen: 'HadithsBooksDashboard', iconStyle: { marginBottom: 15,top:2 } },
    { label: 'Stories', icon: <WasilNewStoriesIcon />, screen: 'IslamicStoriesScreen', iconStyle: { marginBottom: 10,right:4 } },
    { label: 'Tasbih', icon: <WasilNewTasbihIcon />, screen: 'Tasbih', iconStyle: { marginBottom: 10,top: 3  } },
    { label: 'Reciters', icon: <WasilNewReciterIcon />, screen: 'RecitersList', iconStyle: { marginBottom: 10 } },
    { label: 'Qibla', icon: <WasilNewQiblaIcon />, screen: 'QiblaCompassNew', iconStyle: { marginBottom: 15,top: 5  } },
    { label: 'Prayer', icon: <WasilNewPrayerIcon />, screen: 'PrayerGuide', iconStyle: { marginBottom: 12, left: 5,top: 3  } },
    { label: 'Wudhu', icon: <WasilNewWudhuIcon />, screen: 'AblutionNew', iconStyle: { marginBottom: 12 ,top: 3 } },
    { label: 'Mosque', icon: <WasilNewMosqueIcon />, screen: 'PrayerMosque', iconStyle: { marginBottom: 12,top: 3  } },
    { label: 'Calendar', icon: <WasilHijriCalendarSvg />, screen: 'CalendarScreen', iconStyle: { marginBottom: 10 } },
    { label: 'Shahadah', icon: <WasilNewShahdahIcon />, screen: 'ShahadahNew', iconStyle: { marginBottom: 5 } },
    { label: 'Reels', icon: <WasilNewReelIcon />, screen: 'ReelsNew', iconStyle: { marginBottom: 15 ,top: 5 } },
    { label: 'Videos', icon: <WasilNewVideosIcon />, screen: 'VideoDashboard', iconStyle: { marginBottom: 18, top: 5 } },
    { label: 'Greeting', icon: <WasilNewGreetingIcon />, screen: 'GreetingsNew', iconStyle: { marginBottom: 15,top: 5  } },
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
    backgroundColor: Colors.transparent,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.transparent,
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
    color: Colors.wasilnewthemecolorsecond,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
    lineHeight: getFontSize() + 2,
  },
});