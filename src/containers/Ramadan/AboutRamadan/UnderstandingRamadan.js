import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';

LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1736409304/uramaimage.png'};
const UnderstandingRamadan = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

              <ImageBackground source={imageone}  style={styles.slidercontainer}>
       </ImageBackground>

       <View style={{width:"92%",alignSelf:"center",left:5,top:15}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              Understanding Ramadan  
              </Text>
              <Text style={{color:Colors.primary,fontSize:15,bottom:5,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              A Sacred Journey of Fasting, Prayer, and Community
              </Text>
              </View>

              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Ramadan is the ninth month of the Islamic lunar calendar, observed by Muslims worldwide as a time of fasting, prayer, reflection, and community. It holds profound spiritual significance, commemorating the revelation of the Quran to Prophet Muhammad.</Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:40,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              During Ramadan, Muslims fast from dawn until sunset, abstaining from food, drink, smoking, and intimate relations. This fast is one of the Five Pillars of Islam and serves as a demonstration of self-discipline, empathy, and devotion to Allah.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:60,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              The pre-dawn meal, known as Sahur, is consumed before the start of the fast, while the fast is broken at sunset with a meal called Iftar. Iftar gatherings often involve family, friends, and community members, fostering bonds of fellowship and solidarity.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:80,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              In addition to fasting, Muslims engage in increased acts of worship, such as performing additional prayers known as Taraweeh and reciting the Qur'an. The month is also a time for spiritual reflection, seeking forgiveness, and striving to improve oneself morally and ethically.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:100,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Ramadan is not only a time for personal introspection but also for communal outreach and charity. Muslims are encouraged to give generously to those in need, whether through Zakat (obligatory almsgiving) or Sadaqah (voluntary charity), and to extend hospitality to others, particularly during Iftar.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:120,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              As the month of Ramadan draws to a close, Muslims celebrate Eid al-Fitr, a joyous festival marking the end of fasting. Eid festivities include communal prayers, feasting, giving gifts, and acts of charity, uniting the Muslim community in celebration and gratitude.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:140,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Ramadan embodies the values of compassion, self-discipline, gratitude, and unity, serving as a time for spiritual rejuvenation and connection with Allah and fellow believers. It is a cherished and transformative period in the Islamic calendar, renewing faith and fostering a sense of community among Muslims worldwide.
              </Text>
              </View>
    
        <View style={{height:160}}></View>
       </ScrollView>
    </View>
  );
};

export default UnderstandingRamadan;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  slidercontainer: {
    width:"100%",
    height: 250,
    alignSelf:"center"
  },
});
