import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme';

const CategoryChips = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  const chipColors = [
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
    '#CEB6F8',
  ];

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        'https://islamicapp.vercel.app/api/videochannels'
      );
        setCategories(response.data);
    } catch (error) {
      console.log('Books API Error:', error);
    }
  };
  
  

  const splitIntoTwoRows = () => {
    const row1 = [];
    const row2 = [];

    categories.forEach((item, index) => {
      if (index % 2 === 0) {
        row1.push(item);
      } else {
        row2.push(item);
      }
    });

    return [row1, row2];
  };

  const [row1, row2] = splitIntoTwoRows();

  const onPressBook = item => {
    console.log('Selected Book:', item);
      if (item.videochannelname === "Durs and Podcast") {
                      navigation.navigate('BySpeakersNew');
                    }
                    else if (item.videochannelname === "Recitation Videos") {
                      navigation.navigate('RecitaionDetailNew', {
                        channelname: "Recitation",
                        name: item.videochannelname
                      });
                    }
                     else if (item.videochannelname === "Kids Videos") {
                      navigation.navigate('ChannelsDetailNew', {
                        channelname: "Kids",
                        name: item.videochannelname
                      });
                    }
                    else {
                      navigation.navigate('ChannelsDetailNew', {
                        channelname: item.videochannelname,
                        name: item.videochannelname
                      });
                    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.heading}>Categories</Text>
      </View>

      <View style={styles.divider} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.rowsContainer}>
          <View style={styles.row}>
            {row1.map((item, index) => {
              const chipColor = chipColors[index % chipColors.length];

              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.chip,
                    {
                      borderColor: chipColor,
                    },
                  ]}
                  activeOpacity={0.8}
                  onPress={() => onPressBook(item)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: Colors.white,
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {item.videochannelname}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            {row2.map((item, index) => {
              const chipColor =
                chipColors[(index + row1.length) % chipColors.length];

              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.chip,
                    {
                      borderColor: chipColor,
                    },
                  ]}
                  activeOpacity={0.8}
                  onPress={() => onPressBook(item)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: Colors.white,
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {item.videochannelname}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryChips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.intermediate1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 1.5,
    marginTop: 10,
    marginHorizontal: 12,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.intermediate1,
  },
  rowsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  chip: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});