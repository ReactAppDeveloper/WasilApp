import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../../theme';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

const IslamicStoryGrid = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://islamicapp.vercel.app/api/islsubcategories?categoryId=${categoryId}`
        );

        setSubcategories(response.data);
      } catch (error) {
        console.log('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [categoryId]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('StoryDetailScreen', {
            storyid: item._id,
            storytitle: item.title,
          })
        }
      >
        <View style={styles.imageContainer}>
          {item.path ? (
            <Image
              source={{ uri: item.path }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.textRow}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.intermediate1}/>
      <FlatList
        data={subcategories}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.container1}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator
            size="large"
            color={Colors.white}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.intermediate1,
  },

  container1: {
    padding: 16,
    backgroundColor: Colors.intermediate1,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  card: {
    width: ITEM_WIDTH,
  },

  imageContainer: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },

  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  title: {
    flex: 1,
    color: Colors.white,
    fontSize: 13,
    marginRight: 8,
    fontFamily: 'Poppins-Light',
  },

  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.intermediate1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    zIndex: 10,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default IslamicStoryGrid;