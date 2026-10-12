import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import DuaCategoryCardWhite from './DuaCategoryCardWhite';
import { Colors } from '../../theme';
import axios from "axios"

const DuasScreenWhite = ({ navigation }) => {
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.wasilnewthemecolorsecond}>

        </ActivityIndicator>
      </View>
    );
  }

  const handlePress = (item) => {
    navigation.navigate('DuaCategoryDetail', {duacategoryid: item._id,duacategorytitle:item.title,name:item.title});};

  return (
    <View style={styles.container}>
      <FlatList
        data={duacategoriesdata}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <DuaCategoryCardWhite item={item} onPress={handlePress} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default DuasScreenWhite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  list: {
    padding: 8,
  },
});
