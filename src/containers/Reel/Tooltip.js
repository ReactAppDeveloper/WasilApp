import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tooltip = ({ message }) => {
  return (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    bottom: 50, // Increase this value to move it higher
    left: '30%',
    transform: [{ translateX: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  tooltipText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Tooltip;