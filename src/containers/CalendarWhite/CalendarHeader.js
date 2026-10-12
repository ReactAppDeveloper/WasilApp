import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getGregorianMonthName } from './calendarUtils';

const CalendarHeader = ({
  month,
  year,
  hijriMonth,
  hijriYear,
  onNext,
  onPrev
}) => {

  const gregorianName = getGregorianMonthName(month);

  return (
    <View style={styles.container}>

      {/* Left Button */}
      <TouchableOpacity onPress={onPrev}>
        <Text style={styles.btn}>◀</Text>
      </TouchableOpacity>

      {/* Center Titles */}
      <View style={styles.center}>

        {/* Gregorian */}
        <Text style={styles.gregorian}>
          {gregorianName} {year}
        </Text>

        {/* Hijri */}
        <Text style={styles.hijri}>
          {hijriMonth} {hijriYear}
        </Text>

      </View>

      {/* Right Button */}
      <TouchableOpacity onPress={onNext}>
        <Text style={styles.btn}>▶</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CalendarHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center'
  },

  center: {
    alignItems: 'center'
  },

  gregorian: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },

  hijri: {
    fontSize: 14,
    color: '#666',
    marginTop: 2
  },

  btn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  }
});