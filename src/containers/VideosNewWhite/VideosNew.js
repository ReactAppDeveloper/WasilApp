import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Image
} from 'react-native';
import { Colors } from '../../theme';
import axios from "axios"
import { SvgUri } from 'react-native-svg';
import BannerNew from './BannerNew';

export default function VideosNew({ navigation }) {
const [speakervideodata, setspeakervideodata] = useState([]);
const [newThisMonth, setNewThisMonth] = useState([]);
const [isLoading, setisLoading] = useState(false);

useEffect(() => {
    setisLoading(true);
    fetchData()
    fetchNewVideos();
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://islamicapp.vercel.app/api/videochannels"
      )
      console.log("videos response")
      const data = response.data
      setspeakervideodata(data)
    } catch (e) {
      console.log(e)
    }
    setisLoading(false);
  }

  const fetchNewVideos = async () => {
  try {
    setisLoading(true);

    const response = await axios.get(
      "https://islamicapp.vercel.app/api/videos"
    );

    const allVideos = response.data;

    const filteredVideos = allVideos.filter(
      item =>item.createdAt === "2026-01-16T12:09:14.394Z"
    );
    setNewThisMonth(filteredVideos);
  } catch (error) {
    console.log("New videos error:", error);
  }

  setisLoading(false);
};

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.wasilnewthemecolorsecond}>

        </ActivityIndicator>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    
      <BannerNew />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Categories</Text>
        </View>
      </View>

      {isLoading ? (
     <ActivityIndicator
    size="small"
    color={Colors.wasilnewthemecolorsecond}
    style={{ marginTop: 16 }}
  />
      ) : (
  <FlatList
    data={speakervideodata}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index) => index.toString()}
    contentContainerStyle={styles.categoryList}
    renderItem={({ item, index }) => (
      <TouchableOpacity key={index}

                  onPress={() => {
                    if (item.videochannelname === "Durs and Podcast") {
                      navigation.navigate('BySpeakersNew');
                    }
                    else if (item.videochannelname === "Recitation Videos") {
                      navigation.navigate('RecitaionDetailNew', {
                        channelname: "Recitation",
                        name: item.videochannelname
                      });
                    }
                     else if (item.videochannelname === "Kids Videos") {
                      navigation.navigate('ChannelsDetailNew', {
                        channelname: "Kids",
                        name: item.videochannelname
                      });
                    }
                    else {
                      navigation.navigate('ChannelsDetailNew', {
                        channelname: item.videochannelname,
                        name: item.videochannelname
                      });
                    }
                  }}
      
      style={styles.categoryCardHorizontal}>
        <SvgUri
          width={36}
          height={36}
          uri={item.videochannelimage}
        />
        <Text
  style={styles.categoryText}
  numberOfLines={2}
>
  {item.videochannelname === 'Kids Videos' ||
  item.videochannelname === 'Duain and Zikr'||
  item.videochannelname === 'Islamic Documentaries'
    ? item.videochannelname.replace(' ', '\n')
    : item.videochannelname}
</Text>
      </TouchableOpacity>
    )}
  />
      )}

      <SectionHeader title="New This Month" />

     <FlatList
    data={newThisMonth}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index) => index.toString()}
    contentContainerStyle={{ paddingHorizontal: 15,marginTop:10 }}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.newCard}
       onPress={() => {
 navigation.navigate('VideoPlayingNew', {
   videosid: item.videoLink,
   videotitle:item.videoTitle,
   summary:item.summary,
   videochannelname:item.videochannelname
 });
}}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.newImage}
        />

        <View style={{ marginTop: 8 }}>
          <Text style={styles.newCategory}>
            {item.videochannelname}
          </Text>

          <Text
            style={styles.newTitle}
            numberOfLines={2}
          >
            {item.summary}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
    fontSize: 18,
    color: '#1A1A1A',
  },
  viewAll: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.wasilnewthemecolorthird,
  },

  newCard: {
  width: 220,
  marginRight: 16,
},
 newImage: {
  width: "100%",
  height: 130,
  borderTopLeftRadius: 30,
  resizeMode:"contain"
},
 newCategory: {
  fontFamily: "Poppins-Medium",
  fontSize: 12,
  color: Colors.wasilnewthemecolorthird,
  marginBottom: 4,
},

  newTitle: {
  fontFamily: "Poppins-SemiBold",
  fontSize: 15,
  color: "#1A1A1A",
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: Colors.white
  },
  headerTitle: {
    fontSize: 18,
    fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
    fontWeight: '600',
    left:15,
    marginTop:10,
    color:Colors.black
  },
  categoryText: {
  fontFamily: 'Poppins-Medium',
  fontSize: 12,
  textAlign: 'center',
  marginTop: 10,
  color: '#333',
},
  categoryList: {
  paddingHorizontal: 20,
  paddingTop: 10,
},

categoryCardHorizontal: {
  width: 100,
  height:100,
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  borderTopLeftRadius:30,
  paddingVertical: 10,
  paddingHorizontal: 10,
  marginRight: 10,
  alignItems: 'center',
  borderWidth: 0.6,
  borderColor: Colors.bordercolor,
},
});
