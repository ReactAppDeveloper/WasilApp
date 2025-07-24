import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,Image,TouchableOpacity ,ScrollView,ImageBackground,LogBox,ActivityIndicator,Text,Dimensions} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios"
import { SvgUri } from 'react-native-svg';
const image = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720695209/videos/speakersbg.png'};
const cardGap = 10;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
LogBox.ignoreAllLogs();

const BySpeakers = ({ navigation }) => { 
  const [speakervideodata, setspeakervideodata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);

  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islamicapp.vercel.app/api/speakers"
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
         <View style={{top:10,alignItems:"center"}}>
            <ScrollView>
               <View>
               <View style={{flexDirection: 'row', flexWrap: "wrap",alignItems:"center",left:9}}>
                   {speakervideodata.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                      navigation.navigate('SpeakersDetail', {
                        speakerid: item._id,
                        speakername:item.speakerName,
                        name:item.speakerName
                      });
                    }}>
                     <ImageBackground source={image} width="100%"style={styles.advImageContainer}>
                    <SvgUri style={styles.advImage} uri={item.coverImage}/>
                    <Text numberOfLines={1} style={{position:"absolute",zIndex:-0.5,top:140,textAlign:"center",textAlignVertical:"center",color:Colors.intermediate,fontWeight:"500",fontFamily:"Raleway",fontSize:12}}>{item.speakerName}</Text>
                  
                 
                    </ImageBackground>
                    
                    </TouchableOpacity>
                    
                   ))}
                    
                    </View>
                </View>
                <View style={{height:30}}></View>
            </ScrollView>
         </View>
    </View>
  );
};


export default BySpeakers;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.transparent
  },
    advImage: {
      width: 250,
      height: 175,
      resizeMode: 'contain',
      zIndex:-1
    },
  advImageContainer: {
    width:cardWidth,
    height:175,
    borderRadius:10,
    borderWidth:1,
    marginTop:5,
    marginLeft:3,
    marginRight:3,
    borderColor:Colors.bordercolor,
  
    flexDirection:'column',
    overflow:"hidden",
    alignItems:"center",
  },
});
