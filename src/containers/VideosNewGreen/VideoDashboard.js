import React, { useEffect,useState } from 'react';
import { ScrollView,StatusBar ,Platform,StyleSheet, Text} from 'react-native';
import { Colors } from '../../theme';
import CategoryChips from './CategoryChips';
import NewArrival from './NewArrival';
import TopStories from './TopStories';
import FreeStories from './FreeStories';

const VideoDashboard = ({navigation}) => {
 
  return (
      <ScrollView style={{ backgroundColor: Colors.wasilgreenthemecolor }}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
      <CategoryChips navigation={navigation}/>
      <NewArrival navigation={navigation}/>
      <TopStories navigation={navigation}/>
      <FreeStories navigation={navigation}/>
      
      </ScrollView>

  );
  };
const styles = StyleSheet.create({
loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.wasilgreenthemecolor,
},
});

export default VideoDashboard;
