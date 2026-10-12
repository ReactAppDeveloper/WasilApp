import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import { Colors } from '../../theme';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;
import {SearchSVG} from '../../assets/icons';
import reciters from './newreciters';
const RecitersList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [noMatch, setnoMatch] = useState(false);

  useEffect(() => {
   setData(reciters);
   setFiltered(reciters);
   setLoading(false);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredData);
    setnoMatch(filtered.length === 0);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('ReciterDetail', {
          name:item.name,
          reciterId: item.id,
          reciterName: item.name,
        })
      }>


  <View style={styles.avatarWrapper}>
  <Image style={styles.advImage} source={item.image} />
  </View>

      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.desc}>
       {item.style.description}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor} />

      <View style={styles.searchBox}>
         <View>
            <SearchSVG />
          </View>
        <TextInput
          placeholder="Search Reciter"
          value={search}
          onChangeText={handleSearch}
          style={styles.searchInput}
          placeholderTextColor={Colors.wasilgreentext}
        />
      </View>
{noMatch ? (
          <Text style={styles.noMatch}>No Match Found</Text>
        ) : (
     <FlatList
  data={filtered}
  keyExtractor={(item) => item.id.toString()}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
  renderItem={renderItem}
  showsVerticalScrollIndicator={false}
/>
)}
    </View>
  );
};

export default RecitersList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolor,
    paddingHorizontal: 16,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.wasilgreenthemecolor,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.wasilgreenborder,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 46,
    marginVertical: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 5,
    paddingBottom:Platform.OS==='ios'?0:7,
    fontSize: 14,
    color: Colors.white,
    fontFamily:"Poppins-Medium"
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    borderRadius:10,
    borderWidth: 1,
    borderColor: Colors.wasilgreenborder,
    padding: 12,
    marginBottom: 16,
  },
  advImage: {
      width: "100%",
      height: "100%",
      
    },
  avatarWrapper: {
  width: 120,
  height: 120,
  borderRadius: 60,
  overflow: 'hidden',
  marginBottom: 12,
  alignSelf:"center",
  backgroundColor: Colors.white,
},

  name: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold"
  },

  desc: {
    fontSize: 10,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 12,
    fontFamily: 'Poppins-Medium',
  },

  shareIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
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
