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
import HijriDates from '../containers/Drawer/HijriDates'

//Onboarding
import {Onboarding} from '../containers/onboarding/Onboarding';

//Quran Section
import Quran from '../containers/Quran/Quran'
import DashBoard from '../containers/Quran/screens/DashBoard'

//Reel Section
import ReelsComponent from '../containers/Reel/ReelsComponent'

//Dua Section
import Dua from '../containers/Dua/Dua'
import DuaDetail from '../containers/Dua/DuaDetail'
import DuaFavourites from '../containers/Dua/DuaFavourites'

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

//Videos Section
import Videos from '../containers/Videos/Videos'
import SpeakersVideosPlaying from '../containers/Videos/SpeakersVideosPlaying'
import VideoPlaying from '../containers/Videos/VideoPlaying'
import BySpeakers from '../containers/Videos/BySpeakers'
import SpeakersDetail from '../containers/Videos/SpeakersDetail'
import ChannelsDetail from '../containers/Videos/ChannelsDetail'
import RecitaionDetail from '../containers/Videos/RecitaionDetail'

//Qibla Section
import QiblaCompass from '../containers/Qibla/QiblaCompass'

//Hadith Section
import HadithHome from '../containers/Hadith/HadithHome'
import HadithsDetail from '../containers/Hadith/HadithsDetail'
import HadithsFavourites from '../containers/Hadith/HadithsFavourites'

//Prayer Section
import PrayerMosque from '../containers/Prayer/PrayerMosque/PrayerMosque'
import Ablution from '../containers/Prayer/PrayerAblution/Ablution'
import IntoWudhu from '../containers/Prayer/PrayerAblution/IntoWudhu'
import AblutionWaduStep from '../containers/Prayer/PrayerAblution/AblutionWaduStep'
import TayummumStep from '../containers/Prayer/PrayerAblution/TayummumStep'
import WudhuGuideline from '../containers/Prayer/PrayerAblution/WudhuGuideline'
import Nullifies from '../containers/Prayer/PrayerAblution/Nullifies'
import Faqs from '../containers/Prayer/PrayerAblution/Faqs'
import Tayammum from '../containers/Prayer/PrayerAblution/Tayammum'
import WudhuVideos from '../containers/Prayer/PrayerAblution/WudhuVideos'
import VideoPlay from '../containers/Prayer/PrayerAblution/VideoPlay'
import PrayerGuide from '../containers/Prayer/PrayerGuide/PrayerGuide'
import FajrSunnah from '../containers/Prayer/PrayerGuide/Fajr/Sunnah/FajrSunnah'
import FajrFarz from '../containers/Prayer/PrayerGuide/Fajr/Farz/FajrFarz'
import DhuhrFirst4Sunnah from '../containers/Prayer/PrayerGuide/Dhuhr/First4Sunnah/DhuhrFirst4Sunnah'
import DhuhrFirst4Farz from '../containers/Prayer/PrayerGuide/Dhuhr/First4Farz/DhuhrFirst4Farz'
import Dhuhr2Sunnah from '../containers/Prayer/PrayerGuide/Dhuhr/SecondSunnah/Dhuhr2Sunnah'
import Dhuhr2Nafil from '../containers/Prayer/PrayerGuide/Dhuhr/SecondNafil/Dhuhr2Nafil'
import AsrFirst4Sunnah from '../containers/Prayer/PrayerGuide/Asr/First4Sunnah/AsrFirst4Sunnah'
import AsrFirst4Farz from '../containers/Prayer/PrayerGuide/Asr/First4Farz/AsrFirst4Farz'
import MaghribFarz from '../containers/Prayer/PrayerGuide/Maghrib/FirstFarz/MaghribFarz'
import Maghrib2Sunnah from '../containers/Prayer/PrayerGuide/Maghrib/SecondSunnah/Maghrib2Sunnah'
import Maghrib2Nafil from '../containers/Prayer/PrayerGuide/Maghrib/SecondNafil/Maghrib2Nafil'
import IshaFirst4Sunnah from '../containers/Prayer/PrayerGuide/Isha/First4Sunnah/IshaFirst4Sunnah'
import IshaFirst4Farz from '../containers/Prayer/PrayerGuide/Isha/First4Farz/IshaFirst4Farz'
import Isha2Sunnah from '../containers/Prayer/PrayerGuide/Isha/SecondSunnah/Isha2Sunnah'
import Isha2Nafil from '../containers/Prayer/PrayerGuide/Isha/SecondNafil/Isha2Nafil'
import IshaWitr from '../containers/Prayer/PrayerGuide/Isha/Witr/IshaWitr'
import IshaLast2Nafil from '../containers/Prayer/PrayerGuide/Isha/LastNafil/IshaLast2Nafil'

