import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Platform,
  LogBox,
  StatusBar
} from "react-native";
import { Colors } from "../../theme";
import { HeartfilledSVG ,FavouriteEmptySVG} from "../../assets/icons";
import useStoreTasbih, { BG_MAP } from "../../tasbihstore";
LogBox.ignoreAllLogs();
export default function FavoritesScreen({ navigation }) {
  const { favouritestasbih, deleteTasbih } = useStoreTasbih();

  const renderItem = ({ item }) => {
    const backgroundImage = BG_MAP[item.bgKey || "cloud-bg"];

    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.card}
        imageStyle={{ borderRadius: 15,}}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.tasbihnameenglish}</Text>
          <TouchableOpacity onPress={() => deleteTasbih(item)}>
            <HeartfilledSVG />
          </TouchableOpacity>
        </View>

        <Text
          style={[styles.arabic, { fontSize: getArabicFontSize(item.tasbihinarabic) }]}
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {item.tasbihinarabic}
        </Text>

        <Text style={styles.english}>{item.tasbihtransliteration}</Text>
        <Text style={styles.benefit}>{item.tasbihpurpose}</Text>
      </ImageBackground>
    );
  };

  return (
      <View style={styles.containerMain}>
    <StatusBar backgroundColor={Colors.intermediate1}/>
        
    <View>
    {favouritestasbih.length > 0 ? (
        <FlatList
      data={favouritestasbih}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 12 }}
      showsVerticalScrollIndicator={false}
    />
      ) : (
        <View style={{height:"100%",alignItems:"center",justifyContent:"center"}}>
          <View >
        <FavouriteEmptySVG/>
        </View>
        <Text style={{top:20,fontSize:12,color:Colors.white,fontWeight:"500",textAlign:"center",fontFamily:"Poppins-Regular"}}>
           No Favourites yet!
        </Text>
      
</View>
      )}
                  </View>
    </View>
  );
    
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
    height: 230,
  },
  category: {
  fontSize: 13,
  fontWeight: "500",
  color: "#555",
  marginBottom: 4,
  textAlign: "center",
},
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B61F6",
  },
  arabic: {
    marginTop:30,
    textAlign: "center",
    color: Colors.wasilnewthemecolorsecond,
    fontFamily: Platform.OS === "ios" ? "Al Qalam Quran Majeed Web" : "AlQalamQuran",
  },
  english: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.black,
    marginTop: 5,
    fontFamily: "NunitoSans-Bold",
  },
  benefit: {
    textAlign: "center",
    width: "85%",
    marginTop: 5,
    color: Colors.black,
    fontFamily: Platform.OS === "ios" ? "Nunito Sans 7pt" : "NunitoSansRegular",
    alignSelf: "center",
  },
   containerMain: {
    height:"100%",
    backgroundColor:Colors.intermediate1,
  }, 
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
