import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import {  createDrawerNavigator, DrawerContentScrollView,} from '@react-navigation/drawer';
import { Colors } from '../../theme';
import Home from '../Home/Home';
import {WasilLogoDrawerSVG,HelpSVG,FollowUsSVG,RateSVG,ContactSVG,PolicySVG,FounderSVG,FAQsSVG,ShareSVG,ClosePlayDrawerSVG,FacebookFollowUpSVG,YoutubeFollowUpSVG,InstagramFollowUpSVG,TiktokFollowUpSVG} from '../../assets/icons';
import SplashScreen from 'react-native-splash-screen';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
const Drawer = createDrawerNavigator();

function CustomDrawerContent({props,navigation}) {
  const [showmemodal,setshowmemodal] = useState(false);
  const _toggleModal = () => {
    setshowmemodal(true)
 };
 const closetoggleModal = () => {
   setshowmemodal(false)
 };
  return (
    <DrawerContentScrollView {...props} >
      
        <View style={{height:250,bottom:10,alignItems:'center',backgroundColor:Colors.primary}}>
          <View style={{top:80}}>
          <WasilLogoDrawerSVG/>
          </View>
        </View>

        <View style={{backgroundColor:Colors.intermediate,height: 5,bottom:10}}/>
      
      <View style={{top:10,marginLeft:10}}>
  
  
        <TouchableOpacity onPress={() => {navigation.navigate('AboutUs')}}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
           <View style={{paddingLeft:10,paddingTop:15}}>
              <HelpSVG/>
           </View>
          
           <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
              About Us
           </Text>
        </View>
        </TouchableOpacity> 

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>

        <TouchableOpacity onPress={() => {navigation.navigate('FounderMsg')}}>
           <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
           <View style={{paddingLeft:10,paddingTop:15}}>
              <FounderSVG/>
           </View>
          
           <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
              Founder Message
           </Text>
        </View>
        </TouchableOpacity> 

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>

        <TouchableOpacity
         onPress={async () => {
          let options = {
            message:"Wasil Islamic App | www.wasil.io"+"\n\n"+"https://play.google.com/store/apps/details?id=com.wasilislamicapp"
          };
          Share.open(options)
          .then(r => {
            console.log(r);
          })
          .catch(e => {
           console.log(r);
          });}}
        >
           <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
           <View style={{paddingLeft:10,paddingTop:15}}>
              <ShareSVG/>
           </View>
          
           <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
              Share Wasil App
           </Text>
        </View>
        </TouchableOpacity> 


        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>


        <TouchableOpacity onPress={_toggleModal}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:15}}>
               <FollowUsSVG/>
            </View>
            <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
               Follow Us
            </Text>
        </View>
        
        </TouchableOpacity>
        <Modal isVisible={showmemodal} animationType={'none'}>
                  <View
                    style={{
                      width: "100%",
                      height: 220,
                      alignSelf:"center",
                      borderRadius: 10,
                      marginTop: 50,
                      borderColor:Colors.white,
                      backgroundColor: 'white',
                    }}>
                   <View style = {{resizeMode:"contain",zIndex:1,top:2,alignSelf:"flex-end",height:70,position:"absolute"}}>
       <TouchableOpacity onPress={closetoggleModal}>
       <ClosePlayDrawerSVG/>
       </TouchableOpacity>
       </View>       
                   
                    <View style={{borderColor:Colors.transparent,borderTopLeftRadius:10,borderTopRightRadius:10,width:"100%",backgroundColor:Colors.primary,height:50}}>
                    <Text style={{fontSize: 20,color:Colors.white,top:10,alignSelf: "center",fontWeight:"bold",fontFamily: "PoppinsLight"}}>
                       Follow Us
                    </Text>
                    </View>
                    <View style={{flexDirection:"row",top:10}}>
                      <View style={{top:11,left:10}}>
                    <FacebookFollowUpSVG/>
                    </View>
                    <TouchableOpacity onPress={()=>{ Linking.openURL("https://www.facebook.com/wasilislamic")}}>
                    <Text style={{left:15,fontSize: 14,color:Colors.secondary,top:11,alignSelf:"flex-start",fontFamily: "PoppinsLight"}}>
                      https://www.facebook.com/wasilislamic
                    </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row",top:20}}>
                      <View style={{top:11,left:10}}>
                    <YoutubeFollowUpSVG/>
                    </View>
                    <TouchableOpacity onPress={()=>{ Linking.openURL("https://www.youtube.com/@WasilIslamicChannel")}}>
                    <Text style={{left:15,fontSize: 13,color:Colors.secondary,top:13,alignSelf:"flex-start",fontFamily: "PoppinsLight"}}>
                    https://www.youtube.com/@WasilIslamicChannel
                    </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row",top:35}}>
                      <View style={{top:11,left:10}}>
                      <TiktokFollowUpSVG/>    
                    </View>
                    <TouchableOpacity onPress={()=>{ Linking.openURL("https://www.tiktok.com/@WasilIslamic")}}>
                    <Text style={{left:15,fontSize: 14,color:Colors.secondary,top:11,alignSelf:"flex-start",fontFamily: "PoppinsLight"}}>
                    https://www.tiktok.com/@WasilIslamic  
                    </Text>
                    </TouchableOpacity>
                    </View>
                  
                    <View style={{flexDirection:"row",top:45}}>
                      <View style={{top:11,left:10}}>
                      <InstagramFollowUpSVG/>
                    </View>
                    <TouchableOpacity onPress={()=>{ Linking.openURL("https://instagram.com/wasilislamic")}}>
                    <Text style={{left:15,fontSize: 14,color:Colors.secondary,top:11,alignSelf:"flex-start",fontFamily: "PoppinsLight"}}>
                     https://instagram.com/wasilislamic
                    </Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </Modal>

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>

        <TouchableOpacity onPress={() => navigation.navigate("RateFeedback")}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:15}}>
               <RateSVG/>
            </View>
            <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
               Rate & Feedback
            </Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>
        
        <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:15}}>
               <ContactSVG/>
            </View>
            <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
               Contact us
            </Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>
        
        <TouchableOpacity onPress={() => navigation.navigate("FAQs")}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:15}}>
               <FAQsSVG/>
            </View>
            <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
               FAQ's
            </Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>
       
        <TouchableOpacity onPress={() => navigation.navigate("Privacypolicy")}>
        <View style={{backgroundColor: Colors.white, margin:10 ,bottom:10,height: 30,flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:15}}>
               <PolicySVG/>
            </View>
            <Text style={{fontSize: 14, top:13,left:15,color:Colors.lightgreytasbih,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
            Privacy Policy
            </Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:Colors.bordercolor,height: 0.7,marginLeft:20,marginRight:25}}/>
        

      </View>

      <View style={{height:200,justifyContent:'center',alignItems:'center',top:30,flexDirection:"row"}}>
                 
      </View>   
    
             <Text style={{fontSize: 14,textAlign:"center",height:50,top:20,color:Colors.primary,flex:1,alignSelf: "center",fontFamily: "PoppinsLight"}}>
                App Version 1.0
             </Text>
  
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home}
        options={{
        headerTintColor: Colors.white,
        headerStyle: {
        backgroundColor: Colors.primary},
        headerTitleAlign:"center",
        headerTitleStyle: {
        color: Colors.intermediate,
        fontSize:18
        },
      }}
      />
    </Drawer.Navigator>
  );
}

export default function GuestDrawer() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  
  }, []);
   return (  
      <MyDrawer/>
  );
}