//Greetings Section
import Greetings from '../containers/Greetings/Greetings';
import GreetingCardList from '../containers/Greetings/GreetingCardList';
import GreetingCardShare from '../containers/Greetings/GreetingCardShare';

//Shahadah Section
import Shahadah from '../containers/Shahadah/Shahadah';

import RamadanHome from '../containers/Ramadan/RamadanHome'
import AboutMain from '../containers/Ramadan/AboutRamadan/AboutMain'
import UnderstandingRamadan from '../containers/Ramadan/AboutRamadan/UnderstandingRamadan'
import HealthBenefits from '../containers/Ramadan/AboutRamadan/HealthBenefits'
import Significance from '../containers/Ramadan/AboutRamadan/Significance'
import ImportanceofFamily from '../containers/Ramadan/AboutRamadan/ImportanceofFamily'
import ZakatGiving from '../containers/Ramadan/AboutRamadan/ZakatGiving'
import RamadanGreetingsMain from '../containers/Ramadan/RamadanGreetings/RamadanGreetingsMain'
import RamadanGreetingsShare from '../containers/Ramadan/RamadanGreetings/RamadanGreetingsShare'
import RamadanVideosMain from '../containers/Ramadan/RamadanVideos/RamadanVideosMain'
import RamadanVideosPlay from '../containers/Ramadan/RamadanVideos/RamadanVideosPlay'
import RamadanCalendarHome from '../containers/Ramadan/RamadanCalendar/RamadanCalendarHome'
import RamadanAllDua from '../containers/Ramadan/RamadanAllDua'

