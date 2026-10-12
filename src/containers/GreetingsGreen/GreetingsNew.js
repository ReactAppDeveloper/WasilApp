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
  Image,
  StatusBar
} from 'react-native';
import { Colors } from '../../theme';
import axios from "axios"
import { SvgUri } from 'react-native-svg';
import { WasilGreetingAdBannerSVG } from '../../assets/icons';

export default function GreetingsNew({ navigation }) {
const [speakervideodata, setspeakervideodata] = useState([]);
const [newThisMonth, setNewThisMonth] = useState([]);
const [isLoading, setisLoading] = useState(false);

useEffect(() => {
    setisLoading(true);
    fetchData();
    fetchNewVideos();
  }, [])

  const fetchData = async () => {
     let isMounted = true; 
    try {
      const response = await axios.get(
        "https://islamicapp.vercel.app/api/categories"
      )
      console.log("greeetings response")
       if (isMounted) {
          const data = response.data
          setspeakervideodata(data)
        }
    } catch (e) {
       console.error("Error fetching data", e);
        if (isMounted) {
          seterror("Failed to load data");
        }
    }
    finally {
        if (isMounted) {
          setisLoading(false);
        }
      }
  }
  const fetchNewVideos = async () => {
  try {
    setisLoading(true);

    const response = await axios.get(
      "https://islamicapp.vercel.app/api/allgreetings"
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:Colors.wasilgreenthemecolor}}>
        <ActivityIndicator size={"large"} color={Colors.white}>

        </ActivityIndicator>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Categories</Text>
        </View>
      </View>

      {isLoading ? (
     <ActivityIndicator
    size="small"
    color={Colors.wasilnewthemecolorsecond}
    style={{ marginTop: 16 }}/>
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
            navigation.navigate('GreetingCardListNew', {
            cardid: item._id,
            categoryname:item.name,
            name:item.name})}}
      style={styles.categoryCardHorizontal}>
        <SvgUri
          width={36}
          height={36}
          uri={item.imagenew}
        />
        <Text style={styles.categoryText} numberOfLines={2}>
                {item.name === 'Thank You'? item.name.replace(' ', '\n'): item.name === 'Eid ul Fitr'
      ? 'Eid ul\nFitr': item.name === 'Eid ul Adha'
      ? 'Eid ul\nAdha': item.name}
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
                  navigation.navigate('GreetingCardShare', {
                    cardimage: item.path,
                    catname: item.name,
                    name: "Share Greetings",
                  });
                }}
            >
              <Image
                source={{ uri: item.path }}
                style={styles.newImage}
              />
      
            </TouchableOpacity>
          )}
        />

        <View style={{ alignSelf:"center"}} >
          <WasilGreetingAdBannerSVG/>
        </View>

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
    backgroundColor: Colors.wasilgreenthemecolor
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
    color: Colors.white,
  },

  newCard: {
  width: 150,
  marginRight: 12,
  borderRadius: 10,
},
 newImage: {
  width: 150,
  height: 200,
  borderRadius: 10,
  resizeMode:"contain"
},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: Colors.wasilgreenthemecolor
  },
  headerTitle: {
    fontSize: 18,
    fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
    fontWeight: '600',
    left:15,
    marginTop:10,
    color:Colors.white
  },
  categoryText: {
  fontFamily: 'Poppins-Medium',
  fontSize: 12,
  textAlign: 'center',
  marginTop: 10,
  color: Colors.white,
},
  categoryList: {
  paddingHorizontal: 20,
  paddingTop: 10,
},

categoryCardHorizontal: {
  width: 100,
  height:100,
  backgroundColor: Colors.wasilgreenthemecolorsecond,
  borderRadius: 12,
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 10,
  marginRight: 10,
  alignItems: 'center',
  borderWidth: 0.5,
  borderColor: Colors.wasilgreenborder,
},
});
