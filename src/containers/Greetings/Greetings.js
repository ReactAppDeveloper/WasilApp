import React,{ useState, useEffect } from 'react';
import {  StatusBar, StyleSheet,View,ActivityIndicator,Image,TouchableOpacity ,ImageBackground,Dimensions,ScrollView,LogBox,Text} from 'react-native';
import { Colors} from '../../theme';
import axios from "axios"
const {width,height} = Dimensions.get('window');
const imagebanner = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733722886/homebanner.png'};
LogBox.ignoreAllLogs();

const Greetings = ({ navigation }) => { 
  const [usermyadsdata, setusermyadsdata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
  useEffect(() => {
    let isMounted = true; // Track if the component is mounted
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islamicapp.vercel.app/api/categories"
        );
        console.log("Received response");

        if (isMounted) {
          setusermyadsdata(response.data);
        }
      } catch (e) {
        console.error("Error fetching data", e);
        if (isMounted) {
          seterror("Failed to load data");
        }
      } finally {
        if (isMounted) {
          setisLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
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
         <View style={{top:2}}>
            <ScrollView>
               <View>
               <View style={{flexDirection: 'row', flexWrap: 'wrap',alignSelf:"center",justifyContent:"center"}}>
                   {usermyadsdata.map((item, index) => (    
                      <TouchableOpacity key={index} onPress={() => {
                                navigation.navigate('GreetingCardList', {
                                  cardid: item._id,
                                  categoryname:item.name,
                                  name:item.name})}}>
                                  <View key={item} style={styles.advImageContainer}>
                                  <Image style={styles.advImage} source={{uri:item.image}}/>
                                  <View style={{alignSelf:"center",width:width*0.42,height:40,backgroundColor:Colors.white}}>
                              <Text numberOfLines={1}style={{textAlign:"center",top:9,textAlignVertical:"center",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway",fontSize:15}}>{item.name}</Text>
                              </View>
                              </View>
                      </TouchableOpacity>
                    
                   ))}
                   
                  
                    </View>
                   
        <View style={{height:30}}></View> 
              </View>

              
              <View style={{alignSelf:"center",flex:1,bottom:10}}>
     
     <ImageBackground source={imagebanner} resizeMode="contain" style={styles.slidercontainertwo}>
     </ImageBackground>
   
     </View>
          </ScrollView>
        </View>
       
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 80,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center", 
    minHeight: "100%",
  },
  advImageContainer: {
    width:width*0.42,
    height:220,
    borderRadius:5,
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    borderColor:Colors.bordercolor,
    flexDirection:'column',
    overflow:"hidden",
    backgroundColor:Colors.white
  },
  advImage: {
    width:width*0.42,
    height: 180,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  slidercontainertwo: {
    width:width*0.94,
    height: 150,
    alignSelf:"center"
  },
});
