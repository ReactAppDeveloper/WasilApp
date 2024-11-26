import React, { useState } from "react";
import {StatusBar,ScrollView,StyleSheet,View,Image,TextInput,Text,Vibration,Pressable,TouchableOpacity,Dimensions} from "react-native";
import { Images, Colors } from "../../../theme";
import { TasbihResetSVG } from "../../../assets/icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const settop = () => {
  const height = screenHeight;

  if (height >= 1280) {
    // Large screens
    return 105;
  } else if (height >= 800) {
    // Medium screens
    return 70;
  } else {
    // Small screens
    return 35;
  }
};
const ImagesBGTasbih = () => (
  <Image source={Images.Bgtasbih} style={styles.bgImage} />
);

const TasbihSixteen = ({ navigation }) => {
  const [textincrement, settextincrem] = useState(0);
  const [usertargetvalue, setusertargetvalue] = useState("");
  const [userwritten, setuserwritten] = useState(true);

//1 to 10 names
const [showComponmentFT, setshowComponmentFT] = useState(false);
const [showComponmentST, setshowComponmentST] = useState(false);
const [showComponmentTT, setshowComponmentTT] = useState(false);
const [showComponmentFthT, setshowComponmentFthT] = useState(false);
const [showComponmentFtT, setshowComponmentFtT] = useState(false);
const [showComponmentSxT, setshowComponmentSxT] = useState(false);
const [showComponment7, setshowComponment7] = useState(false);
const [showComponment8, setshowComponment8] = useState(false);
const [showComponment9, setshowComponment9] = useState(false);
const [showComponment10, setshowComponment10] = useState(false);
const [FTbgcolor, setFTbgcolor] = useState(Colors.tasbihitembg);
const [STbgcolor, setSTbgcolor] = useState(Colors.tasbihitembg);
const [TTbgcolor, setTTbgcolor] = useState(Colors.tasbihitembg);
const [FthTbgcolor, setFthTbgcolor] = useState(Colors.tasbihitembg);
const [FtTbgcolor, setFtTbgcolor] = useState(Colors.tasbihitembg);
const [SxTbgcolor, setSxTbgcolor] = useState(Colors.tasbihitembg);
const [bgcolor7, setbgcolor7] = useState(Colors.tasbihitembg);
const [bgcolor8, setbgcolor8] = useState(Colors.tasbihitembg);
const [bgcolor9, setbgcolor9] = useState(Colors.tasbihitembg);
const [bgcolor10, setbgcolor10] = useState(Colors.tasbihitembg);

const [FTtextcolor, setFTtextcolor] = useState(Colors.intermediate);
const [STtextcolor, setSTtextcolor] = useState(Colors.intermediate);
const [TTtextcolor, setTTtextcolor] = useState(Colors.intermediate);
const [Fthtextcolor, setFthtextcolor] = useState(Colors.intermediate);
const [FtTtextcolor, setFtTtextcolor] = useState(Colors.intermediate);
const [SxTtextcolor, setSxTtextcolor] = useState(Colors.intermediate);
const [textcolor7, settextcolor7] = useState(Colors.intermediate);
const [textcolor8, settextcolor8] = useState(Colors.intermediate);
const [textcolor9, settextcolor9] = useState(Colors.intermediate);
const [textcolor10, settextcolor10] = useState(Colors.intermediate);
//1 to 10 names

//11 to 20 names
const [showComponment11, setshowComponment11] = useState(false);
const [showComponment12, setshowComponment12] = useState(false);
const [showComponment13, setshowComponment13] = useState(false);
const [showComponment14, setshowComponment14] = useState(false);
const [showComponment15, setshowComponment15] = useState(true);
const [showComponment16, setshowComponment16] = useState(false);
const [showComponment17, setshowComponment17] = useState(false);
const [showComponment18, setshowComponment18] = useState(false);
const [showComponment19, setshowComponment19] = useState(false);
const [showComponment20, setshowComponment20] = useState(false);
const [bgcolor11, setbgcolor11] = useState(Colors.tasbihitembg);
const [bgcolor12, setbgcolor12] = useState(Colors.tasbihitembg);
const [bgcolor13, setbgcolor13] = useState(Colors.tasbihitembg);
const [bgcolor14, setbgcolor14] = useState(Colors.tasbihitembg);
const [bgcolor15, setbgcolor15] = useState(Colors.primary);
const [bgcolor16, setbgcolor16] = useState(Colors.tasbihitembg);
const [bgcolor17, setbgcolor17] = useState(Colors.tasbihitembg);
const [bgcolor18, setbgcolor18] = useState(Colors.tasbihitembg);
const [bgcolor19, setbgcolor19] = useState(Colors.tasbihitembg);
const [bgcolor20, setbgcolor20] = useState(Colors.tasbihitembg);

const [textcolor11, settextcolor11] = useState(Colors.intermediate);
const [textcolor12, settextcolor12] = useState(Colors.intermediate);
const [textcolor13, settextcolor13] = useState(Colors.intermediate);
const [textcolor14, settextcolor14] = useState(Colors.intermediate);
const [textcolor15, settextcolor15] = useState(Colors.white);
const [textcolor16, settextcolor16] = useState(Colors.intermediate);
const [textcolor17, settextcolor17] = useState(Colors.intermediate);
const [textcolor18, settextcolor18] = useState(Colors.intermediate);
const [textcolor19, settextcolor19] = useState(Colors.intermediate);
const [textcolor20, settextcolor20] = useState(Colors.intermediate);
//11 to 20 names

//21 to 31 names
const [showComponment21, setshowComponment21] = useState(false);
const [showComponment22, setshowComponment22] = useState(false);
const [showComponment23, setshowComponment23] = useState(false);
const [showComponment24, setshowComponment24] = useState(false);
const [showComponment25, setshowComponment25] = useState(false);
const [showComponment26, setshowComponment26] = useState(false);
const [showComponment27, setshowComponment27] = useState(false);
const [showComponment28, setshowComponment28] = useState(false);
const [showComponment29, setshowComponment29] = useState(false);
const [showComponment30, setshowComponment30] = useState(false);
const [showComponment31, setshowComponment31] = useState(false);
const [bgcolor21, setbgcolor21] = useState(Colors.tasbihitembg);
const [bgcolor22, setbgcolor22] = useState(Colors.tasbihitembg);
const [bgcolor23, setbgcolor23] = useState(Colors.tasbihitembg);
const [bgcolor24, setbgcolor24] = useState(Colors.tasbihitembg);
const [bgcolor25, setbgcolor25] = useState(Colors.tasbihitembg);
const [bgcolor26, setbgcolor26] = useState(Colors.tasbihitembg);
const [bgcolor27, setbgcolor27] = useState(Colors.tasbihitembg);
const [bgcolor28, setbgcolor28] = useState(Colors.tasbihitembg);
const [bgcolor29, setbgcolor29] = useState(Colors.tasbihitembg);
const [bgcolor30, setbgcolor30] = useState(Colors.tasbihitembg);
const [bgcolor31, setbgcolor31] = useState(Colors.tasbihitembg);

const [textcolor21, settextcolor21] = useState(Colors.intermediate);
const [textcolor22, settextcolor22] = useState(Colors.intermediate);
const [textcolor23, settextcolor23] = useState(Colors.intermediate);
const [textcolor24, settextcolor24] = useState(Colors.intermediate);
const [textcolor25, settextcolor25] = useState(Colors.intermediate);
const [textcolor26, settextcolor26] = useState(Colors.intermediate);
const [textcolor27, settextcolor27] = useState(Colors.intermediate);
const [textcolor28, settextcolor28] = useState(Colors.intermediate);
const [textcolor29, settextcolor29] = useState(Colors.intermediate);
const [textcolor30, settextcolor30] = useState(Colors.intermediate);
const [textcolor31, settextcolor31] = useState(Colors.intermediate);
//21 to 31 names

const bgclick = () => { 
  const duration = 100;
  Vibration.vibrate(duration);
  if (usertargetvalue == 0) {
    settextincrem(textincrement + 1);
  }
    else if(usertargetvalue < textincrement){
      settextincrem(1);
    }
   else if (usertargetvalue == textincrement) {
    settextincrem(textincrement);
    alert("Congratulations! You've reached your Goal");
    setuserwritten(true);
    settextincrem(0);
    setusertargetvalue("");
  } else {
    setuserwritten(false);
    settextincrem(textincrement + 1);
  }
};

  const resetclick = () => {
    setuserwritten(true);
    settextincrem(0);
    setusertargetvalue("");
  };

  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={Colors.primary} />
     
      {showComponmentFT && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Throughout the day, Times of distress
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              لآ اِلَهَ اِلّا اللّٰهُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              La ilaha illallah
            </Text>
          </View>
        )}
        {showComponmentST && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              After prayer, Seeking peace
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              سُبْحَانَ اللّٰهِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Subhanallah
            </Text>
          </View>
        )}
        {showComponmentTT && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Expressing gratitude, Seeking blessings
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              اَلْحَمْدُ لِلّٰهِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Alhamdulillah
            </Text>
          </View>
        )}
        {showComponmentFthT && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Expressing awe, Seeking strength
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              اَللّٰهُ أکْبَرْ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Allahu Akbar
            </Text>
          </View>
        )}
        {showComponmentFtT && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking forgiveness, Times of hardship
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              اَسْتَغْفِرُ اللّٰهَ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Astaghfirullah
            </Text>
          </View>
        )}
        {showComponmentSxT && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Trusting Allah, Overcoming challenges
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 35,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              لا حَوْلَ وَلا قُوَّةَ اِلاّ بِاللّٰهِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 35,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              La hawla wa la quwwata illa billah
            </Text>
          </View>
        )}
        {showComponment7 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Trusting Allah, Seeking ease
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 40,
                top: 30,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              حَسْبِيَ اللّٰهُ وَنِعْمَ الْوَكِيلُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 40,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Hasbiyallahu wa ni'mal wakeel
            </Text>
          </View>
        )}
        {showComponment8 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking ease, Overcoming challenges
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 25,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              اَللّٰهُمَّ لا سَهْلَ اِلا مَا جَعَلْتَهُ سَهْلاً وَاَنْتَ
              تَجْعَلُ الحَزْنَ اِذَا شِئْتَ سَهْلاً
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 15,
                top: 30,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Allahumma la sahla illa ma ja'altahu sahla
            </Text>
          </View>
        )}
        {showComponment9 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Times of distress, Seeking strength
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 25,
                top: 15,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              لَا اِلَهَ اِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ
              وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 13,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              La ilaha illallah wahdahu la sharika lahu, lahul mulku wa lahul
              hamdu wa huwa 'ala kulli shay'in qadeer
            </Text>
          </View>
        )}
        {showComponment10 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking forgiveness, After wrongdoing
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 28,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ
              الرَّحِيمُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 13,
                top: 30,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Rabbi-ghfir-li wa tub ‘alayya innaka antat-tawwabur-rahim
            </Text>
          </View>
        )}
        {showComponment11 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              In times of need, Seeking comfort
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 35,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 15,
                top: 35,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Hayyu Ya Qayyum, bi rahmatika astagheeth
            </Text>
          </View>
        )}
        {showComponment12 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking mercy and compassion, Family matters
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 40,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا رَبِّ يَا رَحْمَانُ يَا رَحِيمُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Rabbi, ya Rahmaan, ya Raheem
            </Text>
          </View>
        )}
        {showComponment13 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking guidance and support, Daily affairs
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا رَبَّ الْعَالَمِينَ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Rabbal 'Alamin
            </Text>
          </View>
        )}
        {showComponment14 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking answers to prayers, Seeking help
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا مُجِيبَ الدُّعَاءِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Mujeeb ad-Du'a
            </Text>
          </View>
        )}
        {showComponment15 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking sustenance and generosity, Financial stability
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا رَزَّاقُ يَا كَرِيمُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Razzaqu, Ya Karimu
            </Text>
          </View>
        )}
        {showComponment16 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking blessings and favors, Family harmony
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا مَنَّانُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Mannan
            </Text>
          </View>
        )}
        {showComponment17 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking strength and dignity, Empowerment
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 35,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا قَيُّومُ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 18,
                top: 40,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Qayyoom, Ya Dhal-Jalali wal-Ikram
            </Text>
          </View>
        )}
        {showComponment18 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Strengthening familial bonds, Seeking love
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا وَدُودُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Wadud
            </Text>
          </View>
        )}
        {showComponment19 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Financial Stability, Seeking provision
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا مُقِيْلِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Muqeel
            </Text>
          </View>
        )}
        {showComponment20 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking closeness to Allah, Seeking assistance
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا قَرِيْبُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Qareeb
            </Text>
          </View>
        )}
        {showComponment21 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking knowledge and guidance, Education
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا مُعَلِّمُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Mu’allim
            </Text>
          </View>
        )}
        {showComponment22 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Raising in status or honor, Seeking upliftment
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا رَافِعُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Ya Rafiu
            </Text>
          </View>
        )}
        {showComponment23 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Maintaining peace
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              يَا سَلَّامُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
            Ya-Salamo            
            </Text>
          </View>
        )}
        {showComponment24 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Seeking knowledge
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 50,
                top: 12,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              رَبِّ زِدْنِي عِلْمًا
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Rabbi zidni ilma
            </Text>
          </View>
        )}
        {showComponment25 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Praying for Parents
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 35,
                top: 30,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 40,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Rabbi irhamhuma kama rabbayani sagheera
            </Text>
          </View>
        )}
        {showComponment26 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Praying for Deceased Parents
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 30,
                top: 15,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي
              صَغِيرًا
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 12,
                top: 25,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Rabbi ghfir li waliwalidayya warhamhuma kama rabbayani sagheera
            </Text>
          </View>
        )}
        {showComponment27 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Easing Anxiety
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 40,
                top: 15,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 20,
                top: 20,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Hasbunallahu wa ni'mal wakeel
            </Text>
          </View>
        )}
        {showComponment28 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: "#808080",
                fontSize: 12,
                top: 10,
                fontWeight: "500",
                fontFamily: "PoppinsLight",
              }}
            >
              Overcoming Depression
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 15,
                top: 10,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ
              نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ
              أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ
              أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ
              أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ
              تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ
              حُزْنِي وَذَهَابَ هَمِّي
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 7,
                top: 10,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Allahumma inni 'abduka ibnu 'abdika ibnu amatika, nasiyati bi
              yadika, maadin fiyya hukmuka, 'adlun fiyya qada'uka, as'aluka bi
              kulli ismin huwa laka, sammayta bihi nafsaka, aw anzaltahu fi
              kitabika, aw 'allamtahu ahadan min khalqika, aw ista'tharta bihi
              fi 'ilmil-ghaibi 'indaka, an taj'alal-Qur'ana rabee'a qalbi, wa
              noora sadri, wa jalaa'a huzni, wa thahaaba hammi
            </Text>
          </View>
        )}
        {showComponment29 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Protection and Success for Children
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 25,
                top: 25,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ
              الدُّعَاءِ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 13,
                top: 25,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Rabbi hab li min ladunka dhurriyyatan tayyibatan innaka
              samee'ud-du'a
            </Text>
          </View>
        )}
        {showComponment30 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Protection from Evil Eye for Children
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 25,
                top: 20,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              أُعِيذُهُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ
              وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 13,
                top: 30,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              A'ūḍuhumā bi-kalimātillāhi t-tāmmati min kulli shayṭānin wa
              hāmmatin wa min kulli 'aynin lāmmatin
            </Text>
          </View>
        )}
        {showComponment31 && (
          <View style={styles.cardfirst}>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.secondary,
                fontSize: 13,
                top: 20,
                fontWeight:"500",
                fontFamily: "Raleway",
              }}
            >
              Protection from Evil Eye
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.primary,
                fontSize: 25,
                top: 15,
                fontWeight: "500",
                fontFamily: "AlQalamQuran",
              }}
            >
              بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي
              الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
            </Text>
            <Text
              style={{
                width: 320,
                textAlign: "center",
                color: Colors.intermediate,
                fontSize: 13,
                top: 22,
                fontWeight: "500",
                fontFamily: "Raleway",
              }}
            >
              Bismillahi al-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la
              fis-sama'i wa Huwas-Sami'ul-'Alim
            </Text>
          </View>
        )}
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(true) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.primary) ||
                settextcolor15(Colors.white) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor15,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor15,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا رَزَّاقُ يَا كَرِيمُ
                  </Text>
              </View>
            
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(true) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.primary) ||
                setFTtextcolor(Colors.white) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)}
                style={{ backgroundColor: FTbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,}}>        
                <Text
                 style={{color: FTtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"}}>لآ اِلَهَ اِلّا اللّٰهُ
                </Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(true) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.primary) ||
                setSTtextcolor(Colors.white) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)}
                style={{ backgroundColor: STbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,}}>
             
                <Text
                 style={{color: STtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"}}>
                  سُبْحَانَ اللّٰهِ
                </Text>
         
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(true) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.primary) ||
                setTTtextcolor(Colors.white) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)}
                style={{ backgroundColor: TTbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,}}>
             
                <Text
                 style={{color: TTtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"}}>
                  اَلْحَمْدُ لِلّٰهِ
                  </Text>
         
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(true) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.primary) ||
                setFthtextcolor(Colors.white) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: FthTbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: Fthtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  اَللّٰهُ أکْبَرْ
                </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(true) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.primary) ||
                setFtTtextcolor(Colors.white) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: FtTbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: FtTtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  اَسْتَغْفِرُ اللّٰهَ
                  </Text>
              </View>
              
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(true) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.primary) ||
                setSxTtextcolor(Colors.white) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: SxTbgcolor,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: SxTtextcolor,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  لا حَوْلَ وَلا قُوَّةَ.. 
                  </Text>
              </View>
             
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(true) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.primary) ||
                settextcolor7(Colors.white) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor7,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor7,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  حَسْبِيَ اللّٰهُ وَنِعْمَ..
                  </Text>
              </View>
             
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(true) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.primary) ||
                settextcolor8(Colors.white) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor8,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor8,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  اَللّٰهُمَّ لا سَهْلَ اِلا مَا..  
                  </Text>
              </View>
             
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(true) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.primary) ||
                settextcolor9(Colors.white) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor9,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor9,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  لَا اِلَهَ اِلَّا اللّٰهُ وَحْدَهُ..                 
                  </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(true) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.primary) ||
                settextcolor10(Colors.white) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor10,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor10,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ.. 
                  
                  </Text>
              </View>
            
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(true) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.primary) ||
                settextcolor11(Colors.white) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor11,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor11,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا حَيُّ يَا قَيُّومُ.. 
                  </Text>
              </View>
             
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(true) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.primary) ||
                settextcolor12(Colors.white) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor12,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor12,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا رَبِّ يَا رَحْمَانُ.. 
                  </Text>
              </View>
             
          </TouchableOpacity> 

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(true) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.primary) ||
                settextcolor13(Colors.white) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor13,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor13,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا رَبَّ الْعَالَمِينَ
                  </Text>
              </View>
           
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(true) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.primary) ||
                settextcolor14(Colors.white) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor14,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor14,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا مُجِيبَ الدُّعَاءِ
                  </Text>
              </View>
             
          </TouchableOpacity>

        

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(true) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.primary) ||
                settextcolor16(Colors.white) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
                <View
                style={{
                  backgroundColor: bgcolor16,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor16,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا مَنَّانُ
                  </Text>
              </View>
             
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(true) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.primary) ||
                settextcolor17(Colors.white) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor17,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor17,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا قَيُّومُ يَا ذَا.. 
                  </Text>
              </View>
        
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(true) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.primary) ||
                settextcolor18(Colors.white) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
                <View
                style={{
                  backgroundColor: bgcolor18,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor18,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا وَدُودُ
                  </Text>
              </View>
          
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(true) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.primary) ||
                settextcolor19(Colors.white) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >

              <View
                style={{
                  backgroundColor: bgcolor19,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor19,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا مُقِيْلِ
                  </Text>
              </View>
         
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(true) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.primary) ||
                settextcolor20(Colors.white) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor20,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor20,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا قَرِيْبُ
                  </Text>
              </View>
           
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(true) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.primary) ||
                settextcolor21(Colors.white) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor21,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor21,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا مُعَلِّمُ
                  </Text>
              </View>
           
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(true) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.primary) ||
                settextcolor22(Colors.white) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor22,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor22,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  يَا رَافِعُ
                  </Text>
              </View>
         
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(true) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.primary) ||
                settextcolor23(Colors.white) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor23,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor23,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                                    يَا سَلَّامُ
                                    </Text>
              </View>
         
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(true) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.primary) ||
                settextcolor24(Colors.white) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor24,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor24,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ زِدْنِي عِلْمًا
                  </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(true) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.primary) ||
                settextcolor25(Colors.white) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor25,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor25,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ ارْحَمْهُمَا كَمَا.. 
                  </Text>
              </View>
          
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(true) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.primary) ||
                settextcolor26(Colors.white) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor26,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor26,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ.. 
                  </Text>
              </View>
            
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(true) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.primary) ||
                settextcolor27(Colors.white) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor27,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor27,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  حَسْبُنَا اللَّهُ وَنِعْمَ..
                  </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(true) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.primary) ||
                settextcolor28(Colors.white) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor28,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor28,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ.. 
                  </Text>
              </View>
          
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(true) ||
                setshowComponment30(false) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.primary) ||
                settextcolor29(Colors.white) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor29,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor29,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ هَبْ لِي مِنْ لَدُنْكَ.. 
                  </Text>
              </View>
           
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(true) ||
                setshowComponment31(false) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.primary) ||
                settextcolor30(Colors.white) ||
                setbgcolor31(Colors.tasbihitembg) ||
                settextcolor31(Colors.intermediate)
              }
            >
              <View
                style={{
                  backgroundColor: bgcolor30,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor30,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  رَبِّ هَبْ لِي مِنْ لَدُنْكَ.. 
                  </Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() =>
                setuserwritten(true) ||
                settextincrem(0) ||
                setusertargetvalue("") ||
                setshowComponmentFT(false) ||
                setshowComponmentST(false) ||
                setshowComponmentTT(false) ||
                setshowComponmentFthT(false) ||
                setshowComponmentFtT(false) ||
                setshowComponmentSxT(false) ||
                setshowComponment7(false) ||
                setshowComponment8(false) ||
                setshowComponment9(false) ||
                setshowComponment10(false) ||
                setshowComponment11(false) ||
                setshowComponment12(false) ||
                setshowComponment13(false) ||
                setshowComponment14(false) ||
                setshowComponment15(false) ||
                setshowComponment16(false) ||
                setshowComponment17(false) ||
                setshowComponment18(false) ||
                setshowComponment19(false) ||
                setshowComponment20(false) ||
                setshowComponment21(false) ||
                setshowComponment22(false) ||
                setshowComponment23(false) ||
                setshowComponment24(false) ||
                setshowComponment25(false) ||
                setshowComponment26(false) ||
                setshowComponment27(false) ||
                setshowComponment28(false) ||
                setshowComponment29(false) ||
                setshowComponment30(false) ||
                setshowComponment31(true) ||
                setFTbgcolor(Colors.tasbihitembg) ||
                setFTtextcolor(Colors.intermediate) ||
                setSTbgcolor(Colors.tasbihitembg) ||
                setSTtextcolor(Colors.intermediate) ||
                setTTbgcolor(Colors.tasbihitembg) ||
                setTTtextcolor(Colors.intermediate) ||
                setFthTbgcolor(Colors.tasbihitembg) ||
                setFthtextcolor(Colors.intermediate) ||
                setFtTbgcolor(Colors.tasbihitembg) ||
                setFtTtextcolor(Colors.intermediate) ||
                setSxTbgcolor(Colors.tasbihitembg) ||
                setSxTtextcolor(Colors.intermediate) ||
                setbgcolor7(Colors.tasbihitembg) ||
                settextcolor7(Colors.intermediate) ||
                setbgcolor8(Colors.tasbihitembg) ||
                settextcolor8(Colors.intermediate) ||
                setbgcolor9(Colors.tasbihitembg) ||
                settextcolor9(Colors.intermediate) ||
                setbgcolor10(Colors.tasbihitembg) ||
                settextcolor10(Colors.intermediate) ||
                setbgcolor11(Colors.tasbihitembg) ||
                settextcolor11(Colors.intermediate) ||
                setbgcolor12(Colors.tasbihitembg) ||
                settextcolor12(Colors.intermediate) ||
                setbgcolor13(Colors.tasbihitembg) ||
                settextcolor13(Colors.intermediate) ||
                setbgcolor14(Colors.tasbihitembg) ||
                settextcolor14(Colors.intermediate) ||
                setbgcolor15(Colors.tasbihitembg) ||
                settextcolor15(Colors.intermediate) ||
                setbgcolor16(Colors.tasbihitembg) ||
                settextcolor16(Colors.intermediate) ||
                setbgcolor17(Colors.tasbihitembg) ||
                settextcolor17(Colors.intermediate) ||
                setbgcolor18(Colors.tasbihitembg) ||
                settextcolor18(Colors.intermediate) ||
                setbgcolor19(Colors.tasbihitembg) ||
                settextcolor19(Colors.intermediate) ||
                setbgcolor20(Colors.tasbihitembg) ||
                settextcolor20(Colors.intermediate) ||
                setbgcolor21(Colors.tasbihitembg) ||
                settextcolor21(Colors.intermediate) ||
                setbgcolor22(Colors.tasbihitembg) ||
                settextcolor22(Colors.intermediate) ||
                setbgcolor23(Colors.tasbihitembg) ||
                settextcolor23(Colors.intermediate) ||
                setbgcolor24(Colors.tasbihitembg) ||
                settextcolor24(Colors.intermediate) ||
                setbgcolor25(Colors.tasbihitembg) ||
                settextcolor25(Colors.intermediate) ||
                setbgcolor26(Colors.tasbihitembg) ||
                settextcolor26(Colors.intermediate) ||
                setbgcolor27(Colors.tasbihitembg) ||
                settextcolor27(Colors.intermediate) ||
                setbgcolor28(Colors.tasbihitembg) ||
                settextcolor28(Colors.intermediate) ||
                setbgcolor29(Colors.tasbihitembg) ||
                settextcolor29(Colors.intermediate) ||
                setbgcolor30(Colors.tasbihitembg) ||
                settextcolor30(Colors.intermediate) ||
                setbgcolor31(Colors.primary) ||
                settextcolor31(Colors.white)
              }
            >
               <View
                style={{
                  backgroundColor: bgcolor31,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginHorizontal: 5,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: textcolor31,fontSize: screenWidth * 0.05,textAlign: "center",fontFamily: "Poppins-light"                 }}
                >
                  بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ..   
                  </Text>
              </View>
              
          </TouchableOpacity>

        </ScrollView>
      </View>

      <View style={styles.separator} />

      <Text style={styles.targetText}>My Target</Text>

      <View style={styles.inputContainer}>
        <TextInput
          maxLength={4}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="100"
            placeholderTextColor={Colors.lightgreytasbih}
          value={usertargetvalue.toString()}
          editable={userwritten}
          onChangeText={(value) => setusertargetvalue(value)}
        />
        <View style={styles.resetContainer}>
        <TouchableOpacity onPress={resetclick}>
          <TasbihResetSVG />
        </TouchableOpacity>
      </View>
      </View>
      
      <Pressable style={styles.bgPressable} onPress={bgclick}>
         <ImagesBGTasbih />
         <Text style={styles.incrementText}>{textincrement}</Text>
      </Pressable>
    
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cardfirst: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: "100%",
    backgroundColor: Colors.prayercolor,
    elevation: 5,
    shadowOffset: { width: 100, height: 4 },
    shadowColor: Colors.secondary,
    overflow: "hidden",
    marginBottom: 10,
  },
  scrollContainer: {
    marginVertical: 10,
  },
  separator: {
    backgroundColor: Colors.bordercolor,
    height: 1,
    marginVertical: 5,
    width: "90%",
    alignSelf: "center",
  },
  targetText: {
    top:5,
    color: Colors.primary,
    fontSize: screenWidth * 0.05,
    textAlign: "center",
    fontFamily: "Raleway",
  },
  resetContainer: {
    position: "absolute",
    left: "-35%",
    top: "8%",
  },
  inputContainer: {
    flexDirection: "row",
    width: "50%",
    height: 50,
    borderRadius: 25,
    borderColor: "#8A95C6",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  input: {
    flex: 1,
    textAlign: "center",
    fontSize: screenWidth * 0.05,
  },
  bgImage: {
    top:"5%",
    width:screenWidth * 1,
    height:screenHeight * 0.6,
    position: "absolute",
  },
  bgPressable: {
    flex: 0.9, // Takes up 90% of the screen height
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative", // Ensure relative positioning for child absolute alignment
  },
  incrementText: {
    position: "absolute", // Layer on top of the image
    top:settop(),
    textAlign: "center",
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: screenWidth * 0.12,
  },
});

export default TasbihSixteen;