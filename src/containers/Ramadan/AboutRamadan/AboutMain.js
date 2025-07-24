import React,{ useState, useEffect }  from 'react';
import {  StatusBar, StyleSheet,View,TouchableOpacity,ScrollView,ImageBackground,LogBox,Text,Dimensions} from 'react-native';
import { Colors } from '../../../theme';
import {DuaForwardSVG} from '../../../assets/icons';
LogBox.ignoreAllLogs();
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1736408026/aramaimage.png'};
const { width } = Dimensions.get('window');

const AboutMain = ({ navigation }) => { 

  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
     
       <ImageBackground source={imageone} style={styles.slidercontainer}>
             
       </ImageBackground>
    
<View style={{width:"100%",alignSelf:"center",top:10}}>
            <ScrollView>
          
                   <View style={{alignItems:"center"}}>
              <TouchableOpacity onPress={() => navigation.navigate("UnderstandingRamadan")}>
                  <View style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:1,left:15}}>
                        <Text style={{alignSelf:"flex-start",width:320,textTransform:"capitalize",top:15,color:Colors.primary,fontSize:14,fontFamily:"Poppins-Regular"}}>Understanding Ramadan: A Sacred Journey of Fasting, Prayer, and Community</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.15,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("HealthBenefits")}>
                  <View style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:1,left:15}}>
                        <Text style={{alignSelf:"flex-start",width:320,textTransform:"capitalize",top:15,color:Colors.primary,fontSize:14,fontFamily:"Poppins-Regular"}}>What are the Health Benefits of Ramadan Fasting?</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.15,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Significance")}>
                  <View style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:1,left:15}}>
                        <Text style={{alignSelf:"flex-start",width:320,textTransform:"capitalize",top:24,color:Colors.primary,fontSize:14,fontFamily:"Poppins-Regular"}}>The Spiritual Significance of Ramadan</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.15,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("ImportanceofFamily")}>
                  <View style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:1,left:15}}>
                        <Text style={{alignSelf:"flex-start",width:320,textTransform:"capitalize",top:24,color:Colors.primary,fontSize:14,fontFamily:"Poppins-Regular"}}>The Importance of Family During Ramadan</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.15,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("ZakatGiving")}>
                  <View style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:1,left:15}}>
                        <Text style={{alignSelf:"flex-start",width:320,textTransform:"capitalize",top:24,color:Colors.primary,fontSize:14,fontFamily:"Poppins-Regular"}}>Ramadan: An Ideal Moment for Zakat Giving</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.15,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
                   </View>
                    <View style={{height:300}}></View>         
            </ScrollView>
       </View>
    </View>
  );
};

export default AboutMain;

const styles = StyleSheet.create({
  containerMain: {
    height:"100%",
    backgroundColor:Colors.white
  },
  advImageContainer: {
    width: "94%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    borderRadius:8,
    borderWidth:1,
    borderColor:Colors.bordercolor,
  },
  slidercontainer: {
    width:"100%",
    height: 250,
    alignSelf:"center"
  },
   slidercontainer1: {
    width:width*0.95,
    height: 120,
    alignSelf:"center"
  },
});
