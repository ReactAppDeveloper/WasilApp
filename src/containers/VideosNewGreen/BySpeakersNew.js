import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../theme';
import { SvgUri } from 'react-native-svg';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;
import {SearchSVG} from '../../assets/icons';
import {SPEAKER_DESCRIPTION} from './SpeakerDescription';

const BySpeakersNew = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [noMatch, setnoMatch] = useState(false);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    try {
      const res = await axios.get(
        'https://islamicapp.vercel.app/api/speakers'
      );
      setData(res.data);
      setFiltered(res.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = data.filter(item =>
      item.speakerName.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredData);
    setnoMatch(filtered.length === 0);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('SpeakersDetailNew', {
          name:item.speakerName,
          speakerid: item._id,
          speakername: item.speakerName,
        })
      }>


  <View style={styles.avatarWrapper}>
  <SvgUri uri={item.coverImage} style={styles.advImage}
  />
  </View>

      <Text numberOfLines={1} style={styles.name}>
        {item.speakerName}
      </Text>

      <Text numberOfLines={3} style={styles.desc}>
        {SPEAKER_DESCRIPTION[item.speakerName]}
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
          placeholder="Search Speaker"
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
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
        )}
    </View>
  );
};

export default BySpeakersNew;
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
    backgroundColor: Colors.white,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: Colors.wasilgreenborder,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    marginVertical: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 5,
    top:Platform.OS === 'ios'? 0:2,
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    borderRadius: 12,
    borderRadius:10,
    borderWidth: 0.8,
    borderColor: Colors.wasilgreenthemecolorsecond,
    padding: 12,
    marginBottom: 16,
  },
  advImage: {
      width: "100%",
      height: "100%",
      right:30,
    },
  avatarWrapper: {
  width: 120,
  height: 120,
  borderRadius: 60,
  overflow: 'hidden',
  marginBottom: 12,
  backgroundColor: Colors.wasilgreenthemecolor,
  alignSelf:"center"
},

  name: {
    fontSize: 15,
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
    lineHeight: 16,
    fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold"
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
