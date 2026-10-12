import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions,
  Vibration,
  Modal, 
  Switch, 
  TextInput
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import SoundPlayer from 'react-native-sound-player';
import {
  WasilNewTasbihNewHeartUnFilled,
  WasilNewTasbihNewHeartFilled,
  WasilNewTasbihBgChangeSvg,
  WasilNewTasbihSettingSvg,
  WasilNewTasbihRopeSvg,
  WasilNewTasbihBeedsFirstSvg,
  WasilNewTasbihBeedsSecondSvg,
  WasilNewTasbihBeedsThirdSvg,
  WasilNewTasbihBeedsFourthSvg,
  WasilNewTasbihGResetSvg
} from "../../assets/icons";
import useStoreTasbih from '../../tasbihstore';
const tasbihbgmainimage = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1785361063/tasbih/tasbihbgmaint.png'};
const BEADS_COUNT = 7;
const ANIMATION_DURATION = 400;
const { width ,height} = Dimensions.get("window");

 const ARC = {
  start: { x: 2, y: 330 },
  c1: { x: width * 0.1, y: 400 },
  c2: { x: width * 0.5, y: 100 },
  end: { x: width - 15, y: 75 },
 };

 const bezier = (t, p0, p1, p2, p3) => {
  "worklet";
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;

  return {
    x:
      u * uu * p0.x +
      1 * uu * t * p1.x +
      3 * u * tt * p2.x +
      tt * t * p3.x,
    y:
      u * uu * p0.y +
      2 * uu * t * p1.y +
      2 * u * tt * p2.y +
      tt * t * p3.y,
  };
 };

 const AnimatedCircle = Animated.createAnimatedComponent(Circle);
 const CIRCLE_SIZE = 40;
 const STROKE_WIDTH = 6;
 const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
 const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function TasbihCounterScreen({navigation}) {

  const route = useRoute();
  const { tasbihNameEnglish } = route.params;
  const [tasbihData, setTasbihData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [round, setRound] = useState(1);
  const [total, setTotal] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const progress = useSharedValue(0);
  const progressCircle = useSharedValue(0);
  const isSingleItem = tasbihData.length === 1;
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [targetCount, setTargetCount] = useState(33);
  const [targetInput, setTargetInput] = useState("33");
  const sheetAnim = useSharedValue(0);
  const SHEET_HEIGHT = 250;
  const BEADS_LIST = [
  { id: 1, Component: WasilNewTasbihBeedsFirstSvg },
  { id: 2, Component: WasilNewTasbihBeedsSecondSvg },
  { id: 3, Component: WasilNewTasbihBeedsThirdSvg },
  { id: 4, Component: WasilNewTasbihBeedsFourthSvg },
  ];
  const [selectedBead, setSelectedBead] = useState(0);
  const {
  favouritestasbih,
  addTasbih,
  deleteTasbih,
  setCurrentBackground,
  getCurrentBackgroundImage,
  } = useStoreTasbih();

  const isFavourited = favouritestasbih.some(
  (item) => item._id === selected?._id
  );
  const backgroundImage = getCurrentBackgroundImage();
  const STORAGE_KEYS = {
  SOUND: "tasbih_sound_enabled",
  VIBRATION: "tasbih_vibration_enabled",
  TARGET: "tasbih_target_count",
};
useEffect(() => {
  loadSettings();
}, []);
const loadSettings = async () => {
  try {
    const sound = await AsyncStorage.getItem(STORAGE_KEYS.SOUND);
    const vibration = await AsyncStorage.getItem(STORAGE_KEYS.VIBRATION);
    const target = await AsyncStorage.getItem(STORAGE_KEYS.TARGET);

    if (sound !== null) {
      setSoundEnabled(JSON.parse(sound));
    }

    if (vibration !== null) {
      setVibrationEnabled(JSON.parse(vibration));
    }

    if (target !== null) {
      const value = parseInt(target, 10);

      setTargetCount(value);
      setTargetInput(target);
    }
  } catch (e) {
    console.log("Load settings error:", e);
  }
};

  useEffect(() => {
  if (route.params?.selectedBg) {
    setCurrentBackground(route.params.selectedBg);
  }
}, [route.params?.selectedBg]);

  useEffect(() => {
    fetchTasbihVerses();
  }, []);

  useEffect(() => {
  const loadSelectedBead = async () => {
    try {
      const savedBead = await AsyncStorage.getItem("tasbih_selected_bead");
      if (savedBead !== null) {
        setSelectedBead(parseInt(savedBead, 10));
      }
    } catch (e) {
      console.log("Load bead error:", e);
    }
  };

  loadSelectedBead();
}, []);

useEffect(() => {
  setTargetInput(String(targetCount));
}, [targetCount]);

useEffect(() => {
  setCount(0);
  setRound(1);
  progressCircle.value = withTiming(0, { duration: 200 });
}, [targetCount]);

  const fetchTasbihVerses = async () => {
    try {
      const response = await fetch(
        `https://islamicapp.vercel.app/api/tasbihverse?tasbihnameenglish=${encodeURIComponent(
          tasbihNameEnglish
        )}`
      );
      const json = await response.json();
      
        setTasbihData(json);
        setSelected(json[0]);
 
    } catch (error) {
      console.log("Tasbih API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const playSound = () => {
  if (!soundEnabled) return;

  try {
    SoundPlayer.playUrl('https://cloud.muslimandquran.com/v3/tasbihat/Tasbih_Counter_Sound.mp3');
  } catch (e) {
    console.log('Cannot play sound', e);
  }
  };

  const onPress = () => {
  const safeTarget = targetCount > 0 ? targetCount : 33; // fallback

  setCount((prev) => {
    let newCount;

    if (prev >= safeTarget) {
      setRound((r) => r + 1);
      newCount = 1;
      progressCircle.value = withTiming(
        1 / safeTarget,
        { duration: 300 }
      );
    } else {
      newCount = prev + 1;
      progressCircle.value = withTiming(
        newCount / safeTarget,
        { duration: 300 }
      );
    }

    return newCount;
  });

  setTotal((t) => t + 1);

  if (soundEnabled) playSound();
  if (vibrationEnabled) Vibration.vibrate(50);

  progress.value = withTiming(progress.value + 1, {
    duration: ANIMATION_DURATION,
    easing: Easing.out(Easing.cubic),
  });
};


  const onPressReset = () => {
  setCount(0);
  setRound(1);
  setTotal(0);
  progressCircle.value = withTiming(0, { duration: 200 });
  };

  const beadStyle = (index) =>
    useAnimatedStyle(() => {
      const spacing = 1 / BEADS_COUNT;
      const t = (progress.value * spacing + index * spacing) % 1;

      const pos = bezier(t, ARC.start, ARC.c1, ARC.c2, ARC.end);

      return {
        position: "absolute",
        transform: [
          { translateX: pos.x },
          { translateY: pos.y },
        ],
      };
  });
  
  const getArabicFontSize = (text = "") => {
    const length = text.length;
    if (length <= 5) return 40;
    if (length <= 10) return 34;
    if (length <= 15) return 30;
    if (length <= 20) return 28;
    if (length <= 25) return 26;
    if (length <= 30) return 24;
    if (length <= 35) return 22;
    return 20;
  };

  const animatedCircleStyle = useAnimatedStyle(() => {
  return {
    strokeDashoffset:
      CIRCUMFERENCE * (1 - progressCircle.value),
  };
  });

const openSettings = () => {
  sheetAnim.value = 0; 
  setSettingsVisible(true);

  requestAnimationFrame(() => {
    sheetAnim.value = withTiming(1, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });
  });
};



const closeSettings = () => {
  sheetAnim.value = withTiming(
    0,
    {
      duration: 250,
      easing: Easing.in(Easing.cubic),
    },
    () => {
      runOnJS(setSettingsVisible)(false);
    }
  );
};


const sheetStyle = useAnimatedStyle(() => ({
  transform: [
    {
      translateY: SHEET_HEIGHT * (1 - sheetAnim.value),
    },
  ],
}));

  const toggleFavourite = () => {
  if (!selected) return;
  if (isFavourited) deleteTasbih(selected);
  else addTasbih(selected);
  };
 
  return (
    <ImageBackground source={tasbihbgmainimage} style={styles.container} imageStyle={{top:300}}>
      <ImageBackground
  source={backgroundImage}
  style={styles.card}
  imageStyle={{ borderRadius: 15 }}
>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{selected?.tasbihnameenglish}</Text>
         <TouchableOpacity onPress={toggleFavourite}>
    {isFavourited ? <WasilNewTasbihNewHeartFilled /> : <WasilNewTasbihNewHeartUnFilled />}
  </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.arabic,
            { fontSize: getArabicFontSize(selected?.tasbihinarabic) },
          ]}
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {selected?.tasbihinarabic}
        </Text>
        <Text style={styles.english}>{selected?.tasbihtransliteration}</Text>
        <Text style={styles.benefit}>{selected?.tasbihpurpose}</Text>

        <TouchableOpacity
          style={styles.bgChangeBtn}
          onPress={() =>
          navigation.navigate("BackgroundPickerScreen", {
          tasbihNameEnglish,
          })
          }>
          <WasilNewTasbihBgChangeSvg />
        </TouchableOpacity>

        <TouchableOpacity style={styles.audioBtn} onPress={openSettings}>
          <WasilNewTasbihSettingSvg />
        </TouchableOpacity>
      </ImageBackground>

      <FlatList
        horizontal={!isSingleItem}
        showsHorizontalScrollIndicator={false}
        data={tasbihData}
        keyExtractor={(item, index) => item._id || index.toString()}
        style={{ marginTop: Platform.OS==='ios'?12:12}}
        renderItem={({ item }) => {
          const isActive = item === selected;
          return (
            <TouchableOpacity
              style={[
                styles.subItem,
                isActive && styles.subItemActive,
                isSingleItem && styles.singleSubItem,
              ]}
              onPress={() => {
                setSelected(item);
                setCount(0);
                setRound(0);
                setTotal(0);
                progressCircle.value = withTiming(0, { duration: 200 });
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.subText}>{item.tasbihinarabic}</Text>
            </TouchableOpacity>
          );
        }}
      />
     <View style={styles.bottomBar}>
  <View style={styles.leftSection}>
    <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
      <Circle
        cx={CIRCLE_SIZE / 2}
        cy={CIRCLE_SIZE / 2}
        r={RADIUS}
        stroke="#E6E6E6"
        strokeWidth={STROKE_WIDTH}
        fill="none"
      />

      <AnimatedCircle
        cx={CIRCLE_SIZE / 2}
        cy={CIRCLE_SIZE / 2}
        r={RADIUS}
        stroke={Colors.yellowgoldcolor}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={CIRCUMFERENCE}
        animatedProps={animatedCircleStyle}
        rotation="-90"
        origin={`${CIRCLE_SIZE / 2},${CIRCLE_SIZE / 2}`}
      />
    </Svg>

    <View style={styles.counterContainer}>
      <Text allowFontScaling={false} style={styles.counter}>
        {count}
        <Text style={styles.counter1}>/{targetCount}</Text>
      </Text>

      <Text allowFontScaling={false} style={styles.sub}>
        Round: {round}
      </Text>
    </View>
  </View>

  <TouchableOpacity onPress={onPressReset} activeOpacity={0.8}>
    <WasilNewTasbihGResetSvg />
  </TouchableOpacity>
     </View>

      <View style={{height:350,top:Platform.OS==='ios'?80:80}}>
        <View>
      <View style={styles.rope}>
        <WasilNewTasbihRopeSvg width={width} />
      </View>
 
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.touchArea}>
          {Array.from({ length: BEADS_COUNT }).map((_, i) => (
  <Animated.View key={i} style={beadStyle(i)}>
    
      <View>
        {(() => {
          const BeadSvg = BEADS_LIST[selectedBead].Component;
          return <View style={{bottom:28}}><BeadSvg width={42} height={42} /></View>;
        })()}
      </View>

  </Animated.View>
))}
        </View>
        </TouchableWithoutFeedback>

    
      </View>
      </View>
       <View style={styles.beadSelector}>
  {BEADS_LIST.map((item, index) => {
    const BeadIcon = item.Component;
    const isActive = selectedBead === index;

    return (
      <TouchableOpacity
        key={item.id}
        onPress={async () => {
           setSelectedBead(index);
           await AsyncStorage.setItem("tasbih_selected_bead", String(index));
           }}
        activeOpacity={0.8}
        style={[
          styles.beadItem,
          isActive && styles.beadItemActive,
        ]}
      >
        <BeadIcon width={34} height={34} />
      </TouchableOpacity>
    );
  })}
       </View>


      <Modal transparent visible={settingsVisible} animationType="slide">
  <TouchableWithoutFeedback onPress={closeSettings}>
    <View style={styles.backdrop} />
  </TouchableWithoutFeedback>

  <Animated.View style={[styles.bottomSheet, sheetStyle]}>
    <View style={styles.sheetHandle} />

    <View style={styles.row}>
      <Text style={styles.sheetText}>Sound</Text>
      <Switch
  value={soundEnabled}
  style={{ transform: [{ scale: 0.8 }] }}
  trackColor={{
    false: "#E0E0E0",
    true: Colors.wasilgreentext,
  }}
  thumbColor={Colors.white}
  onValueChange={async (value) => {
    setSoundEnabled(value);
    await AsyncStorage.setItem(
      STORAGE_KEYS.SOUND,
      JSON.stringify(value)
    );
  }}
/></View>

    <View style={styles.row}>
      <Text style={styles.sheetText}>Vibration</Text>
      <Switch
  value={vibrationEnabled}
  style={{ transform: [{ scale: 0.8 }] }}
  trackColor={{
    false: "#E0E0E0",
    true: Colors.wasilgreentext,
  }}
  thumbColor={Colors.white}
  onValueChange={async (value) => {
    setVibrationEnabled(value);
    await AsyncStorage.setItem(
      STORAGE_KEYS.VIBRATION,
      JSON.stringify(value)
    );
  }}
/></View>

    <View style={styles.row}>
      <Text style={styles.sheetText}>Target</Text>
      <TextInput
  value={targetInput}
  keyboardType="number-pad"
 onChangeText={async (v) => {
  setTargetInput(v);

  const n = parseInt(v, 10);

  if (!isNaN(n) && n > 0) {
    setTargetCount(n);

    await AsyncStorage.setItem(
      STORAGE_KEYS.TARGET,
      String(n)
    );
  }
}}
  style={styles.targetInput}
/>
    </View>
  </Animated.View>
      </Modal>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.wasilgreenthemecolor, paddingTop: 10 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },

  card: { marginHorizontal: 8, padding: 16, height: 230 },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 15, color: Colors.black,fontFamily: Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular", },

  arabic: {
    textAlign: "center",
    color: Colors.wasilgreenthemecolorfifth,
    fontFamily:
      Platform.OS === "ios" ? "Al Qalam Quran Majeed Web" : "AlQalamQuran",
  },

  english: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.black,
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular"
  },

  benefit: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 13,
    width: "85%",
    marginTop: 6,
    color: Colors.black,
    fontFamily: Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },

  audioBtn: { position: "absolute", right: 16, bottom: Platform.OS === "ios" ? 12 : 12 },
  bgChangeBtn: { position: "absolute", left: 16, bottom: 16 },

  subItem: {
    height: 40,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: Colors.wasilgreenthemecolorsecond,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
  },
  singleSubItem: {
    width: Dimensions.get("window").width - 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subItemActive: { backgroundColor: Colors.wasilgreenthemecolorsecond,},
  subText: {
    bottom: Platform.OS === "ios" ? 0 : 2,
    color: Colors.wasilgreenthemecolorfifth,
    fontSize: 18,
    fontFamily:
    Platform.OS === "ios" ? "Al Qalam Quran Majeed Web" : "AlQalamQuran",
  },
  rope: {
  position: "absolute",
  width: "100%",
  },
  touchArea: {
    width: "100%",
    height: 300,
    bottom:65,
  },
  
  backdrop: {
  flex: 1,
     ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(255,255,255,0)'
},

bottomSheet: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: Colors.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
},

