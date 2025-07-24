import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733521031/faqsw.png'};
LogBox.ignoreAllLogs();

const Faqs = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

           <View style={{width:"92%",alignSelf:"center",left:5,top:20}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              FAQ's
              </Text>
              </View>

              <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:25}} style={styles.slidercontainer}>
              </ImageBackground>

             
              <View style={{width:"92%",alignSelf:"center",left:5,top:10}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>1. What is Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudhu (ablution) is the Islamic ritual of cleansing specific parts of the body in preparation for worship, such as Salah (prayer) or reading the Quran. It is an act of physical and spiritual purification.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:30}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>2. What parts of the body are washed in Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              In Wudhu, the following parts of the body are washed:{'\n'}
              {"  "}- Hands (up to the wrists){'\n'}
              {"  "}- Mouth{'\n'}
              {"  "}- Nose{'\n'}
              {"  "}- Face{'\n'}
              {"  "}- Arms (up to the elbows){'\n'}
              {"  "}- Wipe over the head{'\n'}
              {"  "}- Ears (wiped){'\n'}
              {"  "}- Feet (up to the ankles)
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:50}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>3. When is Wudhu required?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudhu is required before:{'\n'}
              {"  "}- Salah (prayer){'\n'}
              {"  "}- Touching or reciting the Quran{'\n'}
              {"  "}- Performing Tawaf around the Ka'bah{'\n'}
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:60}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>4. What nullifies Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudhu is nullified by:{'\n'}
              {"  "}- Urination or defecation{'\n'}
              {"  "}- Passing gas{'\n'}
              {"  "}- Deep sleep or loss of consciousness{'\n'}
              {"  "}- Touching the private parts with the palm of the hand{'\n'}
              {"  "}- Flowing blood or pus{'\n'}
              {"  "}- Sexual activity{'\n'}
              {"  "}- Menstruation or postpartum bleeding{'\n'}
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:70}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>5. Can I perform Wudhu with limited water?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Yes, you can use a small amount of water to complete Wudhu. If water is unavailable or harmful to use (due to illness or injury), you can perform Tayammum (dry ablution) using clean earth or dust.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:90}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>6. How long does Wudhu last?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudhu lasts until an act that nullifies it occurs. There is no specific time limit, but it must be renewed after any of the nullifying actions.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:110}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>7. Can I perform Wudhu with makeup or nail polish?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              For Wudhu to be valid, water must reach the skin. Therefore, if makeup or nail polish creates a barrier preventing water from reaching the skin or nails, it should be removed before performing Wudhu. Breathable nail polishes, designed to allow water to pass through, are permitted by some scholars.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:135}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>8. Is Wudhu required after touching non-mahram (unrelated) individuals?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Touching someone of the opposite gender does not break Wudhu according to the majority of scholars, unless there is sexual activity or sexual fluids are emitted.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:160}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>9. What should I do if I forget to perform a step in Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              If you forget a step during Wudhu, you should repeat the Wudhu from the point of the missed step or start again if unsure.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:180}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>10. Can I wipe over socks during Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Yes, wiping over socks or leather footwear (khuffs) is allowed under certain conditions. The socks or khuffs must be put on after performing a complete Wudhu and must not be removed. Wiping over them is valid for 24 hours for residents and 72 hours for travelers.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:200}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>11. Is Wudhu necessary after eating or drinking?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Eating or drinking does not invalidate Wudhu. However, it is Sunnah (recommended) to rinse the mouth after eating certain foods, especially those with strong odors, like garlic or onions.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:220}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>12. Does bleeding break Wudhu?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              According to most scholars, minor bleeding (like a small cut) does not invalidate Wudhu unless the blood flows. If the blood flows beyond the wound, Wudhu should be renewed.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:240}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>13. Can I perform Wudhu with bandages or casts?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Yes, if you have an injury or bandage, you can wipe over the bandaged area instead of washing it, as long as it covers a part of the body that needs to be washed during Wudhu.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:260}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>14. Is it necessary to renew Wudhu for every prayer?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              No, it is not necessary to renew Wudhu for each prayer unless it has been nullified by any of the actions mentioned. Wudhu remains valid until it is broken.
              </Text>
              </View>
            
    
        <View style={{height:330}}></View>
       </ScrollView>
    </View>
  );
};

export default Faqs;

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
