import React, { useState, useEffect} from "react";
import {useFocusEffect,useRoute} from '@react-navigation/native'
import {View,ScrollView,Text,StyleSheet,Image,FlatList,TouchableOpacity,Dimensions,StatusBar,LogBox,BackHandler,PermissionsAndroid, ImageBackground,Alert,ActivityIndicator} from "react-native";
import moment from "moment";
import { Colors } from "../../theme";
import axios from "axios";
import {FajrHomeSVG,PrayerHomeFajrSVG,DhuhrHomeSVG,PrayerHomeDhuhrSVG,AsrHomeSVG,PrayerHomeAsrSVG,MaghribHomeSVG,PrayerHomeMaghribSVG,EshaHomeSVG,PrayerHomeEshaSVG,QuranSVG,DuaSVG,TasbihSVG,VideoSVG,QiblaSVG,LibrarySVG,PrayerSVG,GreetingsSVG,WudhuSVG,ReelSVG,MosqueSVG,ShahadahSVG,LocationColorSVG,ZilhajjImageSVG} from '../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';
const { width } = Dimensions.get('window');
import Geolocation from "react-native-geolocation-service";
LogBox.ignoreAllLogs(); 
const image = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720693588/home/homebg.png'};


const speakerdata = 
[
  {
    "_id": "65e032ee18120175efff0ec7",
    "speakerName": "Molana Tariq Jameel",
    "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695224/videos/tariq.svg",
    "videoCount": 0,
    "createdAt": "2023-03-12T12:55:28.013Z",
    "updatedAt": "2023-03-12T12:55:28.013Z",
    "__v": 0
},
{
    "_id": "65e032ee18120175efff0ec8",
    "speakerName": "Nouman Ali Khan",
    "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695234/videos/nomanali.svg",
    "videoCount": 0,
    "createdAt": "2023-03-16T11:29:17.902Z",
    "updatedAt": "2023-03-16T11:29:17.902Z",
    "__v": 0
},
{
    "_id": "65e032ee18120175efff0ec9",
    "speakerName": "Mufti Menk",
    "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695228/videos/menk.svg",
    "videoCount": 0,
    "createdAt": "2023-03-16T11:29:17.902Z",
    "updatedAt": "2023-03-16T11:29:17.902Z",
    "__v": 0
},
{
  "_id": "65e032ee18120175efff0eca",
  "speakerName": "Dr. Haifaa Younis",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695213/videos/haifa.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "65e032ee18120175efff0ecb",
  "speakerName": "Tuaha Ibn Jalil",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695239/videos/tauhajalil.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "65e032ee18120175efff0ecc",
  "speakerName": "Muhammad Ali",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1720695231/videos/muhammadali.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "66daa34c6dd3719dc31de486",
  "speakerName": "Muhammad Raza Saqib Mustafai",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1725618681/videos/muhammadrazasaqib.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "66daa34c6dd3719dc31de489",
  "speakerName": "Shuja Uddin Sheikh",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1725618681/videos/shujauddin.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "66daa34c6dd3719dc31de488",
  "speakerName": "Ustadh Wahaj Tarin",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1725618681/videos/udtadhtarin.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
},
{
  "_id": "66daa34c6dd3719dc31de487",
  "speakerName": "Mufti Rasheed",
  "coverImage": "https://res.cloudinary.com/daof5pne5/image/upload/v1725618681/videos/muftirasheed.svg",
  "videoCount": 0,
  "createdAt": "2023-03-16T11:29:17.902Z",
  "updatedAt": "2023-03-16T11:29:17.902Z",
  "__v": 0
}
]
const greetingsdata = 
[
  {
    "_id": "65b8b00f867f6277874b5c2c",
    "name": "Jumma Mubarak",
    "createdAt": "2023-03-15T21:42:34.083Z",
    "updatedAt": "2023-03-15T21:42:34.083Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420870/greetingcards/home/jummahome.png"
  },
  {
    "_id": "65d31eed8d4120c90ef07acb",
    "name": "Thank You",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420861/greetingcards/home/thankyouhome.png"
  },
  {
    "_id": "66792b090100a3585cff8a4a",
    "name": "Congratulations",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420864/greetingcards/home/congratulationhome.png"
  },
  {
    "_id": "66792b090100a3585cff8a4b",
    "name": "Get Well Soon",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420860/greetingcards/home/getwellsoonhome.png"
  },
  {
    "_id": "65d31eed8d4120c90ef07acc",
    "name": "Birthday",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420874/greetingcards/home/birthdayhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2b",
    "name": "Ramadan",
    "createdAt": "2023-03-15T21:43:20.274Z",
    "updatedAt": "2023-03-15T21:43:20.274Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420859/greetingcards/home/ramadanhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2d",
    "name": "Eid ul Fitr",
    "createdAt": "2023-03-15T21:43:44.638Z",
    "updatedAt": "2023-03-15T21:43:44.638Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420867/greetingcards/home/eidulfitrhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2f",
    "name": "Hajj",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420807/greetingcards/home/hajjhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2e",
    "name": "Eid Al Adha",
    "createdAt": "2023-03-15T21:43:32.818Z",
    "updatedAt": "2023-03-15T21:43:32.818Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420865/greetingcards/home/eiduladhahome.png"
  }
]
const getFontSize = () => {
  const screenWidth = width;

  if (screenWidth >= 720) {
    // Large screens
    return 16;
  } else if (screenWidth >= 480) {
    // Medium screens
    return 14;
  } else {
    // Small screens
    return 10; 
  }
};

  const Home = ({ navigation }) => {
    
  var currentDate = moment().format("DD-MM-YYYY");
  var currentDatesimple =  moment().format("dddd, Do MMM YYYY");
  const time = new Date();
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
  const [usermyadsdatatimes, setusermyadsdatatimes] = useState([]);
  const [usermyadsdatahijri, setusermyadsdatahijri] = useState([]);
  const [usermyadsdatamonth, setusermyadsdatamonth] = useState([]);
  const [usermyadsdatadesignation, setusermyadsdatdesignation] = useState([]);
  const [Fajrbgcolor, setFajrbgcolor] = useState(Colors.homeprayericon);
  const [Fajrtextcolor, setFajrtextcolor] = useState(Colors.white);
  const [Fajrtimecolor, setFajrtimecolor] = useState(Colors.white);
  const [Fajricon, setFajricon] = useState(FajrHomeSVG);
  const [Dhuhrbgcolor, setDhuhrbgcolor] = useState(Colors.homeprayericon);
  const [Dhuhrtextcolor, setDhuhrtextcolor] = useState(Colors.white);
  const [Dhuhrtimecolor, setDhuhrtimecolor] = useState(Colors.white);
  const [Dhuhricon, setDhuhricon] = useState(DhuhrHomeSVG);
  const [Asrbgcolor, setAsrbgcolor] = useState(Colors.homeprayericon);
  const [Asrtextcolor, setAsrtextcolor] = useState(Colors.white);
  const [Asrtimecolor, setAsrtimecolor] = useState(Colors.white);
  const [Asricon, setAsricon] = useState(AsrHomeSVG);
  const [Maghribbgcolor, setMaghribbgcolor] = useState(Colors.homeprayericon);
  const [Maghribtextcolor, setMaghribtextcolor] = useState(Colors.white);
  const [Maghribtimecolor, setMaghribtimecolor] = useState(Colors.white);
  const [Maghribicon, setMaghribicon] = useState(MaghribHomeSVG);
  const [Ishabgcolor, setIshabgcolor] = useState(Colors.homeprayericon);
  const [Ishatextcolor, setIshatextcolor] = useState(Colors.white);
  const [Ishatimecolor, setIshatimecolor] = useState(Colors.white);
  const [Ishaicon, setIshaicon] = useState(EshaHomeSVG);
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  const [address, setAddress] = useState(null);
  let watchID = null;
  const [locationStatus, setLocationStatus] = useState('');
  const [duadatamore, setduadatamore] = useState([]);
  const route = useRoute();

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
    
        const timesdata = response.data.data.timings;
        const hijridata = response.data.data.date.hijri;
        const monthdata = response.data.data.date.hijri.month;
        const designationdata = response.data.data.date.hijri.designation;
    
        setusermyadsdatatimes(timesdata);
        setusermyadsdatahijri(hijridata);
        setusermyadsdatamonth(monthdata);
        setusermyadsdatdesignation(designationdata);
        setisLoading(false);
    
        const interval = setInterval(() => {
          const Fajrtime = timesdata.Fajr;
          const Dhurdtime = timesdata.Dhuhr;
          const Asrtime = timesdata.Asr;
          const Maghribtime = timesdata.Maghrib;
          const Ishatime = timesdata.Isha;
    
          if (moment(time).format("HH:mm") === Fajrtime || moment(time).format("HH:mm") < Dhurdtime) {
            setFajrbgcolor(Colors.intermediate);
            setFajrtextcolor(Colors.primary);
            setFajrtimecolor(Colors.primary);
            setFajricon(PrayerHomeFajrSVG);
          } else if (moment(time).format("HH:mm") === Dhurdtime || moment(time).format("HH:mm") < Asrtime) {
            setDhuhrbgcolor(Colors.intermediate);
            setDhuhrtextcolor(Colors.primary);
            setDhuhrtimecolor(Colors.primary);
            setDhuhricon(PrayerHomeDhuhrSVG);
          } else if (moment(time).format("HH:mm") === Asrtime || moment(time).format("HH:mm") < Maghribtime) {
            setAsrbgcolor(Colors.intermediate);
            setAsrtextcolor(Colors.primary);
            setAsrtimecolor(Colors.primary);
            setAsricon(PrayerHomeAsrSVG);
          } else if (moment(time).format("HH:mm") === Maghribtime || moment(time).format("HH:mm") < Ishatime) {
            setMaghribbgcolor(Colors.intermediate);
            setMaghribtextcolor(Colors.primary);
            setMaghribtimecolor(Colors.primary);
            setMaghribicon(PrayerHomeMaghribSVG);
          } else if (moment(time).format("HH:mm") === Ishatime || moment(time).format("HH:mm") < Fajrtime) {
            setIshabgcolor(Colors.intermediate);
            setIshatextcolor(Colors.primary);
            setIshatimecolor(Colors.primary);
            setIshaicon(PrayerHomeEshaSVG);
          }
          else {
            setIshabgcolor(Colors.intermediate);
            setIshatextcolor(Colors.primary);
            setIshatimecolor(Colors.primary);
            setIshaicon(PrayerHomeEshaSVG);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      } catch (error) {
        console.error(error);
        setisLoading(false);
        seterror(true);
      }
    };
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
    fetchDuaData();
    fetchData();
    if (watchID !== null) {
      Geolocation.clearWatch(watchID);
    }
  }, [latitude, longitude]);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Home') {
          Alert.alert('Exit', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [])
  );
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
      <View style={{flex:1,justifyContent:"center",alignItems:"center",color:Colors.primary}}>
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
          setCurrentLatitude("24.860735");
          setCurrentLongitude("67.115903");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (

  <View style={{flexDirection:"column",backgroundColor:Colors.white}}>
    
      <StatusBar backgroundColor={Colors.primary}/>

   <ImageBackground source={image} resizeMode="contain" imageStyle={{top:23,width:"100%"}} style={styles.slidercontainer}>

   <View style={{ flex: 0.3,flexDirection:"row" }}>
     <View style={{flex:1,height: 45,alignItems:"flex-start"}}>
       <Text
         style={{paddingTop:20, paddingLeft:15,fontSize:13,width:300, color:Colors.white, fontFamily:"Raleway"}}>
         {usermyadsdatamonth.en +", "+usermyadsdatahijri.day+" "+usermyadsdatahijri.year+" "+usermyadsdatadesignation.abbreviated}
       </Text>
       <Text style={{paddingLeft:15,fontSize:12, color:Colors.white, fontFamily:"PoppinsLight"}}>{currentDatesimple}</Text>
     </View>
     <TouchableOpacity onPress={requestLocationPermission}>
      <View style={{alignItems:"flex-start",right:25, paddingLeft: 10}}>
         <Text style={{paddingTop:17,fontSize:13,color:Colors.white,fontFamily:"Raleway",left:15}}>
           {address}
        </Text>
       <View style={{bottom:20}}>
         <LocationColorSVG/>
       </View>
     </View>
     </TouchableOpacity>
   </View>

   <View style={{ flex: 1 }}>
   <View style={{ height: 50 ,alignItems:"center",top:23}}>
   <Text
         style={{
           bottom:5,
           fontSize: 25,
           color: Colors.intermediate,
           fontWeight: "500",
           fontFamily: "AlQalamQuran",
         }}>
          ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِين
   </Text>
   <Text
         style={{
           
           top:1,
           fontSize: 13,
           color: Colors.white,
           fontFamily: "Raleway",
         }}>
         All the praises to Allah - Who is Lord of the World.
   </Text>
   </View>
   </View>  
</ImageBackground>
     

      <View style={{height:40,backgroundColor:Colors.white}}></View>

      <ScrollView
        style={styles.maincontainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>

        <View style={{height:10,backgroundColor:Colors.white}}></View>

        <View style={{width:"95%",height:90,flex:1,justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
        <TouchableOpacity style={{flexDirection:"column",flex:1,left:2,height:90,backgroundColor:Colors.bordercolor,borderRadius:10,borderWidth:1,borderColor:Colors.bordercolor}} onPress={() => navigation.navigate("Tasbih")}>
        
            <View style={{height:12}}></View>
        <View style={{flex:1,alignItems:"center"}}>
        <TasbihSVG/>
        </View>
        <View style={{flex:1,alignSelf:"center"}}>
        <Text style={styles.submitTextQuran}>Tasbih</Text>
        </View>
        
           
            </TouchableOpacity>
          
        </View>


        <View style={{height:280}}/>

      </ScrollView>

      <View style={{flex:1,flexDirection:"row",alignSelf:"center",top:165,justifyContent: "space-between",width:"95%",height:80,position:"absolute",borderRadius:10}}>
   
    <View style={{flexDirection:"column",flex:1,right:1,height:80,backgroundColor:Fajrbgcolor,borderRadius:10}}>
      <View style={{height:7}}></View>
    <Text style={{flex:0.8,color:Fajrtextcolor,textAlign:"center",fontSize:13,fontFamily:"Raleway"}}>Fajr</Text>
    <View style={{flex:0.8,alignItems:"center",bottom:3}}>
    {Fajricon}
    </View>
    <View style={{flex:0.7,flexDirection:"row",alignSelf:"center"}}>
    <Text style={{color:Fajrtimecolor,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>{usermyadsdatatimes.Fajr}</Text>
    <Text style={{color:Fajrtimecolor,textAlign:"center",fontSize:12,fontFamily:"Raleway"}}></Text>
    </View>
    
    </View>
    <View style={{flexDirection:"column",flex:1,height:80,backgroundColor:Dhuhrbgcolor,borderRadius:10}}>
      <View style={{height:7}}></View>
      <Text style={{flex:0.8,color:Dhuhrtextcolor,textAlign:"center",fontSize:13,fontFamily:"Raleway"}}>Dhuhr</Text>
    <View style={{flex:0.8,alignItems:"center",bottom:3}}>
    {Dhuhricon}
    </View>
    <View style={{flex:0.7,flexDirection:"row",alignSelf:"center"}}>
    <Text style={{color:Dhuhrtimecolor,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>{usermyadsdatatimes.Dhuhr}</Text>
    <Text style={{color:Dhuhrtimecolor,textAlign:"center",fontSize:12,fontFamily:"Raleway"}}></Text>
    </View>
    
    </View>
    <View style={{flexDirection:"column",flex:1,left:1,height:80,backgroundColor:Asrbgcolor,borderRadius:10}}>
      <View style={{height:7}}></View>
      <Text style={{flex:0.8,color:Asrtextcolor,textAlign:"center",fontSize:13,fontFamily:"Raleway"}}>Asr</Text>
    <View style={{flex:0.8,alignItems:"center",bottom:3}}>
    {Asricon}
    </View>
    <View style={{flex:0.7,flexDirection:"row",alignSelf:"center"}}>
    <Text style={{color:Asrtimecolor,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>{usermyadsdatatimes.Asr}</Text>
    <Text style={{color:Asrtimecolor,textAlign:"center",fontSize:12,fontFamily:"Raleway"}}></Text>
    </View>
    
    </View>
    <View style={{flexDirection:"column",flex:1,left:2,height:80,backgroundColor:Maghribbgcolor,borderRadius:10}}>
      <View style={{height:7}}></View>
      <Text style={{flex:0.8,color:Maghribtextcolor,textAlign:"center",fontSize:13,fontFamily:"Raleway"}}>Maghrib</Text>
    <View style={{flex:0.8,alignItems:"center",bottom:3}}>
    {Maghribicon}
    </View>
    <View style={{flex:0.7,flexDirection:"row",alignSelf:"center"}}>
    <Text style={{color:Maghribtimecolor,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>{usermyadsdatatimes.Maghrib}</Text>
    <Text style={{color:Maghribtimecolor,textAlign:"center",fontSize:12,fontFamily:"Raleway"}}></Text>
    </View>
  
    </View>
    <View style={{flexDirection:"column",flex:1,left:3,height:80,backgroundColor:Ishabgcolor,borderRadius:10}}>
      <View style={{height:7}}></View>
      <Text style={{flex:0.8,color:Ishatextcolor,textAlign:"center",fontSize:13,fontFamily:"Raleway"}}>Isha</Text>
    <View style={{flex:0.8,alignItems:"center",bottom:3}}>
    {Ishaicon}
    </View>
    <View style={{flex:0.7,flexDirection:"row",alignSelf:"center"}}>
    <Text style={{color:Ishatimecolor,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>{usermyadsdatatimes.Isha}</Text>
    <Text style={{color:Ishatimecolor,textAlign:"center",fontSize:12,fontFamily:"Raleway"}}></Text>
    </View>
    </View>

      </View>  

  </View>

  )};
  
  const styles = StyleSheet.create({
  slidercontainer: {
    backgroundColor: Colors.primary,
    height: 210,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center',
  },
  maincontainer: {
    backgroundColor: Colors.white,
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
    fontSize: getFontSize(),
    top: 10,
    color: Colors.secondary,
    textAlign:"center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
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
 
  export default Home;