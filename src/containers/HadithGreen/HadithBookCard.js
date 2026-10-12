import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../theme";
const HadithBookCard = ({ title, description, image,hadithbookname,name }) => {
   const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    navigation.navigate('HadithBooksDetail', {
                      hadithbookname: hadithbookname,
                      name: name,
                    });
                  }}>
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={8} style={styles.desc}>
          {description}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default HadithBookCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: 150,
    height: 190,
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  title: {
    top:10,
    fontWeight:"600",
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
    color: Colors.black,
  },
  desc: {
    top:25,
    fontSize: 12,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
    color: "#555",

  },
});
