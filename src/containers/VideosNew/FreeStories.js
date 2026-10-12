import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
const FreeStories = () => {
  const [hadithSBdata, sethadithSBdata] = useState([]);
  const navigation = useNavigation();
   useEffect(() => {
   fetchData();
   }, []);
  const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://islamicapp.vercel.app/api/videobychannel?videochannelname=Kids`
        )
        console.log("speakers data response ==>")
        const data = response.data
        sethadithSBdata(data);
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
  }

  return (
  <View style={{ backgroundColor: Colors.intermediate1 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Kids Zone</Text>
        </View>
       <TouchableOpacity
  onPress={() => {
    if (hadithSBdata.length > 0) {
      navigation.navigate('ChannelsDetailNew', {
        channelname: hadithSBdata[0].videochannelname,
        name: hadithSBdata[0].videochannelname,
      });
    }
  }}
>
  <View style={styles.viewallContainer}>
    <Text style={styles.viewAll}>See All</Text>
  </View>
</TouchableOpacity>
         
      </View>

      <View style={styles.divider} />

      <FlatList
       data={hadithSBdata.slice(0, 3)}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
         <View style={styles.card}>
           <TouchableOpacity 
            onPress={() => {
              navigation.navigate('VideoPlayingNew', {
   videosid: item.videoLink,
   videotitle:item.videoTitle,
   summary:item.summary,
   videochannelname:item.videochannelname
 });
        }}>
             <View style={styles.imageContainer}>
              <Image 
                  source={{uri:item.thumbnail}}
                  style={styles.image}
              />
             </View>
           </TouchableOpacity>
         
           <View style={styles.cardFooter}>
             <Text style={styles.title} numberOfLines={1}>
        {item.videoTitle}
      </Text>
            
           </View>
                 </View>
        )}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    top:20,
    backgroundColor: Colors.intermediate1
  },
  headerTitle: {
    fontSize: 18,
    left:2,
    color:Colors.white,
    fontFamily:"Poppins-Bold",
  },
    viewallContainer: {
    width:50,
    height:22,
    flexDirection: 'row',
    borderColor:Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },

  viewAll: {
    alignSelf:"center",
    justifyContent:"center",
    color: Colors.intermediate1,
    fontSize: 10,
    alignItems:"center",
    left:7,
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 1.2,
    marginTop: 22,
    marginHorizontal: 12,
  },
  listContainer: {
    top:10,
    paddingLeft: 10,
  },
  card: {
    height:160,
    width: 180,
    marginRight: 12,
  },
 
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    left:5,
    top:10,
    marginRight: 6,
    color: Colors.white,
    fontFamily:"Poppins-Light",
  },
  imageContainer: {
    width:180,
    height:100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex:1,
    resizeMode:"contain",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
},
});


export default FreeStories;
