import React, { useEffect,useState } from 'react';
import { ScrollView,View ,ActivityIndicator,StyleSheet} from 'react-native';
import CategoryChips from './CategoryChips';
import TopChoices from './TopChoices';
import NewArrival from './NewArrival';
import FreeForUsers from './FreeForUsers';
import axios from 'axios';
import { Colors } from '../../../theme';

const IslamicStoriesScreen = ({navigation}) => {
  const [freestories, setfreestories] = useState([]);
  const [topchoices, settopchoices] = useState([]);
  const [newarrival, setnewarrival] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  setLoading(true);

  axios.get(`https://islamicapp.vercel.app/api/allislamicstory`)
    .then(res => {
      const freeStories = res.data.filter(item => item.isfree === "true");
      const topChoices = res.data.filter(item => item.topchoice === "true");
      const newArrival = res.data.filter(item => item.newarrival === "true");
      setfreestories(freeStories);
      settopchoices(topChoices);
      setnewarrival(newArrival);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);
  if (loading) {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={Colors.wasilnewthemecolorsecond} />
    </View>
  );
  }
  return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
      <CategoryChips navigation={navigation}/>
      <FreeForUsers title="Picks For You" data={freestories} />
      <TopChoices title="Top Choices" data={topchoices} />
      <NewArrival title="New Arrival" data={newarrival} />
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

export default IslamicStoriesScreen;
