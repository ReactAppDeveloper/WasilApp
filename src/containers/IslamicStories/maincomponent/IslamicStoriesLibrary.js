import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions} from 'react-native';
import { Colors } from '../../../theme';
const { width} = Dimensions.get('window');

LogBox.ignoreAllLogs();

const IslamicStoriesLibrary = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.intermediate1}/>
        
       <ScrollView>

              <View style={{width:"92%",alignSelf:"center",left:5,top:140}}>
              <Text style={{color:Colors.wasilnewthemecolorsecond,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Akif M Shaikh</Text>             
              <Text style={{color:Colors.secondary,top:15,fontSize:12,fontFamily:"Poppins-Light"}}>
              Founder
              </Text>
              </View>    
        <View style={{height:180}}></View>
       </ScrollView>
    </View>
  );
};

export default IslamicStoriesLibrary;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  slidercontainer: {
    width:width*0.92,
    height: 150,
    alignSelf:"center"
  },
});
