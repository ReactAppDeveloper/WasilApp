import React from 'react';
import { useTheme, headerOptions } from "../theme";
import { HeaderFavouritesButton } from '../components';
import {View,TouchableOpacity,Platform} from 'react-native';
import {WasilNewHeartfilledBTSVG,WasilNewBTTasbihHeartUnFilled,HeartfilledSVG,WasilNewTasbihHeartUnFilled} from '../assets/icons';
import {HeaderTranslateIcon, HeaderSettingsIcon} from '../assets/icons/themed';
import useStore from '../store'
import useStorehadith from '../hadithstore';
import useStoreTasbih from '../tasbihstore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Home and Navigation Drawer
import GuestDrawerNew from '../containers/Drawer/guestdrawernew';
import ThemeSetting from '../containers/Drawer/ThemeSetting';
import HomeNew from '../containers/HomeNew/HomeNew';
import AboutUs from '../containers/Drawer/AboutUs';
import RateFeedback from '../containers/Drawer/RateFeedback';
import ContactUs from '../containers/Drawer/ContactUs';
import FAQs from '../containers/Drawer/FAQs';
import Privacypolicy from '../containers/Drawer/Privacypolicy';
import FounderMsg from '../containers/Drawer/FounderMsg';
import HijriDates from '../containers/Drawer/HijriDates';

//Onboarding
import Onboarding from '../containers/onboarding/Onboarding';

//Quran Section
import QuranMainDashboard from '../containers/Quran/screens/QuranMainDashboard';
import DashBoard from '../containers/Quran/screens/DashBoard';
import PageList from '../containers/Quran/screens/PageList';
import SurahFullView from '../containers/Quran/screens/SurahFullView';
import Setting from '../containers/Quran/screens/Setting';
import FullView from '../containers/Quran/screens/Setting/FullView';
import Favorite from '../containers/Quran/screens/Favorite';
import Bookmark from '../containers/Quran/screens/Bookmark';
import TranslatePage from '../containers/Quran/screens/TranslatePage';
import SurahDetailPage from '../containers/Quran/screens/SurahDetailPage';
import AddTafseer from '../containers/Quran/screens/AddTafseer';
import SurahBySurah from '../containers/Quran/screens/TranslationBySurah/SurahBySurah';
import TranslationSurah from '../containers/Quran/screens/TranslationBySurah/TranslationSurah';
import TranslationSettingsScreen from '../containers/Quran/screens/TranslationBySurah/TranslationSettingsScreen';
import TranslationSettingFont from '../containers/Quran/screens/TranslationBySurah/TranslationSettingFont';
import TafsirBySurah from '../containers/Quran/screens/TafsirBySurah/TafsirBySurah';
import TafsirSurah from '../containers/Quran/screens/TafsirBySurah/TafsirSurah';
import TafsirSettingsScreen from '../containers/Quran/screens/TafsirBySurah/TafsirSettingsScreen';
import TafsirSettingFont from '../containers/Quran/screens/TafsirBySurah/TafsirSettingFont';
import TranslatorDetail from '../containers/Quran/screens/ListenTranslation/TranslatorDetail';



//Reel Section
import ReelsComponentNew from '../containers/Reel/ReelsComponentNew';

//Hadith Section
import HadithsDetail from '../containers/Hadith/HadithsDetail';
import HadithsFavourites from '../containers/Hadith/HadithsFavourites';
import HadithsBooksDashboard from '../containers/Hadith/HadithsBooksDashboard';
import HadithBooksScreen from '../containers/Hadith/HadithBooksScreen';
import HadithBooksDetail from '../containers/Hadith/HadithBooksDetail';



//Dua Section
import DuasScreen from '../containers//DuaNew/DuasScreen';
import DuaCategoryDetail from '../containers/DuaNew/DuaCategoryDetail';
import DuaDetailNew from '../containers/DuaNew/DuaDetailNew';
import DuaNewFavourites from '../containers/DuaNew/DuaNewFavourites';



//Tasbih
import Tasbih from '../containers/Tasbih/Tasbih';
import TasbihCounterScreen from '../containers/Tasbih/TasbihCounterScreen';
import BackgroundPickerScreen from '../containers/Tasbih/BackgroundPickerScreen';
import FavoritesScreen from '../containers/Tasbih/FavoritesScreen';



