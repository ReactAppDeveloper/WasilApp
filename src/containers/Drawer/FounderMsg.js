import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Image, ImageBackground} from 'react-native';
import { Colors,Images} from '../../theme';
LogBox.ignoreAllLogs();

const ImageFirst = () => (
    <Image
    source={Images.FounderOne}
      style={{width:"100%"}}
    />
  );

  const ImageSecond = () => (
    <Image
    source={Images.FounderTwo}
      style={{resizeMode:"contain"}}
    />
  );
      
const FounderMsg = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

             <ImageBackground style={{alignItems:"center",height:320}}>
                   <ImageFirst/>

             <View style={{bottom:165}}>
             <ImageSecond/>
             </View>
              </ImageBackground>

             
              <View style={{width:"92%",alignSelf:"center",left:3,top:10}}>
              <Text style={{color:Colors.black,top:10,fontSize:20,fontFamily:"PoppinsLight"}}>
              Assalamu Alaikum,
             
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:3,top:20}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              The journey of  
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil: Islamic App
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "} began with a simple vision to create a platform that seamlessly integrates the timeless wisdom of Islam with the power of modern technology. As Muslims, we face the challenge of staying connected to our faith amidst the fast pace of life. Wasil was born out of the desire to make that connection easier, more accessible, and deeply personal for everyone. 
              
              </Text>
              </Text>
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:3,top:40}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              Our vision is to empower Muslims around the world with a digital companion that supports their spiritual growth, fosters learning, and builds a global community rooted in Islamic values. Through   
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {","} we aim to inspire and guide you on your journey of faith whether you are a seasoned practitioner or just beginning to explore Islam.
              
              </Text>
              </Text>
              </Text>
              </View>

              <View style={{width:"92%",alignSelf:"center",left:3,top:60}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              Together, let's embark on this transformative journey with
              <Text style={{color:Colors.intermediate,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {" "}Wasil
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              {","} your ultimate Islamic companion.
              
              </Text>
              </Text>
              </Text>
              </View>
            
              <View style={{width:"92%",alignSelf:"center",left:5,top:80}}>
             
              <Text style={{color:Colors.secondary,top:15,fontSize:12,fontFamily:"PoppinsLight"}}>
              Regards
              </Text>
              </View> 

              <View style={{width:"92%",alignSelf:"center",left:5,top:90}}>
              <Text style={{color:Colors.primary,top:20,fontSize:14,textTransform:"capitalize",fontFamily:"Raleway"}}>Akif M Shaikh</Text>             
              <Text style={{color:Colors.secondary,top:15,fontSize:12,fontFamily:"PoppinsLight"}}>
              Founder
              </Text>
              </View>   
        <View style={{height:120}}></View>
       </ScrollView>
    </View>
  );
};

export default FounderMsg;

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
});
