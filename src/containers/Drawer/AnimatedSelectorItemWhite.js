import React, { useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Colors } from '../../theme';
const AnimatedSelectorItem = ({ value, isSelected, onPress }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (isSelected) {
      scale.value = withSpring(1.2, { damping: 5 }, () => {
        scale.value = withSpring(1);
      });
    }
  }, [isSelected]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          styles.circle,
          isSelected && styles.selectedCircle,
          animatedStyle,
        ]}
      >
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {value > 0 ? `+${value}` : value}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedSelectorItem;

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: Colors.bordercolor,
    backgroundColor: Colors.wasilnewthemecolorsecond,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: Colors.wasilnewthemecolorsecond,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
  },
  selectedText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
