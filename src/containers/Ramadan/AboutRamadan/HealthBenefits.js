import React from 'react';
import {  StatusBar, StyleSheet,View ,ScrollView,Text,LogBox,Dimensions,ImageBackground} from 'react-native';
import { Colors} from '../../../theme';
const { width} = Dimensions.get('window');
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1734071182/aboutusimage.png'};
LogBox.ignoreAllLogs();

const HealthBenefits = () => { 
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
               What are the Health Benefits{'\n'}of 
               Ramadan Fasting?
          </Text>
         
          </View>
          </View>
                         
              <View style={{width:"92%",alignSelf:"center",left:3}}>
              <Text style={{color:Colors.secondary,top:20,fontSize:12,fontFamily:"PoppinsLight"}}>
              Ramadan fasting offers a multitude of health advantages supported by numerous studies:
              </Text>
              </View>

             

              <View style={{width:"92%",alignSelf:"center",left:5,top:10}}>
              
              <Text style={{color:Colors.intermediate,top:25,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Hypertension Reduction:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Research published in The American Journal of Medicine suggests that intermittent fasting during Ramadan can lower high blood pressure, enhancing heart health and reducing cardiovascular risks.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:35,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Enhanced Brain Function:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting boosts nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF), vital for neuron growth and function, potentially lowering the risk of Alzheimer's disease.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:45,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Improved Body Composition:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting can lead to decreased body fat percentage while increasing muscle mass and overall health.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:55,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Reduced Cancer Risk:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting helps starve cancer cells by preventing them from utilizing ketones produced during fasting, potentially reducing cancer risk.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:65,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Stimulated Autophagy:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting prompts autophagy, facilitating cellular renewal and longevity, while guarding against aging-related conditions like cancer and neurodegenerative disorders.
              </Text>
              </Text>

              <Text style={{color:Colors.intermediate,top:75,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Inflammation Reduction:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting lowers inflammation by altering gut microbiota, enriching it with anti-inflammatory bacteria.
              </Text>
              </Text>
              <Text style={{color:Colors.intermediate,top:85,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Regulated Sleep Patterns:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting aids in regulating the circadian rhythm, facilitating better sleep initiation.
              </Text>
              </Text>
              <Text style={{color:Colors.intermediate,top:95,fontSize:12,flexDirection:"row",fontFamily:"PoppinsLight"}}>
              {""}{"\u2B24"}{" "}Normalized Ghrelin Levels:
              <Text style={{color:Colors.secondary,top:25,fontSize:12,fontFamily:"PoppinsLight"}}>
              {'\n'}Fasting regulates hunger hormone ghrelin, aiding weight loss without excessive hunger.
              </Text>
              </Text>

              </View>
 
        <View style={{height:130}}></View>
       </ScrollView>
    </View>
  );
};

export default HealthBenefits;

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
  slidercontainer1: {
    backgroundColor: Colors.primary,
    height: 150,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
   
  },
});