sheetHandle: {
  width: 40,
  height: 5,
  backgroundColor: "#CCC",
  borderRadius: 5,
  alignSelf: "center",
  marginBottom: 15,
},

row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: 12,
},

sheetText: {
  fontSize: 16,
  color: Colors.black,
  fontFamily: "NunitoSans-Bold",
},

targetInput: {
  width: 80,
  height: 40,
  borderWidth: 1,
  color:Colors.black,
  borderColor: "#DDD",
  borderRadius: 8,
  textAlign: "center",
  fontSize: 16,
},
beadSelector: {
  alignSelf: "center",
  flexDirection: "row",
  backgroundColor: Colors.white,
  borderRadius: 30,
  padding: 8,
  bottom:Platform.OS==='ios'?50:50,
  elevation: 5,
  shadowColor: Colors.black,
  shadowOpacity: 0.1,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
},

beadItem: {
  width: 52,
  height: 52,
  borderRadius: 26,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 6,
},

beadItemActive: {
  backgroundColor: "#FFF4CC",
},


bottomBar: {
  height: height*0.04,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
},

leftSection: {
  flexDirection: "row",
  alignItems: "center",
},

counterContainer: {
  height:40,
  bottom:10,
  marginLeft: 12,
},

counter: {
  color: Colors.white,
  fontSize: 36,
  fontFamily: "Nunito Sans 10pt Condensed",
},

counter1: {
  color: Colors.white,
  fontSize: 14,
  fontFamily: "Nunito Sans 10pt Condensed",
},

sub: {
  color: Colors.white,
  fontSize: 12,
  fontFamily: "Nunito Sans 10pt Condensed",
},
});

