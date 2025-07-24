import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../theme';
import {
  QuranSVG, DuaSVG, TasbihSVG, VideoSVG,
  LibrarySVG, ReelSVG, PrayerSVG, WudhuSVG,
  QiblaSVG, MosqueSVG, GreetingsSVG, ShahadahSVG,
} from '../../assets/icons';

const { width } = Dimensions.get('window');

const getFontSize = () => {
  if (width >= 720) return 16;
  if (width >= 480) return 14;
  return 10;
};

export default class HomeGrid extends Component {
  gridItems = [
    { label: 'Quran', icon: <QuranSVG />, screen: 'Quran' },
    { label: 'Hadiths', icon: <LibrarySVG />, screen: 'HadithHome' },
    { label: 'Dua', icon: <DuaSVG />, screen: 'Dua' },
    { label: 'Tasbih', icon: <TasbihSVG />, screen: 'Tasbih' },
    { label: 'Videos', icon: <VideoSVG />, screen: 'Videos' },
    { label: 'Reels', icon: <ReelSVG />, screen: 'Reels' },
    { label: 'Prayer Guide', icon: <PrayerSVG />, screen: 'PrayerGuide' },
    { label: 'Wudhu Guide', icon: <WudhuSVG />, screen: 'AblutionWadu' },
    { label: 'Qibla Finder', icon: <QiblaSVG />, screen: 'QiblaCompass' },
    { label: 'Mosque Finder', icon: <MosqueSVG />, screen: 'PrayerMosque' },
    { label: 'Greeting Cards', icon: <GreetingsSVG />, screen: 'Greetings' },
    { label: 'Shahadah', icon: <ShahadahSVG />, screen: 'Shahadah' },
  ];

  renderGridItem = (item, index) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        key={index}
        style={styles.gridButton}
        onPress={() => navigation.navigate(item.screen)}
      >
        <View style={styles.iconWrapper}>{item.icon}</View>
        <Text style={styles.labelText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.gridContainer}>
        {this.gridItems.map((item, index) => this.renderGridItem(item, index))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    marginVertical: 10,
    top:30
  },
  gridButton: {
    width: '23%',
    height: 90,
    marginVertical: 7,
    backgroundColor: Colors.bordercolor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginBottom: 5,
  },
  labelText: {
    fontSize: getFontSize(),
    textAlign: 'center',
    color: Colors.secondary,
    fontFamily: 'Raleway',
  },
});