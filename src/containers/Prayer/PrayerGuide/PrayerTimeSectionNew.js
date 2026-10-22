import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {useTheme, Fonts, TypeScale, Spacing, Radius} from '../../../theme';
import {formatTime12} from '../../HomeNew/prayerTimes';

const STRIP_ART = {
  blue: {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/c_limit,q_auto,w_1200/v1785408832/prayerwhitethemebg1.png'},
  green: {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/c_limit,q_auto,w_1200/v1786541707/prayersectionbg.png'},
  white: {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/c_limit,q_auto,w_1200/v1785021168/prayerwhitethemebg.png'},
};
const PRAYERS = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

// The five daily prayer times in one row; the current prayer is highlighted.
export default function PrayerTimeSectionNew({prayerTimes = {}, icons = {}, currentPrayer}) {
  const {Colors, theme} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  return (
    <ImageBackground source={STRIP_ART[theme] || STRIP_ART.blue} imageStyle={styles.art} style={styles.card}>
      {PRAYERS.map(prayer => {
        const active = prayer === currentPrayer;
        return (
          <View
            key={prayer}
            style={[styles.item, active && styles.itemActive]}
            accessible
            accessibilityLabel={`${prayer} ${formatTime12(prayerTimes[prayer])}${active ? ', current prayer' : ''}`}>
            <Text style={styles.name}>{prayer}</Text>
            <View style={styles.icon}>{icons[prayer]}</View>
            <Text style={styles.time}>{formatTime12(prayerTimes[prayer]).replace(/ (AM|PM)$/, '')}</Text>
          </View>
        );
      })}
    </ImageBackground>
  );
}

const makeStyles = Colors =>
  StyleSheet.create({
    card: {
      marginHorizontal: Spacing.lg,
      marginTop: Spacing.md,
      minHeight: 92,
      flexDirection: 'row',
      padding: Spacing.xs,
      borderRadius: Radius.md,
      overflow: 'hidden',
      backgroundColor: Colors.surface,
    },
    art: {borderRadius: Radius.md},
    item: {flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4, borderRadius: Radius.sm, paddingVertical: Spacing.sm},
    itemActive: {backgroundColor: 'rgba(0,0,0,0.25)'},
    name: {color: '#FFFFFF', fontSize: TypeScale.small, fontFamily: Fonts.bodySemiBold},
    icon: {height: 26, justifyContent: 'center'},
    time: {color: '#FFFFFF', fontSize: TypeScale.body, fontFamily: Fonts.bodyBold},
  });
