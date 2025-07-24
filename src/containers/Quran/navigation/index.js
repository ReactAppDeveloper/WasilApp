import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../../../theme';
import {View,TouchableOpacity} from 'react-native';
import {FavouriteSVG,HeartfilledSVG} from '../../../assets/icons';
import useStore from '../../../store'
import useStorehadith from '../../../hadithstore';

//Home and Navigation Drawer
import Home from '../../Home/Home'
import GuestDrawer from '../../Drawer/guestdrawer';
import AboutUs from '../../Drawer/AboutUs';
import RateFeedback from '../../Drawer/RateFeedback';
import ContactUs from '../../Drawer/ContactUs';
import FAQs from '../../Drawer/FAQs';
import Privacypolicy from '../../Drawer/Privacypolicy';
import FounderMsg from '../../Drawer/FounderMsg';
import HijriDates from '../../Drawer/HijriDates';

//Onboarding
import {Onboarding} from '../../onboarding/Onboarding';

//Quran Section
import Quran from '../../Quran/Quran';
import Favorite from '../screens/Favorite';
import Bookmark from '../screens/Bookmark';
import DashBoard from '../screens/DashBoard';
import Setting from '../screens/Setting';
import TranslatePage from '../screens/TranslatePage';
import SurahFullView from '../screens/SurahFullView';
import SurahDetailPage from '../screens/SurahDetailPage';
import AddTafseer from '../screens/AddTafseer';

//Reel Section
import ReelsComponent from '../../Reel/ReelsComponent'

//Dua Section
import Dua from '../../Dua/Dua'
import DuaDetail from '../../Dua/DuaDetail'
import DuaFavourites from '../../Dua/DuaFavourites'

//Tasbih
import Tasbih from '../../Tasbih/Tasbih'
import TasbihOne from '../../Tasbih/AllTasbihs/TasbihOne'
import TasbihTwo from '../../Tasbih/AllTasbihs/TasbihTwo'
import TasbihThree from '../../Tasbih/AllTasbihs/TasbihThree'
import TasbihFour from '../../Tasbih/AllTasbihs/TasbihFour'
import TasbihFive from '../../Tasbih/AllTasbihs/TasbihFive'
import TasbihSix from '../../Tasbih/AllTasbihs/TasbihSix'
import TasbihSeven from '../../Tasbih/AllTasbihs/TasbihSeven'
import TasbihEight from '../../Tasbih/AllTasbihs/TasbihEight'
import TasbihNine from '../../Tasbih/AllTasbihs/TasbihNine'
import TasbihTen from '../../Tasbih/AllTasbihs/TasbihTen'
import TasbihEleven from '../../Tasbih/AllTasbihs/TasbihEleven'
import TasbihTwelve from '../../Tasbih/AllTasbihs/TasbihTwelve'
import TasbihThirteen from '../../Tasbih/AllTasbihs/TasbihThirteen'
import TasbihFourteen from '../../Tasbih/AllTasbihs/TasbihFourteen'
import TasbihFifteen from '../../Tasbih/AllTasbihs/TasbihFifteen'
import TasbihSixteen from '../../Tasbih/AllTasbihs/TasbihSixteen'
import TasbihSeventeen from '../../Tasbih/AllTasbihs/TasbihSeventeen'
import TasbihEighteen from '../../Tasbih/AllTasbihs/TasbihEighteen'
import TasbihNinteen from '../../Tasbih/AllTasbihs/TasbihNinteen'
import TasbihTwenty from '../../Tasbih/AllTasbihs/TasbihTwenty'
import TasbihTwentyOne from '../../Tasbih/AllTasbihs/TasbihTwentyOne'
import TasbihTwentyTwo from '../../Tasbih/AllTasbihs/TasbihTwentyTwo'
import TasbihTwentyThree from '../../Tasbih/AllTasbihs/TasbihTwentyThree'
import TasbihTwentyFour from '../../Tasbih/AllTasbihs/TasbihTwentyFour'
import TasbihTwentyFive from '../../Tasbih/AllTasbihs/TasbihTwentyFive'
import TasbihTwentySix from '../../Tasbih/AllTasbihs/TasbihTwentySix'
import TasbihTwentySeven from '../../Tasbih/AllTasbihs/TasbihTwentySeven'
import TasbihTwentyEight from '../../Tasbih/AllTasbihs/TasbihTwentyEight'
import TasbihTwentyNine from '../../Tasbih/AllTasbihs/TasbihTwentyNine'
import TasbihThirty from '../../Tasbih/AllTasbihs/TasbihThirty'
import TasbihThirtyOne from '../../Tasbih/AllTasbihs/TasbihThirtyOne'
import TasbihThirtyTwo from '../../Tasbih/AllTasbihs/TasbihThirtyTwo'

//Videos Section
import Videos from '../../Videos/Videos'
import SpeakersVideosPlaying from '../../Videos/SpeakersVideosPlaying'
import VideoPlaying from '../../Videos/VideoPlaying'
import BySpeakers from '../../Videos/BySpeakers'
import SpeakersDetail from '../../Videos/SpeakersDetail'
import ChannelsDetail from '../../Videos/ChannelsDetail'
import RecitaionDetail from '../../Videos/RecitaionDetail'

//Qibla Section
import QiblaCompass from '../../Qibla/QiblaCompass'

//Hadith Section
import HadithHome from '../../Hadith/HadithHome'
import HadithsDetail from '../../Hadith/HadithsDetail'
import HadithsFavourites from '../../Hadith/HadithsFavourites'

