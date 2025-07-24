import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733520916/ullifies.png'};
LogBox.ignoreAllLogs();


const Nullifies = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

           <View style={{width:"92%",alignSelf:"center",left:5,top:20}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              What Nullifies Your Wudhu
              </Text>
              </View>

              <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:25}} style={styles.slidercontainer}>
              </ImageBackground>

              <View style={{width:"92%",alignSelf:"center",left:5,top:10}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudu (ablution) is a sacred act of purification in Islam, and maintaining it is essential for connecting with Allah in worship. However, certain actions can nullify Wudu, requiring it to be performed again to maintain the state of ritual purity. Here are the actions that invalidate Wudu, as taught in Islamic teachings:
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:30}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>1. Natural Discharges:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Urination or defecation breaks Wudu.Passing gas nullifies Wudu. Any form of discharge from the private parts, such as pre-seminal fluid or vaginal discharge (other than normal secretions), also invalidates Wudu.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:50}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>2. Deep Sleep:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              If you fall into a deep sleep where you are no longer aware of your surroundings or lose control over your body, your Wudu is nullified.{'\n'}Light sleep or dozing that doesn’t cause you to lose awareness does not break Wudu.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:70}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>3. Loss of Consciousness:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Fainting, or any condition where consciousness is lost, nullifies Wudu, as it takes away the state of mindfulness required for purity.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:90}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>4. Touching Private Parts:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Direct contact with your private parts using the palm of your hand, without a barrier, breaks Wudu, as mentioned in the teachings of the Prophet Muhammad (peace be upon him).
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:110}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>5. Flowing Blood or Pus:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Any blood or pus that flows from a wound nullifies Wudu. Minor cuts that don’t result in flowing blood generally do not break Wudu unless the blood flows significantly.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:130}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>6. Vomiting:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              According to some scholars, vomiting a substantial amount (enough to fill the mouth) nullifies Wudu. Minor vomiting may not,depending on the opinion of scholars.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:150}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>7. Menstruation and Postpartum:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Bleeding: Menstruation (Hayd) and postpartum bleeding (Nifas) completely nullify Wudu. Once the bleeding stops, a full Ghusl (ritual bath) is required to restore purity.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:170}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>8. Sexual Activity:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Engaging in sexual intercourse or any act that causes the emission of sexual fluids nullifies Wudu. Ghusl is required to purify oneself after such activity.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:190}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Maintaining Wudu is an important part of remaining in a state of cleanliness, as the Prophet Muhammad (peace be upon him) said, "Purity is half of faith."{'\n'}{'\n'}When any of these actions occur, it is necessary to renew your Wudu before engaging in prayer or other acts of worship to ensure that you are in a state of spiritual and physical purity before Allah.
              </Text>
              </View>
            
    
        <View style={{height:250}}></View>
       </ScrollView>
    </View>
  );
};

export default Nullifies;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  advImageContainer: {
    width: "100%",
    height: 120,  
    top:150,
    borderRadius:1,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    backgroundColor:Colors.prayercolor
  },
  submit: {
    backgroundColor: Colors.transparent,
    borderRadius: 5,
    borderColor: Colors.primary,
    height:25,
    left:20,
    width:"22%"
  },
  submitText: {
    fontSize:12,
    flexDirection:"column",
    color: Colors.secondary,
    left:8,
    fontWeight:"500",
    fontFamily:"Raleway",
    top:4
  },
  slidercontainer: {
    width:width*0.92,
    height: 150,
    alignSelf:"center"
  },
});
