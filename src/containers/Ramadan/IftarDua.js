import React from "react";
import {View,Text,StyleSheet,Dimensions,StatusBar,LogBox} from "react-native";
import { Colors } from "../../theme";
LogBox.ignoreAllLogs(); 

  const IftarDua = () => {
   return (
  <View style={styles.maincontainer}>
      <StatusBar backgroundColor={Colors.primary}/>
  
   <View style={{width:"100%",height:180,alignSelf:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:Colors.transparent}}>
      <View style={{flex:1,top:35}}>
      <Text style={{color:Colors.primary,fontSize:25,textAlign:"center",lineHeight:35,fontWeight:"500",fontFamily:"AlQalamQuran"}}>
      اللَّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ امنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ
      </Text>
      </View>
      <View style={{flex:1,top:35}}>
      <Text style={{color:Colors.secondary,textAlign:"center",fontSize:12,fontFamily:"PoppinsLight"}}>
      O Allah! I fasted for You and I believe in You [and I put my trust in You] and I break my fast with Your sustenance.
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
 
export default IftarDua;