//Prayer Section
import PrayerMosque from '../../Prayer/PrayerMosque/PrayerMosque'
import Ablution from '../../Prayer/PrayerAblution/Ablution'
import IntoWudhu from '../../Prayer/PrayerAblution/IntoWudhu'
import AblutionWaduStep from '../../Prayer/PrayerAblution/AblutionWaduStep'
import TayummumStep from '../../Prayer/PrayerAblution/TayummumStep'
import WudhuGuideline from '../../Prayer/PrayerAblution/WudhuGuideline'
import Nullifies from '../../Prayer/PrayerAblution/Nullifies'
import Faqs from '../../Prayer/PrayerAblution/Faqs'
import Tayammum from '../../Prayer/PrayerAblution/Tayammum'
import WudhuVideos from '../../Prayer/PrayerAblution/WudhuVideos'
import VideoPlay from '../../Prayer/PrayerAblution/VideoPlay'
import PrayerGuide from '../../Prayer/PrayerGuide/PrayerGuide'
import FajrSunnah from '../../Prayer/PrayerGuide/Fajr/Sunnah/FajrSunnah'
import FajrFarz from '../../Prayer/PrayerGuide/Fajr/Farz/FajrFarz'
import DhuhrFirst4Sunnah from '../../Prayer/PrayerGuide/Dhuhr/First4Sunnah/DhuhrFirst4Sunnah'
import DhuhrFirst4Farz from '../../Prayer/PrayerGuide/Dhuhr/First4Farz/DhuhrFirst4Farz'
import Dhuhr2Sunnah from '../../Prayer/PrayerGuide/Dhuhr/SecondSunnah/Dhuhr2Sunnah'
import Dhuhr2Nafil from '../../Prayer/PrayerGuide/Dhuhr/SecondNafil/Dhuhr2Nafil'
import AsrFirst4Sunnah from '../../Prayer/PrayerGuide/Asr/First4Sunnah/AsrFirst4Sunnah'
import AsrFirst4Farz from '../../Prayer/PrayerGuide/Asr/First4Farz/AsrFirst4Farz'
import MaghribFarz from '../../Prayer/PrayerGuide/Maghrib/FirstFarz/MaghribFarz'
import Maghrib2Sunnah from '../../Prayer/PrayerGuide/Maghrib/SecondSunnah/Maghrib2Sunnah'
import Maghrib2Nafil from '../../Prayer/PrayerGuide/Maghrib/SecondNafil/Maghrib2Nafil'
import IshaFirst4Sunnah from '../../Prayer/PrayerGuide/Isha/First4Sunnah/IshaFirst4Sunnah'
import IshaFirst4Farz from '../../Prayer/PrayerGuide/Isha/First4Farz/IshaFirst4Farz'
import Isha2Sunnah from '../../Prayer/PrayerGuide/Isha/SecondSunnah/Isha2Sunnah'
import Isha2Nafil from '../../Prayer/PrayerGuide/Isha/SecondNafil/Isha2Nafil'
import IshaWitr from '../../Prayer/PrayerGuide/Isha/Witr/IshaWitr'
import IshaLast2Nafil from '../../Prayer/PrayerGuide/Isha/LastNafil/IshaLast2Nafil'

//Greetings Section
import Greetings from '../../Greetings/Greetings';
import GreetingCardList from '../../Greetings/GreetingCardList';
import GreetingCardShare from '../../Greetings/GreetingCardShare';

//Shahadah Section
import Shahadah from '../../Shahadah/Shahadah';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {favourites} = useStore();  // Move it inside the functional component
  const {favouriteshadith} = useStorehadith();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="DashBoard"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen name="DashBoard" component={DashBoard}options={{headerShown: false}} />
        <Stack.Screen name="Favorite" component={Favorite} options={{headerShown: false}}/>
        <Stack.Screen name="Bookmark" component={Bookmark}options={{headerShown: false}} />
        <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
        <Stack.Screen name="TranslatePage" component={TranslatePage}options={{headerShown: false}} />
        <Stack.Screen name="SurahDetailPage" component={SurahDetailPage} options={{headerShown: false}}/>
        <Stack.Screen name="SurahFullView" component={SurahFullView}options={{headerShown: false}} />
        <Stack.Screen name="AddTafseer" component={AddTafseer} options={{headerShown: false}}/>
        <Stack.Screen name="Guest" component={GuestDrawer} options={{animation:'slide_from_left',headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{animation:'slide_from_right',headerTitle:"Home",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false,animation:"slide_from_right"}}/>
        <Stack.Screen name="FAQs" component={FAQs} options={{animation:'slide_from_right',headerTitle:"FAQs",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{animation:'slide_from_right',headerTitle:"About Us",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
        } ,}}/>
       <Stack.Screen name="Privacypolicy" component={Privacypolicy} options={{animation:'slide_from_right',headerTitle:"Privacy Policy",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"}, headerStyle: {
        backgroundColor: Colors.primary
        } ,}}/>
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
        <Stack.Screen name="Quran" component={Quran} options={{headerShown: false}}/>
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
        <Stack.Screen name="Reels" component={ReelsComponent} options={{headerShown: false,animation:"slide_from_right"}}/>
        <Stack.Screen name="Shahadah" component={Shahadah} options={() => ({ title: "Shahadah",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.intermediate,fontSize:18,fontFamily:"headerfont",fontWeight:"bold"},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
