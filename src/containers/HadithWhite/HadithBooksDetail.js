import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, TextInput, ScrollView ,Platform} from 'react-native';
import { Colors } from '../../theme';
import axios from "axios";
import { DuaListNumberSVGG, DuaForwardSVG ,SearchSVG} from '../../assets/icons';

const HadithBooksDetail = ({ navigation,route }) => {
  const {hadithbookname} = route.params;
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [hadithSBdata, sethadithSBdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [noMatch, setNoMatch] = useState(false);
  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.hadithapi.com/api/${hadithbookname}/chapters?apiKey=$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli`
        )
        console.log("hadith chapters response ==>")
        const data = response.data
        sethadithSBdata(data.chapters);
        setMasterDataSource(data.chapters);
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.wasilnewthemecolorsecond}>

        </ActivityIndicator>
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
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.chapterEnglish
            ? item.chapterEnglish.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      sethadithSBdata(newData);
      setSearch(text);
      setNoMatch(newData.length === 0);
    } else {
      sethadithSBdata(masterDataSource);
      setSearch(text);
      setNoMatch(false);
    }
  };

  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={Colors.black} />

      <View style={styles.searchContainer}>
         <View style={{ top: 13,left:10 }}>
            <SearchSVG />
          </View>
          <View style={{ flex: 1, left: 15 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Chapters"
              placeholderTextColor={"#757575"}
              value={search}
              onChangeText={(text) => searchFilterFunction(text)}
            />
          </View>
         
        </View>
      {noMatch ?
        <Text style={{ height: "100%", top: 300, fontSize: 15, alignSelf: "center", color: Colors.lightgreytasbih, fontFamily: "Poppins-Light" }}>No Match Found</Text>
        :
        <View style={{ top: 25 }}>
          <ScrollView>
            <View>
              <View>
                {hadithSBdata.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => {
                    navigation.navigate('HadithsDetail', {
                      hadithchapternumber: item.chapterNumber,
                      hadithchaptername: item.chapterEnglish,
                      hadithbookname: item.bookSlug,
                      name: item.chapterEnglish,
                    });
                  }}>
                    
                    <View key={item} style={styles.advImageContainer}>
                      <View style={{  flex: 0.4, alignItems: "center", justifyContent: "center", }}>
                        <View style={{ height: Platform.OS === 'ios' ? 33 : 33}}></View>
                        <DuaListNumberSVGG />
                        <View style={{ height: 5 }}></View>
                        <Text style={{ bottom: Platform.OS === 'ios' ? 37 : 37, textAlign: "center", fontWeight: "500", color: Colors.wasilnewthemecolorsecond, fontSize: 18, fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway' }}>{index + 1}</Text>
                      </View>
                      <View style={{ flex: 1.2 }}>
                        <View style={{ flex: 1 }}>
                          <Text numberOfLines={1} style={{ alignSelf: "flex-start", top: Platform.OS === 'ios' ? 26 : 22, color: Colors.black, fontSize: 14,fontFamily: Platform.OS === 'ios' ? 'NunitoSans-Semibold' : 'NunitoSans-Semibold', }}>{item.chapterEnglish.length >= 25 ? item.chapterEnglish.slice(0, 24)+"..." : item.chapterEnglish}</Text>
                        </View>
                      </View>
                      <View style={{ flex: 0.5}}>
                        <View style={{ flex: 1 }}>
                          <Text numberOfLines={1} style={{ alignSelf: "flex-end", color: Colors.wasilnewthemecolorsecond,top: Platform.OS === 'ios' ? 18 : 13,right:Platform.OS === 'ios' ? 20 : 20, fontSize: 18, fontWeight: "600", fontFamily:Platform.OS === 'ios' ? 'Al Qalam Quran Majeed Web' : 'AlQalamQuran'}}>{item.chapterArabic}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>

                ))}

              </View>
              <View style={{ height: 100 }}></View>
            </View>
          </ScrollView>
        </View>
      }
    </View>
  );
};

export default HadithBooksDetail;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white
  },

  advImageContainer: {
    flexDirection: 'row',
    width: "95%",
    height: 70,
    borderColor:Colors.wasilnewthemecolor,
    borderWidth: 1,
    marginTop:10,
    borderRadius:12,
    alignSelf: "center",
  },
  
  searchContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 50,
    borderColor:Colors.bordercolor,
    backgroundColor: Colors.white,
    borderWidth: 1,
    top:20,
    borderRadius:12,
    alignSelf: 'center',
  },
  searchInput: {
    paddingLeft: 1,
    top: Platform.OS === 'ios' ? 16 : 3,
    fontSize: 13,
    color: Colors.secondary,
    fontFamily:"NunitoSans-SemiBold"
  },
});
