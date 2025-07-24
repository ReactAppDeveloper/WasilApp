import React, { useState, useEffect} from "react";
import {View,ScrollView,Text,StyleSheet,TouchableOpacity,StatusBar,LogBox,ImageBackground,ActivityIndicator,Switch,NativeModules} from "react-native";
import moment from "moment";
import { Colors } from "../../../theme";
import axios from "axios";
import {PrayerHomeFajrSVG,PrayerHomeDhuhrSVG,PrayerHomeAsrSVG,PrayerHomeMaghribSVG,PrayerHomeEshaSVG,DuaForwardSVG,DuaCollapseSVG,FajrHomeSVG,DhuhrHomeSVG,AsrHomeSVG,MaghribHomeSVG,EshaHomeSVG,LocationColorSVG} from '../../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from "react-native-geolocation-service";
const { AzanScheduler } = NativeModules;
const TEST_MODE = false; // Production mode
LogBox.ignoreAllLogs(); 
const image = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720693588/home/homebg.png'};

  const PrayerGuide = ({ navigation }) => {
    
    const [showComponmentFajr, setshowComponmentFajr] = useState(false);
    const [showComponmentFajrArrowU, setshowComponmentFajrArrowU] = useState(true);
    const [showComponmentFajrArrowD, setshowComponmentFajrArrowD] = useState(false);
    const [showComponmentFajrbgcolor, setshowComponmentFajrbgcolor] = useState(Colors.white);
    const [Fajrtogglebgcolor, setFajrogglebgcolor] = useState(Colors.white);
  
    const [showComponmentDhuhr, setshowComponmentDhuhr] = useState(false);
    const [showComponmentDhuhrArrowU, setshowComponmentDhuhrArrowU] = useState(true);
    const [showComponmentDhuhrArrowD, setshowComponmentDhuhrArrowD] = useState(false);
    const [showComponmentDhuhrbgcolor, setshowComponmentDhuhrbgcolor] = useState(Colors.white);
    const [Dhuhrtogglebgcolor, setDhuhrogglebgcolor] = useState(Colors.white);
  
    const [showComponmentAsr, setshowComponmentAsr] = useState(false);
    const [showComponmentAsrArrowU, setshowComponmentAsrArrowU] = useState(true);
    const [showComponmentAsrArrowD, setshowComponmentAsrArrowD] = useState(false);
    const [showComponmentAsrbgcolor, setshowComponmentAsrbgcolor] = useState(Colors.white);
    const [Asrtogglebgcolor, setAsrogglebgcolor] = useState(Colors.white);
  
    const [showComponmentMaghrib, setshowComponmentMaghrib] = useState(false);
    const [showComponmentMaghribArrowU, setshowComponmentMaghribArrowU] = useState(true);
    const [showComponmentMaghribArrowD, setshowComponmentMaghribArrowD] = useState(false);
    const [showComponmentMaghribbgcolor, setshowComponmentMaghribbgcolor] = useState(Colors.white);
     const [Maghribtogglebgcolor, setMaghribogglebgcolor] = useState(Colors.white);
  
    const [showComponmentEsha, setshowComponmentEsha] = useState(false);
    const [showComponmentEshaArrowU, setshowComponmentEshaArrowU] = useState(true);
    const [showComponmentEshaArrowD, setshowComponmentEshaArrowD] = useState(false);
    const [showComponmentEshabgcolor, setshowComponmentEshabgcolor] = useState(Colors.white);
    const [Eshatogglebgcolor, setEshaogglebgcolor] = useState(Colors.white);


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
  const [timings, setTimings] = useState(null);

  const [prayerToggles, setPrayerToggles] = useState({
    Fajr: true,
    Dhuhr: true,
    Asr: true,
    Maghrib: true,
    Isha: true,
  });

  const scheduleAzans = (timings, toggles) => {
    const today = moment().format("YYYY-MM-DD");

    Object.entries(timings).forEach(([prayer, timeStr]) => {
      if (!toggles[prayer]) return;

      const raw = `${today} ${timeStr}:00`;
      const target = moment(raw, "YYYY-MM-DD HH:mm:ss");

      if (target.isBefore(moment())) {
        target.add(1, 'day');
      }

      const fullTime = target.format("YYYY-MM-DD HH:mm:ss");
      AzanScheduler.scheduleAzan(prayer, fullTime);
      AzanScheduler.savePrayerTime?.(prayer, fullTime);
      console.log(`📅 Scheduled ${prayer} at ${fullTime}`);
    });
  };

  
  const fetchTimings = async () => {
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
    
        const response = await axios.get(
          `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitudeValue}&longitude=${longitudeValue}&school=1`
        );
       setTimings(response.data.data.timings);
      } catch (error) {
       console.error('❌ Failed to fetch timings:', err);
      }
  };

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

  const loadPrayerToggles = async () => {
    try {
      const stored = await AsyncStorage.getItem('azan_prayer_toggles');
      if (stored) {
        const parsed = JSON.parse(stored);
        setPrayerToggles(parsed);
      }
    } catch (err) {
      console.error("⚠️ Failed to load toggles:", err);
    }
  };
  const togglePrayerAzan = async (prayer, value) => {
    const updatedToggles = { ...prayerToggles, [prayer]: value };
    setPrayerToggles(updatedToggles);
    await AsyncStorage.setItem('azan_prayer_toggles', JSON.stringify(updatedToggles));

    console.log(`🔁 Toggle ${prayer} to ${value}`);
    AzanScheduler.cancelAzan?.(prayer);
    console.log(`❌ Canceled ${prayer} azan`);

    if (value && timings) {
      const today = moment().format("YYYY-MM-DD");
      const rawTime = timings[prayer]; // e.g., "13:10"
      const target = moment(`${today} ${rawTime}:00`, "YYYY-MM-DD HH:mm:ss");

      if (target.isBefore(moment())) {
        target.add(1, 'day');
      }

      const fullTime = target.format("YYYY-MM-DD HH:mm:ss");
      AzanScheduler.scheduleAzan(prayer, fullTime);
      AzanScheduler.savePrayerTime?.(prayer, fullTime);
      console.log(`✅ Rescheduled ${prayer} for ${fullTime}`);
    }
  };

  useEffect(() => {
    const init = async () => {
      await loadPrayerToggles();
      await fetchTimings();
    };
    init();
  }, []);
  
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
            setshowComponmentFajr(true);
            setshowComponmentFajrArrowD(true);
            setshowComponmentFajrArrowU(false);
            setshowComponmentFajrbgcolor(Colors.prayercolor);
            setFajrogglebgcolor(Colors.prayercolor);
          } else if (moment(time).format("HH:mm") === Dhurdtime || moment(time).format("HH:mm") < Asrtime) {
            setDhuhrbgcolor(Colors.intermediate);
            setDhuhrtextcolor(Colors.primary);
            setDhuhrtimecolor(Colors.primary);
            setDhuhricon(PrayerHomeDhuhrSVG);
            setshowComponmentDhuhr(true);
            setshowComponmentDhuhrArrowD(true);
            setshowComponmentDhuhrArrowU(false);
            setshowComponmentDhuhrbgcolor(Colors.prayercolor);
            setDhuhrogglebgcolor(Colors.prayercolor);
          } else if (moment(time).format("HH:mm") === Asrtime || moment(time).format("HH:mm") < Maghribtime) {
            setAsrbgcolor(Colors.intermediate);
            setAsrtextcolor(Colors.primary);
            setAsrtimecolor(Colors.primary);
            setAsricon(PrayerHomeAsrSVG);
            setshowComponmentAsr(true);
            setshowComponmentAsrArrowD(true);
            setshowComponmentAsrArrowU(false);
            setshowComponmentAsrbgcolor(Colors.prayercolor);
            setAsrogglebgcolor(Colors.prayercolor);
          } else if (moment(time).format("HH:mm") === Maghribtime || moment(time).format("HH:mm") < Ishatime) {
            setMaghribbgcolor(Colors.intermediate);
            setMaghribtextcolor(Colors.primary);
            setMaghribtimecolor(Colors.primary);
            setMaghribicon(PrayerHomeMaghribSVG);
            setshowComponmentMaghrib(true);
            setshowComponmentMaghribArrowD(true);
            setshowComponmentMaghribArrowU(false);
            setshowComponmentMaghribbgcolor(Colors.prayercolor);
            setMaghribogglebgcolor(Colors.prayercolor);
          } else if (moment(time).format("HH:mm") === Ishatime || moment(time).format("HH:mm") < Fajrtime) {
            setIshabgcolor(Colors.intermediate);
            setIshatextcolor(Colors.primary);
            setIshatimecolor(Colors.primary);
            setIshaicon(PrayerHomeEshaSVG);
            setshowComponmentEsha(true);
            setshowComponmentEshaArrowD(true);
            setshowComponmentEshaArrowU(false);
            setshowComponmentEshabgcolor(Colors.prayercolor);
            setEshaogglebgcolor(Colors.prayercolor);
          }
          else {
            setIshabgcolor(Colors.intermediate);
            setIshatextcolor(Colors.primary);
            setIshatimecolor(Colors.primary);
            setIshaicon(PrayerHomeEshaSVG);
            setshowComponmentEsha(true);
            setshowComponmentEshaArrowD(true);
            setshowComponmentEshaArrowU(false);
            setshowComponmentEshabgcolor(Colors.prayercolor);
            setEshaogglebgcolor(Colors.prayercolor);
          }
        }, 1000);
  
        return () => clearInterval(interval);
      } catch (error) {
        console.error(error);
        setisLoading(false);
        seterror(true);
      }
    };
    fetchData();
    if (watchID !== null) {
      Geolocation.clearWatch(watchID);
    }
    if (!TEST_MODE && timings) {
      scheduleAzans(timings, prayerToggles);
    }
    if (Platform.OS === 'android') {
    AzanScheduler?.rescheduleAllAzans?.();
  }
  }, [latitude, longitude,timings]);

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
      Fetching Your Location Interrupt.....
      </Text>
      </View>
    );
  }
 
  return (
  <View style={{flexDirection:"column",backgroundColor:Colors.white}}>
       <StatusBar backgroundColor={Colors.primary}/>

       <ImageBackground source={image} resizeMode="contain" imageStyle={{top:15,width:"100%"}} style={styles.slidercontainer}>
              <View style={{flex:1,flexDirection:"row",top:10 }}>
                <View style={{flex:1,height: 45,alignItems:"flex-start"}}>
                  <Text
                    style={{paddingTop:10,paddingLeft:15,fontSize:13,width:300,color:Colors.white, fontFamily:"Raleway"}}>
                    {usermyadsdatamonth.en +", "+usermyadsdatahijri.day+" "+usermyadsdatahijri.year+" "+usermyadsdatadesignation.abbreviated}
                  
                  </Text>
                  <Text style={{paddingLeft:15,fontSize:12,color:Colors.white, fontFamily:"PoppinsLight"}}>{currentDatesimple}</Text>
                </View>
                <TouchableOpacity onPress={requestLocationPermission}>
     
     <View style={{alignItems:"flex-start",right:25, paddingLeft: 10}}>
        <Text style={{paddingTop:10,fontSize:13,color:Colors.white,fontFamily:"Raleway", left:15}}>
          {address}
       </Text>
      <View style={{bottom:20}}>
        <LocationColorSVG/>
      </View>
    </View>

    </TouchableOpacity>
              </View>
      </ImageBackground>

       <View style={{height:40,backgroundColor:Colors.white}}></View>

       <ScrollView
        style={styles.maincontainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
              <View style={{top:25}}>

                  <View style={{flexDirection:"column"}}>
                 
                    <View style={styles.advImageContainerFajr}>
                    <View style={{backgroundColor:showComponmentFajrbgcolor,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                      <PrayerHomeFajrSVG/>
                    </View>
                    <View style={{backgroundColor:showComponmentFajrbgcolor,flex:1.2}}>
                        <Text numberOfLines={1} style={{alignSelf:"flex-start",top:23,color:Colors.primary,fontSize:15,fontWeight:"600",fontFamily:"Raleway"}}>Fajr</Text>
                    </View>
                     <View style={{ backgroundColor:Fajrtogglebgcolor,paddingHorizontal: 10,paddingTop: 20,marginBottom: 10,}}>
                            <View style={styles.toggleRow}>
                              <Switch
                                value={prayerToggles.Fajr}
                                onValueChange={(value) => togglePrayerAzan('Fajr', value)}
                                thumbColor={prayerToggles.Fajr ? Colors.primary : '#ccc'}
                              />
                            </View>
                          </View>
                    <View style={{backgroundColor:showComponmentFajrbgcolor,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                    {showComponmentFajrArrowU && (
                    <TouchableOpacity onPress={()=>  setshowComponmentFajr(true) || setshowComponmentFajrArrowD(true) || setshowComponmentFajrArrowU(false) ||setshowComponmentFajrbgcolor(Colors.prayercolor)||setFajrogglebgcolor(Colors.prayercolor)}>
                        <DuaForwardSVG/>
                    </TouchableOpacity>
                    )}
                    {showComponmentFajrArrowD && (
                    <TouchableOpacity onPress={()=> setshowComponmentFajrArrowD(false) || setshowComponmentFajrArrowU(true) || setshowComponmentFajr(false) || setshowComponmentFajrbgcolor(Colors.white)||setFajrogglebgcolor(Colors.white)}>
                        <DuaCollapseSVG/>
                    </TouchableOpacity>
                    )}
                    </View>
                    </View> 
                    {showComponmentFajr && (
                    <View style={styles.advImageContainerFajr1}>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('FajrSunnah')}} style={styles.submit}>
                      <Text style={styles.submitText}>Sunnah: 2 rak’ah</Text>  
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('FajrFarz')}} style={styles.submit1}>
                      <Text style={styles.submitText}>Farz: 2 rak’ah</Text>  
                    </TouchableOpacity>
                    </View>
                    </View>
                    )}

                    <View style={styles.advImageContainerDhuhr}>
                    <View style={{backgroundColor:showComponmentDhuhrbgcolor,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                      <PrayerHomeDhuhrSVG/>
                    </View>
                    <View style={{backgroundColor:showComponmentDhuhrbgcolor,flex:1.2}}>
                        <Text numberOfLines={1} style={{alignSelf:"flex-start",top:23,color:Colors.primary,fontSize:15,fontWeight:"600",fontFamily:"Raleway"}}>Dhuhr</Text>
                    </View>
                      <View style={{ backgroundColor:Dhuhrtogglebgcolor,paddingHorizontal: 10,paddingTop: 20,marginBottom: 10,}}>
                            <View style={styles.toggleRow}>
                              <Switch
                                value={prayerToggles.Dhuhr}
                                onValueChange={(value) => togglePrayerAzan('Dhuhr', value)}
                                thumbColor={prayerToggles.Dhuhr ? Colors.primary : '#ccc'}
                              />
                            </View>
                          </View>
                    <View style={{backgroundColor:showComponmentDhuhrbgcolor,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                    {showComponmentDhuhrArrowU && (
                    <TouchableOpacity onPress={()=>  setshowComponmentDhuhr(true) || setshowComponmentDhuhrArrowD(true) || setshowComponmentDhuhrArrowU(false) ||setshowComponmentDhuhrbgcolor(Colors.prayercolor)||setDhuhrogglebgcolor(Colors.prayercolor)}>
                        <DuaForwardSVG/>
                    </TouchableOpacity>
                    )}
                    {showComponmentDhuhrArrowD && (
                    <TouchableOpacity onPress={()=> setshowComponmentDhuhrArrowD(false) || setshowComponmentDhuhrArrowU(true) || setshowComponmentDhuhr(false) || setshowComponmentDhuhrbgcolor(Colors.white)||setDhuhrogglebgcolor(Colors.white)}>
                        <DuaCollapseSVG/>
                    </TouchableOpacity>
                    )}
                    </View>
                    </View>
                    {showComponmentDhuhr && (
                    <View style={styles.advImageContainerDhuhr1}>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('DhuhrFirst4Sunnah')}} style={styles.submit}>
                    <Text style={styles.submitText}>Sunnah: 4 rak’ah</Text>  
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{height:"15%",width:"99.5%",flex:0.9,backgroundColor:Colors.prayercolor}}></View>
                    <TouchableOpacity onPress={() => {navigation.navigate('DhuhrFirst4Farz')}} style={styles.submit1}>
                <Text style={styles.submitText}>Farz: 4 rak’ah</Text>  
             </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Dhuhr2Sunnah')}} style={styles.submit1}>
                <Text style={styles.submitText}>Sunnah: 2 rak’ah</Text>  
             </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Dhuhr2Nafil')}} style={styles.submit1}>
                <Text style={styles.submitText}>Nafil: 2 rak’ah</Text>  
             </TouchableOpacity>
             <View style={{height:"15%",width:"99.5%",flex:1,backgroundColor:Colors.prayercolor}}></View>
                    </View>
                   
                    </View>
                    )}

                    <View style={styles.advImageContainerAsr}>
                    <View style={{backgroundColor:showComponmentAsrbgcolor,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                      <PrayerHomeAsrSVG/>
                    </View>
                    <View style={{backgroundColor:showComponmentAsrbgcolor,flex:1.2}}>
                        <Text numberOfLines={1} style={{alignSelf:"flex-start",top:23,color:Colors.primary,fontSize:15,fontWeight:"600",fontFamily:"Raleway"}}>Asr</Text>
                    </View>
                     <View style={{ backgroundColor:Asrtogglebgcolor,paddingHorizontal: 10,paddingTop: 20,marginBottom: 10,}}>
                            <View style={styles.toggleRow}>
                              <Switch
                                value={prayerToggles.Asr}
                                onValueChange={(value) => togglePrayerAzan('Asr', value)}
                                thumbColor={prayerToggles.Asr ? Colors.primary : '#ccc'}
                              />
                            </View>
                          </View>
                    <View style={{backgroundColor:showComponmentAsrbgcolor,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                    {showComponmentAsrArrowU && (
                    <TouchableOpacity onPress={()=>  setshowComponmentAsr(true) || setshowComponmentAsrArrowD(true) || setshowComponmentAsrArrowU(false) ||setshowComponmentAsrbgcolor(Colors.prayercolor)||setAsrogglebgcolor(Colors.prayercolor)}>
                        <DuaForwardSVG/>
                    </TouchableOpacity>
                    )}
                    {showComponmentAsrArrowD && (
                    <TouchableOpacity onPress={()=> setshowComponmentAsrArrowD(false) || setshowComponmentAsrArrowU(true) || setshowComponmentAsr(false) || setshowComponmentAsrbgcolor(Colors.white)||setAsrogglebgcolor(Colors.white)}>
                        <DuaCollapseSVG/>
                    </TouchableOpacity>
                    )}
                    </View>
                    </View>
                    {showComponmentAsr && (
                    <View style={styles.advImageContainerAsr1}>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('AsrFirst4Sunnah')}} style={styles.submit}>
                <Text style={styles.submitText}>Sunnah: 4 rak’ah</Text>  
             </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('AsrFirst4Farz')}} style={styles.submit1}>
                <Text style={styles.submitText}>Farz: 4 rak’ah</Text>  
             </TouchableOpacity>
                    </View>
                   
                    </View>
                    )}

                    <View style={styles.advImageContainerMaghrib}>
                    <View style={{backgroundColor:showComponmentMaghribbgcolor,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                      <PrayerHomeMaghribSVG/>
                    </View>
                    <View style={{backgroundColor:showComponmentMaghribbgcolor,flex:1.2}}>
                        <Text numberOfLines={1} style={{alignSelf:"flex-start",top:23,color:Colors.primary,fontSize:15,fontWeight:"600",fontFamily:"Raleway"}}>Maghrib</Text>
                    </View>
                     <View style={{ backgroundColor:Maghribtogglebgcolor,paddingHorizontal: 10,paddingTop: 20,marginBottom: 10,}}>
                            <View style={styles.toggleRow}>
                              <Switch
                                value={prayerToggles.Maghrib}
                                onValueChange={(value) => togglePrayerAzan('Maghrib', value)}
                                thumbColor={prayerToggles.Maghrib ? Colors.primary : '#ccc'}
                              />
                            </View>
                          </View>
                    <View style={{backgroundColor:showComponmentMaghribbgcolor,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                    {showComponmentMaghribArrowU && (
                    <TouchableOpacity onPress={()=>  setshowComponmentMaghrib(true) || setshowComponmentMaghribArrowD(true) || setshowComponmentMaghribArrowU(false) ||setshowComponmentMaghribbgcolor(Colors.prayercolor)||setMaghribogglebgcolor(Colors.prayercolor)}>
                        <DuaForwardSVG/>
                    </TouchableOpacity>
                    )}
                    {showComponmentMaghribArrowD && (
                    <TouchableOpacity onPress={()=> setshowComponmentMaghribArrowD(false) || setshowComponmentMaghribArrowU(true) || setshowComponmentMaghrib(false) || setshowComponmentMaghribbgcolor(Colors.white)||setMaghribogglebgcolor(Colors.white)}>
                        <DuaCollapseSVG/>
                    </TouchableOpacity>
                    )}
                    </View>
                    </View>
                    {showComponmentMaghrib && (
                    <View style={styles.advImageContainerMaghrib1}>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('MaghribFarz')}} style={styles.submit}>
                <Text style={styles.submitText}>Farz: 3 rak’ah</Text> 
             </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{height:"15%",width:"99.5%",flex:0.9,backgroundColor:Colors.prayercolor}}></View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Maghrib2Sunnah')}} style={styles.submit1}>
                <Text style={styles.submitText}>Sunnah: 2 rak’ah</Text>  
                
             </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Maghrib2Nafil')}} style={styles.submit1}>
                <Text style={styles.submitText}>Nafil: 2 rak’ah</Text>  
             </TouchableOpacity>
                    </View>
                   
                    </View>
                    )}

                    <View style={styles.advImageContainerEsha}>
                    <View style={{backgroundColor:showComponmentEshabgcolor,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                      <PrayerHomeEshaSVG/>
                    </View>
                    <View style={{backgroundColor:showComponmentEshabgcolor,flex:1.2}}>
                        <Text numberOfLines={1} style={{alignSelf:"flex-start",top:23,color:Colors.primary,fontSize:15,fontWeight:"600",fontFamily:"Raleway"}}>Isha</Text>
                    </View>
                      <View style={{ backgroundColor:Eshatogglebgcolor,paddingHorizontal: 10,paddingTop: 20,marginBottom: 10,}}>
                            <View style={styles.toggleRow}>
                              <Switch
                                value={prayerToggles.Isha}
                                onValueChange={(value) => togglePrayerAzan('Isha', value)}
                                thumbColor={prayerToggles.Isha ? Colors.primary : '#ccc'}
                              />
                            </View>
                          </View>
                    <View style={{backgroundColor:showComponmentEshabgcolor,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                    {showComponmentEshaArrowU && (
                    <TouchableOpacity onPress={()=>  setshowComponmentEsha(true) || setshowComponmentEshaArrowD(true) || setshowComponmentEshaArrowU(false) ||setshowComponmentEshabgcolor(Colors.prayercolor)||setEshaogglebgcolor(Colors.prayercolor)}>
                        <DuaForwardSVG/>
                    </TouchableOpacity>
                    )}
                    {showComponmentEshaArrowD && (
                    <TouchableOpacity onPress={()=> setshowComponmentEshaArrowD(false) || setshowComponmentEshaArrowU(true) || setshowComponmentEsha(false) || setshowComponmentEshabgcolor(Colors.white)||setEshaogglebgcolor(Colors.white)}>
                        <DuaCollapseSVG/>
                    </TouchableOpacity>
                    )}
                    </View>
                    </View>
                    {showComponmentEsha && (
                    <View style={styles.advImageContainerEsha1}>
                    <View style={{backgroundColor:Colors.prayercolor,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('IshaFirst4Sunnah')}} style={styles.submit}>
                    <Text style={styles.submitText}>Sunnah: 4 rak’ah</Text> 
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1.1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{height:20,width:"99.5%",flex:1,backgroundColor:Colors.prayercolor}}></View>
                    <TouchableOpacity onPress={() => {navigation.navigate('IshaFirst4Farz')}} style={styles.submit1}>
                    <Text style={styles.submitText}>Farz: 4 rak’ah</Text>  
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{height:20,width:"99.5%",flex:0.5,backgroundColor:Colors.prayercolor,}}></View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Isha2Sunnah')}} style={styles.submit1}>
                    <Text style={styles.submitText}>Sunnah: 2 rak’ah</Text>  
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Isha2Nafil')}} style={styles.submit1}>
                    <Text style={styles.submitText}>Nafil: 2 rak’ah</Text>  
                    </TouchableOpacity>
             
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('IshaWitr')}} style={styles.submit1}>
                    <Text style={styles.submitText}>Witr: 3 rak’ah</Text>  
                    </TouchableOpacity>
                    <View style={{height:20,width:"99.5%",flex:0.5,backgroundColor:Colors.prayercolor}}></View>
                    </View>
                    <View style={{backgroundColor:Colors.prayercolor,height:10,flex:1,width:"99.5%",alignItems:"center",justifyContent:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('IshaLast2Nafil')}} style={styles.submit1}>
                    <Text style={styles.submitText}>Nafil: 2 rak’ah</Text>  
                    </TouchableOpacity>
                    <View style={{height:5,width:"99.5%",flex:0.7,backgroundColor:Colors.prayercolor}}></View>
                    </View>
  
                    </View>
                    )}

                  </View>
              </View>             
            <View style={{height:200}}></View>
       </ScrollView>

      <View style={{flex:1,flexDirection:"row",alignSelf:"center",top:100,justifyContent: "space-between",width:"95%",height:80,position:"absolute",borderRadius:10}}>
   
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
    containerMain: {
      backgroundColor:Colors.transparent
    },
    slidercontainer: {
      backgroundColor: Colors.primary,
      height: 120,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      justifyContent: 'center',
    },
  
  advImageContainerFajr: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    alignSelf:"center",
    borderRadius:10,
    borderWidth:1.6,
    borderColor:Colors.bordercolor,
  },
  advImageContainerFajr1: {
    width: "94%",
    height: 150,  
    flexDirection:'column',
    alignSelf:"center",
    borderTopColor:Colors.prayercolor,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    bottom:15,
  
  },
  advImageContainerDhuhr: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    alignSelf:"center",
    borderRadius:10,
    borderWidth:1.6,
    borderColor:Colors.bordercolor,
  },
  advImageContainerDhuhr1: {
    width: "94%",
    height: 250,  
    flexDirection:'column',
    alignSelf:"center",
    borderTopColor:Colors.prayercolor,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    bottom:15,
  
  },
  advImageContainerAsr: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    alignSelf:"center",
    borderRadius:10,
    borderWidth:1.6,
    borderColor:Colors.bordercolor,
  },
  advImageContainerAsr1: {
    width: "94%",
    height: 150,  
    flexDirection:'column',
    alignSelf:"center",
    borderTopColor:Colors.prayercolor,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    bottom:15,
  
  },
  advImageContainerMaghrib: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    alignSelf:"center",
    borderRadius:10,
    borderWidth:1.6,
    borderColor:Colors.bordercolor,
  },
  advImageContainerMaghrib1: {
    width: "94%",
    height: 180,  
    flexDirection:'column',
    alignSelf:"center",
    borderTopColor:Colors.prayercolor,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    bottom:15,
  
  },
  advImageContainerEsha: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    alignSelf:"center",
    borderRadius:10,
    borderWidth:1.6,
    borderColor:Colors.bordercolor,
  },
  advImageContainerEsha1: {
    width: "94%",
    height: 380,  
    flexDirection:'column',
    alignSelf:"center",
    borderTopColor:Colors.prayercolor,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    bottom:15,
  
  },
  submit: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:Colors.bordercolor,
    height:40,
    width:"85%",
    alignSelf:"center",
    top:10
  },
  submit1: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:Colors.bordercolor,
    height:40,
    width:"85%",
    alignSelf:"center",
    bottom:10
  },
  submitText: {
    fontSize:15,
    top:9,
    color: Colors.intermediate,
    fontFamily:"Raleway",
    alignSelf:'center',
    fontWeight:"400"
  },
   toggleGroup: {
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 10,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  toggleLabel: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: Colors.primary,
  },
  });
 
  export default PrayerGuide;