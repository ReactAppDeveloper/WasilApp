import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../../theme';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2; // Two columns with padding

const IslamicStoryGrid = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://islamicapp.vercel.app/api/islsubcategories?categoryId=${categoryId}`)
      .then(res => {
        setSubcategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.wasilnewthemecolorsecond} />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('StoryDetailScreen', {
          storyid: item._id,
          storytitle: item.title,
        })}
      >
        <View style={styles.imageContainer}>
          {item.path ? (
            <Image source={{ uri: item.path }} style={styles.image} />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.textRow}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={subcategories}
      keyExtractor={item => item._id}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: ITEM_WIDTH,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    width: '100%',
    height: 240, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#ccc',
    width: '100%',
    height: '100%',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  title: {
    color: Colors.black,
    fontSize: 13,
    flex: 1,
    marginRight: 8,
    fontFamily: "Poppins-Light",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FFF', 
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    zIndex: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
});

export default IslamicStoryGrid;