//Videos New Section
import VideoDashboard from '../containers/VideosNew/VideoDashboard';
import VideosNew from '../containers/VideosNew/VideoDashboard';
import ChannelsDetailNew from '../containers/VideosNew/ChannelsDetailNew';
import BySpeakersNew from '../containers/VideosNew/BySpeakersNew';
import SpeakersDetailNew from '../containers/VideosNew/SpeakersDetailNew';
import SpeakersVideosPlayingNew from '../containers/VideosNew/SpeakersVideosPlayingNew';
import RecitaionDetailNew from '../containers/VideosNew/RecitaionDetailNew';
import VideoPlayingNew from '../containers/VideosNew/VideoPlayingNew';



//Qibla Section
import QiblaCompassNew from '../containers/Qibla/QiblaCompassNew';

//Prayer Section
import PrayerMosque from '../containers/Prayer/PrayerMosque/PrayerMosque';
import PrayerGuide from '../containers/Prayer/PrayerGuide/PrayerGuide';
import FajrSunnah from '../containers/Prayer/PrayerGuide/Fajr/Sunnah/FajrSunnah';
import FajrFarz from '../containers/Prayer/PrayerGuide/Fajr/Farz/FajrFarz';
import DhuhrFirst4Sunnah from '../containers/Prayer/PrayerGuide/Dhuhr/First4Sunnah/DhuhrFirst4Sunnah';
import DhuhrFirst4Farz from '../containers/Prayer/PrayerGuide/Dhuhr/First4Farz/DhuhrFirst4Farz';
import Dhuhr2Sunnah from '../containers/Prayer/PrayerGuide/Dhuhr/SecondSunnah/Dhuhr2Sunnah';
import Dhuhr2Nafil from '../containers/Prayer/PrayerGuide/Dhuhr/SecondNafil/Dhuhr2Nafil';
import AsrFirst4Sunnah from '../containers/Prayer/PrayerGuide/Asr/First4Sunnah/AsrFirst4Sunnah';
import AsrFirst4Farz from '../containers/Prayer/PrayerGuide/Asr/First4Farz/AsrFirst4Farz';
import MaghribFarz from '../containers/Prayer/PrayerGuide/Maghrib/FirstFarz/MaghribFarz';
import Maghrib2Sunnah from '../containers/Prayer/PrayerGuide/Maghrib/SecondSunnah/Maghrib2Sunnah';
import Maghrib2Nafil from '../containers/Prayer/PrayerGuide/Maghrib/SecondNafil/Maghrib2Nafil';
import IshaFirst4Sunnah from '../containers/Prayer/PrayerGuide/Isha/First4Sunnah/IshaFirst4Sunnah';
import IshaFirst4Farz from '../containers/Prayer/PrayerGuide/Isha/First4Farz/IshaFirst4Farz';
import Isha2Sunnah from '../containers/Prayer/PrayerGuide/Isha/SecondSunnah/Isha2Sunnah';
import Isha2Nafil from '../containers/Prayer/PrayerGuide/Isha/SecondNafil/Isha2Nafil';
import IshaWitr from '../containers/Prayer/PrayerGuide/Isha/Witr/IshaWitr';
import IshaLast2Nafil from '../containers/Prayer/PrayerGuide/Isha/LastNafil/IshaLast2Nafil';



//Prayer Section New
import AblutionNew from '../containers/Prayer/PrayerAblutionNew/AblutionNew';
import AblutionWaduStepNew from '../containers/Prayer/PrayerAblutionNew/AblutionWaduStepNew';
import IntoWudhuNew from '../containers/Prayer/PrayerAblutionNew/IntoWudhuNew';
import NullifiesNew from '../containers/Prayer/PrayerAblutionNew/NullifiesNew';
import WearingSockWudhu from '../containers/Prayer/PrayerAblutionNew/WearingSockWudhu';
import TayammumScreen from '../containers/Prayer/PrayerAblutionNew/TayammumScreen';



//Greetings New Section
import GreetingsNew from '../containers/Greetings/GreetingsNew';
import GreetingCardListNew from '../containers/Greetings/GreetingCardListNew';
import GreetingCardShare from '../containers/Greetings/GreetingCardShare';



//Shahadah Section
import ShahadahNew from '../containers/Shahadah/ShahadahNew';

//IslamicStory
import IslamicStoriesScreen from '../containers/IslamicStories/maincomponent/IslamicStoriesScreen';
import SubCategories from '../containers/IslamicStories/screens/SubCategories';
import AllSubCategories from '../containers/IslamicStories/screens/AllSubCategories';
import StoryDetailScreen from '../containers/IslamicStories/screens/StoryDetailScreen';
import ReadStoryDetail from '../containers/IslamicStories/screens/ReadStoryDetail';
import PlayStory from '../containers/IslamicStories/screens/PlayStory';



