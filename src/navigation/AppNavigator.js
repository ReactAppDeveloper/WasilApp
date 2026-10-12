import React from 'react';
import { useTheme } from "../theme";
import {View,TouchableOpacity,Platform} from 'react-native';
import {WasilNewHeartfilledBTSVG,WasilNewBTTasbihHeartUnFilled,WasilNewBTSettingSvg,WasilNewBTTranslateSvg,HeartfilledSVG,WasilNewTasbihHeartUnFilled,QuranBottomSettingWhiteSVG,WasilNewTranslateWhiteSvg} from '../assets/icons';
import useStore from '../store'
import useStorehadith from '../hadithstore';
import useStoreTasbih from '../tasbihstore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Home and Navigation Drawer
import GuestDrawerNew from '../containers/Drawer/guestdrawernew';
import ThemeSetting from '../containers/Drawer/ThemeSetting';
import HomeNew from '../containers/HomeNew/HomeNew';
import AboutUs from '../containers/Drawer/AboutUs';
import AboutUsWhite from '../containers/Drawer/AboutUsWhite';
import AboutUsGreen from '../containers/Drawer/AboutUsGreen';
import RateFeedback from '../containers/Drawer/RateFeedback';
import RateFeedbackWhite from '../containers/Drawer/RateFeedbackWhite';
import RateFeedbackGreen from '../containers/Drawer/RateFeedbackGreen';
import ContactUs from '../containers/Drawer/ContactUs';
import ContactUsWhite from '../containers/Drawer/ContactUsWhite';
import ContactUsGreen from '../containers/Drawer/ContactUsGreen';
import FAQs from '../containers/Drawer/FAQs';
import FAQsWhite from '../containers/Drawer/FAQsWhite';
import FAQsGreen from '../containers/Drawer/FAQsGreen';
import Privacypolicy from '../containers/Drawer/Privacypolicy';
import PrivacypolicyWhite from '../containers/Drawer/PrivacypolicyWhite';
import PrivacypolicyGreen from '../containers/Drawer/PrivacypolicyGreen';
import FounderMsg from '../containers/Drawer/FounderMsg';
import FounderMsgWhite from '../containers/Drawer/FounderMsgWhite';
import FounderMsgGreen from '../containers/Drawer/FounderMsgGreen';
import HijriDates from '../containers/Drawer/HijriDates';
import HijriDatesWhite from '../containers/Drawer/HijriDatesWhite';
import HijriDatesGreen from '../containers/Drawer/HijriDatesGreen';

//Onboarding
import Onboarding from '../containers/onboarding/Onboarding';

//Quran Section
import Quran from '../containers/Quran/Quran';
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

import QuranWhite from '../containers/QuranWhite/Quran';
import QuranMainDashboardWhite from '../containers/QuranWhite/screens/QuranMainDashboard';
import DashBoardWhite from '../containers/QuranWhite/screens/DashBoard';
import PageListWhite from '../containers/QuranWhite/screens/PageList';
import SurahFullViewWhite from '../containers/QuranWhite/screens/SurahFullView';
import SettingWhite from '../containers/QuranWhite/screens/Setting';
import FullViewWhite from '../containers/QuranWhite/screens/Setting/FullView';
import FavoriteWhite from '../containers/QuranWhite/screens/Favorite';
import BookmarkWhite from '../containers/QuranWhite/screens/Bookmark';
import TranslatePageWhite from '../containers/QuranWhite/screens/TranslatePage';
import SurahDetailPageWhite from '../containers/QuranWhite/screens/SurahDetailPage';
import AddTafseerWhite from '../containers/QuranWhite/screens/AddTafseer';
import SurahBySurahWhite from '../containers/QuranWhite/screens/TranslationBySurah/SurahBySurah';
import TranslationSurahWhite from '../containers/QuranWhite/screens/TranslationBySurah/TranslationSurah';
import TranslationSettingsScreenWhite from '../containers/QuranWhite/screens/TranslationBySurah/TranslationSettingsScreen';
import TranslationSettingFontWhite from '../containers/QuranWhite/screens/TranslationBySurah/TranslationSettingFont';
import TafsirBySurahWhite from '../containers/QuranWhite/screens/TafsirBySurah/TafsirBySurah';
import TafsirSurahWhite from '../containers/QuranWhite/screens/TafsirBySurah/TafsirSurah';
import TafsirSettingsScreenWhite from '../containers/QuranWhite/screens/TafsirBySurah/TafsirSettingsScreen';
import TafsirSettingFontWhite from '../containers/QuranWhite/screens/TafsirBySurah/TafsirSettingFont';
import TranslatorDetailWhite from '../containers/QuranWhite/screens/ListenTranslation/TranslatorDetail';

import QuranGreen from '../containers/QuranGreen/Quran';
import QuranMainDashboardGreen from '../containers/QuranGreen/screens/QuranMainDashboard';
import DashBoardGreen from '../containers/QuranGreen/screens/DashBoard';
import PageListGreen from '../containers/QuranGreen/screens/PageList';
import SurahFullViewGreen from '../containers/QuranGreen/screens/SurahFullView';
import SettingGreen from '../containers/QuranGreen/screens/Setting';
import FullViewGreen from '../containers/QuranGreen/screens/Setting/FullView';
import FavoriteGreen from '../containers/QuranGreen/screens/Favorite';
import BookmarkGreen from '../containers/QuranGreen/screens/Bookmark';
import TranslatePageGreen from '../containers/QuranGreen/screens/TranslatePage';
import SurahDetailPageGreen from '../containers/QuranGreen/screens/SurahDetailPage';
import AddTafseerGreen from '../containers/QuranGreen/screens/AddTafseer';
import SurahBySurahGreen from '../containers/QuranGreen/screens/TranslationBySurah/SurahBySurah';
import TranslationSurahGreen from '../containers/QuranGreen/screens/TranslationBySurah/TranslationSurah';
import TranslationSettingsScreenGreen from '../containers/QuranGreen/screens/TranslationBySurah/TranslationSettingsScreen';
import TranslationSettingFontGreen from '../containers/QuranGreen/screens/TranslationBySurah/TranslationSettingFont';
import TafsirBySurahGreen from '../containers/QuranGreen/screens/TafsirBySurah/TafsirBySurah';
import TafsirSurahGreen from '../containers/QuranGreen/screens/TafsirBySurah/TafsirSurah';
import TafsirSettingsScreenGreen from '../containers/QuranGreen/screens/TafsirBySurah/TafsirSettingsScreen';
import TafsirSettingFontGreen from '../containers/QuranGreen/screens/TafsirBySurah/TafsirSettingFont';
import TranslatorDetailGreen from '../containers/QuranGreen/screens/ListenTranslation/TranslatorDetail';

//Reel Section
import ReelsComponentNew from '../containers/Reel/ReelsComponentNew';
import ReelsComponentNewWhite from '../containers/ReelWhite/ReelsComponentNew';
import ReelsComponentNewGreen from '../containers/ReelGreen/ReelsComponentNew';

//Hadith Section
import HadithsDetail from '../containers/Hadith/HadithsDetail';
import HadithsFavourites from '../containers/Hadith/HadithsFavourites';
import HadithsBooksDashboard from '../containers/Hadith/HadithsBooksDashboard';
import HadithBooksScreen from '../containers/Hadith/HadithBooksScreen';
import HadithBooksDetail from '../containers/Hadith/HadithBooksDetail';

