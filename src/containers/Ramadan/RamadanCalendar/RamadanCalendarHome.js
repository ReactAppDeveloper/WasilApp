import React, { useState, useEffect,useRef} from "react";
import {View,ScrollView,Text,StyleSheet,FlatList,Animated,Dimensions,StatusBar,LogBox,ActivityIndicator} from "react-native";
import { Colors } from "../../../theme";
import axios from "axios";
import {RamadanSVG} from '../../../assets/icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('window');

import HanafiCal from "./HanafiCal"
import JafriCal from "./JafriCal"
LogBox.ignoreAllLogs(); 

  const RamadanHome = ({ navigation }) => {
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

 
  return (

    <View style={{flexDirection:"column",backgroundColor:Colors.white,overflow:"hidden",flex:1}}>
      
        <StatusBar backgroundColor={Colors.primary}/>
  
     <View style={styles.slidercontainer}>
  
     <View style={{alignItems:"center" }}>
      
        <View style={{alignItems:"center"}}>
        <RamadanSVG/>
       </View>
      
     </View>
     
        
     </View>
  
  <ScrollView>
     <View style={{width:"94%",alignSelf:"center",flexDirection:"row"}}>
  
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
        name="Fiqa Hanafi"
        component={HanafiCal}
        options={{
          tabBarLabel: 'Fiqa Hanafi',
        }}  />
         <Tab.Screen
        name="Fiqa Jafria"
        component={JafriCal}
        options={{
          tabBarLabel: 'Fiqa Jafria',
        }} />
     
    </Tab.Navigator>
  
  
    
  
     </View>
  
 
  
  <View style={{height:10}}></View>
  
  </ScrollView>  
  
  </View>
  
    )};
  
  const styles = StyleSheet.create({
    slidercontainer: {
      backgroundColor: Colors.primary,
      height: 140,
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