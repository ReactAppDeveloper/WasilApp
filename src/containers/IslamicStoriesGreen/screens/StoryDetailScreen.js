import React,{ useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {IslamicStoryPlayIconSVG,IslamicStoryReadIconGSVG} from '../../../assets/icons';
import { Colors} from '../../../theme';
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

const StoryDetailScreen = ({ route, navigation }) => {
  const {storyid,storytitle} = route.params;
  const [storydata, setstorydata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
   useEffect(() => {
    setisLoading(true);
   const fetchData = async () => {
      try {
        const response = await axios.get(`https://islamicapp.vercel.app/api/islamicstorybystoryid?storyId=${storyid}`)
        console.log("story received response")
        setstorydata(response.data);
        setisLoading(false);
        console.log(storyid);
      }   
      catch (error) {
  console.log('Quran Error Message:', error?.message);
  console.log('Quran Error String:', String(error));
  setisLoading(false);
}
    }
    fetchData()
  }, [])
 
  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:Colors.wasilgreenthemecolor}}>
      <ActivityIndicator size={"large"} color={Colors.white}>

      </ActivityIndicator>
      </View>
    );
  }
  if(error){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>
      Error in Fetching Data..... Please Check Your Internet Connection.
      </Text>
      </View>
    );
  }
  const handleAccess = (story, type) => {
    if (type === 'play') {
      navigation.navigate('PlayStory', { storyid });
    } else {
      navigation.navigate('ReadStory', { story });
    }
  };

 return (
  <ScrollView style={styles.container}>
    <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
    {storydata.map((story, index) => (
      <View key={story._id || index}>
        <LinearGradient
          colors={["#01401C", "#01401C", "#00240D", "#00240D"]}
          style={styles.header}
        >
          <Image
            source={
              story.path
                ? { uri: story.path }
                : require("../../../images/musa.png")
            }
            style={styles.storyImage}
            resizeMode="cover"
          />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>{story.title}</Text>
              <Text style={styles.reference}>
                Reference: {story.reference || "Wasil Islamic"}
              </Text>
            </View>
          </View>

         <View style={styles.infoRow}>
  <View style={styles.infoBox}>
    <Text style={styles.infoLabel}>Category</Text>
    <Text style={styles.infoValue}>
      {story.categoryname || "Prophet Stories"}
    </Text>
  </View>

  <View style={styles.divider} />

  <View style={styles.infoBox}>
    <Text style={styles.infoLabel}>Language</Text>
    <Text style={styles.infoValue}>
      {story.language || "English"}
    </Text>
  </View>

</View>

          <View style={styles.btnRow}>

            <TouchableOpacity
              style={styles.listenBtn}
              onPress={() => handleAccess(story, 'play')}
            >
            <IslamicStoryPlayIconSVG />
            <Text style={styles.listenText}>Listen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.readBtn}
              onPress={() => handleAccess(story, 'read')}
            >
            <IslamicStoryReadIconGSVG />
            <Text style={styles.readText}>Read</Text>
            </TouchableOpacity>

            
          </View>

         

          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.description}>
            {story.shortdescription || "No description available"}
          </Text>
        </View>
      </View>
    ))}
  </ScrollView>
);

};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.wasilgreenthemecolor },
  header: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  storyImage: {
    width: 200,
    height: 250,
    borderRadius: 16,
    resizeMode:"contain",
    marginTop: 10,
  },
  content: {
    padding: 15,
  },
  titleRow: {
    top:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.wasilgreenthemecolorfifth,
    fontFamily:"Poppins-Light",
  },
  reference: {
    fontSize: 13,
    color: Colors.white,
    fontFamily:"Poppins-Light",
    marginTop: 2,
  },
  ratingRow: {
    right:100,
    flexDirection: "row",
    marginTop: 46,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.wasilgreenthemecolorfourth,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.white,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  infoBox: {
    flex: 1,
    alignItems: "center",
  },
  infoLabel: {
   fontSize: 15,
    color: Colors.wasilgreenthemecolorfifth,
    fontFamily:"Poppins-Light",
  },
  infoValue: {
    color: Colors.white,
    fontSize: 12,
    textAlign:"center",
    fontWeight: "600",
    marginTop: 3,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    top:20
  },
  listenBtn: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolorfifth,
    marginRight: 8,
    paddingVertical: 12,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listenText: {
    color: Colors.white,
    fontFamily:"Poppins-Light",   
    fontWeight: "600",
    marginLeft: 6,
    top:2
  },
  readBtn: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolorsixth,
    marginLeft: 8,
    paddingVertical: 12,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  readText: {
    color: Colors.black,
    fontWeight: "600",
    fontFamily:"Poppins-Light",   
    marginLeft: 6,
    top:2
  },
  libraryBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#f4c430",
    marginRight: 8,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  libraryText: {
    color: "#f4c430",
    fontWeight: "600",
  },
  wishlistBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 8,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  wishlistText: {
    color: "#666",
    fontWeight: "600",
  },
  descTitle: {
    fontSize: 16,
    fontFamily:"Poppins-Bold",   
    marginTop: 30,
    color:Colors.wasilgreenthemecolorfifth,
  },
  description: {
    fontSize: 16,
    color: Colors.white,
    marginTop: 6,
    fontFamily:"Poppins-Light",
    lineHeight: 20,
  },
  divider: {
  width: 1,
  backgroundColor: '#e0e0e0',
  marginHorizontal: 5,
},
});

export default StoryDetailScreen;
