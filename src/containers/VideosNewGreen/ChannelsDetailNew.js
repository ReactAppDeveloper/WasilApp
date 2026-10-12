import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,Image,TouchableOpacity ,ScrollView,LogBox,ActivityIndicator,Text,Platform} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios"
LogBox.ignoreAllLogs();

const ChannelsDetailNew = ({ route,navigation }) => { 
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
        console.log("channel response ==>")
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
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
      
       <View style={{top:5}}>
            <ScrollView>
               <View>
                   <View>
                   {speakervideodata.map((item, index) => (
 <TouchableOpacity key={index}
 onPress={() => {
 navigation.navigate('VideoPlayingNew', {
   videosid: item.videoLink,
   videotitle:item.videoTitle,
   summary:item.summary,
   videochannelname:item.videochannelname
 });
}}>
                       <View key={item}style={{flexDirection:"row",alignSelf:"center",width:"92%",borderRadius:10,borderWidth:1,backgroundColor:Colors.wasilgreenthemecolorsecond,borderColor:Colors.wasilgreenthemecolor,marginTop:10}}>
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
                    <View style={{height:20}}></View>
                </View>
            </ScrollView>
         </View>
    </View>
  );
};

export default ChannelsDetailNew;

const styles = StyleSheet.create({
  submit: {
    backgroundColor: Colors.transparent,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: Colors.wasilnewthemecolorsecond,
    height:25,
    width:70,
    left:5,
    bottom:5
  },
  submitText: {
    fontSize:12,
    flexDirection:"column",
    color: Colors.wasilnewthemecolorsecond,
    alignSelf:'center',
    fontWeight:"500",
    fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
    top:1
  },
  containerMain: {
    backgroundColor:Colors.wasilgreenthemecolor
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

