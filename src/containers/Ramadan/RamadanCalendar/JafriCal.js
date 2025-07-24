import React, { useState, useEffect,useRef} from "react";
import {View,Text,StyleSheet,Dimensions,StatusBar,LogBox} from "react-native";
import { Colors } from "../../../theme";
import axios from "axios";
LogBox.ignoreAllLogs(); 

  const JafriCal = () => {
    const [duadatamore, setduadatamore] = useState([]);

    useEffect(() => {  
      const fetchDuaData = async () => {
        try {
          const response = await axios.get("https://islamicapp.vercel.app/api/ramadancalender")
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
    }, []);
   return (
  <View style={styles.maincontainer}>
      <StatusBar backgroundColor={Colors.primary}/>
  
    <View style={{width:"100%",height:50,alignSelf:"center",flexDirection:"row"}}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:Colors.primary}}>
        <Text style={{color:Colors.white,fontSize:14,fontFamily:"Poppins-Medium"}}>Ramadan </Text>
      </View>
      <View style={{flex:0.5,alignItems:"center",justifyContent:"center",backgroundColor:"#DFAA16"}}>
        <Text style={{color:Colors.white,fontSize:14,fontFamily:"Poppins-Medium"}}>Sehri</Text>
      </View>
      <View style={{flex:0.5,left:0.45,alignItems:"center",justifyContent:"center",backgroundColor:"#DFAA16"}}>
        <Text style={{color:Colors.white,fontSize:14,fontFamily:"Poppins-Medium"}}>Iftar</Text>
      </View>
  
    </View>


    {duadatamore.map((item, index) => (

    <View style={{width:"100%",height:50,top:0.45,alignSelf:"center",flexDirection:"row",borderBottomWidth:1,borderColor:Colors.white}}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#2A04BA",flexDirection:"column"}}>
      <Text style={{color:Colors.white,fontSize:12,top:2,fontFamily:"Poppins-Medium"}}>{item.ramadandateday}</Text>
        <Text style={{color:Colors.white,fontSize:14,top:1,fontFamily:"Poppins-Medium"}}>{item.ramadanday}</Text>
      </View>
      <View style={{flex:0.5,alignItems:"center",justifyContent:"center",backgroundColor:"#F2F2F2"}}>
        <Text style={{color:"#424242",fontSize:14,fontFamily:"Poppins-Medium"}}>{item.sehrijafritime}</Text>
      </View>
      <View style={{flex:0.5,left:0.45,alignItems:"center",justifyContent:"center",backgroundColor:"#F2F2F2"}}>
        <Text style={{color:"#424242",fontSize:14,fontFamily:"Poppins-Medium"}}>{item.iftarijafritime}</Text>
      </View>
  
    </View>

    ))}
    
  </View>
  )};
  
const styles = StyleSheet.create({
maincontainer: {
    flex: 1,
    backgroundColor:Colors.white
},
});
 
export default JafriCal;