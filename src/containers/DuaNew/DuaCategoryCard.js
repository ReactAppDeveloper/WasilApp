import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground ,Platform} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Colors } from '../../theme';
const DuaCategoryCard = ({ item, onPress }) => {
const isLongTitle = item.title.length > 11;
  return (
    <TouchableOpacity
  activeOpacity={0.75}
  style={styles.card}
  onPress={() => onPress(item)}
>
  <ImageBackground style={styles.iconWrapper}>
  <SvgUri
    uri={item.image}
    width="100%"
    height={150}
  />

  <Text
    numberOfLines={2}
    ellipsizeMode="tail"
   style={[
    styles.title,
    {
      top: isLongTitle ? 30 : 40,
    },
  ]}
  >
    {item.title}
  </Text>
</ImageBackground>
</TouchableOpacity>
  );
};

export default DuaCategoryCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 16,
    overflow: 'hidden',
  },

  iconWrapper: {
    height: 100,
    justifyContent: 'center',
  },

  title: {
    position: 'absolute',
    left: 15,
    top: Platform.OS === 'ios'
        ? 40
        : 40,  
    width: '45%', 
    fontSize: 16,
    lineHeight: 20,
    color: Colors.secondary,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Asul-Regular'
        : 'AsulRegular',
  },
  
});
