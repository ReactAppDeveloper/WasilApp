import React from 'react';
import { View, StatusBar, StyleSheet ,Dimensions,Text,Image} from 'react-native';
import { Colors } from "../../theme";
const { width, height } = Dimensions.get('window');

export const OnbaordingItem = ({item}) => {
  return (
    <View style={[styles.container,{width}]}>
      <StatusBar backgroundColor={Colors.secondary} />
      <View style={styles.imageContainer}>
      <Image style={{bottom:60}}resizeMode="contain" source={item.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textBox}>
          <Text style={styles.headingText}>
           {item.title}
          </Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
          {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 0.7,
    alignItems:"center",
    width: '100%', // Occupies full width of the device
    height: '50%', // Adjust the height as needed
  },
  textContainer: {
    flex: 0.6,
    backgroundColor: Colors.transparent,
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  headingText: {
    fontSize: width * 0.07, 
    fontFamily: 'heading',
    color: Colors.secondary,
    lineHeight: height * 0.05,
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  descriptionText: {
    fontSize: width * 0.04,
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
    lineHeight: height * 0.03,
  },
 
});

export default OnbaordingItem;
