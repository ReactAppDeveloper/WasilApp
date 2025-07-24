import React from "react";
import {View,Text,StyleSheet,Dimensions,StatusBar,LogBox} from "react-native";
import { Colors } from "../../theme";
LogBox.ignoreAllLogs(); 

  const SehriDua = () => {
   return (
  <View style={styles.maincontainer}>
      <StatusBar backgroundColor={Colors.primary}/>
  
   <View style={{width:"100%",height:180,alignSelf:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:Colors.transparent}}>
   <View style={{flex:1,top:25}}>
   <Text style={{color:Colors.primary,fontSize:35,textAlign:"center",fontWeight:"500",fontFamily:"AlQalamQuran"}}>
   وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
   </Text>
   </View>
   <View style={{flex:1,top:35}}>
   <Text style={{color:Colors.secondary,textAlign:"center",fontSize:14,fontFamily:"PoppinsLight"}}>
   I Intend to keep the fast for month of Ramadan.
   </Text>
   </View>
 </View>
  </View>
  )};
  
const styles = StyleSheet.create({
maincontainer: {
    flex: 1,
    backgroundColor:Colors.white
},
});
 
export default SehriDua;