//Reciters
import RecitersList from '../containers/Reciters/RecitersList';
import ReciterDetail from '../containers/Reciters/ReciterDetail';



//Calendar
import CalendarScreen from '../containers/Calendar/CalendarScreen';

//Wall
import Wallofremember from '../containers/WallOfRemembrance/Wallofremember';
import WallDetail from '../containers/WallOfRemembrance/WallDetail';
import RemembranceForm from '../containers/WallOfRemembrance/RemembranceForm';

// One route per screen; the component follows the active theme.


const Stack = createNativeStackNavigator();

  const AppNavigator = ({ onboarded = false }) => {
    const { Colors ,theme} = useTheme();
    const {favourites} = useStore();
    const {favouriteshadith} = useStorehadith();
    const {favouritestasbih} = useStoreTasbih();

    // Translation / Tafsir reader header: language picker + font settings on the right.
    const quranReaderHeader = (title, languageRoute, fontRoute) => ({navigation}) => ({
      ...headerOptions(Colors, title),
      headerRight: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(languageRoute)}
            style={{minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center'}}
            accessibilityRole="button"
            accessibilityLabel={`${title} language`}>
            <HeaderTranslateIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(fontRoute)}
            style={{minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center'}}
            accessibilityRole="button"
            accessibilityLabel={`${title} text settings`}>
            <HeaderSettingsIcon />
          </TouchableOpacity>
        </View>
      ),
    });

    return (
       <Stack.Navigator initialRouteName={onboarded ? "GuestNew" : 'Onboarding'}screenOptions={{
          headerBackTitleVisible: false,
          }}>
          <Stack.Screen name="GuestNew" component={GuestDrawerNew} options={{animation:'slide_from_right',headerShown: false}}/>
          <Stack.Screen name="HomeNew" component={HomeNew} options={{animation:'slide_from_right',headerTitle:"Wasil Islamic App",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.wasilnewthemecolorthird,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'headerfont',fontWeight:"bold"}, headerStyle: {
          backgroundColor: Colors.cardDark
          },}}/>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false,animation:"slide_from_right",headerTintColor: Colors.black,}}/>
           <Stack.Screen name="ThemeSetting" component={ThemeSetting} options={headerOptions(Colors, "Choose Theme")}/>
          <Stack.Screen name="AboutUs" component={AboutUs} options={headerOptions(Colors, "About Us")}/>
          <Stack.Screen name="RateFeedback" component={RateFeedback} options={headerOptions(Colors, "Rate & Feedback")}/> 
          <Stack.Screen name="ContactUs" component={ContactUs} options={headerOptions(Colors, "Contact Us")}/> 
          <Stack.Screen name="FAQs" component={FAQs} options={headerOptions(Colors, "FAQs")}/> 
          <Stack.Screen name="Privacypolicy" component={Privacypolicy} options={headerOptions(Colors, "Privacy Policy")}/> 
          <Stack.Screen name="FounderMsg" component={FounderMsg} options={headerOptions(Colors, "Founder Message")}/>
          <Stack.Screen name="HijriDates" component={HijriDates} options={headerOptions(Colors, "Hijri Dates Adjustment")}/>

          <Stack.Screen name="QuranMainDashboard" component={QuranMainDashboard} options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
         }})}/>
          <Stack.Screen name="DashBoard" component={DashBoard} options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
         }})}/>
          <Stack.Screen name="PageList" component={PageList} options={{headerShown: false,animation:"slide_from_right"}}/>
          <Stack.Screen name="SurahFullView" component={SurahFullView} options={{headerShown: false,animation:"slide_from_right"}}/>
          <Stack.Screen name="Setting" component={Setting} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="FullView" component={FullView} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="Favorite" component={Favorite} options={{headerShown: false}}/>
          <Stack.Screen name="Bookmark" component={Bookmark} options={{headerShown: false}}/>
          <Stack.Screen name="TranslatePage" component={TranslatePage} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="SurahDetailPage" component={SurahDetailPage} options={{headerShown: false}}/>
          <Stack.Screen name="AddTafseer" component={AddTafseer} options={{headerShown: false}}/>
          <Stack.Screen name="SurahBySurah" component={SurahBySurah} options={{animation:'slide_from_right',headerTitle:"Translation By Surah",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
         },}}/>
          <Stack.Screen name="TranslationSurah" component={TranslationSurah} options={quranReaderHeader('Translation', 'TranslationSettingsScreen', 'TranslationSettingFont')}/>
          <Stack.Screen name="TranslationSettingsScreen" component={TranslationSettingsScreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="TranslationSettingFont" component={TranslationSettingFont} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="TafsirBySurah" component={TafsirBySurah} options={{animation:'slide_from_right',headerTitle:"Tafsir By Surah",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
           backgroundColor: Colors.headerBg
        },}}/>
          <Stack.Screen name="TafsirSurah" component={TafsirSurah} options={quranReaderHeader('Tafsir', 'TafsirSettingsScreen', 'TafsirSettingFont')}/>
          <Stack.Screen name="TafsirSettingsScreen" component={TafsirSettingsScreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          <Stack.Screen name="TafsirSettingFont" component={TafsirSettingFont} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
           <Stack.Screen name="TranslatorDetail" component={TranslatorDetail} options={({ route }) => ({ title: "Listen Translation",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>

          
          <Stack.Screen name="ReelsNew" component={ReelsComponentNew} options={{headerShown: false,animation:"slide_from_right"}}/>
          <Stack.Screen name="DuasScreen" component={DuasScreen} options={({ navigation }) => ({
            ...headerOptions(Colors, "Duas"),
            headerRight: () => (
              <HeaderFavouritesButton
                filled={favourites.length > 0}
                onPress={() => navigation.navigate('DuaNewFavourites')}
                label="Favourite duas"
              />
            ),
          })}/>
          <Stack.Screen name="DuaCategoryDetail" component={DuaCategoryDetail} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
        }})}/>
          <Stack.Screen name="DuaDetailNew" component={DuaDetailNew} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
        }})}/>
          <Stack.Screen name="DuaNewFavourites" component={DuaNewFavourites} options={headerOptions(Colors, "Favourite Duas")}/>
          <Stack.Screen name="HadithsBooksDashboard" component={HadithsBooksDashboard} options={({ navigation }) => ({
            ...headerOptions(Colors, "Hadiths"),
            headerRight: () => (
              <HeaderFavouritesButton
                filled={favouriteshadith.length > 0}
                onPress={() => navigation.navigate('HadithsFavourites')}
                label="Favourite hadiths"
              />
            ),
          })}/>
          <Stack.Screen name="HadithBooksScreen" component={HadithBooksScreen} options={headerOptions(Colors, "Hadith Books")}/>
          <Stack.Screen name="HadithBooksDetail" component={HadithBooksDetail} options={({ route, navigation }) => ({
            ...headerOptions(Colors, route.params.name),
            headerRight: () => (
              <HeaderFavouritesButton
                filled={favouriteshadith.length > 0}
                onPress={() => navigation.navigate('HadithsFavourites')}
                label="Favourite hadiths"
              />
            ),
          })}/>
          <Stack.Screen name="HadithsDetail" component={HadithsDetail} options={({ route }) => ({ title: route.params.name.length >= 25 ? route.params.name.slice(0, 24)+"..." : route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
        }})}/>
          <Stack.Screen name="HadithsFavourites" component={HadithsFavourites} options={headerOptions(Colors, "Favourite Hadiths")}/>
          <Stack.Screen name="Tasbih" component={Tasbih} options={({navigation}) => ({
            ...headerOptions(Colors, "Tasbih"),
            headerRight: () => {
              const filled = favouritestasbih.length > 0;
              const Icon = theme === "white"
                ? (filled ? HeartfilledSVG : WasilNewTasbihHeartUnFilled)
                : (filled ? WasilNewHeartfilledBTSVG : WasilNewBTTasbihHeartUnFilled);
              return (
                <TouchableOpacity
                  style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => navigation.navigate('FavoritesScreen')}
                  accessibilityRole="button"
                  accessibilityLabel="Favourite tasbih">
                  <Icon />
                </TouchableOpacity>
              );
            },
          })}/>
          <Stack.Screen name="TasbihCounterScreen" component={TasbihCounterScreen} options={headerOptions(Colors, "Tasbih")}/>
          <Stack.Screen name="BackgroundPickerScreen" component={BackgroundPickerScreen} options={headerOptions(Colors, "Change Background")}/>
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={headerOptions(Colors, "Favourite Tasbih")}/>
          <Stack.Screen name="VideoDashboard" component={VideoDashboard} options={headerOptions(Colors, "Videos")}/>
          <Stack.Screen name="VideosNew" component={VideosNew} options={headerOptions(Colors, "Videos")}/>
          <Stack.Screen name="ChannelsDetailNew" component={ChannelsDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
          <Stack.Screen name="BySpeakersNew" component={BySpeakersNew} options={headerOptions(Colors, "Durs and Podcast")}/>
          <Stack.Screen name="SpeakersDetailNew" component={SpeakersDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
          <Stack.Screen name="SpeakersVideosPlayingNew" component={SpeakersVideosPlayingNew} options={headerOptions(Colors, "Videos")}/>
          <Stack.Screen name="RecitaionDetailNew" component={RecitaionDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
          <Stack.Screen name="VideoPlayingNew" component={VideoPlayingNew} options={headerOptions(Colors, "Videos")}/>
          <Stack.Screen name="QiblaCompassNew" component={QiblaCompassNew} options={headerOptions(Colors, "Qibla")}/>
          <Stack.Screen name="PrayerMosque" component={PrayerMosque} options={{animation:'slide_from_right',headerTitle:"Find a Mosque",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
        },}}/>
        <Stack.Screen name="PrayerGuide" component={PrayerGuide} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
        },}}/>
        <Stack.Screen name="FajrSunnah" component={FajrSunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="FajrFarz" component={FajrFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="DhuhrFirst4Sunnah" component={DhuhrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="DhuhrFirst4Farz" component={DhuhrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Dhuhr2Sunnah" component={Dhuhr2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Dhuhr2Nafil" component={Dhuhr2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="AsrFirst4Sunnah" component={AsrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="AsrFirst4Farz" component={AsrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="MaghribFarz" component={MaghribFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Maghrib2Sunnah" component={Maghrib2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Maghrib2Nafil" component={Maghrib2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="IshaFirst4Sunnah" component={IshaFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="IshaFirst4Farz" component={IshaFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Isha2Sunnah" component={Isha2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="Isha2Nafil" component={Isha2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="IshaWitr" component={IshaWitr} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="IshaLast2Nafil" component={IshaLast2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="AblutionNew" component={AblutionNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="AblutionWaduStepNew" component={AblutionWaduStepNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="IntoWudhuNew" component={IntoWudhuNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="NullifiesNew" component={NullifiesNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="WearingSockWudhu" component={WearingSockWudhu} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="TayammumScreen" component={TayammumScreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.headerText, headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.headerBg
      },}}/>
        <Stack.Screen name="GreetingsNew" component={GreetingsNew} options={headerOptions(Colors, "Greeting Cards")}/>
        <Stack.Screen name="GreetingCardListNew" component={GreetingCardListNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
        <Stack.Screen name="GreetingCardShare" component={GreetingCardShare} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
        <Stack.Screen name="ShahadahNew" component={ShahadahNew} options={headerOptions(Colors, "Shahadah")}/>
        <Stack.Screen name="IslamicStoriesScreen" component={IslamicStoriesScreen} options={headerOptions(Colors, "Islamic Stories")}/>
        <Stack.Screen name="SubCategories" component={SubCategories} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
        <Stack.Screen name="AllSubCategories" component={AllSubCategories} options={headerOptions(Colors, "All Stories")}/>
        <Stack.Screen name="StoryDetailScreen" component={StoryDetailScreen} options={headerOptions(Colors, "Story")}/>
        <Stack.Screen name="ReadStory" component={ReadStoryDetail} options={headerOptions(Colors, "Read Story")}/>
        <Stack.Screen name="PlayStory" component={PlayStory} options={headerOptions(Colors, "Listen")}/>
        <Stack.Screen name="RecitersList" component={RecitersList} options={headerOptions(Colors, "Reciters")}/>
        <Stack.Screen name="ReciterDetail" component={ReciterDetail} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.headerText ,headerTitleStyle: {color: Colors.headerText,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.headerBg
      }})}/>
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={headerOptions(Colors, "Calendar")}/>
        <Stack.Screen name="Wallofremember" component={Wallofremember} options={headerOptions(Colors, "Wall of Remembrance")}/>
        
        <Stack.Screen name="WallofrememberDetail" component={WallDetail} options={headerOptions(Colors, "Wall of Remembrance")}/>

         <Stack.Screen name="RemembranceForm" component={RemembranceForm} options={headerOptions(Colors, "Add a Beloved Soul")}/>

</Stack.Navigator>
    );
  };
  
   

export default AppNavigator;