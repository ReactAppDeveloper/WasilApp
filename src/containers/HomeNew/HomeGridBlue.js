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
  WasilBlueTQuranIcon,
  WasilBlueTDuaIcon,
  WasilBlueTHadithsIcon,
  WasilBlueTStoriesIcon,
  WasilBlueTTasbihIcon,
  WasilBlueTReciterIcon,
  WasilBlueTQiblaIcon,
  WasilBlueTPrayerIcon,
  WasilBlueTWudhuIcon,
  WasilBlueTMosqueIcon,
  WasilBlueTHijriCalendarSvg,
  WasilBlueTShahdahIcon,
  WasilBlueTReelIcon,
  WasilBlueTVideosIcon,
  WasilBlueTGreetingIcon,
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

export default class HomeGridBlue extends Component {
  gridItems = [
    { label: 'Quran', icon: <WasilBlueTQuranIcon />, screen: 'QuranMainDashboard', iconStyle: { marginBottom: 10 } },
    { label: 'Dua', icon: <WasilBlueTDuaIcon />, screen: 'DuasScreen', iconStyle: { marginBottom: 15, top: 5 } },
    { label: 'Hadiths', icon: <WasilBlueTHadithsIcon />, screen: 'HadithsBooksDashboard', iconStyle: { marginBottom: 15,top:2 } },
    { label: 'Stories', icon: <WasilBlueTStoriesIcon />, screen: 'IslamicStoriesScreen', iconStyle: { marginBottom: 10,right:4 } },
    { label: 'Tasbih', icon: <WasilBlueTTasbihIcon />, screen: 'Tasbih', iconStyle: { marginBottom: 10,top: 3  } },
    { label: 'Reciters', icon: <WasilBlueTReciterIcon />, screen: 'RecitersList', iconStyle: { marginBottom: 10 } },
    { label: 'Qibla', icon: <WasilBlueTQiblaIcon />, screen: 'QiblaCompassNew', iconStyle: { marginBottom: 15,top: 5  } },
    { label: 'Prayer', icon: <WasilBlueTPrayerIcon />, screen: 'PrayerGuide', iconStyle: { marginBottom: 12, left: 5,top: 3  } },
    { label: 'Wudhu', icon: <WasilBlueTWudhuIcon />, screen: 'AblutionNew', iconStyle: { marginBottom: 12 ,top: 3 } },
    { label: 'Mosque', icon: <WasilBlueTMosqueIcon />, screen: 'PrayerMosque', iconStyle: { marginBottom: 12,top: 3  } },
    { label: 'Calendar', icon: <WasilBlueTHijriCalendarSvg />, screen: 'CalendarScreen', iconStyle: { marginBottom: 10 } },
    { label: 'Shahadah', icon: <WasilBlueTShahdahIcon />, screen: 'ShahadahNew', iconStyle: { marginBottom: 5 } },
    { label: 'Reels', icon: <WasilBlueTReelIcon />, screen: 'ReelsNew', iconStyle: { marginBottom: 15 ,top: 5 } },
    { label: 'Videos', icon: <WasilBlueTVideosIcon />, screen: 'VideoDashboard', iconStyle: { marginBottom: 18, top: 5 } },
    { label: 'Greeting', icon: <WasilBlueTGreetingIcon />, screen: 'GreetingsNew', iconStyle: { marginBottom: 15,top: 5  } },
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
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
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