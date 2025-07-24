import React, { useState, useEffect,useRef} from "react";
import {View,ScrollView,Text,StyleSheet,FlatList,Animated,TouchableOpacity,Dimensions,StatusBar,LogBox,PermissionsAndroid,ActivityIndicator, ImageBackground} from "react-native";
import moment from "moment";
import { Colors } from "../../theme";
import axios from "axios";
import {RamadanSVG,RamadanStarSVG,RamadanCalenderSVG,RamadanVideosSVG,RamadanGreetingsSVG,LocationColorSVG} from '../../assets/icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('window');
import Geolocation from "react-native-geolocation-service";
import RamadanItem from "../Ramadan/RamadanItem";
import slideshome from "../Ramadan/slideshome";
import RamadanPaginator from "../Ramadan/RamadanPaginator";
import SehriDua from "./SehriDua"
import IftarDua from "./IftarDua"
LogBox.ignoreAllLogs(); 
const image = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1736330314/ramadanbg.png'};

  const RamadanHome = ({ navigation }) => {
  var currentDate = moment().format("DD-MM-YYYY");
  var currentDatesimple =  moment().format("dddd, Do MMM YYYY");
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
  const [usermyadsdatahijri, setusermyadsdatahijri] = useState([]);
  const [usermyadsdatamonth, setusermyadsdatamonth] = useState([]); 
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  const [address, setAddress] = useState(null);
  let watchID = null;
  const [locationStatus, setLocationStatus] = useState('');
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
   const [duadatamore, setduadatamore] = useState([]);
   const [ramadaatime, setramadaatime] = useState([]);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
      if (viewableItems.length > 0) {
          setCurrentIndex(viewableItems[0].index); // Update current index
      }
  }).current;

  const viewConfig = useRef({
      viewAreaCoveragePercentThreshold: 50,
  }).current;

  useEffect(() => {  
    const fetchData = async () => {
      try {
        const storedLatitude = await AsyncStorage.getItem('ONLATI');
        const storedLongitude = await AsyncStorage.getItem('ONLONGI');
        
        if (storedLatitude && storedLongitude) {
          setlatitude(storedLatitude);
          setlongitude(storedLongitude);
        }
    
        setisLoading(true);
        const latitudeValue = storedLatitude || 24.860735;
        const longitudeValue = storedLongitude || 67.001137;
    
        try {
          const response = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.9c1fc2948e48c019aee6f13b6a961796&lat=${latitudeValue}&lon=${longitudeValue}&format=json`);
          
          if (!response.ok) {
            // Log the error response for debugging
            const errorText = await response.text();
            console.error("Error fetching address:", errorText);
            throw new Error("Failed to fetch address.");
          }
    
          const data = await response.json();
          setAddress(data.address.state);
        } catch (error) {
          console.error("Error fetching address:", error);
        }
    
        const response = await axios.get(
          `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitudeValue}&longitude=${longitudeValue}&school=1`
        );
        const hijridata = response.data.data.date.hijri;
        const monthdata = response.data.data.date.hijri.month;
        setusermyadsdatahijri(hijridata);
        setusermyadsdatamonth(monthdata);
        setisLoading(false);
      } catch (error) {
        console.error(error);
        setisLoading(false);
        seterror(true);
      }
    }
    const fetchDuaData = async () => {
      try {
        const response = await axios.get("https://islamicapp.vercel.app/api/ramadandata")
        console.log("received response")
        const databismillah = response.data;
        setduadatamore(databismillah);
      } 
      catch (error) 
      {
        console.log(error)
      }   
    }
    const fetchTimeData = async () => {
      try {
        const response = await axios.get("https://islamicapp.vercel.app/api/ramadantime")
        console.log("received response")
        const databismillah = response.data;
        setramadaatime(databismillah);
      } 
      catch (error) 
      {
        console.log(error)
      }   
    }
    fetchData();
    fetchDuaData();
    fetchTimeData();
    if (watchID !== null) {
      Geolocation.clearWatch(watchID);
    }
  }, [latitude, longitude]);

useEffect(() => {
  const interval = setInterval(() => {
      if (slidesRef.current) {
          let nextIndex = currentIndex + 1;
          if (nextIndex >= slideshome.length) {
              nextIndex = 0;
          }
          slidesRef.current.scrollToOffset({
              offset: nextIndex * width,
              animated: true,
          });
          setCurrentIndex(nextIndex);
      }
  }, 5000);
  return () => clearInterval(interval);
}, [currentIndex]);

  if(isLoading){  
    return(
      
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <StatusBar backgroundColor={Colors.primary} />
      <ActivityIndicator size={"large"} color={Colors.primary}>

      </ActivityIndicator>
      </View>
    );
  }

  if(error){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
          Fetching Your Location Interrupt.....
        </Text>
      </View>
    );
  }

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setlatitude(currentLongitude);
        setlongitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setlatitude(currentLongitude);
        setlongitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
      subscribeLocationLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
          setlatitude("24.860735");
          setlongitude("67.115903");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (

    <View style={{flexDirection:"column",backgroundColor:Colors.white,overflow:"hidden",flex:1}}>
      
        <StatusBar backgroundColor={Colors.primary}/>
  
     <View style={styles.slidercontainer}>
  
     <View style={{ flex: 0.7,flexDirection:"row" }}>
       <View style={{flex:1,height: 45,alignItems:"flex-start"}}>
       <Text
           style={{paddingTop:15, paddingLeft:15,fontSize:14,width:300, color:Colors.white, fontFamily:"Poppins-SemiBold"}}>
           Today's
         </Text>
         <Text
           style={{paddingLeft:15,bottom:3,fontSize:18,width:300, color:Colors.intermediate, fontFamily:"Poppins-Light"}}>
          {usermyadsdatahijri.day +" "+usermyadsdatamonth.en}
         </Text>
         <Text style={{paddingLeft:15,bottom:5,fontSize:12,color:Colors.white,fontFamily:"Poppins-Regular"}}>{currentDatesimple}</Text>
         <TouchableOpacity onPress={requestLocationPermission}>
        <View>
           
         <View style={{left:15,flexDirection:"row"}}>
           <LocationColorSVG/>
           <Text style={{fontSize:13,bottom:4,left:5,color:Colors.white,fontFamily:"Raleway"}}>
           {address}
          </Text>
         </View>
       </View>
       </TouchableOpacity>
       </View>
        <View style={{alignItems:"flex-start",right:5}}>
        <RamadanSVG/>
       </View>
      
     </View>
     <View style={{ flex: 1}}>
        <FlatList
                     data={ramadaatime}
                     renderItem={({ item }) => <RamadanItem item={item} />}
                     horizontal
                     pagingEnabled
                     bounces={false}
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(item) => item.id}
                     onScroll={Animated.event(
                         [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                         { useNativeDriver: false }
                     )}
                     scrollEventThrottle={32}
                     onViewableItemsChanged={viewableItemsChanged}
                     viewabilityConfig={viewConfig}
                     ref={slidesRef}
                    
                 />
                 
        </View>  
        <RamadanPaginator data={slideshome} scrollx={scrollx} />
  
     </View>
  
  <ScrollView>
     <View style={{height:250,top:10,width:"94%",alignSelf:"center",flexDirection:"row"}}>
  
     <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.intermediate,
        tabBarInactiveTintColor:Colors.primary,
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 15,        
          textTransform:"capitalize",
          fontFamily:"Poppins-Regular"
        },
        tabBarIndicatorStyle: {
          borderBottomColor: Colors.intermediate,
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen
        name="Sehri Dua"
        component={SehriDua}
        options={{
          tabBarLabel: 'Sehri Dua',
        }}  />
         <Tab.Screen
        name="Iftari Dua"
        component={IftarDua}
        options={{
          tabBarLabel: 'Iftari Dua',
        }} />
     
    </Tab.Navigator>
  
    
  
     </View>
  
  <View style={{width:"92%",height:55,flex:1,top:10,justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
  <TouchableOpacity style={{flexDirection:"row",flex:1,height:55,right:5,backgroundColor:Colors.bordercolor,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor}}onPress={() => navigation.navigate("AboutMain")}>
                      
                       <View style={{height:12}}></View>
                       <View style={{top:8,left:10}}>
                       <RamadanStarSVG/>
                       </View>
                       <View style={{left:20,justifyContent:"center"}}>
                       <Text style={styles.submitTextQuran}>About{'\n'}Ramadan</Text>
                     
                       </View>
      
                     
  </TouchableOpacity>
  <TouchableOpacity style={{flexDirection:"row",flex:1,left:5,height:55,backgroundColor:Colors.bordercolor,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor}}onPress={() => navigation.navigate("RamadanCalendarHome")}>
               
                       <View style={{height:12}}></View>
                       <View style={{top:8,left:10}}>
                       <RamadanCalenderSVG/>
                       </View>
                       <View style={{left:25,justifyContent:"center"}}>
                       <Text style={styles.submitTextQuran}>Ramadan{'\n'}Calendar</Text>
                     
                     
                      </View>
  </TouchableOpacity>
  </View>
  
   <View style={{width:"92%",height:55,flex:1,top:20,justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                      <TouchableOpacity style={{flexDirection:"row",flex:1,height:55,right:5,backgroundColor:Colors.bordercolor,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor}}onPress={() => navigation.navigate("RamadanVideosMain")}>
                       <View style={{height:12}}></View>
                       <View style={{top:11,left:10}}>
                       <RamadanVideosSVG/>
                       </View>
                       <View style={{left:20,justifyContent:"center"}}>
                       <Text style={styles.submitTextQuran}>Ramadan{'\n'}Videos</Text>
                     
                       </View>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flexDirection:"row",flex:1,height:55,left:5,backgroundColor:Colors.bordercolor,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor}}onPress={() => navigation.navigate("RamadanGreetingsMain")}>
                     
                       <View style={{height:12}}></View>
                       <View style={{top:9,left:10}}>
                       <RamadanGreetingsSVG/>
                       </View>
                       <View style={{left:20,justifyContent:"center"}}>
                       <Text style={styles.submitTextQuran}>Ramadan{'\n'}Greetings</Text>
                     
                       </View>
               
                      </TouchableOpacity>
   </View>
   {duadatamore.map((item, index) => (
  <View style={{width:"95%",height:200,top:40,alignSelf:"center",borderRadius:10,backgroundColor:Colors.transparent}}>
     <View style={{flex:0.5}}>
     <Text style={{color:Colors.intermediate,fontSize:20,fontFamily:"Poppins-SemiBold",top:18,left:15}}>{item.ramadanduaeglish}</Text>
     <View style={{backgroundColor:Colors.bordercolor,height: 0.6,marginLeft:10,top:30,marginRight:10}}/>
     </View>
     <View style={{flex:1}}>
     <Text style={{top:35,color:Colors.primary,fontSize:25,textAlign:"center",fontWeight:"500",fontFamily:"AlQalamQuran"}}>
     {item.ramadanduaarabic}
     </Text>
     </View>
     <View style={{flex:1}}>
     <Text style={{color:Colors.secondary,textAlign:"center",width:"95%",top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
      {item.ramadanduatranslation}
     </Text>
     </View>
  </View>
   ))}
   <ImageBackground source={image} imageStyle={{width:"100%",borderRadius:10}}style={{width:"95%",height:250,top:60,alignSelf:"center",borderRadius:10,backgroundColor:Colors.transparent}}>
     <View style={{flex:0.5,flexDirection:"row"}}>
     <View style={{flex:0.5}}>
     <Text style={{color:Colors.intermediate,fontSize:20,fontFamily:"Poppins-SemiBold",top:10,left:15}}>Daily Duas</Text>
     </View>
     <TouchableOpacity onPress={() => navigation.navigate("RamadanAllDua")}>
     <View style={{flex:0.5,left:140}}>
     <Text style={{borderRadius:5,width:80,height:25,textAlign:"center",paddingTop:1,backgroundColor:"#AB47BC",color:Colors.white,fontSize:15,fontFamily:"Poppins-Light",top:13}}>
      View All
      </Text>
     </View>
     </TouchableOpacity>
     </View>
     <View style={{backgroundColor:Colors.bordercolor,height: 0.6,marginLeft:10,top:2,marginRight:10}}/>
     <View style={{flex:1}}>
     <Text style={{top:10,color:Colors.white,fontSize:25,textAlign:"center",fontWeight:"500",fontFamily:"AlQalamQuran"}}>
     فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ   
     </Text>
     </View>
     <View style={{flex:1,alignItems:"center"}}>
     <Text style={{color:Colors.intermediate,textAlign:"center",top:15,fontSize:13,fontFamily:"PoppinsLight"}}>
     Eating is an essential part of our life. We need enough nutrients to live and for our development and growth. Islam is so holistic that it also addresses matters pertaining to the kinds of food
     </Text>
     </View>
   </ImageBackground>
  
  <View style={{height:80}}></View>
  
  </ScrollView>  
  
  </View>
  
    )};
  
  const styles = StyleSheet.create({
    slidercontainer: {
      backgroundColor: Colors.primary,
      height: 230,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      justifyContent: 'center',
    },
    maincontainer: {
      backgroundColor: Colors.white,
      overflow:"hidden"
    },
    submit: {
      margin:5, 
      backgroundColor: Colors.bordercolor,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.bordercolor,
      opacity: 10,
      shadowOpacity: 20,
      height: 90,
      width: 90,
    },
    submitText: {
      fontSize: 12,
      color: Colors.secondary,
      top: 22,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Raleway",
    },
    submitTextQuran: {
      fontSize: 14,
      top: 2,
      color: Colors.secondary,
      left:5,
      fontFamily: "Raleway",
    },
    submitTextQuran1: {
      fontSize: 10,
      color: Colors.intermediate,
      left:12,
      bottom:4,
      fontFamily: "Raleway",
    },
    advTextRow: {
      height: 35,
      width: "80%",
      flexDirection: "row",
    },
    advTextFontStyle: {
      fontSize: 18,
      top:7,
      color: Colors.secondary,
      fontWeight:"600",
      fontFamily: "heading",
    },
    advImage: {
      flex:1,
      width: 140,
      height: 150,
      resizeMode:"contain",
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    
    });
 
  export default RamadanHome;