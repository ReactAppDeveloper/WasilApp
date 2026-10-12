import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getGregorianMonthName } from './calendarUtils';
import {Colors} from '../../theme'
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

      <TouchableOpacity onPress={onPrev}>
        <Text style={styles.btn}>◀</Text>
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.gregorian}>
          {gregorianName} {year}
        </Text>
        <Text style={styles.hijri}>
          {hijriMonth} {hijriYear}
        </Text>

      </View>
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
    alignItems: 'center',
    backgroundColor:Colors.wasilgreenthemecolor
  },

  center: {
    alignItems: 'center'
  },

  gregorian: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white
  },

  hijri: {
    fontSize: 14,
     color: Colors.white,
    marginTop: 2
  },

  btn: {
    color:Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
});