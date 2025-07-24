import React from 'react';
import {LogBox,View,Text,StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstRakat from "./FirstRakat"
import SecondRakat from "./SecondRakat"
import ThirdRakat from "./ThirdRakat"

import { Colors} from '../../../../../theme';

LogBox.ignoreAllLogs();

const Tab = createMaterialTopTabNavigator();

const IshaWitr = ({ navigation }) => { 
  return (
    <View style={styles.containerMain}>
    <View style={styles.slidercontainer}>
    <View style={{ height: 50,alignItems:"center",top:22}}>
          <Text
                style={{
                  height:100,
                  fontSize: 22,
                  color: "white",
                  fontWeight: "500",
                  fontFamily: "PoppinsLight",
                  textAlign:"center"
                }}>
                Isha Prayer{'\n'}Witr: 3 rak’ah
          </Text>
         
          </View>
          </View>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: Colors.intermediate,
      tabBarInactiveTintColor: Colors.primary,
      tabBarStyle: {
        backgroundColor: Colors.white,
      },
      tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight:"bold",
        fontFamily:"Raleway",
        textTransform:"capitalize"
      },
      tabBarIndicatorStyle: {
        borderBottomColor: Colors.intermediate,
        borderBottomWidth: 3,
      },
    }}>
     <Tab.Screen
      name="1st rakah"
      component={FirstRakat}
      options={{
        tabBarLabel:"1st rakah",
      }}  />
    <Tab.Screen
        name="2nd rakah"
      component={SecondRakat}
      options={{
        tabBarLabel:"2nd rakah",
      }} />
       <Tab.Screen
      name="3rd rakah"
      component={ThirdRakat}
      options={{
        tabBarLabel:"3rd rakah",
      }}  />
      
  </Tab.Navigator>
  </View>
  );
};

export default IshaWitr;
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white
  },
  slidercontainer: {
    backgroundColor: Colors.primary,
    height: 120,
   
  },
});