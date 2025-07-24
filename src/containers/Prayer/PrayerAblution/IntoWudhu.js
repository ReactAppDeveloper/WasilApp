import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';

LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733519783/itrow.png'};
const IntoWudhu = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

           <View style={{width:"92%",alignSelf:"center",left:5,top:20}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
             Introduction to Wudhu
              </Text>
              <Text style={{color:Colors.primary,fontSize:15,bottom:5,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              Overview
              </Text>
              </View>

              <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:10}} style={styles.slidercontainer}>
       </ImageBackground>

              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              ablution is a vital act of purification in Islam, preparing you spiritually and physically before standing in worship, whether for Salah (prayer) or reciting the Quran. Through Wudu, you purify your hands, mouth, nose, face, arms, head, ears, and feet, following the steps taught by the Prophet Muhammad (peace be upon him), ensuring cleanliness and readiness to connect with Allah.</Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:40,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              In the Wasil Islamic App, we are dedicated to helping you maintain this important Sunnah with ease. Our step-by-step guidance ensures you perform Wudu correctly, no matter where you are—at home, work, or traveling. With the app, you’ll always be ready to approach your worship with the purity and sincerity that Islam emphasizes. Stay connected to your faith, and let the Wasil app support your journey to spiritual purification.
              </Text>
              </View>
    
        <View style={{height:100}}></View>
       </ScrollView>
    </View>
  );
};

export default IntoWudhu;

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
