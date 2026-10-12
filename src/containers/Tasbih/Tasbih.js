import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput,
  LogBox,
  Platform,
  StatusBar
} from "react-native";
import { Colors } from "../../theme";
import {
  WasilNewAllBTTasbihSvg,
  SearchSVG,
  WasilNewBTAllahTasbihSvg
} from "../../assets/icons";

LogBox.ignoreAllLogs();

const Tasbih = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [noMatch, setnoMatch] = useState(false);

  useEffect(() => {
    fetchTasbihs();
  }, []);

  const fetchTasbihs = async () => {
    try {
      const response = await fetch(
        "https://islamicapp.vercel.app/api/tasbihs"
      );
      const json = await response.json();
        setData(json);
        setFiltered(json);
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

const handleSearch = (text) => {
    setSearch(text);
    const filteredData = data.filter((item) =>
      item.tasbihnameenglish.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredData);
    setnoMatch(filtered.length === 0);
  };

const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("TasbihCounterScreen", { tasbihNameEnglish: item.tasbihnameenglish })
    }
  >
    {item.tasbihnameenglish === "Names of Allah" ? (
      <View style={styles.advImageContainer}>
        <View style={styles.leftBox}>
          <WasilNewBTAllahTasbihSvg />
        </View>

        <View style={styles.middleBox}>
          <Text numberOfLines={1} style={styles.titleText1}>
            99 Names of Allah
          </Text>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.tasbihnameenglish}
          </Text>
        </View>
      </View>
    ) : (
      <View style={styles.advImageContainer}>
        <View style={styles.leftBox}>
          <WasilNewAllBTTasbihSvg />
        </View>

        <View style={styles.middleBox}>
          <Text numberOfLines={1} style={styles.titleText1}>
            General Tasbih
          </Text>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.tasbihnameenglish}
          </Text>
        </View>
      </View>
    )}
  </TouchableOpacity>
);

if (loading) 
{
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.wasilnewthemecolorsecond} />
      </View>
    );
}

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={Colors.intermediate1}/>
      <View style={styles.searchBox}>
        <SearchSVG />
        <TextInput
          placeholder="Search Tasbih"
          value={search}
          onChangeText={handleSearch}
          style={styles.searchInput}
          
          placeholderTextColor={Colors.white}
        />
      </View>

 {noMatch ? (
          <Text style={styles.noMatch}>No Match Found</Text>
        ) : (
      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
)}
   <View style={{height:20}}></View>
    </View>
  );
};

export default Tasbih;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.intermediate1,
    paddingHorizontal: 15,
  },

  advImageContainer: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: Colors.bordercolor,
    backgroundColor: Colors.intermediate1,
  },

  leftBox: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },



  middleBox: {
    flex: 1.5,
    justifyContent: "center",
  },

  titleText1: {
    color: Colors.yellowgoldcolor,
    fontSize: 8,
    fontFamily: "NunitoSans-SemiBold"
  },
  titleText: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: "NunitoSans-SemiBold"
  },

  rightBox: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: Colors.bordercolor,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    marginVertical: 14,
  },

  searchInput: {
    flex: 1,
    top:1.8,
    paddingBottom:Platform.OS=== 'ios'?4:10,
    marginLeft: 8,
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Poppins-Medium",
  },
  noMatch: {
    height: '100%',
    top: 300,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Light',
  },
});
