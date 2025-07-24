import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1733520721/tayummum.png'};
LogBox.ignoreAllLogs();

const Tayammum = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>
        

           <View style={{width:"92%",alignSelf:"center",left:5,top:20}}>
              <Text style={{color:Colors.primary,fontSize:18,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              Tayammum
              </Text>
              <Text style={{color:Colors.primary,fontSize:15,bottom:5,textAlign:"center",textTransform:"capitalize",fontFamily:"Raleway"}}>
              (Dry Ablution)
              </Text>
              </View>

              <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:20}} style={styles.slidercontainer}>
              </ImageBackground>

              <View style={{width:"92%",alignSelf:"center",left:5,top:10}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Tayammum is the Islamic ritual of dry ablution, performed in place of Wudu (ablution) when water is unavailable or its use could be harmful (e.g., due to illness). Tayammum allows Muslims to maintain ritual purity for acts of worship such as Salah (prayer).
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:30}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Steps for Performing Tayammum:</Text>
              <Text style={{color:Colors.intermediate,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Make the Intention (Niyyah): 
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Like Wudu, Tayammum begins with the intention in your heart to purify yourself for worship.
              </Text>
              </Text>
              <Text style={{color:Colors.intermediate,top:35,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Find Clean Earth or Dust: 
              <Text style={{color:Colors.secondary,top:35,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Tayammum is performed using clean earth, dust, or sand. It must be pure and free from impurities.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:45,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Strike Hands on the Ground: 
              <Text style={{color:Colors.secondary,top:45,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Lightly strike both hands on the ground or surface of clean dust or earth.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:55,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wipe the Face: 
              <Text style={{color:Colors.secondary,top:55,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}After striking the ground, wipe your face with both hands once.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:65,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Wipe the Hands: 
              <Text style={{color:Colors.secondary,top:65,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}Strike the ground again and then wipe both hands up to the wrists, starting with the right hand.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:75,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Recite the Shahadah (Optional): 
              <Text style={{color:Colors.secondary,top:75,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              {" "}After completing Tayammum, you can recite the Shahadah, similar to how you would after Wudu:
              </Text>
              </Text>
              </View>

              <View style={styles.advImageContainer}>
                    
                    <View>
                        <Text style={{width:"70%",alignSelf:"center",textAlign:"center",top:30,textTransform:"capitalize",color:Colors.primary,fontSize:14,fontWeight:"600",fontFamily:"Raleway"}}>"Ashhadu alla ilaha illallah wahdahu la sharika lahu wa ashhadu anna Muhammadan abduhu wa rasuluhu."</Text>
                    </View>
                  </View>
                  <View style={{width:"92%",top:180}}>
                  <View style={styles.submit}>
                      <Text style={styles.submitText}>Translation</Text> 
                      </View>
                      
                      </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:170}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              "I bear witness that there is no god but Allah, alone, without any partners, and I bear witness that Muhammad is His servant and messenger."
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:190}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>When is Tayammum Permissible?</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Lack of Water: When water is not available within a reasonable distance.{'\n'}Health Concerns: If using water may cause harm due to illness or injury.{'\n'}Limited Time: When water is available but using it would make you miss the prayer time.Environmental Conditions: When water is too cold and would harm you if used.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:210}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Important Points:</Text>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Tayammum is a temporary substitute for Wudu and Ghusl. Once water becomes available, Wudu or Ghusl should be performed.It is a symbol of ease and flexibility in Islam, ensuring that worship can continue even in difficult circumstances.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:230}}>
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Performing Wudu correctly ensures that you are in a state of ritual purity, which is a condition for many acts of worship, especially Salah.
              </Text>
              </View>


            
    
        <View style={{height:300}}></View>
       </ScrollView>
    </View>
  );
};

export default Tayammum;

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
