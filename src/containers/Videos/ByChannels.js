import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,TouchableOpacity ,ScrollView,Dimensions,LogBox,ActivityIndicator,Text} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios";
import { SvgUri } from 'react-native-svg';
LogBox.ignoreAllLogs();
const cardGap = 12;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
const ByChannels = ({ navigation }) => { 
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
               <View style={{flexDirection: 'row', flexWrap: "wrap",alignItems:"center",left:12}}>
                   {speakervideodata.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                      navigation.navigate('ChannelsDetail', {
                        channelname:item.videochannelname,
                        name:item.videochannelname
                      });
                    }}>

                     <View key={item} style={styles.advImageContainer}>
                      <View style={{height:30}}></View>
                      <SvgUri style={styles.advImage} uri={item.videochannelimage}/>
                      <View style={{alignSelf:"center",width:120,height:50,backgroundColor:Colors.white,top:5}}>
                      <Text numberOfLines={1}style={{textAlign:"center",top:5,textAlignVertical:"center",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway",fontSize:12}}>{item.videochannelname}</Text>
                  
                    </View>
                    </View>
                        <View style={{height:1}}></View>
                    </TouchableOpacity>
                    
                   ))}
              
                    </View>
                </View>
            </ScrollView>
         </View>
    </View>
  );
};

export default ByChannels;

const styles = StyleSheet.create({
  containerMain: {
    height:"100%",
    backgroundColor:Colors.transparent
  },
  advImage: {
    resizeMode:"cover",
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  advImageContainer: {
    width:cardWidth,
    height:150,
    borderRadius:10,
    borderWidth:1,
    marginTop:10,
    marginLeft:3,
    marginRight:3,
    borderColor:Colors.bordercolor,
    flexDirection:'column',
    alignItems:"center",
    backgroundColor:Colors.white,
    overflow: 'hidden',
  },
});
