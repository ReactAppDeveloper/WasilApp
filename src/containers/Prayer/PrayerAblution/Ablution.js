import React,{ useState, useEffect }  from 'react';
import {  StatusBar, StyleSheet,View,TouchableOpacity,ScrollView,ImageBackground,Image,LogBox,Text,Dimensions} from 'react-native';
import { Colors,Images} from '../../../theme';
import {PrayerGuideSerialSVG,DuaForwardSVG,BGONESVG} from '../../../assets/icons';
LogBox.ignoreAllLogs();
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1731666727/prayerone.png'};
const imagetwo = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1731666795/prayertwo.png'};
const { width } = Dimensions.get('window');
const prayeritems = [
{
    "itemname": "Introduction to Wudhu",
    "itemid": "1"
},
{
    "itemname": "Wudhu Guideline",
    "itemid": "2"
},
{
  "itemname": "Tayammum",
    "itemid": "3"
},
{
    "itemname": "What Nullifies Your Wudhu",
      "itemid": "4"
},
{
    "itemname": "Wudhu Videos",
      "itemid": "5"
},
{
  "itemname": "FAQs",
    "itemid": "6"
}
]

const BGTwo = () => (
  <Image
    source={Images.PrayerTwo}
    style={{ resizeMode:"contain",width:380}}
  />
);

const Ablution = ({ navigation }) => { 

  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
       <TouchableOpacity onPress={() => {navigation.navigate('AblutionWaduStep')}}>
       <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:5}} style={styles.slidercontainer}>
              <Text style={{top:60,textAlign:"center",color:Colors.primary,fontSize:16,fontFamily:"Poppins-SemiBold"}}>
                How to Perform Wudhu{'\n'}Step by Step Guide
              </Text>
       </ImageBackground>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {navigation.navigate('TayummumStep')}}>
        <ImageBackground source={imagetwo} resizeMode="contain" style={styles.slidercontainer1}>
        <Text style={{top:40,textAlign:"center",color:Colors.primary,fontSize:16,fontFamily:"Poppins-SemiBold"}}>
            How to Perform Tayammum{'\n'}Step by Step Guide
        </Text>
        </ImageBackground>
        </TouchableOpacity>
     
<View style={{width:"100%",alignSelf:"center",top:10}}>
            <ScrollView>
          
                   <View style={{alignItems:"center"}}>
                   {prayeritems.map((item, index) => (
       
              <TouchableOpacity key={index} onPress={() => {
                if(item.itemname === "Introduction to Wudhu")
                  {
                    navigation.navigate('IntoWudhu');
                  }
                  else if(item.itemname === "Wudhu Guideline")
                  {
                    navigation.navigate('WudhuGuideline');
                  }
                  else if(item.itemname === "Tayammum")
                    {
                      navigation.navigate('Tayammum');
                    }
                  else if(item.itemname === "What Nullifies Your Wudhu")
                  {
                    navigation.navigate('Nullifies');
                  }
                  else if(item.itemname === "Wudhu Videos")
                    {
                      navigation.navigate('WudhuVideos');
                    }
                  else{
                    navigation.navigate('Faqs');
                  }
              }}>
                  <View key={item} style={styles.advImageContainer}>
                    <View style={{backgroundColor:Colors.white,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                        <View style={{height:35}}></View>
                        <PrayerGuideSerialSVG/>
                        <View style={{height:8}}></View>
                        <Text style={{bottom:41,color:Colors.intermediate,textAlign:"center",fontWeight:"500",fontSize:15,fontFamily:"Raleway"}}>{item.itemid}</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:1.4}}>
                        <Text numberOfLines={1}style={{alignSelf:"flex-start",textTransform:"capitalize",top:24,color:Colors.primary,fontSize:14,fontWeight:"600",fontFamily:"Raleway"}}>{item.itemname}</Text>
                    </View>
                    <View style={{backgroundColor:Colors.white,flex:0.3 ,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                        <DuaForwardSVG/>
                    </View>
                  </View>
               </TouchableOpacity>
            ))}
                   </View>
                    <View style={{height:300}}></View>         
            </ScrollView>
       </View>
    </View>
  );
};

export default Ablution;

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
    width:width*0.95,
    height: 150,
    alignSelf:"center"
  },
   slidercontainer1: {
    width:width*0.95,
    height: 120,
    alignSelf:"center"
  },
});
