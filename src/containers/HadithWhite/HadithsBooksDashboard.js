import React, { useEffect,useState } from 'react';
import { ScrollView,View ,StyleSheet, Text} from 'react-native';
import CategoryChips from './CategoryChips';
import NewArrival from './NewArrival';
import TopStories from './TopStories';
import { Colors } from '../../theme';

const HadithsBooksDashboard = ({navigation}) => {
 
  return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
      <CategoryChips navigation={navigation}/>
      <NewArrival navigation={navigation}/>
      <TopStories navigation={navigation}/>
      <View style={{height:15}}></View>
      </ScrollView>

  );
  };
const styles = StyleSheet.create({
loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
});

export default HadithsBooksDashboard;
