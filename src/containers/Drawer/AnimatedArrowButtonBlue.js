import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Colors } from '../../theme';
const AnimatedArrowButton = ({ onPress }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.2, { damping: 6 }, () => {
      scale.value = withSpring(1);
    });

    onPress && onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.arrow}> {'\u2713'}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedArrowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  arrow: {
    color: Colors.white,
    fontSize: 40,
    right:4
  },
});
