import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions} from 'react-native';
import { Colors} from '../../../theme';
LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');


const ZakatGiving = () => { 
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
                             Ramadan: An Ideal{'\n'}Moment for Zakat Giving
                        </Text>
                       
                        </View>
                        </View>

      

              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Within the sacred confines of Ramadan, the Power of Zakat finds its most opportune moment. This holy month beckons us to pause, reflect, and transcend, shedding detrimental habits in favor of virtuous ones, amplifying our acts of worship and benevolence, and honing the art of self-discipline – all in devotion to Allah SWT.</Text>
              </View>
                          
    
        <View style={{height:100}}></View>
       </ScrollView>
    </View>
  );
};

export default ZakatGiving;

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
