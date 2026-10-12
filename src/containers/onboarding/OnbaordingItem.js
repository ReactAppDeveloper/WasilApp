import React from 'react';
import { View, StyleSheet ,Dimensions,Text,Platform, ImageBackground} from 'react-native';
import { Colors } from "../../theme";
const { width, height } = Dimensions.get('window');

export const OnbaordingItem = ({item}) => {
  return (
    <ImageBackground source={item.image} style={styles.container}>

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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  imageContainer: {
    alignItems:"center",
  },
  image:{
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignSelf:"center",
    position:"absolute",
    top:height * 0.48,
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  headingText: {
    textAlign:"center",
    fontFamily:"Asul-Regular",
    fontSize: 28, 
    fontFamily: Platform.OS === 'ios' ? 'DM Serif Text' : 'heading',
    color: Colors.white,
    top:20
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  descriptionText: {
    textAlign:"center",
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: Colors.white,
    top:18
  },
});

export default OnbaordingItem;