import HadithsDetailWhite from '../containers/HadithWhite/HadithsDetail';
import HadithsFavouritesWhite from '../containers/HadithWhite/HadithsFavourites';
import HadithsBooksDashboardWhite from '../containers/HadithWhite/HadithsBooksDashboard';
import HadithBooksScreenWhite from '../containers/HadithWhite/HadithBooksScreen';
import HadithBooksDetailWhite from '../containers/HadithWhite/HadithBooksDetail';

import HadithsDetailGreen from '../containers/HadithGreen/HadithsDetail';
import HadithsFavouritesGreen from '../containers/HadithGreen/HadithsFavourites';
import HadithsBooksDashboardGreen from '../containers/HadithGreen/HadithsBooksDashboard';
import HadithBooksScreenGreen from '../containers/HadithGreen/HadithBooksScreen';
import HadithBooksDetailGreen from '../containers/HadithGreen/HadithBooksDetail';

//Dua Section
import DuasScreen from '../containers//DuaNew/DuasScreen';
import DuaCategoryDetail from '../containers/DuaNew/DuaCategoryDetail';
import DuaDetailNew from '../containers/DuaNew/DuaDetailNew';
import DuaNewFavourites from '../containers/DuaNew/DuaNewFavourites';

import DuasScreenWhite from '../containers/DuaNewWhite/DuasScreenWhite';
import DuaCategoryDetailWhite from '../containers/DuaNewWhite/DuaCategoryDetailWhite';
import DuaDetailNewWhite from '../containers/DuaNewWhite/DuaDetailNewWhite';
import DuaNewFavouritesWhite from '../containers/DuaNewWhite/DuaNewFavouritesWhite';

import DuasScreenGreen from '../containers/DuaNewGreen/DuasScreenGreen';
import DuaCategoryDetailGreen from '../containers/DuaNewGreen/DuaCategoryDetailGreen';
import DuaDetailNewGreen from '../containers/DuaNewGreen/DuaDetailNewGreen';
import DuaNewFavouritesGreen from '../containers/DuaNewGreen/DuaNewFavouritesGreen';

//Tasbih
import Tasbih from '../containers/Tasbih/Tasbih';
import TasbihCounterScreen from '../containers/Tasbih/TasbihCounterScreen';
import BackgroundPickerScreen from '../containers/Tasbih/BackgroundPickerScreen';
import FavoritesScreen from '../containers/Tasbih/FavoritesScreen';

import TasbihWhite from '../containers/TasbihWhite/Tasbih';
import TasbihCounterScreenWhite from '../containers/TasbihWhite/TasbihCounterScreen';
import BackgroundPickerScreenWhite from '../containers/TasbihWhite/BackgroundPickerScreen';
import FavoritesScreenWhite from '../containers/TasbihWhite/FavoritesScreen';

import TasbihGreen from '../containers/TasbihGreen/Tasbih';
import TasbihCounterScreenGreen from '../containers/TasbihGreen/TasbihCounterScreen';
import BackgroundPickerScreenGreen from '../containers/TasbihGreen/BackgroundPickerScreen';
import FavoritesScreenGreen from '../containers/TasbihGreen/FavoritesScreen';

//Videos New Section
import VideoDashboard from '../containers/VideosNew/VideoDashboard';
import VideosNew from '../containers/VideosNew/VideosNew';
import ChannelsDetailNew from '../containers/VideosNew/ChannelsDetailNew';
import BySpeakersNew from '../containers/VideosNew/BySpeakersNew';
import SpeakersDetailNew from '../containers/VideosNew/SpeakersDetailNew';
import SpeakersVideosPlayingNew from '../containers/VideosNew/SpeakersVideosPlayingNew';
import RecitaionDetailNew from '../containers/VideosNew/RecitaionDetailNew';
import VideoPlayingNew from '../containers/VideosNew/VideoPlayingNew';

import VideoDashboardWhite from '../containers/VideosNewWhite/VideoDashboard';
import VideosNewWhite from '../containers/VideosNewWhite/VideosNew';
import ChannelsDetailNewWhite from '../containers/VideosNewWhite/ChannelsDetailNew';
import BySpeakersNewWhite from '../containers/VideosNewWhite/BySpeakersNew';
import SpeakersDetailNewWhite from '../containers/VideosNewWhite/SpeakersDetailNew';
import SpeakersVideosPlayingNewWhite from '../containers/VideosNewWhite/SpeakersVideosPlayingNew';
import RecitaionDetailNewWhite from '../containers/VideosNewWhite/RecitaionDetailNew';
import VideoPlayingNewWhite from '../containers/VideosNewWhite/VideoPlayingNew';

import VideoDashboardGreen from '../containers/VideosNewGreen/VideoDashboard';
import VideosNewGreen from '../containers/VideosNewGreen/VideosNew';
import ChannelsDetailNewGreen from '../containers/VideosNewGreen/ChannelsDetailNew';
import BySpeakersNewGreen from '../containers/VideosNewGreen/BySpeakersNew';
import SpeakersDetailNewGreen from '../containers/VideosNewGreen/SpeakersDetailNew';
import SpeakersVideosPlayingNewGreen from '../containers/VideosNewGreen/SpeakersVideosPlayingNew';
import RecitaionDetailNewGreen from '../containers/VideosNewGreen/RecitaionDetailNew';
import VideoPlayingNewGreen from '../containers/VideosNewGreen/VideoPlayingNew';

//Qibla Section
import QiblaCompassNew from '../containers/Qibla/QiblaCompassNew';
import QiblaCompassNewWhite from '../containers/QiblaWhite/QiblaCompassNew';
import QiblaCompassNewGreen from '../containers/QiblaGreen/QiblaCompassNew';

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

import PrayerMosqueWhite from '../containers/PrayerWhite/PrayerMosque/PrayerMosque';
import PrayerGuideWhite from '../containers/PrayerWhite/PrayerGuide/PrayerGuide';
import FajrSunnahWhite from '../containers/PrayerWhite/PrayerGuide/Fajr/Sunnah/FajrSunnah';
import FajrFarzWhite from '../containers/PrayerWhite/PrayerGuide/Fajr/Farz/FajrFarz';
import DhuhrFirst4SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Dhuhr/First4Sunnah/DhuhrFirst4Sunnah';
import DhuhrFirst4FarzWhite from '../containers/PrayerWhite/PrayerGuide/Dhuhr/First4Farz/DhuhrFirst4Farz';
import Dhuhr2SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Dhuhr/SecondSunnah/Dhuhr2Sunnah';
import Dhuhr2NafilWhite from '../containers/PrayerWhite/PrayerGuide/Dhuhr/SecondNafil/Dhuhr2Nafil';
import AsrFirst4SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Asr/First4Sunnah/AsrFirst4Sunnah';
import AsrFirst4FarzWhite from '../containers/PrayerWhite/PrayerGuide/Asr/First4Farz/AsrFirst4Farz';
import MaghribFarzWhite from '../containers/PrayerWhite/PrayerGuide/Maghrib/FirstFarz/MaghribFarz';
import Maghrib2SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Maghrib/SecondSunnah/Maghrib2Sunnah';
import Maghrib2NafilWhite from '../containers/PrayerWhite/PrayerGuide/Maghrib/SecondNafil/Maghrib2Nafil';
import IshaFirst4SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Isha/First4Sunnah/IshaFirst4Sunnah';
import IshaFirst4FarzWhite from '../containers/PrayerWhite/PrayerGuide/Isha/First4Farz/IshaFirst4Farz';
import Isha2SunnahWhite from '../containers/PrayerWhite/PrayerGuide/Isha/SecondSunnah/Isha2Sunnah';
import Isha2NafilWhite from '../containers/PrayerWhite/PrayerGuide/Isha/SecondNafil/Isha2Nafil';
import IshaWitrWhite from '../containers/PrayerWhite/PrayerGuide/Isha/Witr/IshaWitr';
import IshaLast2NafilWhite from '../containers/PrayerWhite/PrayerGuide/Isha/LastNafil/IshaLast2Nafil';

