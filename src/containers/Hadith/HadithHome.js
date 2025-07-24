import React from 'react';
import {LogBox} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HadithsSB from "./HadithsSB"
import HadithsSM from "./HadithsSM"
import HadithsJT from "./HadithsJT"
import HadithsSAD from "./HadithsSAD"
import HadithsSAN from "./HadithsSAN"
import HadithsSIM from "./HadithsSIM"
import { Colors} from '../../theme';

LogBox.ignoreAllLogs();

const Tab = createMaterialTopTabNavigator();

const HadithHome = ({ navigation }) => { 
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarScrollEnabled:true,
      tabBarActiveTintColor: Colors.intermediate,
      tabBarInactiveTintColor:Colors.white,
      tabBarOptions: {
        scrollEnabled: true
    },
      tabBarStyle: {
        backgroundColor: Colors.primary,
      },
      tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 14,        
        textTransform:"capitalize"
      },
      tabBarIndicatorStyle: {
        borderBottomColor: Colors.intermediate,
        borderBottomWidth: 3,
        
      },
    }}>
    <Tab.Screen
      name="Sahih Bukhari"
      component={HadithsSB}
      options={{
        tabBarLabel: 'Sahih Bukhari',
      }}  />
       <Tab.Screen
      name="Sahih Muslim"
      component={HadithsSM}
      options={{
        tabBarLabel: 'Sahih Muslim',
      }} />
       <Tab.Screen
      name="Jami Tirmidhi"
      component={HadithsJT}
      options={{
        tabBarLabel: 'Jami Tirmidhi',
      }} />
       <Tab.Screen
      name="Sunan e Abi Duad"
      component={HadithsSAD}
      options={{
        tabBarLabel: 'Sunan e Abi Duad',
      }} />
       <Tab.Screen
      name="Sunan e Abi Nisai"
      component={HadithsSAN}
      options={{
        tabBarLabel: 'Sunan e Abi Nisai',
      }} />
        <Tab.Screen
      name="Sunan Ibn e Maja"
      component={HadithsSIM}
      options={{
        tabBarLabel: 'Sunan Ibn e Maja',
      }} />
   
  </Tab.Navigator>
  );
};

export default HadithHome;
