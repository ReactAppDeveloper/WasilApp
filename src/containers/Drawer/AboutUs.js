import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../theme';
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1734071182/aboutusimage.png'};
LogBox.ignoreAllLogs();

const AboutUs = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

             <View style={{alignItems:"center"}}>
             <ImageBackground source={imageone} resizeMode="contain" imageStyle={{top:10}} style={styles.slidercontainer}>
             </ImageBackground>
              </View>

             
              <View style={{width:"92%",alignSelf:"center",left:3}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              Welcome to
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil: Islamic App
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {","} your trusted companion on a spiritual journey through Islam. We’ve designed  
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil
              </Text>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}to be more than just an app. It’s a comprehensive platform that merges timeless Islamic teachings with the convenience of modern technology. Whether you're a lifelong follower, a new revert, or simply curious about the beauty of Islam,
              </Text>
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil 
              </Text>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}provides the tools and resources to deepen your faith, learn, and grow.
              </Text>
              </Text>
              </Text>
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:3,top:10}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              At 
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {","} we believe that your spiritual path is personal and unique. Our goal is to support that journey by offering a seamless experience, helping you stay connected to your faith through daily prayer guides, Qur'anic insights, community engagement, and much more. With a user-friendly interface and carefully curated features, Wasil ensures that your Islamic experience is not only easy but enriching.
              
              </Text>
              </Text>
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:30}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Key Features</Text>
              
              <Text style={{color:Colors.intermediate,top:25,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Accurate Prayer Times:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Stay up-to-date with precise {"    "}prayer times based on your location.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:35,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Qur’an Reader:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Access a beautifully designed Qur’an reader with translation and tafsir.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:45,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Daily Duas & Supplications:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}A collection of daily duas to enhance your connection to Allah.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:55,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Hadith Collections:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Explore authentic Hadith to gain deeper knowledge of the Prophet’s teachings.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:65,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Qibla Direction & Mosque Locator:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Easily find the direction of Qibla and nearby mosques.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:75,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Audio & Video Content:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Listen to Islamic lectures, podcasts, and watch videos on various topics.
              </Text>
              </Text>

              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:100}}>
              
              <Text style={{color:Colors.secondary,top:25,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Join the Wasil Islamic App community today, where faith meets innovation. Let us guide you in nurturing your spiritual connection every step of the way.
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:5,top:120}}>
             
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {""}“Wasil Islamic App”
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}your ultimate Islamic companion, 
              now and always.  
              </Text>
              </Text>
              </View>

            

              <View style={{width:"92%",alignSelf:"center",left:5,top:140}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Akif M Shaikh</Text>             
              <Text style={{color:Colors.secondary,top:15,fontSize:12,fontFamily:"PoppinsLight"}}>
              Founder
              </Text>
              </View>    
        <View style={{height:180}}></View>
       </ScrollView>
    </View>
  );
};

export default AboutUs;

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
