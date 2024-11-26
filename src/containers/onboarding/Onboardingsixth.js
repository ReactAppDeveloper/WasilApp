import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity,Image,StatusBar,StyleSheet,Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Images, Colors } from "../../theme";
import {Onboardingsixths} from '../../assets/icons';

const { width, height } = Dimensions.get('window');

const ImagesOnbaord = () => (
  <Image
  source={Images.OnboardSixth}
    style={{width:"100%"}}
  />
);
                                                  
export const Onboardingsixth = ({ route,navigation }) => {

  const {currentlatitudefifth,currentlongitudefifth} = route.params;
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const onPressFinish = async () => {
    await AsyncStorage.setItem('ONLATI', currentlatitudefifth);
    await AsyncStorage.setItem('ONLONGI', currentlongitudefifth);  
    await AsyncStorage.setItem('ONBOARDED', 'true');
    navigation.navigate('Guest');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.secondary} />
      <View style={styles.imageContainer}>
        <ImagesOnbaord />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textBox}>
          <Text style={styles.headingText}>
          Celebrate,
          {"\n"}Remember, and Share
          </Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
          Enhance your faith journey by sharing beautiful greeting cards. Declare faith with Shahadah, explore reels of Islamic wisdom, and engage with inspiring visuals on this path to spiritual growth.
          </Text>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.iconContainer}>
            <Onboardingsixths />
          </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={onPressFinish}
                style={styles.nextButton}
              >
                <Text style={styles.nextButtonText}>Finish</Text>
              </TouchableOpacity>
            </View>
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
    flex: 1,
  },
  textContainer: {
    flex: 0.7,
    backgroundColor: Colors.transparent,
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  headingText: {
    fontSize: width * 0.07, // Responsive font size
    fontFamily: 'heading',
    color: Colors.secondary,
    lineHeight: height * 0.05, // Responsive line height
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  descriptionText: {
    fontSize: width * 0.04, // Responsive font size
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
    lineHeight: height * 0.03, // Responsive line height
  },
  bottomView: {
    width: '95%',
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.02, // Responsive bottom position
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'flex-start',
    flex: 1,
    left:20
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  nextButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    height: height * 0.04, // Responsive button height
    width: width * 0.2, // Responsive button width
    justifyContent: 'center',
  },
  nextButtonText: {
    top:1,
    fontSize: width * 0.035, // Responsive font size
    alignSelf: 'center',
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
  },
});

export default Onboardingsixth;
