import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, StyleSheet, View, Image, TouchableOpacity, ScrollView, LogBox, Text, Dimensions, ActivityIndicator } from 'react-native';
import { Colors } from '../../theme';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios";

const { width, height } = Dimensions.get('window');
LogBox.ignoreAllLogs();

const GreetingCardListNew = ({ route, navigation }) => {
  const { cardid, categoryname } = route.params;
  const [categorycardlisting, setcategorycardlisting] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.get(
        `https://islamicapp.vercel.app/api/greetings?categoryId=${cardid}`
      );
      console.log("greeting card list response ==>");
      const data = response.data;
      setcategorycardlisting(data);
    } catch (e) {
      console.log(e);
      seterror(e);
    } finally {
      setisLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [cardid, categoryname])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.wasilnewthemecolorsecond} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in Fetching Data..... Please Check Your Internet Connection.
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={Colors.black} />
      <View style={{ top: 2 }}>
        <ScrollView>
          <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: "center", justifyContent: "center" }}>
              {categorycardlisting.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => {
                  navigation.navigate('GreetingCardShare', {
                    cardimage: item.path,
                    catname: categoryname,
                    name: categoryname,
                  });
                }}>
                  <View style={styles.advImageContainer}>
                    <View>
                      <Image key={item} style={styles.advImage} source={{ uri: item.path }} />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ height: 20 }}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default GreetingCardListNew;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white
  },
  advImageContainer: {
    width: width * 0.42,
    height: 180,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    borderColor: Colors.bordercolor,
    flexDirection: 'column',
    overflow: "hidden",
    backgroundColor: Colors.white
  },
  advImage: {
    width: width * 0.42,
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});