import PrayerMosqueGreen from '../containers/PrayerGreen/PrayerMosque/PrayerMosque';
import PrayerGuideGreen from '../containers/PrayerGreen/PrayerGuide/PrayerGuide';
import FajrSunnahGreen from '../containers/PrayerGreen/PrayerGuide/Fajr/Sunnah/FajrSunnah';
import FajrFarzGreen from '../containers/PrayerGreen/PrayerGuide/Fajr/Farz/FajrFarz';
import DhuhrFirst4SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Dhuhr/First4Sunnah/DhuhrFirst4Sunnah';
import DhuhrFirst4FarzGreen from '../containers/PrayerGreen/PrayerGuide/Dhuhr/First4Farz/DhuhrFirst4Farz';
import Dhuhr2SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Dhuhr/SecondSunnah/Dhuhr2Sunnah';
import Dhuhr2NafilGreen from '../containers/PrayerGreen/PrayerGuide/Dhuhr/SecondNafil/Dhuhr2Nafil';
import AsrFirst4SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Asr/First4Sunnah/AsrFirst4Sunnah';
import AsrFirst4FarzGreen from '../containers/PrayerGreen/PrayerGuide/Asr/First4Farz/AsrFirst4Farz';
import MaghribFarzGreen from '../containers/PrayerGreen/PrayerGuide/Maghrib/FirstFarz/MaghribFarz';
import Maghrib2SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Maghrib/SecondSunnah/Maghrib2Sunnah';
import Maghrib2NafilGreen from '../containers/PrayerGreen/PrayerGuide/Maghrib/SecondNafil/Maghrib2Nafil';
import IshaFirst4SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Isha/First4Sunnah/IshaFirst4Sunnah';
import IshaFirst4FarzGreen from '../containers/PrayerGreen/PrayerGuide/Isha/First4Farz/IshaFirst4Farz';
import Isha2SunnahGreen from '../containers/PrayerGreen/PrayerGuide/Isha/SecondSunnah/Isha2Sunnah';
import Isha2NafilGreen from '../containers/PrayerGreen/PrayerGuide/Isha/SecondNafil/Isha2Nafil';
import IshaWitrGreen from '../containers/PrayerGreen/PrayerGuide/Isha/Witr/IshaWitr';
import IshaLast2NafilGreen from '../containers/PrayerGreen/PrayerGuide/Isha/LastNafil/IshaLast2Nafil';

//Prayer Section New
import AblutionNew from '../containers/Prayer/PrayerAblutionNew/AblutionNew';
import AblutionWaduStepNew from '../containers/Prayer/PrayerAblutionNew/AblutionWaduStepNew';
import IntoWudhuNew from '../containers/Prayer/PrayerAblutionNew/IntoWudhuNew';
import NullifiesNew from '../containers/Prayer/PrayerAblutionNew/NullifiesNew';
import WearingSockWudhu from '../containers/Prayer/PrayerAblutionNew/WearingSockWudhu';
import TayammumScreen from '../containers/Prayer/PrayerAblutionNew/TayammumScreen';

import AblutionNewWhite from '../containers/PrayerWhite/PrayerAblutionNew/AblutionNew';
import AblutionWaduStepNewWhite from '../containers/PrayerWhite/PrayerAblutionNew/AblutionWaduStepNew';
import IntoWudhuNewWhite from '../containers/PrayerWhite/PrayerAblutionNew/IntoWudhuNew';
import NullifiesNewWhite from '../containers/PrayerWhite/PrayerAblutionNew/NullifiesNew';
import WearingSockWudhuWhite from '../containers/PrayerWhite/PrayerAblutionNew/WearingSockWudhu';
import TayammumScreenWhite from '../containers/PrayerWhite/PrayerAblutionNew/TayammumScreen';

import AblutionNewGreen from '../containers/PrayerGreen/PrayerAblutionNew/AblutionNew';
import AblutionWaduStepNewGreen from '../containers/PrayerGreen/PrayerAblutionNew/AblutionWaduStepNew';
import IntoWudhuNewGreen from '../containers/PrayerGreen/PrayerAblutionNew/IntoWudhuNew';
import NullifiesNewGreen from '../containers/PrayerGreen/PrayerAblutionNew/NullifiesNew';
import WearingSockWudhuGreen from '../containers/PrayerGreen/PrayerAblutionNew/WearingSockWudhu';
import TayammumScreenGreen from '../containers/PrayerGreen/PrayerAblutionNew/TayammumScreen';

//Greetings New Section
import GreetingsNew from '../containers/Greetings/GreetingsNew';
import GreetingCardListNew from '../containers/Greetings/GreetingCardListNew';
import GreetingCardShare from '../containers/Greetings/GreetingCardShare';

import GreetingsNewWhite from '../containers/GreetingsWhite/GreetingsNew';
import GreetingCardListNewWhite from '../containers/GreetingsWhite/GreetingCardListNew';
import GreetingCardShareWhite from '../containers/GreetingsWhite/GreetingCardShare';

import GreetingsNewGreen from '../containers/GreetingsGreen/GreetingsNew';
import GreetingCardListNewGreen from '../containers/GreetingsGreen/GreetingCardListNew';
import GreetingCardShareGreen from '../containers/GreetingsGreen/GreetingCardShare';

//Shahadah Section
import ShahadahNew from '../containers/Shahadah/ShahadahNew';
import ShahadahNewWhite from '../containers/ShahadahWhite/ShahadahNew';
import ShahadahNewGreen from '../containers/ShahadahGreen/ShahadahNew';

//IslamicStory
import IslamicStoriesScreen from '../containers/IslamicStories/maincomponent/IslamicStoriesScreen';
import SubCategories from '../containers/IslamicStories/screens/SubCategories';
import AllSubCategories from '../containers/IslamicStories/screens/AllSubCategories';
import StoryDetailScreen from '../containers/IslamicStories/screens/StoryDetailScreen';
import ReadStoryDetail from '../containers/IslamicStories/screens/ReadStoryDetail';
import PlayStory from '../containers/IslamicStories/screens/PlayStory';

import IslamicStoriesScreenWhite from '../containers/IslamicStoriesWhite/maincomponent/IslamicStoriesScreen';
import SubCategoriesWhite from '../containers/IslamicStoriesWhite/screens/SubCategories';
import AllSubCategoriesWhite from '../containers/IslamicStoriesWhite/screens/AllSubCategories';
import StoryDetailScreenWhite from '../containers/IslamicStoriesWhite/screens/StoryDetailScreen';
import ReadStoryDetailWhite from '../containers/IslamicStoriesWhite/screens/ReadStoryDetail';
import PlayStoryWhite from '../containers/IslamicStoriesWhite/screens/PlayStory';

