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
  Dimensions,
  ImageBackground,
} from "react-native";
import { Colors } from "../../theme";
import { SvgUri } from 'react-native-svg';
import {
  SearchSVG,
  WasilNewAllahTasbihSvg,
} from "../../assets/icons";
const imageone = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1790845349/tasbih/tasbihbg.png'};
LogBox.ignoreAllLogs();

const { width } = Dimensions.get("window");

const Tasbih = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [noMatch, setNoMatch] = useState(false);

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
      item.tasbihnameenglish
        ?.toLowerCase()
        .includes(text.toLowerCase())
    );

    setFiltered(filteredData);
    setNoMatch(filteredData.length === 0 && text.length > 0);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() =>
          navigation.navigate("TasbihCounterScreen", {
            tasbihNameEnglish: item.tasbihnameenglish,
          })
        }
        style={styles.categoryCard}
      >
        {/* Icon */}
        <View style={styles.categoryIcon}>
         <SvgUri uri={item.path} />
        </View>

        {/* Content */}
        <View style={styles.categoryContent}>
          <Text
            numberOfLines={1}
            style={styles.categoryTitle}
          >
              {item.tasbihnameenglish}
          </Text>

          <Text
            numberOfLines={2}
            style={styles.categoryDescription}
          >
            Dhikr for a blessed start and peaceful end.
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator
          size="large"
          color={Colors.wasilnewthemecolorsecond}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchBox}>
        <SearchSVG />

        <TextInput
          placeholder="Search tasbih categories"
          value={search}
          onChangeText={handleSearch}
          style={styles.searchInput}
          placeholderTextColor="#777"
        />

      </View>

      <ImageBackground source={imageone} resizeMode="contain" imageStyle={{height:90,marginHorizontal: 5,
    marginTop: 20,
    overflow: "hidden",}}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.allahBanner}
        onPress={() =>
          navigation.navigate("TasbihCounterScreen", {
            tasbihNameEnglish: "Names of Allah",
          })
        }
      >
        {/* Decorative circle */}
        <View style={styles.bannerCircle}>
          <WasilNewAllahTasbihSvg />
        </View>

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>
            99 Names of Allah
          </Text>

          <Text style={styles.bannerDescription}>
            Discover and reflect on the Most{"\n"}
            Beautiful Names
          </Text>
        </View>

        <View style={styles.bannerArrow}>
          <Text style={styles.arrowText}>›</Text>
        </View>
      </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.sectionTitle}>
        Tasbih Categories
      </Text>

      {noMatch ? (
        <Text style={styles.noMatch}>
          No Match Found
        </Text>
      ) : (
        <FlatList
          data={filtered.filter(
    (item) => item.tasbihnameenglish !== "Names of Allah"
  )}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default Tasbih;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchBox: {
    height: 50,
    marginHorizontal: 14,
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  searchInput: {
    flex: 1,
    height: 60,
    marginLeft: 12,
    paddingVertical: 0,
    fontSize: 12,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },

  filterIcon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  filterLine1: {
    width: 32,
    height: 2.5,
    backgroundColor: "#444",
    marginBottom: 6,
  },

  filterLine2: {
    width: 22,
    height: 2.5,
    backgroundColor: "#444",
    marginBottom: 6,
  },

  filterLine3: {
    width: 10,
    height: 2.5,
    backgroundColor: "#444",
  },

  /* ================= ALLAH BANNER ================= */

  allahBanner: {
    height: 90,
    marginHorizontal: 12,
    marginTop: 20,
   
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },

  bannerCircle: {
    width: 60,
    height: 60,
    borderRadius: 66,
    marginLeft: 28,
    backgroundColor: "#663BB9",
    borderWidth: 2,
    borderColor: "#54299F",
    alignItems: "center",
    justifyContent: "center",
  },

  bannerContent: {
    flex: 1,
    marginLeft: 18,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
  },

  bannerDescription: {
    color: "#D9CFF2",
    fontSize: 9,
    fontFamily: "Poppins-Regular",
  },

  bannerArrow: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 28,
  },

  arrowText: {
    color: "#6534B7",
    fontSize: 30,
    fontWeight: "300",
    marginTop: -4,
    left:1
  },

  /* ================= SECTION ================= */

  sectionTitle: {
    marginHorizontal: 22,
    marginTop: 15,
    marginBottom: 10,
    color: "#241329",
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
  },

  /* ================= CATEGORY LIST ================= */

  listContainer: {
    paddingHorizontal: 14,
    paddingBottom: 30,
  },

  categoryCard: {
    minHeight: 80,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  categoryIcon: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  categoryContent: {
    flex: 1,
    justifyContent: "center",
  },

  categoryTitle: {
    color: "#27202A",
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
  },

  categoryDescription: {
    color: "#75677F",
    fontSize: 9,
    marginTop: 3,
    fontFamily: "Poppins-Regular",
  },

  /* ================= EMPTY ================= */

  noMatch: {
    flex: 1,
    textAlign: "center",
    marginTop: 100,
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },

  /* ================= LOADER ================= */

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});