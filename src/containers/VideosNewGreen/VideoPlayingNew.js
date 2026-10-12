import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  LogBox,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";
import { Colors } from "../../theme";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from "axios";
LogBox.ignoreAllLogs();

const VideoPlayingNew = ({ route, navigation }) => {
  const { videosid, videotitle, summary, videochannelname } = route.params;
  const [speakervideodata, setspeakervideodata] = useState([]);
  const newvideoslink = videosid;
  const array = newvideoslink.split("/");
  const lastvideolink = array[array.length - 1];
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islamicapp.vercel.app/api/videobychannel?videochannelname=" +
            videochannelname
        );
        console.log("video playing response ==>");
        const data = response.data;
        setspeakervideodata(data);
        let index = -1;
        index = data.findIndex((obj) => obj.videoTitle == videotitle);
        if (index == -1) {
          console.log("Data not found!");
        } else {
          console.log("Index is", index);
        }
        delete data[index];
      } catch (e) {
        console.log(e);
      }
      setisLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:Colors.wasilgreenthemecolor}}>
        <ActivityIndicator
          size={"large"}
          color={Colors.white}
        ></ActivityIndicator>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in Fetching Data..... Please Check Your Internet Connection.
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor} />
      <View style={{ width: "100%", alignSelf: "center",backgroundColor: Colors.wasilgreenthemecolor,}} >
        <View style={{ flexDirection: "column",  backgroundColor: Colors.wasilgreenthemecolor, }} >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <YoutubePlayer height={270} play={true} videoId={lastvideolink} />
            </View>
          </View>
        </View>
      </View>
        <ScrollView style={{bottom:20, backgroundColor: Colors.wasilgreenthemecolor,}}>
          <View style={{ marginHorizontal: 10 }}>
          <Text style={{fontSize:18,color:Colors.white,fontFamily:"Poppins-Bold"}}>
             {videotitle}
            </Text>
            <Text numberOfLines={2} style={{fontSize:12,color:Colors.white,fontWeight:"500",fontFamily:"Poppins-Regular"}}>
              {summary}
            </Text>
          </View>

          <Text style={{top:10,fontSize:20,color:Colors.white,left:10,fontFamily:"Poppins-Bold"}}>
            More Videos
          </Text>
          <View style={{flex:1}}>
           
              {speakervideodata.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("VideoPlayingNew", {
                      videosid: item.videoLink,
                      videotitle: item.videoTitle,
                      summary: item.summary,
                      videochannelname: item.videochannelname,
                    });
                  }}
                >
                   <View key={item}style={{flexDirection:"row",alignSelf:"center",width:"92%",borderRadius:10,borderWidth:1,backgroundColor:Colors.wasilgreenthemecolorsecond,borderColor:Colors.wasilgreenthemecolorsecond,marginTop:10}}>
                        <View>
                        <View style={styles.advImageContainer}>
                        <Image style={styles.advImage}
                         source={{uri:item.thumbnail}}/>
                        </View>
                        </View>
                        <View style={{flex:1,left:5}}>
                        <Text numberOfLines={2} style={{flex:1,top:6,fontSize:15,width:"90%",color:Colors.white,fontWeight:"500",fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway'}}>{item.videoTitle}</Text>
                        <Text numberOfLines={3} style={{flex:1,top:1,fontSize:10,width:"90%",color:Colors.white,fontWeight:"500",fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway'}}>{item.summary}</Text>                 
                        </View>
                        </View>
                </TouchableOpacity>
              ))}
            
          </View>
          <View style={{ height: 270 }}></View>
        </ScrollView>
        </View>
  );
};

export default VideoPlayingNew;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: Colors.wasilgreenthemecolor,
  },
  advImage: {
    flex:1,
    resizeMode:"contain",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    right:2
  },
  advImageContainer: {
    width:180,
    height:100,
  },
});
