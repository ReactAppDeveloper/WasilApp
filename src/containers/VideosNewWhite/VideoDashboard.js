import React, { useEffect,useState } from 'react';
import { ScrollView,View ,ActivityIndicator,StyleSheet, Text} from 'react-native';
import { Colors } from '../../theme';
import CategoryChips from './CategoryChips';
import NewArrival from './NewArrival';
import TopStories from './TopStories';
import FreeStories from './FreeStories';

const VideoDashboard = ({navigation}) => {
  const [freestories, setfreestories] = useState([]);
  const [topchoices, settopchoices] = useState([]);
  const [newarrival, setnewarrival] = useState([]);
  const [loading, setLoading] = useState(true);
 
  return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
      <CategoryChips navigation={navigation}/>
      <NewArrival navigation={navigation}/>
      <TopStories navigation={navigation}/>
      <FreeStories navigation={navigation}/>
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

export default VideoDashboard;
