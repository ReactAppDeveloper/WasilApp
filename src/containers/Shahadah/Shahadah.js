import React from 'react';
import {StatusBar, StyleSheet, View , Text, LogBox, Image,ScrollView,ImageBackground} from 'react-native';
import {Colors, Images} from '../../theme';
import {ShahadahSecondSVG} from '../../assets/icons';
const image = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1731326336/home/shahadah.png'};
LogBox.ignoreAllLogs();

const StepOne = () => (
  <Image
    source={Images.StepShahadahOne}
    style={{ resizeMode:"contain",width:380}}
  />
);
const StepTwo = () => (
  <Image
    source={Images.StepShahadahTwo}
    style={{ resizeMode:"contain",width:380}}
  />
);
const StepThree = () => (
  <Image
    source={Images.StepShahadahThree}
    style={{ width:"92%",alignSelf:"center",resizeMode:"contain"}}
  />
);


const Shahadah = ({ navigation }) => { 

  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>
             
              <ImageBackground source={image} style={styles.slidercontainer}>
       <View style={{width:"92%",alignSelf:"center",bottom:60}}>
              <Text style={{color:Colors.white,textAlign:"center",fontSize:13,fontFamily:"Poppins-SemiBold"}}>
              If you're ready to enter Islam, the process begins with the Shahadah, the declaration of faith. This step is simple but deeply meaningful.
              </Text>
              </View>      
              </ImageBackground>
            
              <ImageBackground style={{width:"92%",alignSelf:"center"}}>
<StepOne/>
<Text style={{bottom:88,left:70,color:Colors.primary,fontSize:18,fontFamily:"Poppins-SemiBold"}}>
Understand What You’re {'\n'}Declaring
              </Text>
              </ImageBackground>

              <View style={{width:"92%",alignSelf:"center",bottom:60}}>
              <Text style={{flex:1,color:Colors.secondary,fontSize:13,fontFamily:"Poppins-Light"}}>
                 Before you say the Shahadah, it’s important to know what you’re committing to:
              </Text>

              <Text style={{flex:1,color:Colors.intermediate,fontSize:13,top:10,fontFamily:"Poppins-Bold"}}>
              Belief in One God (Allah): 
              </Text>
             
              <Text style={{flex:1,color:Colors.secondary,top:10,fontSize:13,fontFamily:"PoppinsLight"}}>
              You’re affirming that there is no god worthy of worship except Allah.
              </Text>

              <Text style={{flex:1,color:Colors.intermediate,fontSize:13,top:20,fontFamily:"Poppins-Bold"}}>
              Belief in Muhammad as the Final Prophet:
              </Text>
             
              <Text style={{flex:1,color:Colors.secondary,top:20,fontSize:13,fontFamily:"PoppinsLight"}}>
              You’re declaring that Muhammad (peace be upon him) is Allah’s final messenger who brought the teachings of Islam.
              </Text>
              </View>

              <ImageBackground style={{width:"92%",alignSelf:"center",bottom:50}}>
<StepTwo/>
<Text style={{bottom:75,left:70,color:Colors.primary,fontSize:20,fontFamily:"Poppins-SemiBold"}}>
Recite the Shahadah
              </Text>
              </ImageBackground>
             
              <View style={{width:"92%",alignSelf:"center",bottom:100}}>
              <Text style={{flex:1,color:Colors.secondary,fontSize:13,fontFamily:"Poppins-Light"}}>
              When you’re ready, say the following{'\n'}words with sincerity:
              </Text>
              </View>

              <ImageBackground style={{bottom:80}}>
<StepThree/>

              </ImageBackground>
          
             

              <View style={{width:"92%",alignSelf:"center",bottom:50}}>
              <Text style={{color:Colors.primary,textAlign:"center",fontSize:25,fontFamily:"Poppins-SemiBold"}}>
              Welcome to Islam
              </Text>
            
              <Text style={{color:Colors.secondary,textAlign:"center",fontSize:13,fontFamily:"Poppins-Light"}}>
              May Allah guide and bless you on this{'\n'}beautiful path!
              </Text>

              </View>

             
           
       </ScrollView>

    </View>
  );
};

export default Shahadah;

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
  slidercontainer: {
    height:250,
    justifyContent: 'center',
  },
});