const Stack = createNativeStackNavigator();

  const AppNavigator = ({onboarded}) => {
    const {favourites} = useStore();  // Move it inside the functional component
    const {favouriteshadith} = useStorehadith();
    
    return (
      <Stack.Navigator initialRouteName={onboarded ? 'Guest' : 'Onboarding'}>
      <Stack.Screen name="Guest" component={GuestDrawer} options={{animation:'slide_from_right',headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{animation:'slide_from_right',headerTitle:"Home",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false,animation:"slide_from_right"}}/>
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
       <Stack.Screen name="HijriDates" component={HijriDates} options={({ route }) => ({ title: "Hijri Dates Adjustment",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
              backgroundColor: Colors.primary
            }})}/>   
      <Stack.Screen name="Quran" component={Quran} options={{headerShown: false,animation:"slide_from_right"}}/>     
      <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false,animation:"slide_from_right"}}/>
      <Stack.Screen name="Reels" component={ReelsComponent} options={{headerShown: false,animation:"slide_from_right"}}/>

        <Stack.Screen name="Dua" component={Dua} options={({navigation}) => ({ headerTitle: "Dua",headerRight: () => (
          <View style={{height:50,width:50}}>
               <View>
               {favourites.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:18,left:20}} onPress={() => {
        navigation.navigate('DuaFavourites');
      }}>
        <HeartfilledSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:18,left:20}} onPress={() => {
          navigation.navigate('DuaFavourites');
        }}>
          <FavouriteSVG/>
          </TouchableOpacity>
      )}
    
              
  </View>
         
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
       }})}/>
       <Stack.Screen name="DuaDetail" component={DuaDetail} options={({ route }) => ({ title: "Dua",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="DuaFavourites" component={DuaFavourites} options={({ route }) => ({ title: "Dua Favorite",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
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
       <Stack.Screen name="Videos" component={Videos} options={{animation:'slide_from_right',headerTitle:"Islamic Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="SpeakersVideosPlaying" component={SpeakersVideosPlaying} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="VideoPlaying" component={VideoPlaying} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="BySpeakers" component={BySpeakers} options={({ route }) => ({ title: "Durs and Podcast",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="SpeakersDetail" component={SpeakersDetail} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
       <Stack.Screen name="ChannelsDetail" component={ChannelsDetail} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="RecitaionDetail" component={RecitaionDetail} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        <Stack.Screen name="QiblaCompass" component={QiblaCompass} options={{animation:'slide_from_right',headerTitle:"Qibla",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="HadithHome" component={HadithHome} options={({navigation}) => ({ headerTitle: "Hadith",headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouriteshadith.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:18,left:20}} onPress={() => {
        navigation.navigate('HadithsFavourites');
      }}>
        <HeartfilledSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:18,left:20}} onPress={() => {
          navigation.navigate('HadithsFavourites');
        }}>
          <FavouriteSVG/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18},headerStyle: {
        backgroundColor: Colors.primary
       }})}/>
       <Stack.Screen name="HadithsDetail" component={HadithsDetail} options={({ route }) => ({ title: route.params.name.length >= 25 ? route.params.name.slice(0, 24)+"..." : route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="HadithsFavourites" component={HadithsFavourites} options={({ route }) => ({ title: "Hadith Favorite",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
       <Stack.Screen name="PrayerMosque" component={PrayerMosque} options={{animation:'slide_from_right',headerTitle:"Find a Mosque",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="AblutionWadu" component={Ablution} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="IntoWudhu" component={IntoWudhu} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Nullifies" component={Nullifies} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Faqs" component={Faqs} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Tayammum" component={Tayammum} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="WudhuVideos" component={WudhuVideos} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="VideoPlay" component={VideoPlay} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="AblutionWaduStep" component={AblutionWaduStep} options={{animation:'slide_from_right',headerTitle:"Ablutions Steps",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="TayummumStep" component={TayummumStep} options={{animation:'slide_from_right',headerTitle:"Tayammum  Steps",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="WudhuGuideline" component={WudhuGuideline} options={{animation:'slide_from_right',headerTitle:"Wudhu Guideline",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="PrayerGuide" component={PrayerGuide} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="FajrSunnah" component={FajrSunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="FajrFarz" component={FajrFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="DhuhrFirst4Sunnah" component={DhuhrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="DhuhrFirst4Farz" component={DhuhrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Dhuhr2Sunnah" component={Dhuhr2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Dhuhr2Nafil" component={Dhuhr2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="AsrFirst4Sunnah" component={AsrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="AsrFirst4Farz" component={AsrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        <Stack.Screen name="MaghribFarz" component={MaghribFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Maghrib2Sunnah" component={Maghrib2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Maghrib2Nafil" component={Maghrib2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
         <Stack.Screen name="IshaFirst4Sunnah" component={IshaFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="IshaFirst4Farz" component={IshaFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Isha2Sunnah" component={Isha2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Isha2Nafil" component={Isha2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="IshaWitr" component={IshaWitr} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="IshaLast2Nafil" component={IshaLast2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
       <Stack.Screen name="Greetings" component={Greetings} options={{animation:'slide_from_right',headerTitle:"Greeting Cards",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="GreetingCardList" component={GreetingCardList}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="GreetingCardShare" component={GreetingCardShare} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
      <Stack.Screen name="Shahadah" component={Shahadah} options={({ route }) => ({ title: "Shahadah",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
       <Stack.Screen name="RamadanHome" component={RamadanHome} options={({ route }) => ({ title: "Ramadan",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/> 
        <Stack.Screen name="AboutMain" component={AboutMain} options={({ route }) => ({ title: "About Ramadan",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/> 
       <Stack.Screen name="UnderstandingRamadan" component={UnderstandingRamadan} options={({ route }) => ({ title: "Understanding Ramadan",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
       <Stack.Screen name="HealthBenefits" component={HealthBenefits} options={({ route }) => ({ title: "Health Benefits",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
       <Stack.Screen name="Significance" component={Significance} options={({ route }) => ({ title: "Spiritual Significance ",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
      <Stack.Screen name="ImportanceofFamily" component={ImportanceofFamily} options={({ route }) => ({ title: "Importance of Family ",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>       
            <Stack.Screen name="ZakatGiving" component={ZakatGiving} options={({ route }) => ({ title: "Zakat Giving ",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
        <Stack.Screen name="RamadanGreetingsMain" component={RamadanGreetingsMain} options={({ route }) => ({ title: "Ramadan Greetings ",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/> 
       <Stack.Screen name="RamadanGreetingsShare" component={RamadanGreetingsShare} options={({ route }) => ({ title: "Ramadan Greetings ",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
       <Stack.Screen name="RamadanVideosMain" component={RamadanVideosMain} options={({ route }) => ({ title: "Ramadan Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/> 
       <Stack.Screen name="RamadanVideosPlay" component={RamadanVideosPlay} options={({ route }) => ({ title: "Ramadan Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
         <Stack.Screen name="RamadanCalendarHome" component={RamadanCalendarHome} options={({ route }) => ({ title: "Ramadan Calendar",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  
       <Stack.Screen name="RamadanAllDua" component={RamadanAllDua} options={({ route }) => ({ title: "Ramadan Dua's",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>  

</Stack.Navigator>
    );
  };
  
   

export default AppNavigator;