import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekHeader = () => {
  return (
    <View style={styles.container}>
      {days.map(day => (
        <Text key={day} style={styles.day}>
          {day}
        </Text>
      ))}
    </View>
  );
};

export default WeekHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  day: {
    width: '14.2%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  }
});