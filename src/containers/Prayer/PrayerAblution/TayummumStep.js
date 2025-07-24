import React from 'react';
import {  StatusBar, StyleSheet,View ,Text,LogBox, ScrollView,Dimensions} from 'react-native';
const { width,height} = Dimensions.get('window');
import { Colors} from '../../../theme';
import {TayummumStepOneSVG,TayummumStepTwoSVG,TayummumStepThreeSVG,TayummumStepFiveSVG,EclipseSVG} from '../../../assets/icons';
LogBox.ignoreAllLogs();


const TayummumStep = () => { 
 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
        
       <ScrollView>

          <View style={styles.slidercontainer}>
            <View style={{alignItems:"center",top:32}}>
              <Text
                    style={{
                      height:100,
                      fontSize: 22,
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "PoppinsLight",
                      textAlign:"center"
                    }}>
                   Tayammum{'\n'}Step by Step Guide
              </Text>
             
              </View>
              </View>

              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepOneSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>1</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%"}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Make your intention to perform tayummum</Text>
                      <Text numberOfLines={2} style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Begin Tayummum by saying</Text>
                      <Text numberOfLines={2} style={{top:7,fontSize:20,width:"95%",textAlign:"center",color:Colors.intermediate,fontWeight:"500",fontFamily:"AlQalamQuran"}}>بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</Text>
                      <Text numberOfLines={2} style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Transliteration: {'\n'}Bismillahir Rahmanir Raheem.</Text>

                      </View>
              </View>
          
              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer1}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepTwoSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>2</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%"}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Strike your hands on a clean surface</Text>
                      <Text style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Find a clean surface like soil, sand, or stone</Text>
                      <Text style={{top:20,fontSize:10,width:"95%",color:Colors.intermediate,fontWeight:"500",fontFamily:"Raleway"}}>Strike your hands lightly on the surface, ensuring your palms get covered with dust</Text>

                      </View>
              </View>

              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer2}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepThreeSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>3</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%"}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Wipe your face</Text>
                      <Text style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Using both hands, wipe your entire face with the dust from your palms</Text>
                      </View>
              </View>

              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer3}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepTwoSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>4</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%"}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Strike your hands again on the surface</Text>
                      <Text style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Strike your hands lightly on the surface again to gather dust</Text>

                      </View>
              </View>

              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer3}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepFiveSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>5</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%",}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Wipe your right arm with your left hand</Text>
                      <Text style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Wipe your right arm up to the elbow using your left hand, making sure you cover the entire arm</Text>

                      </View>
              </View>

              <View style={{flexDirection:"row", 
                      borderRadius:10,
                      borderWidth:1,
                      backgroundColor:Colors.white,
                      borderColor:Colors.bordercolor,marginTop:15,marginLeft:10,marginRight:10}}>
                      <View>
                    
                    <View style={styles.advImageContainer2}>
                     <View style={{left:8,top:8}}>
                      <TayummumStepFiveSVG/>
                      </View>
                      <View>
                  <View style={{bottom:115,left:15}}>
                <EclipseSVG/>
                </View>
                <Text style={{bottom:144,left:24,fontSize:20,fontWeight:"bold",color:"white",fontFamily:"Raleway"}}>6</Text>
                </View>
                    </View>
                    </View>
                      <View style={{left:15,width:"62%"}}>
                      <Text numberOfLines={2} style={{top:10,fontSize:13,width:"95%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Wipe your left arm with your right hand</Text>
                      <Text style={{top:10,fontSize:10,width:"95%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>Wipe your left arm up to the elbow using your right hand, ensuring the whole arm is wiped properly</Text>
                      
                      </View>
              </View>

              <Text numberOfLines={2} style={{top:20,left:15,fontSize:15,width:"92%",color:Colors.primary,fontWeight:"500",fontFamily:"Raleway"}}>Tayammum is Complete</Text>
                      <Text style={{top:25,left:15,fontSize:12,width:"92%",color:Colors.secondary,fontWeight:"500",fontFamily:"Raleway"}}>After wiping both arms, your Tayammum is complete, and you are now purified for prayer and other acts of worship</Text>
                      <Text style={{top:30,left:15,fontSize:12,width:"92%",color:Colors.intermediate,fontWeight:"500",fontFamily:"Raleway"}}>Note: Tayammum can be performed when water is unavailable or its use may cause harm.</Text> 
        <View style={{height:50}}></View>
       </ScrollView>
    
    </View>
  );
};

export default TayummumStep;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  slidercontainer: {
    backgroundColor: Colors.primary,
    height: 120,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  advImageContainer: {
   height: 150,
   flexDirection:'column',
 },
 advImageContainer1: {
   height: 150,
   flexDirection:'column',
 },
 advImageContainer2:{
   height: 150,
   flexDirection:'column',
 },
 advImageContainer3:{
   height: 150,
   flexDirection:'column',
 },
 advImage: {
   flex:1,
   width: 180,
   height: 120,
   resizeMode: 'cover',
   borderTopLeftRadius:10,
   borderBottomLeftRadius:10,
 },
 submit: {
   backgroundColor: Colors.transparent,
   borderRadius: 15,
   borderWidth: 1.5,
   borderColor: Colors.primary,
   height:25,
   width:70,
   top:10,
   left:5
 },
 submitText: {
   fontSize:12,
   flexDirection:"column",
   color: Colors.primary,
   alignSelf:'center',
   fontWeight:"500",
   fontFamily:"Raleway",
   top:1
 },
});
