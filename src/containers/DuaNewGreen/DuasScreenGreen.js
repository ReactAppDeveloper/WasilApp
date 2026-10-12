import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, StatusBar } from 'react-native';
import DuaCategoryCardGreen from './DuaCategoryCardGreen';
import { Colors } from '../../theme';
import axios from "axios"
import { DUAS_CATEGORIES } from './duasCategories';

const DuasScreenGreen = ({ navigation }) => {
const [duacategoriesdata, setduacategoriesdata] = useState([]);
const [isLoading, setisLoading] = useState(false);

useEffect(() => {
    setisLoading(true);
    fetchData()
  }, [])

  const fetchData = async () => {
     let isMounted = true; 
    try {
      const response = await axios.get(
        "https://islamicapp.vercel.app/api/duacategories"
      )
      console.log("dua categories response")
       if (isMounted) {
          const data = response.data
          setduacategoriesdata(data)
        }
    } catch (e) {
       console.error("Error fetching data", e);
        if (isMounted) {
          seterror("Failed to load data");
        }
    }
    finally {
        if (isMounted) {
          setisLoading(false);
        }
      }
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:Colors.wasilgreenthemecolor}}>
        <ActivityIndicator size={"large"} color={Colors.white}>

        </ActivityIndicator>
      </View>
    );
  }

  const handlePress = (item) => {
    navigation.navigate('DuaCategoryDetail', {duacategoryid: item._id,duacategorytitle:item.title,name:item.title});};

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor}></StatusBar>
      <FlatList
        data={duacategoriesdata}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <DuaCategoryCardGreen item={item} onPress={handlePress} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default DuasScreenGreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolor,
  },
  list: {
    padding: 8,
  },
});
