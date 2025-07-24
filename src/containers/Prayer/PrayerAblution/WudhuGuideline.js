import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';
LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733520475/guidelie.png'};
const WudhuGuideline = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

           <View style={{width:"92%",alignSelf:"center",left:5,top:20}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              Wudhu Guideline
              </Text>
              <Text style={{color:Colors.primary,fontSize:15,bottom:5,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              Step by Step Guide
              </Text>
              </View>

              <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:20}} style={styles.slidercontainer}>
              </ImageBackground>

              <View style={{width:"92%",alignSelf:"center",left:5,top:10}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Wudhu (ablution)</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Requires specific actions and conditions to be fulfilled for it to be valid in Islam. Below are the key requirements:
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:30}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>1. Intention (Niyyah):</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Before starting Wudu, you must make the intention in your heart that you are performing Wudhu for the sake of Allah and to purify yourself for prayer or other acts of worship.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:50}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>2. Clean Water:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Before starting Wudu, you must make the intention in your heart that you are performing Wudhu for the sake of Allah and to purify yourself for prayer or other acts of worship.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:70}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>3. Order of Steps:</Text>
            
              <Text style={{left:10,color:Colors.intermediate,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wash Hands:
              <Text style={{left:10,color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wash both hands up to the wrists three times, starting with the right hand.
              </Text>
              </Text>
            
              <Text style={{left:10,color:Colors.intermediate,top:30,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Rinse Mouth: 
              <Text style={{left:10,color:Colors.secondary,top:35,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Inhale water gently into your nose and then blow it out three times.
              </Text>
              </Text>
              
              <Text style={{left:10,color:Colors.intermediate,top:40,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wash Face:
              <Text style={{left:10,color:Colors.secondary,top:40,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wash the face thoroughly from the hairline to the chin and from ear to ear three times.
              </Text>
              </Text>
              <Text style={{left:10,color:Colors.intermediate,top:45,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wash Arms:
              <Text style={{left:10,color:Colors.secondary,top:45,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wash Arms: Wash both arms up to the elbows, starting with the right arm, three times.
              </Text>
              </Text>
              <Text style={{left:10,color:Colors.intermediate,top:50,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wipe Head: 
              <Text style={{left:10,color:Colors.secondary,top:50,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wet your hands and wipe over the entire head once.
              </Text>
              </Text>
              <Text style={{left:10,color:Colors.intermediate,top:55,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wipe Ears:
              <Text style={{left:10,color:Colors.secondary,top:55,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wipe the inside and outside of both ears once.
              </Text>
              </Text>
              <Text style={{left:10,color:Colors.intermediate,top:60,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wash Feet:
              <Text style={{left:10,color:Colors.secondary,top:60,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Wash both feet up to the ankles, starting with the right foot, three times.
              </Text>
              </Text>
              
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:130}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>4. Continuity:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              The steps of Wudu should be performed without long pauses in between.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:150}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>5. Personal Cleanliness:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Make sure there is no impurity (such as urine, blood, or dirt) on your body or clothes before starting Wudu.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:170}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>6. Completion of Wudu:
              </Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Once all steps are completed, it is Sunnah to recite the following supplication:
              </Text>
              </View>

              <View style={styles.advImageContainer}>
                    
                    <View>
                        <Text style={{width:"70%",alignSelf:"center",textAlign:"center",top:30,textTransform:"capitalize",color:Colors.primary,fontSize:14,fontWeight:"600",fontFamily:"Raleway"}}>"Ashhadu alla ilaha illallah wahdahu la sharika lahu wa ashhadu anna Muhammadan abduhu wa rasuluhu."</Text>
                    </View>
                  </View>
                  <View style={{width:"92%",top:250}}>
                  <View style={styles.submit}>
                      <Text style={styles.submitText}>Translation</Text> 
                      </View>
                      
                      </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:240}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              "I bear witness that there is no god but Allah, alone, without any partners, and I bear witness that Muhammad is His servant and messenger."
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:270}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Additional Points:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wudu Validity: Wudu remains valid unless it is broken by actions such as urination, defecation, flatulence, deep sleep, or other acts that invalidate Wudu.   
              </Text>

              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Tayammum: In case water is not available, or there is harm in using water, Tayammum is performed as an alternative by wiping clean earth or dust over the face and hands.
              </Text>

              </View>
              <View style={{width:"92%",alignSelf:"center",left:5,top:290}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Performing Wudu correctly ensures that you are in a state of ritual purity, which is a condition for many acts of worship, especially Salah.
              </Text>
              </View>
             
    
        <View style={{height:350}}></View>
       </ScrollView>
    </View>
  );
};

export default WudhuGuideline;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  advImageContainer: {
    width: "100%",
    height: 120,  
    top:230,
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
