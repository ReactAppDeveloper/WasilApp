import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const DayCell = ({ item, isToday, isFriday, event }) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.cell,
          isToday && styles.today,
          isFriday && styles.friday
        ]}
      >
        <Text style={styles.greg}>{item.day}</Text>

        <Text style={styles.hijri}>{item.hijriDate}</Text>

        {event && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{event}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DayCell;

const styles = StyleSheet.create({
  wrapper: {
    width: '14.2%',
    padding: 3
  },
  cell: {
    height: 85,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 6,
    elevation: 2
  },
  today: {
    backgroundColor: '#d4f8d4',
    borderWidth: 1,
    borderColor: 'green'
  },
  friday: {
   backgroundColor: '#e8f0ff'
  },
  greg: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  hijri: {
    position: 'absolute',
    top: 5,
    right: 6,
    fontSize: 11,
    color: '#666'
  },
  badge: {
    marginTop: 5,
    backgroundColor: '#2ecc71',
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  badgeText: {
    fontSize: 9,
    color: '#fff'
  }
});