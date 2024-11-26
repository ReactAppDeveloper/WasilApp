import React from 'react';
import {Colors} from '../theme';
import {View,TouchableOpacity} from 'react-native';
import {FavouriteSVG,HeartfilledSVG} from '../assets/icons';
import useStore from '../store'
import useStorehadith from '../hadithstore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Home and Navigation Drawer
import Home from '../containers/Home/Home'
import GuestDrawer from '../containers/Drawer/guestdrawer'
import AboutUs from '../containers/Drawer/AboutUs'
import RateFeedback from '../containers/Drawer/RateFeedback'
import ContactUs from '../containers/Drawer/ContactUs'
import FAQs from '../containers/Drawer/FAQs'
import Privacypolicy from '../containers/Drawer/Privacypolicy'
import FounderMsg from '../containers/Drawer/FounderMsg'

//Onboarding
import {OnboardingOneScreen} from '../containers/onboarding/onboarding-one-screen';
import {OnboardingTwoScreen} from '../containers/onboarding/onboarding-two-screen';
import {OnboardingThirdScreen} from '../containers/onboarding/onboarding-third-screen';
import {OnboardingFourthScreen} from '../containers/onboarding/onboarding-fourth-screen';
import {Onboardingfifth} from '../containers/onboarding/Onboardingfifth';
import {Onboardingsixth} from '../containers/onboarding/Onboardingsixth';

//Tasbih
import Tasbih from '../containers/Tasbih/Tasbih'
import TasbihOne from '../containers/Tasbih/AllTasbihs/TasbihOne'
import TasbihTwo from '../containers/Tasbih/AllTasbihs/TasbihTwo'
import TasbihThree from '../containers/Tasbih/AllTasbihs/TasbihThree'
import TasbihFour from '../containers/Tasbih/AllTasbihs/TasbihFour'
import TasbihFive from '../containers/Tasbih/AllTasbihs/TasbihFive'
import TasbihSix from '../containers/Tasbih/AllTasbihs/TasbihSix'
import TasbihSeven from '../containers/Tasbih/AllTasbihs/TasbihSeven'
import TasbihEight from '../containers/Tasbih/AllTasbihs/TasbihEight'
import TasbihNine from '../containers/Tasbih/AllTasbihs/TasbihNine'
import TasbihTen from '../containers/Tasbih/AllTasbihs/TasbihTen'
import TasbihEleven from '../containers/Tasbih/AllTasbihs/TasbihEleven'
import TasbihTwelve from '../containers/Tasbih/AllTasbihs/TasbihTwelve'
import TasbihThirteen from '../containers/Tasbih/AllTasbihs/TasbihThirteen'
import TasbihFourteen from '../containers/Tasbih/AllTasbihs/TasbihFourteen'
import TasbihFifteen from '../containers/Tasbih/AllTasbihs/TasbihFifteen'
import TasbihSixteen from '../containers/Tasbih/AllTasbihs/TasbihSixteen'
import TasbihSeventeen from '../containers/Tasbih/AllTasbihs/TasbihSeventeen'
import TasbihEighteen from '../containers/Tasbih/AllTasbihs/TasbihEighteen'
import TasbihNinteen from '../containers/Tasbih/AllTasbihs/TasbihNinteen'
import TasbihTwenty from '../containers/Tasbih/AllTasbihs/TasbihTwenty'
import TasbihTwentyOne from '../containers/Tasbih/AllTasbihs/TasbihTwentyOne'
import TasbihTwentyTwo from '../containers/Tasbih/AllTasbihs/TasbihTwentyTwo'
import TasbihTwentyThree from '../containers/Tasbih/AllTasbihs/TasbihTwentyThree'
import TasbihTwentyFour from '../containers/Tasbih/AllTasbihs/TasbihTwentyFour'
import TasbihTwentyFive from '../containers/Tasbih/AllTasbihs/TasbihTwentyFive'
import TasbihTwentySix from '../containers/Tasbih/AllTasbihs/TasbihTwentySix'
import TasbihTwentySeven from '../containers/Tasbih/AllTasbihs/TasbihTwentySeven'
import TasbihTwentyEight from '../containers/Tasbih/AllTasbihs/TasbihTwentyEight'
import TasbihTwentyNine from '../containers/Tasbih/AllTasbihs/TasbihTwentyNine'
import TasbihThirty from '../containers/Tasbih/AllTasbihs/TasbihThirty'
import TasbihThirtyOne from '../containers/Tasbih/AllTasbihs/TasbihThirtyOne'
import TasbihThirtyTwo from '../containers/Tasbih/AllTasbihs/TasbihThirtyTwo'


