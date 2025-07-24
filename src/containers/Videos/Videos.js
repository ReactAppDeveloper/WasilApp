import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,TouchableOpacity ,Dimensions,ScrollView,LogBox,ActivityIndicator,Text,ImageBackground} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios"
import { SvgUri } from 'react-native-svg';
LogBox.ignoreAllLogs();
const {width,height} = Dimensions.get('window');
const Videos = ({ navigation }) => { 
  const [speakervideodata, setspeakervideodata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);

  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islamicapp.vercel.app/api/videochannels"
        )
        console.log("received response")
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
      <ActivityIndicator size={"large"} color={Colors.primary}>

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
       <StatusBar backgroundColor={Colors.primary}/>
      
       <View style={{top:5}}>
            <ScrollView>
               <View>
                   <View>
                   {speakervideodata.map((item, index) => (
 <TouchableOpacity key={index}
 onPress={() => {
  if(item.videochannelname === "Durs and Podcast")
    {
      navigation.navigate('BySpeakers');
    }
    else if(item.videochannelname === "Recitation")
    {
      navigation.navigate('RecitaionDetail', {
        channelname:item.videochannelname,
        name:item.videochannelname
      });
    }
    else{
      navigation.navigate('ChannelsDetail', {
      channelname:item.videochannelname,
      name:item.videochannelname
    });
    }
  }}>
                        <View key={item} style={{flexDirection:"row",alignSelf:"center",width:"92%",height:130,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor,marginTop:10,marginLeft:10,marginRight:10}}>
                        <View style={{flex:1,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                        <ImageBackground source={{uri: item.videochannelbg}} style={styles.advImageContainer}>
                           <View style={{height:25}}></View>
                           <SvgUri uri={item.videochannelimage} style={styles.advImage}/>
                        </ImageBackground>
                        </View>
                        <View style={{flex:1,left:5}}>
                        <Text numberOfLines={1} style={{flex:0.5,top:8,left:10,fontSize:18,width:"90%",color:Colors.primary,fontFamily:"PoppinsLight"}}>{item.videochannelname}</Text>
                        <Text numberOfLines={6}style={{flex:1,left:10,fontSize:9,width:"85%",color:Colors.secondary,fontFamily:"Raleway"}}>{item.channeldescription}</Text>                 
                        
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

export default Videos;

const styles = StyleSheet.create({
  submit: {
    backgroundColor: Colors.transparent,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    height:25,
    width:70,
    left:5,
    bottom:5
  },
  submitText: {
    fontSize:12,
    flexDirection:"column",
    color: Colors.primary,
    alignSelf:'center',
    fontWeight:"500",
    fontFamily:"Raleway",
    top:1
  },
  advImage: {
    flex:1,
    resizeMode:"contain",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  advImageContainer: {
    width:width*0.5,
    height:130,
    borderRadius:10,
    borderColor:Colors.bordercolor,
    flexDirection:'column',
    alignItems:"center",
    backgroundColor:Colors.primary,
    overflow: 'hidden',
    resizeMode:"contain",
    alignSelf:"center"
  },
});
