import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useStoreTasbih from "../../tasbihstore";
import { WasilNewTasbihSelectbgSvg } from "../../assets/icons";
const { width } = Dimensions.get("window");
import {Colors} from '../../theme'
const BACKGROUNDS = [
  { key: "cloud-bg", src: require("../../assets/cloud-bg.png") },
  { key: "cloud-bg1", src: require("../../assets/cloud-bg1.png") },
  { key: "cloud-bg2", src: require("../../assets/cloud-bg2.png") },
  { key: "cloud-bg3", src: require("../../assets/cloud-bg3.png") },
  { key: "cloud-bg4", src: require("../../assets/cloud-bg4.png") },
  { key: "cloud-bg5", src: require("../../assets/cloud-bg5.png") },
];

export default function BackgroundPickerScreen() {
  const navigation = useNavigation();
  const { currentBgKey, setCurrentBackground } = useStoreTasbih();
  const [selectedBg, setSelectedBg] = useState(currentBgKey);
  const selectBackground = (bgKey) => {
    setCurrentBackground(bgKey); // ✅ update current global background
    navigation.navigate("TasbihCounterScreen", { selectedBg: bgKey });
  };

 const renderItem = ({ item }) => {
  const isActive = item.key === selectedBg;

  return (
    <TouchableOpacity
      style={[styles.bgItem, isActive && styles.bgItemActive]}
      onPress={() => selectBackground(item.key)}
    >
      <Image source={item.src} style={styles.bgImage} resizeMode="cover" />
      
      {/* ✅ Show SVG on selected image */}
      {isActive && (
        <View style={styles.selectedIconContainer}>
          <WasilNewTasbihSelectbgSvg width={24} height={24} />
        </View>
      )}
    </TouchableOpacity>
  );
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Select Your Desired Background</Text>

      <FlatList
        data={BACKGROUNDS}
        keyExtractor={(item) => item.key}
        numColumns={2}
        contentContainerStyle={{ padding: 12 }}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.wasilgreenthemecolor },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
    fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
    color:Colors.white,
  },
  bgItem: {
    width: width / 2 - 24,
    height: 150,
    margin: 6,
    borderRadius: 12,
    overflow: "hidden",
    
    borderWidth: 2,
    borderColor: "#6A6AFF",
  },
  bgItemActive: {
    borderColor: "#FF9800",
    borderWidth: 4,
  },
  bgImage: { width: "100%", height: "100%" },
  selectedIconContainer: {
  position: "absolute",
  top: 8,
  right: 8,
},
});