import IslamicStoriesScreenGreen from '../containers/IslamicStoriesGreen/maincomponent/IslamicStoriesScreen';
import SubCategoriesGreen from '../containers/IslamicStoriesGreen/screens/SubCategories';
import AllSubCategoriesGreen from '../containers/IslamicStoriesGreen/screens/AllSubCategories';
import StoryDetailScreenGreen from '../containers/IslamicStoriesGreen/screens/StoryDetailScreen';
import ReadStoryDetailGreen from '../containers/IslamicStoriesGreen/screens/ReadStoryDetail';
import PlayStoryGreen from '../containers/IslamicStoriesGreen/screens/PlayStory';

//Reciters
import RecitersList from '../containers/Reciters/RecitersList';
import ReciterDetail from '../containers/Reciters/ReciterDetail';

import RecitersListWhite from '../containers/RecitersWhite/RecitersList';
import ReciterDetailWhite from '../containers/RecitersWhite/ReciterDetail';

import RecitersListGreen from '../containers/RecitersGreen/RecitersList';
import ReciterDetailGreen from '../containers/RecitersGreen/ReciterDetail';

//Calendar
import CalendarScreenBlue from '../containers/Calendar/CalendarScreenBlue';
import CalendarScreenWhite from '../containers/CalendarWhite/CalendarScreenWhite';
import CalendarScreenGreen from '../containers/CalendarGreen/CalendarScreenGreen';

//Wall
import Wallofremember from '../containers/WallOfRemembrance/Wallofremember';
import WallBlueDetail from '../containers/WallOfRemembrance/WallBlueDetail';
import Wallofrememberwhite from '../containers/WallOfRemembrance/Wallofrememberwhite';
import WallWhiteDetail from '../containers/WallOfRemembrance/WallWhiteDetail';
import RemembranceFormWhite from '../containers/WallOfRemembrance/RemembranceFormWhite';
import RemembranceFormBlue from '../containers/WallOfRemembrance/RemembranceFormBlue';
import RemembranceFormGreen from '../containers/WallOfRemembrance/RemembranceFormGreen';
import Wallofremembergreen from '../containers/WallOfRemembrance/Wallofremembergreen';
import WallGreenDetail from '../containers/WallOfRemembrance/WallGreenDetail';