const Stack = createNativeStackNavigator();

  const AppNavigator = ({onboarded}) => {
    const {favourites} = useStore();  // Move it inside the functional component
    const {favouriteshadith} = useStorehadith();
    
    return (
      <Stack.Navigator initialRouteName={onboarded ? 'Guest' : 'onboarding-one'}>
      <Stack.Screen name="Guest" component={GuestDrawer} options={{animation:'slide_from_right',headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{animation:'slide_from_right',headerTitle:"Home",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="onboarding-one" component={OnboardingOneScreen} options={{headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="onboarding-two" component={OnboardingTwoScreen} options={{  headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="onboarding-third" component={OnboardingThirdScreen} options={{  headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="onboarding-fourth" component={OnboardingFourthScreen} options={{  headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="Onboardingfifth" component={Onboardingfifth} options={{  headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="Onboardingsixth" component={Onboardingsixth} options={{  headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="FAQs" component={FAQs} options={{animation:'slide_from_right',headerTitle:"FAQs",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="AboutUs" component={AboutUs} options={{animation:'slide_from_right',headerTitle:"About Us",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Privacypolicy" component={Privacypolicy} options={{animation:'slide_from_right',headerTitle:"Privacy Policy",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="ContactUs" component={ContactUs} options={{animation:'slide_from_right',headerTitle:"Contact Us",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="RateFeedback" component={RateFeedback} options={{animation:'slide_from_right',headerTitle:"Rate & Feedback",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="FounderMsg" component={FounderMsg} options={({ route }) => ({ title: "Founder Message",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
     <Stack.Screen name="Tasbih" component={Tasbih} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihOne" component={TasbihOne} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwo" component={TasbihTwo} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihThree" component={TasbihThree} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihFour" component={TasbihFour} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihFive" component={TasbihFive} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihSix" component={TasbihSix} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihSeven" component={TasbihSeven} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihEight" component={TasbihEight} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihNine" component={TasbihNine} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="TasbihTen" component={TasbihTen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihEleven" component={TasbihEleven} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwelve" component={TasbihTwelve} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihThirteen" component={TasbihThirteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihFourteen" component={TasbihFourteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihFifteen" component={TasbihFifteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihSixteen" component={TasbihSixteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihSeventeen" component={TasbihSeventeen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihEighteen" component={TasbihEighteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihNinteen" component={TasbihNinteen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwenty" component={TasbihTwenty} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwentyOne" component={TasbihTwentyOne} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="TasbihTwentyTwo" component={TasbihTwentyTwo} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="TasbihTwentyThree" component={TasbihTwentyThree} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="TasbihTwentyFour" component={TasbihTwentyFour} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="TasbihTwentyFive" component={TasbihTwentyFive} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihTwentySix" component={TasbihTwentySix} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwentySeven" component={TasbihTwentySeven} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwentyEight" component={TasbihTwentyEight} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TasbihTwentyNine" component={TasbihTwentyNine} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihThirty" component={TasbihThirty} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihThirtyOne" component={TasbihThirtyOne} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="TasbihThirtyTwo" component={TasbihThirtyTwo} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
     

</Stack.Navigator>
    );
  };
  
   

export default AppNavigator;