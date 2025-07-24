import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions} from 'react-native';
import { Colors} from '../../../theme';
LogBox.ignoreAllLogs();
const { width} = Dimensions.get('window');


const ImportanceofFamily = () => { 
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
                             The Importance of Family{'\n'}During Ramadan
                        </Text>
                       
                        </View>
                        </View>

      

              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Ramadan heralds a time when Muslims unite, particularly within the embrace of family. The moments shared during Suhoor (pre-dawn meal) and Iftar (breaking fast meal) provide invaluable opportunities to forge and reinforce familial bonds.</Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:30,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              Engaging in activities such as assisting parents in meal preparations and reciting Qur'an with younger siblings fosters a sense of closeness and unity within the family unit. Additionally, communal acts like congregational prayers, shared readings of Islamic literature, and attending local Mosques and community Iftar events further enhance familial connections.
              </Text>
              </View>
              <View style={{width:width*0.92,alignSelf:"center",left:5}}>
              <Text style={{color:Colors.secondary,top:40,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
              As the paramount period for collective growth and learning among Muslims, Ramadan serves as the optimal month to weave enduring memories with our loved ones. By revitalizing family customs and traditions during this sacred time, we not only strengthen familial ties but also deepen our connection with Allah (SWT) as a cohesive unit.
              </Text>
              </View>
            
    
        <View style={{height:100}}></View>
       </ScrollView>
    </View>
  );
};

export default ImportanceofFamily;

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
