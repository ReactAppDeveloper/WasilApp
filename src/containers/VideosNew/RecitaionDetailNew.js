import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,ActivityIndicator,Image,TouchableOpacity ,ScrollView,LogBox,Text,Dimensions,Platform} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios"
const cardGap = 10;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
LogBox.ignoreAllLogs();

const RecitaionDetailNew = ({ route,navigation }) => { 
  const {channelname} = route.params;
  const [speakervideodata, setspeakervideodata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
  useEffect(() => {
    
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islamicapp.vercel.app/api/videobychannel?videochannelname="+channelname,
        )
        console.log("video channel response ==>")
        const data = response.data
        setspeakervideodata(data)
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
    }
    fetchData()
  }, [])

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size={"large"} color={Colors.wasilnewthemecolorsecond}>

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
  return (
   
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.intermediate1}/>  
         <View>
            <ScrollView>
               <View>
               <View style={{flexDirection: 'row', flexWrap: 'wrap',alignSelf:"center",justifyContent:"center",backgroundColor:Colors.intermediate1}}>
                   {speakervideodata.map((item, index) => (    
                      <TouchableOpacity key={index} 
                      onPress={() => {
                        navigation.navigate('VideoPlayingNew', {
                          videosid: item.videoLink,
                          videotitle:item.videoTitle,
                          summary:item.summary,
                          videochannelname:item.videochannelname});}}>
                              <View key={item} style={styles.advImageContainer}>
                              <Image style={styles.advImage} source={{uri:item.thumbnail}}/>
                              <View style={{backgroundColor:Colors.primary}}>
                              <Text numberOfLines={1} style={{left:5,bottom:33,fontSize:12,width:"95%",color:Colors.white,fontWeight:"500",fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway'}}>{item.videoTitle}</Text>
                        <Text numberOfLines={2} style={{left:5,bottom:30,fontSize:8,width:"95%",color:Colors.white,fontWeight:"500",fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway'}}>{item.summary}</Text>                 
                              </View>
                              </View>
                      </TouchableOpacity>
                    
                   ))}
                  
                    </View>
                    <View style={{height:20}}></View> 
                </View>
            </ScrollView>
         </View>
       
    </View>
  );
};

export default RecitaionDetailNew;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 80,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Colors.intermediate1,
  },
  advImageContainer: {
    width:cardWidth,
    height:160,
    borderRadius:10,
    borderWidth:1,
    marginTop:10,
    margin:5,
    backgroundColor: Colors.primary,
    borderColor:Colors.primary,
    flexDirection:'column',
    overflow:"hidden",
  },
  advImage: {
    width: 180,
    bottom:20,
    height: 140,
    resizeMode:"contain",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    paddingBottom:10,
  },
});
