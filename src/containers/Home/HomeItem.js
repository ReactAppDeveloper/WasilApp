import React, { useState, useEffect,useRef} from "react";
import { View, StatusBar, StyleSheet ,Dimensions,Text} from 'react-native';
import {Colors} from "../../theme";
const { width, height } = Dimensions.get('window');

export const HomeItem = ({item}) => {
  return (
    <View style={[styles.container,{width}]}>     
      <View style={{ height: 50 ,alignItems:"center",top:23}}>
             <Text
                 style={{
             bottom:5,
           fontSize: 25,
           color: Colors.intermediate,
           fontWeight: "500",
           fontFamily: "AlQalamQuran",
         }}>
         {item.arabicayah}
   </Text>
   <Text
         style={{
           
           top:1,
           fontSize: 13,
           color: Colors.white,
           fontFamily: "Raleway",
         }}>
          {item.translation}
   </Text>
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
    resizeMode:"contain"
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
  bottomView: {
    width: '95%',

    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.02,
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
    height: height * 0.04,
    width: width * 0.2,
    justifyContent: 'center',
  },
  nextButtonText: {
    top:1,
    fontSize: width * 0.035,
    alignSelf: 'center',
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
  },
});

export default HomeItem;
