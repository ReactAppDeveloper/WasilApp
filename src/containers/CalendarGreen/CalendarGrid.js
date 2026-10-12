import React from 'react';
import { View, StyleSheet } from 'react-native';
import DayCell from './DayCell';
import { isFriday, isToday, getIslamicEvent } from './calendarUtils';
import { Colors } from '../../theme';

const CalendarGrid = ({ data }) => {
  return (
    <View style={styles.grid}>
      {data.map((item, index) => {
        if (item.empty) {
          return (
            <View
              key={item.id}
              style={{ width: '14.2%', height: 85 }}
            />
          );
        }

        const today = isToday(item.gregorianDate);
        const friday = isFriday(item.weekday);
        const event = getIslamicEvent(
          item.hijriDate,
          item.hijriMonthNumber
        );

        return (
          <DayCell
            key={item.gregorianDate}
            item={item}
            isToday={today}
            isFriday={friday}
            event={event}
          />
        );
      })}
    </View>
  );
};

export default CalendarGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    backgroundColor:Colors.wasilgreenthemecolor
  }
});