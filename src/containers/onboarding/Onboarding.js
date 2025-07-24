import React, { useEffect ,useRef, useState} from 'react';
import { View, StatusBar, FlatList, StyleSheet, PermissionsAndroid,Animated,Platform,Dimensions,Text,TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from "../../theme";
import slides from "./slides"
import OnbaordingItem from "./OnbaordingItem"
import Paginator from './Paginator';
import Nextbutton from './Nextbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from "react-native-geolocation-service";
const { width, height } = Dimensions.get('window');
export const Onboarding = ({navigation}) => {
  const [currentIndex,setCurrentIndex]=useState(0);
  const scrollx =useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [locationStatus, setLocationStatus] = useState('');
  let watchID = null;

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

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

    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
  
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const scrollTo = async() => {
    if(currentIndex<slides.length-1){
      slidesRef.current.scrollToIndex({index:currentIndex+1});
    }
    else{
      try{ 
        await AsyncStorage.setItem('ONLATI', currentLatitude);
        await AsyncStorage.setItem('ONLONGI', currentLongitude);
        await AsyncStorage.setItem('ONBOARDED', 'true');
        navigation.navigate('Guest');
      }
      catch(err){
        console.log('Error @setItem:',err)
      }
    }
  }
  const oSkip = async() => {
      try{ 
        await AsyncStorage.setItem('ONLATI', currentLatitude);
        await AsyncStorage.setItem('ONLONGI', currentLongitude);
        await AsyncStorage.setItem('ONBOARDED', 'true');
        navigation.navigate('Guest');
      }
      catch(err){
        console.log('Error @setItem:',err)
      }
  }

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
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
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
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

  return (
    <View style={styles.container}>
     <StatusBar backgroundColor={Colors.secondary} />
     <View style={{flex:3}}>
     <FlatList 
     data={slides} 
     renderItem={({item})=><OnbaordingItem item={item}/>}
     horizontal
     pagingEnabled
     bounces={false}
     showsHorizontalScrollIndicator={false}
     keyExtractor={(item) => item.id}
     onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{useNativeDriver: false})}
     scrollEventThrottle={32}
     onViewableItemsChanged={viewableItemsChanged}
     viewabilityConfig={viewConfig}
     ref={slidesRef}>
     </FlatList>
     </View>
     <Paginator data={slides} scrollx={scrollx}/>
     <Nextbutton scrollTo={scrollTo} percentage ={(currentIndex + 1) * (100 / slides.length)}/>
     <View style={{flex: 1,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-start",
    position: 'absolute',
    bottom: height * 0.025}}>
    
    <TouchableOpacity onPress={oSkip}>
    <Text style={styles.headingText}>
       Skip
    </Text>
    </TouchableOpacity>
    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  headingText:{
    left:20,
    fontSize: width * 0.04,
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
    lineHeight: height * 0.03,
  }
});

export default Onboarding;
