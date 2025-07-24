import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions} from 'react-native';
import { Colors} from '../../../theme';
LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');


const Significance = () => { 
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
       <ScrollView>
                 <View style={styles.slidercontainer1}>
                  <View style={{ height: 50,alignItems:"center",top:45}}>
                        <Text
                              style={{
                                height:100,
                                fontSize: 23,
                                color: "white",
                                fontWeight: "500",
                                fontFamily: "PoppinsLight",
                                textAlign:"center"
                              }}>
                             The Spiritual Significance{'\n'}of Ramadan
                        </Text>
                       
                        </View>
                        </View>

      

              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Ramadan holds profound spiritual significance for Muslims, symbolizing a period of dedication, introspection, and spiritual refinement. Fasting during this sacred month serves as a shield against sin, echoing the words of Prophet Muhammad (PBUH), who regarded fasting as a protective barrier against immoral behavior.</Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:30,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              In addition to fasting, Muslims engage in various acts of worship to deepen their spiritual connection with Allah (SWT). These include prayers, dhikr (remembrance of Allah), recitation of the Qur'an, charitable endeavors, and seeking forgiveness. Through these actions, Muslims endeavor to draw closer to their Creator, seeking spiritual elevation and increased rewards during this blessed month.
              </Text>
              </View>
            
    
        <View style={{height:100}}></View>
       </ScrollView>
    </View>
  );
};

export default Significance;

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
  slidercontainer1: {
    backgroundColor: Colors.primary,
    height: 150,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
   
  },
});