const Stack = createNativeStackNavigator();

  const AppNavigator = ({ onboarded = false }) => {
    const { Colors ,theme} = useTheme();
    const {favourites} = useStore();
    const {favouriteshadith} = useStorehadith();
    const {favouritestasbih} = useStoreTasbih();
    
    return (
       <Stack.Navigator initialRouteName={onboarded ? "GuestNew" : 'Onboarding'}screenOptions={{
          headerBackTitleVisible: false,
          }}>
          <Stack.Screen name="GuestNew" component={GuestDrawerNew} options={{animation:'slide_from_right',headerShown: false}}/>
          <Stack.Screen name="HomeNew" component={HomeNew} options={{animation:'slide_from_right',headerTitle:"Wasil Islamic App",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.wasilnewthemecolorthird,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'headerfont',fontWeight:"bold"}, headerStyle: {
          backgroundColor: Colors.cardDark
          },}}/>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false,animation:"slide_from_right",headerTintColor: Colors.black,}}/>
           <Stack.Screen name="ThemeSetting" component={ThemeSetting} options={{animation:'slide_from_right',headerTitle:"Choose Theme",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.primary
          },}}/>
          {theme === "blue" ? (
        <Stack.Screen name="AboutUs" component={AboutUs} options={{animation:'slide_from_right',headerTitle:"About Us",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="AboutUs"
    component={AboutUsGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "About Us",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
        <Stack.Screen name="AboutUs" component={AboutUsWhite} options={{animation:'slide_from_right',headerTitle:"About Us",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
       },}}/>
          )}
          {theme === "blue" ? (
            <Stack.Screen name="RateFeedback" component={RateFeedback} options={{animation:'slide_from_right',headerTitle:"Rate & Feedback",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.cardDark
            },}}/>
          ) : theme === "green" ? (
  <Stack.Screen
    name="RateFeedback"
    component={RateFeedbackGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "Rate & Feedback",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
            <Stack.Screen name="RateFeedback" component={RateFeedbackWhite} options={{animation:'slide_from_right',headerTitle:"Rate & Feedback",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.white
            },}}/>
          )} 
          {theme === "blue" ? (
            <Stack.Screen name="ContactUs" component={ContactUs} options={{animation:'slide_from_right',headerTitle:"Contact Us",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
          },}}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="ContactUs"
    component={ContactUsGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "Contact Us",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
            <Stack.Screen name="ContactUs" component={ContactUsWhite} options={{animation:'slide_from_right',headerTitle:"Contact Us",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
          },}}/>
          )} 
          {theme === "blue" ? (
            <Stack.Screen name="FAQs" component={FAQs} options={{animation:'slide_from_right',headerTitle:"FAQs",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
          },}}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="FAQs"
    component={FAQsGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "FAQs",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
            <Stack.Screen name="FAQs" component={FAQsWhite} options={{animation:'slide_from_right',headerTitle:"FAQs",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
          },}}/>
          )} 
          {theme === "blue" ? (
             <Stack.Screen name="Privacypolicy" component={Privacypolicy} options={{animation:'slide_from_right',headerTitle:"Privacy Policy",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
         backgroundColor: Colors.cardDark
          },}}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="Privacypolicy"
    component={PrivacypolicyGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "Privacy Policy",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
             <Stack.Screen name="Privacypolicy" component={PrivacypolicyWhite} options={{animation:'slide_from_right',headerTitle:"Privacy Policy",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
         backgroundColor: Colors.white
          },}}/>
          )} 
          {theme === "blue" ? (
        <Stack.Screen name="FounderMsg" component={FounderMsg} options={({ route }) => ({ title: "Founder Message",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
         backgroundColor: Colors.cardDark
         }})}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="FounderMsg"
    component={FounderMsgGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "Founder Message",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
           <Stack.Screen name="FounderMsg" component={FounderMsgWhite} options={({ route }) => ({ title: "Founder Message",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
         <Stack.Screen name="HijriDates" component={HijriDates} options={({ route }) => ({ title: "Hijri Dates Adjustment",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
         }})}/>
          ): theme === "green" ? (
  <Stack.Screen
    name="HijriDates"
    component={HijriDatesGreen}
    options={{
      animation: "slide_from_right",
      headerTitle: "Hijri Dates Adjustment",
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  />
          ):(
        <Stack.Screen name="HijriDates" component={HijriDatesWhite} options={({ route }) => ({ title: "Hijri Dates Adjustment",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
         <Stack.Screen name="Quran" component={Quran} options={{headerShown: false,animation:"slide_from_right"}}/>   
          ):theme === "green" ? (
         <Stack.Screen name="Quran" component={QuranGreen} options={{headerShown: false,animation:"slide_from_right"}}/>   
          ):(
          <Stack.Screen name="Quran" component={QuranWhite} options={{headerShown: false,animation:"slide_from_right"}}/>   
          )}

          {theme === "blue" ? (
         <Stack.Screen name="QuranMainDashboard" component={QuranMainDashboard} options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
         }})}/>  
          ):theme === "green" ? (
         <Stack.Screen name="QuranMainDashboard" component={QuranMainDashboardGreen} options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
         }})}/>  
          ):(
           <Stack.Screen name="QuranMainDashboard" component={QuranMainDashboardWhite} options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
             backgroundColor: Colors.white
          }})}/> 
          )}
          {theme === "blue" ? (
        <Stack.Screen name="DashBoard" component={DashBoard}options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
         }})}/> 
          ):theme === "green" ? (
        <Stack.Screen name="DashBoard" component={DashBoardGreen}options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
         }})}/> 
          ):(
           <Stack.Screen name="DashBoard" component={DashBoardWhite}options={({ route }) => ({ title: "Quran",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/> 
          )}
          {theme === "blue" ? (
        <Stack.Screen name="PageList" component={PageList} options={{headerShown: false,animation:"slide_from_right"}}/> 
          ):theme === "green" ? (
        <Stack.Screen name="PageList" component={PageListGreen} options={{headerShown: false,animation:"slide_from_right"}}/> 
          ):(
          <Stack.Screen name="PageList" component={PageListWhite} options={{headerShown: false,animation:"slide_from_right"}}/>  
          )}
          {theme === "blue" ? (
        <Stack.Screen name="SurahFullView" component={SurahFullView} options={{headerShown: false,animation:"slide_from_right"}}/> 
          ):theme === "green" ? (
        <Stack.Screen name="SurahFullView" component={SurahFullViewGreen} options={{headerShown: false,animation:"slide_from_right"}}/> 
          ):(
          <Stack.Screen name="SurahFullView" component={SurahFullViewWhite} options={{headerShown: false,animation:"slide_from_right"}}/> 

          )}
          {theme === "blue" ? (
        <Stack.Screen name="Setting" component={Setting} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
        <Stack.Screen name="Setting" component={SettingGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
        <Stack.Screen name="Setting" component={SettingWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="FullView" component={FullView} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
        <Stack.Screen name="FullView" component={FullViewGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
          <Stack.Screen name="FullView" component={FullViewWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="Favorite" component={Favorite} options={{headerShown: false}}/>
          ):theme === "green" ? (
        <Stack.Screen name="Favorite" component={FavoriteGreen} options={{headerShown: false}}/>
          ):(
         <Stack.Screen name="Favorite" component={FavoriteWhite} options={{headerShown: false}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="Bookmark" component={Bookmark}options={{headerShown: false}} />
          ):theme === "green" ? (
        <Stack.Screen name="Bookmark" component={BookmarkGreen}options={{headerShown: false}} />
          ):(
         <Stack.Screen name="Bookmark" component={BookmarkWhite}options={{headerShown: false}} />
          )}
          {theme === "blue" ? (
        <Stack.Screen name="TranslatePage" component={TranslatePage}options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
        <Stack.Screen name="TranslatePage" component={TranslatePageGreen}options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
         <Stack.Screen name="TranslatePage" component={TranslatePageWhite}options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="SurahDetailPage" component={SurahDetailPage} options={{headerShown: false}}/>
          ):theme === "green" ? (
       <Stack.Screen name="SurahDetailPage" component={SurahDetailPageGreen} options={{headerShown: false}}/>
          ):(
        <Stack.Screen name="SurahDetailPage" component={SurahDetailPageWhite} options={{headerShown: false}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="AddTafseer" component={AddTafseer} options={{headerShown: false}}/>
          ):theme === "green" ? (
       <Stack.Screen name="AddTafseer" component={AddTafseerGreen} options={{headerShown: false}}/>
          ):(
        <Stack.Screen name="AddTafseer" component={AddTafseerWhite} options={{headerShown: false}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="SurahBySurah" component={SurahBySurah} options={{animation:'slide_from_right',headerTitle:"Translation By Surah",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
         },}}/>
          ):theme === "green" ? (
       <Stack.Screen name="SurahBySurah" component={SurahBySurahGreen} options={{animation:'slide_from_right',headerTitle:"Translation By Surah",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
         },}}/>
          ):(
         <Stack.Screen name="SurahBySurah" component={SurahBySurahWhite} options={{animation:'slide_from_right',headerTitle:"Translation By Surah",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
       },}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="TranslationSurah"
  component={TranslationSurah}
  options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Translation',
    headerTitleAlign: 'center',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.cardDark,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewBTTranslateSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <WasilNewBTSettingSvg />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          ):theme === "green" ? (
       <Stack.Screen name="TranslationSurah"
  component={TranslationSurahGreen}
  options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Translation',
    headerTitleAlign: 'center',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.primary,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewBTTranslateSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <WasilNewBTSettingSvg />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          ):(
         <Stack.Screen name="TranslationSurah" component={TranslationSurahWhite}  options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Translation',
    headerTitleAlign: 'center',
    headerTintColor: Colors.black,
    headerTitleStyle: {
      color: Colors.black,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.white,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewTranslateWhiteSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TranslationSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <QuranBottomSettingWhiteSVG />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="TranslationSettingsScreen" component={TranslationSettingsScreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
       <Stack.Screen name="TranslationSettingsScreen" component={TranslationSettingsScreenGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
        <Stack.Screen name="TranslationSettingsScreen" component={TranslationSettingsScreenWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="TranslationSettingFont" component={TranslationSettingFont} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
       <Stack.Screen name="TranslationSettingFont" component={TranslationSettingFontGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
        <Stack.Screen name="TranslationSettingFont" component={TranslationSettingFontWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="TafsirBySurah" component={TafsirBySurah} options={{animation:'slide_from_right',headerTitle:"Tafsir By Surah",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
           backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
       <Stack.Screen name="TafsirBySurah" component={TafsirBySurahGreen} options={{animation:'slide_from_right',headerTitle:"Tafsir By Surah",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
           backgroundColor: Colors.primary
        },}}/>
          ):(
         <Stack.Screen name="TafsirBySurah" component={TafsirBySurahWhite} options={{animation:'slide_from_right',headerTitle:"Tafsir By Surah",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
           backgroundColor: Colors.white
          },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="TafsirSurah" component={TafsirSurah}  
        options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Tafsir',
    headerTitleAlign: 'center',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.cardDark,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewBTTranslateSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <WasilNewBTSettingSvg />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          ):theme === "green" ? (
        <Stack.Screen name="TafsirSurah" component={TafsirSurahGreen}  
        options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Tafsir',
    headerTitleAlign: 'center',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.primary,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewBTTranslateSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <WasilNewBTSettingSvg />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          ):(
           <Stack.Screen name="TafsirSurah" component={TafsirSurahWhite}    options={({navigation}) => ({
    animation: 'slide_from_right',
    headerTitle: 'Tafsir',
    headerTitleAlign: 'center',
    headerTintColor: Colors.black,
    headerTitleStyle: {
      color: Colors.black,
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold',
    },
    headerStyle: {
      backgroundColor: Colors.white,
    },

    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 6,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingsScreen')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginRight: 2,
          }}>
          <WasilNewTranslateWhiteSvg />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TafsirSettingFont')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <QuranBottomSettingWhiteSVG />
        </TouchableOpacity>
      </View>
    ),
        })}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="TafsirSettingsScreen" component={TafsirSettingsScreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
        <Stack.Screen name="TafsirSettingsScreen" component={TafsirSettingsScreenGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
          <Stack.Screen name="TafsirSettingsScreen" component={TafsirSettingsScreenWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="TafsirSettingFont" component={TafsirSettingFont} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):theme === "green" ? (
        <Stack.Screen name="TafsirSettingFont" component={TafsirSettingFontGreen} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          ):(
          <Stack.Screen name="TafsirSettingFont" component={TafsirSettingFontWhite} options={{ presentation: 'modal', headerShown: false,animation: 'slide_from_bottom',}}/>
          )}
           {theme === "blue" ? (
       <Stack.Screen name="TranslatorDetail" component={TranslatorDetail} options={({ route }) => ({ title: "Listen Translation",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="TranslatorDetail" component={TranslatorDetailGreen} options={({ route }) => ({ title: "Listen Translation",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="TranslatorDetail" component={TranslatorDetailWhite} options={({ route }) => ({ title: "Listen Translation",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}

          
          {theme === "blue" ? (
        <Stack.Screen name="ReelsNew" component={ReelsComponentNew} options={{headerShown: false,animation:"slide_from_right"}}/>
          ):theme === "green" ? (
        <Stack.Screen name="ReelsNew" component={ReelsComponentNewGreen} options={{headerShown: false,animation:"slide_from_right"}}/>
          ):(
        <Stack.Screen name="ReelsNew" component={ReelsComponentNewWhite} options={{headerShown: false,animation:"slide_from_right"}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="DuasScreen" component={DuasScreen} options={({navigation}) => ({ headerTitle: "Duas",headerRight: () => (
          <View style={{height:50,width:50}}>
               <View>
        {favourites.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('DuaNewFavourites');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('DuaNewFavourites');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
         
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>

          ):theme === "green" ? (
        <Stack.Screen name="DuasScreen" component={DuasScreenGreen} options={({navigation}) => ({ headerTitle: "Duas",headerRight: () => (
          <View style={{height:50,width:50}}>
               <View>
        {favourites.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('DuaNewFavourites');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('DuaNewFavourites');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
         
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>

          ):(
        <Stack.Screen name="DuasScreen" component={DuasScreenWhite} options={({navigation}) => ({ headerTitle: "Duas",headerRight: () => (
          <View style={{height:50,width:50}}>
               <View>
        {favourites.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('DuaNewFavourites');
      }}>
        <HeartfilledSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('DuaNewFavourites');
        }}>
          <WasilNewTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
         
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
        }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="DuaCategoryDetail" component={DuaCategoryDetail} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="DuaCategoryDetail" component={DuaCategoryDetailGreen} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="DuaCategoryDetail" component={DuaCategoryDetailWhite} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
        }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="DuaDetailNew" component={DuaDetailNew} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="DuaDetailNew" component={DuaDetailNewGreen} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
       <Stack.Screen name="DuaDetailNew" component={DuaDetailNewWhite} options={({ route }) => ({ title: route.params.name+" Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="DuaNewFavourites" component={DuaNewFavourites} options={({ route }) => ({ title: "Favourite Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="DuaNewFavourites" component={DuaNewFavouritesGreen} options={({ route }) => ({ title: "Favourite Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
         <Stack.Screen name="DuaNewFavourites" component={DuaNewFavouritesWhite} options={({ route }) => ({ title: "Favourite Duas",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="HadithsBooksDashboard" component={HadithsBooksDashboard} options={({ route }) => ({ title: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="HadithsBooksDashboard" component={HadithsBooksDashboardGreen} options={({ route }) => ({ title: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="HadithsBooksDashboard" component={HadithsBooksDashboardWhite} options={({ route }) => ({ title: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="HadithBooksScreen" component={HadithBooksScreen} options={({navigation}) => ({ headerTitle: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="HadithBooksScreen" component={HadithBooksScreenGreen} options={({navigation}) => ({ headerTitle: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="HadithBooksScreen" component={HadithBooksScreenWhite} options={({navigation}) => ({ headerTitle: "Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="HadithBooksDetail" component={HadithBooksDetail} options={({ route,navigation }) => ({ title: route.params.name,headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouriteshadith.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('HadithsFavourites');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('HadithsFavourites');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="HadithBooksDetail" component={HadithBooksDetailGreen} options={({ route,navigation }) => ({ title: route.params.name,headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouriteshadith.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('HadithsFavourites');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('HadithsFavourites');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="HadithBooksDetail" component={HadithBooksDetailWhite} options={({ route,navigation }) => ({ title: route.params.name,headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouriteshadith.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('HadithsFavourites');
      }}>
        <HeartfilledSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('HadithsFavourites');
        }}>
          <WasilNewTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="HadithsDetail" component={HadithsDetail} options={({ route }) => ({ title: route.params.name.length >= 25 ? route.params.name.slice(0, 24)+"..." : route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="HadithsDetail" component={HadithsDetailGreen} options={({ route }) => ({ title: route.params.name.length >= 25 ? route.params.name.slice(0, 24)+"..." : route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="HadithsDetail" component={HadithsDetailWhite} options={({ route }) => ({ title: route.params.name.length >= 25 ? route.params.name.slice(0, 24)+"..." : route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
        }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="HadithsFavourites" component={HadithsFavourites} options={({ route }) => ({ title: "Favourite Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="HadithsFavourites" component={HadithsFavouritesGreen} options={({ route }) => ({ title: "Favourite Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="HadithsFavourites" component={HadithsFavouritesWhite} options={({ route }) => ({ title: "Favourite Hadiths",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="Tasbih" component={Tasbih} options={({navigation}) => ({ headerTitle: "Tasbih",headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouritestasbih.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 10: 18,left:20}} onPress={() => {
        navigation.navigate('FavoritesScreen');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 10: 18,left:20}} onPress={() => {
          navigation.navigate('FavoritesScreen');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="Tasbih" component={TasbihGreen} options={({navigation}) => ({ headerTitle: "Tasbih",headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouritestasbih.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('FavoritesScreen');
      }}>
        <WasilNewHeartfilledBTSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('FavoritesScreen');
        }}>
          <WasilNewBTTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="Tasbih" component={TasbihWhite} options={({navigation}) => ({ headerTitle: "Tasbih",headerRight: () => (
          <View style={{height:50,width:50}}>
             <View>
               {favouritestasbih.length > 0 ? (
      <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
        navigation.navigate('FavoritesScreen');
      }}>
        <HeartfilledSVG/>
        </TouchableOpacity>
        
      ) : (
        <TouchableOpacity style={{height:50,width:50,top:Platform.OS === 'ios' ? 13: 18,left:20}} onPress={() => {
          navigation.navigate('FavoritesScreen');
        }}>
          <WasilNewTasbihHeartUnFilled/>
          </TouchableOpacity>
      )}
    
              
  </View>
          </View>
        ),animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
        }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="TasbihCounterScreen" component={TasbihCounterScreen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
        <Stack.Screen name="TasbihCounterScreen" component={TasbihCounterScreenGreen} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
          ):(
        <Stack.Screen name="TasbihCounterScreen" component={TasbihCounterScreenWhite} options={{animation:'slide_from_right',headerTitle:"Tasbih",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
        },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="BackgroundPickerScreen" component={BackgroundPickerScreen} options={{animation:'slide_from_right',headerTitle:"Change Background",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
        <Stack.Screen name="BackgroundPickerScreen" component={BackgroundPickerScreenGreen} options={{animation:'slide_from_right',headerTitle:"Change Background",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
          ):(
        <Stack.Screen name="BackgroundPickerScreen" component={BackgroundPickerScreenWhite} options={{animation:'slide_from_right',headerTitle:"Change Background",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
         backgroundColor: Colors.white
        },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{animation:'slide_from_right',headerTitle:"Favourite Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreenGreen} options={{animation:'slide_from_right',headerTitle:"Favourite Tasbih",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
          ):(
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreenWhite} options={{animation:'slide_from_right',headerTitle:"Favourite Tasbih",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.white
        },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="VideoDashboard" component={VideoDashboard} options={({ route }) => ({ title: "Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
          backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="VideoDashboard" component={VideoDashboardGreen} options={({ route }) => ({ title: "Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
          backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="VideoDashboard" component={VideoDashboardWhite} options={({ route }) => ({ title: "Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
       }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="VideosNew" component={VideosNew} options={({ route }) => ({ title:"Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
        }})}/>
          ):theme === "green" ? (
        <Stack.Screen name="VideosNew" component={VideosNewGreen} options={({ route }) => ({ title:"Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
        }})}/>
          ):(
        <Stack.Screen name="VideosNew" component={VideosNewWhite} options={({ route }) => ({ title:"Videos",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
          )}
          {theme === "blue" ? (
      <Stack.Screen name="ChannelsDetailNew" component={ChannelsDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
          ):theme === "green" ? (
      <Stack.Screen name="ChannelsDetailNew" component={ChannelsDetailNewGreen} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
          ):(
        <Stack.Screen name="ChannelsDetailNew" component={ChannelsDetailNewWhite} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
          )}
          {theme === "blue" ? (
      <Stack.Screen name="BySpeakersNew" component={BySpeakersNew} options={({ route }) => ({ title: "Durs and Podcast",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
          ):theme === "green" ? (
      <Stack.Screen name="BySpeakersNew" component={BySpeakersNewGreen} options={({ route }) => ({ title: "Durs and Podcast",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
          ):(
         <Stack.Screen name="BySpeakersNew" component={BySpeakersNewWhite} options={({ route }) => ({ title: "Durs and Podcast",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
          )}
          {theme === "blue" ? (
      <Stack.Screen name="SpeakersDetailNew" component={SpeakersDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
          ):theme === "green" ? (
      <Stack.Screen name="SpeakersDetailNew" component={SpeakersDetailNewGreen} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
          ):(
        <Stack.Screen name="SpeakersDetailNew" component={SpeakersDetailNewWhite} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="SpeakersVideosPlayingNew" component={SpeakersVideosPlayingNew} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
        <Stack.Screen name="SpeakersVideosPlayingNew" component={SpeakersVideosPlayingNewGreen} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
          ):(
        <Stack.Screen name="SpeakersVideosPlayingNew" component={SpeakersVideosPlayingNewWhite} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
          )}
          {theme === "blue" ? (
      <Stack.Screen name="RecitaionDetailNew" component={RecitaionDetailNew} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
          ):theme === "green" ? (
      <Stack.Screen name="RecitaionDetailNew" component={RecitaionDetailNewGreen} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
          ):(
        <Stack.Screen name="RecitaionDetailNew" component={RecitaionDetailNewWhite} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
          )}
          {theme === "blue" ? (
       <Stack.Screen name="VideoPlayingNew" component={VideoPlayingNew} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
          ):theme === "green" ? (
       <Stack.Screen name="VideoPlayingNew" component={VideoPlayingNewGreen} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
          ):(
        <Stack.Screen name="VideoPlayingNew" component={VideoPlayingNewWhite} options={{animation:'slide_from_right',headerTitle:"Videos",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.white
          },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="QiblaCompassNew" component={QiblaCompassNew} options={{animation:'slide_from_right',headerTitle:"Qibla",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
         backgroundColor: Colors.cardDark
        },}}/>
          ):theme === "green" ? (
        <Stack.Screen name="QiblaCompassNew" component={QiblaCompassNewGreen} options={{animation:'slide_from_right',headerTitle:"Qibla",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
         backgroundColor: Colors.primary
        },}}/>
          ):(
           <Stack.Screen name="QiblaCompassNew" component={QiblaCompassNewWhite} options={{animation:'slide_from_right',headerTitle:"Qibla",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
          )}
          {theme === "blue" ? (
        <Stack.Screen name="PrayerMosque" component={PrayerMosque} options={{animation:'slide_from_right',headerTitle:"Find a Mosque",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>  
          ):theme === "green" ? (
        <Stack.Screen name="PrayerMosque" component={PrayerMosqueGreen} options={{animation:'slide_from_right',headerTitle:"Find a Mosque",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>  
          ):(
         <Stack.Screen name="PrayerMosque" component={PrayerMosqueWhite} options={{animation:'slide_from_right',headerTitle:"Find a Mosque",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
          backgroundColor: Colors.white
        },}}/>  
          )}
        {theme === "blue" ? (
       <Stack.Screen name="PrayerGuide" component={PrayerGuide} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
        },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="PrayerGuide" component={PrayerGuideGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
        },}}/>
        ):(
         <Stack.Screen name="PrayerGuide" component={PrayerGuideWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
          },}}/>
        )}
        {theme === "blue" ? (
        <Stack.Screen name="FajrSunnah" component={FajrSunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
        <Stack.Screen name="FajrSunnah" component={FajrSunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="FajrSunnah" component={FajrSunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
        <Stack.Screen name="FajrFarz" component={FajrFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
        <Stack.Screen name="FajrFarz" component={FajrFarzGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
      <Stack.Screen name="FajrFarz" component={FajrFarzWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="DhuhrFirst4Sunnah" component={DhuhrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="DhuhrFirst4Sunnah" component={DhuhrFirst4SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
<Stack.Screen name="DhuhrFirst4Sunnah" component={DhuhrFirst4SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="DhuhrFirst4Farz" component={DhuhrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="DhuhrFirst4Farz" component={DhuhrFirst4FarzGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
<Stack.Screen name="DhuhrFirst4Farz" component={DhuhrFirst4FarzWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Dhuhr2Sunnah" component={Dhuhr2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Dhuhr2Sunnah" component={Dhuhr2SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="Dhuhr2Sunnah" component={Dhuhr2SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Dhuhr2Nafil" component={Dhuhr2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Dhuhr2Nafil" component={Dhuhr2NafilGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
<Stack.Screen name="Dhuhr2Nafil" component={Dhuhr2NafilWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="AsrFirst4Sunnah" component={AsrFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="AsrFirst4Sunnah" component={AsrFirst4SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
 <Stack.Screen name="AsrFirst4Sunnah" component={AsrFirst4SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="AsrFirst4Farz" component={AsrFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="AsrFirst4Farz" component={AsrFirst4FarzGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
          <Stack.Screen name="AsrFirst4Farz" component={AsrFirst4FarzWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
        <Stack.Screen name="MaghribFarz" component={MaghribFarz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
        <Stack.Screen name="MaghribFarz" component={MaghribFarzGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="MaghribFarz" component={MaghribFarzWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Maghrib2Sunnah" component={Maghrib2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Maghrib2Sunnah" component={Maghrib2SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="Maghrib2Sunnah" component={Maghrib2SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Maghrib2Nafil" component={Maghrib2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Maghrib2Nafil" component={Maghrib2NafilGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="Maghrib2Nafil" component={Maghrib2NafilWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
         <Stack.Screen name="IshaFirst4Sunnah" component={IshaFirst4Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
         <Stack.Screen name="IshaFirst4Sunnah" component={IshaFirst4SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="IshaFirst4Sunnah" component={IshaFirst4SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="IshaFirst4Farz" component={IshaFirst4Farz} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="IshaFirst4Farz" component={IshaFirst4FarzGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="IshaFirst4Farz" component={IshaFirst4FarzWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Isha2Sunnah" component={Isha2Sunnah} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Isha2Sunnah" component={Isha2SunnahGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="Isha2Sunnah" component={Isha2SunnahWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Isha2Nafil" component={Isha2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="Isha2Nafil" component={Isha2NafilGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
          <Stack.Screen name="Isha2Nafil" component={Isha2NafilWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="IshaWitr" component={IshaWitr} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="IshaWitr" component={IshaWitrGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="IshaWitr" component={IshaWitrWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="IshaLast2Nafil" component={IshaLast2Nafil} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="IshaLast2Nafil" component={IshaLast2NafilGreen} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="IshaLast2Nafil" component={IshaLast2NafilWhite} options={{animation:'slide_from_right',headerTitle:"Prayer Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
        <Stack.Screen name="AblutionNew" component={AblutionNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="AblutionNew" component={AblutionNewGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="AblutionNew" component={AblutionNewWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="AblutionWaduStepNew" component={AblutionWaduStepNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="AblutionWaduStepNew" component={AblutionWaduStepNewGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
      <Stack.Screen name="AblutionWaduStepNew" component={AblutionWaduStepNewWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="IntoWudhuNew" component={IntoWudhuNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="IntoWudhuNew" component={IntoWudhuNewGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="IntoWudhuNew" component={IntoWudhuNewWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="NullifiesNew" component={NullifiesNew} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="NullifiesNew" component={NullifiesNewGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="NullifiesNew" component={NullifiesNewWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="WearingSockWudhu" component={WearingSockWudhu} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="WearingSockWudhu" component={WearingSockWudhuGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="WearingSockWudhu" component={WearingSockWudhuWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="TayammumScreen" component={TayammumScreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
      <Stack.Screen name="TayammumScreen" component={TayammumScreenGreen} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="TayammumScreen" component={TayammumScreenWhite} options={{animation:'slide_from_right',headerTitle:"Wudhu Guide",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="GreetingsNew" component={GreetingsNew} options={{animation:'slide_from_right',headerTitle:"Greeting Cards",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.cardDark
      },}}/>
        ):theme === "green" ? (
       <Stack.Screen name="GreetingsNew" component={GreetingsNewGreen} options={{animation:'slide_from_right',headerTitle:"Greeting Cards",headerTitleAlign:"center",headerTintColor: Colors.white, headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.primary
      },}}/>
        ):(
        <Stack.Screen name="GreetingsNew" component={GreetingsNewWhite} options={{animation:'slide_from_right',headerTitle:"Greeting Cards",headerTitleAlign:"center",headerTintColor: Colors.black, headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'}, headerStyle: {
        backgroundColor: Colors.white
      },}}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="GreetingCardListNew" component={GreetingCardListNew}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="GreetingCardListNew" component={GreetingCardListNewGreen}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
         <Stack.Screen name="GreetingCardListNew" component={GreetingCardListNewWhite}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="GreetingCardShare" component={GreetingCardShare}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="GreetingCardShare" component={GreetingCardShareGreen}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):( 
        <Stack.Screen name="GreetingCardShare" component={GreetingCardShareWhite}  options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="ShahadahNew" component={ShahadahNew} options={({ route }) => ({ title: "Shahadah",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="ShahadahNew" component={ShahadahNewGreen} options={({ route }) => ({ title: "Shahadah",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="ShahadahNew" component={ShahadahNewWhite} options={({ route }) => ({ title: "Shahadah",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
        <Stack.Screen name="IslamicStoriesScreen" component={IslamicStoriesScreen} options={({ route }) => ({ title: "Islamic Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
         backgroundColor: Colors.cardDark
        }})}/>  
        ):theme === "green" ? (
        <Stack.Screen name="IslamicStoriesScreen" component={IslamicStoriesScreenGreen} options={({ route }) => ({ title: "Islamic Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
         backgroundColor: Colors.primary
        }})}/>  
        ):(
          <Stack.Screen name="IslamicStoriesScreen" component={IslamicStoriesScreenWhite} options={({ route }) => ({ title: "Islamic Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>  
        )}
        {theme === "blue" ? (
        <Stack.Screen name="SubCategories" component={SubCategories} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
        <Stack.Screen name="SubCategories" component={SubCategoriesGreen} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="SubCategories" component={SubCategoriesWhite} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="AllSubCategories" component={AllSubCategories} options={({ route }) => ({ title: "All Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="AllSubCategories" component={AllSubCategoriesGreen} options={({ route }) => ({ title: "All Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="AllSubCategories" component={AllSubCategoriesWhite} options={({ route }) => ({ title: "All Stories",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="StoryDetailScreen" component={StoryDetailScreen} options={({ route }) => ({ title: "Detail of Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="StoryDetailScreen" component={StoryDetailScreenGreen} options={({ route }) => ({ title: "Detail of Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
          <Stack.Screen name="StoryDetailScreen" component={StoryDetailScreenWhite} options={({ route }) => ({ title: "Detail of Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="ReadStory" component={ReadStoryDetail} options={({ route }) => ({ title: "Read Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="ReadStory" component={ReadStoryDetailGreen} options={({ route }) => ({ title: "Read Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
         <Stack.Screen name="ReadStory" component={ReadStoryDetailWhite} options={({ route }) => ({ title: "Read Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="PlayStory" component={PlayStory} options={({ route }) => ({ title: "Listen Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="PlayStory" component={PlayStoryGreen} options={({ route }) => ({ title: "Listen Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="PlayStory" component={PlayStoryWhite} options={({ route }) => ({ title: "Listen Story",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
      <Stack.Screen name="RecitersList" component={RecitersList} options={({ route }) => ({ title: "Reciters",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
      <Stack.Screen name="RecitersList" component={RecitersListGreen} options={({ route }) => ({ title: "Reciters",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="RecitersList" component={RecitersListWhite} options={({ route }) => ({ title: "Reciters",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="ReciterDetail" component={ReciterDetail} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="ReciterDetail" component={ReciterDetailGreen} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
        <Stack.Screen name="ReciterDetail" component={ReciterDetailWhite} options={({ route }) => ({ title: route.params.name,animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="CalendarScreen" component={CalendarScreenBlue} options={({ route }) => ({ title: "Calendar",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="CalendarScreen" component={CalendarScreenGreen} options={({ route }) => ({ title: "Calendar",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
      <Stack.Screen name="CalendarScreen" component={CalendarScreenWhite} options={({ route }) => ({ title: "Calendar",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        {theme === "blue" ? (
       <Stack.Screen name="Wallofremember" component={Wallofremember} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="Wallofremember" component={Wallofremembergreen} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
      <Stack.Screen name="Wallofremember" component={Wallofrememberwhite} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}
        
        {theme === "blue" ? (
       <Stack.Screen name="WallofrememberDetail" component={WallBlueDetail} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="WallofrememberDetail" component={WallGreenDetail} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
      <Stack.Screen name="WallofrememberDetail" component={WallWhiteDetail} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}

         {theme === "blue" ? (
       <Stack.Screen name="RemembranceForm" component={RemembranceFormBlue} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.cardDark
      }})}/>
        ):theme === "green" ? (
       <Stack.Screen name="RemembranceForm" component={RemembranceFormGreen} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.white ,headerTitleStyle: {color: Colors.white,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.primary
      }})}/>
        ):(
      <Stack.Screen name="RemembranceForm" component={RemembranceFormWhite} options={({ route }) => ({ title: "Wall of Remembrance",animation:'slide_from_right',headerTitleAlign:"center",headerTintColor: Colors.black ,headerTitleStyle: {color: Colors.black,fontSize:18,fontFamily:Platform.OS === 'ios' ? 'Asul-Bold' : 'AsulBold'},headerStyle: {
        backgroundColor: Colors.white
      }})}/>
        )}

</Stack.Navigator>
    );
  };
  
   

export default AppNavigator;