import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const ScrollIndicator = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const bounceLoop = () => {
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -10, duration: 500, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
      ]).start(() => bounceLoop());
    };
    bounceLoop();

    const fadeOutTimer = setTimeout(() => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearTimeout(fadeOutTimer);
  }, [bounceAnim, opacityAnim]);

  return (
    <Animated.View
      style={[
        styles.arrow,
        {
          transform: [{ translateY: bounceAnim }],
          opacity: opacityAnim,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 12,
    height: 12,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});

export default ScrollIndicator;
