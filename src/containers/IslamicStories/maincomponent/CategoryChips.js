import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import { Colors } from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const CategoryChips = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://islamicapp.vercel.app/api/islamiccategories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);


  const splitIntoTwoRows = () => {
    const row1 = [];
    const row2 = [];

    categories.forEach((item, index) => {
      (index % 2 === 0 ? row1 : row2).push(item);
    });

    return [row1, row2];
  };

  const [row1, row2] = splitIntoTwoRows();

  return (
    <View style={{ backgroundColor: Colors.intermediate1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          top: 10,
        }}
      >
        <Text style={{ fontSize: 18,color:Colors.white,fontFamily:"Poppins-Bold", }}>
          Categories
        </Text>
       
      </View>

      <View style={styles.divider} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.rowsContainer}>
          <View style={styles.row}>
            {row1.map((item, index) => (
              <TouchableOpacity
                key={`row1-${index}`}
                style={[
                  styles.chip,
                  {
                    borderColor:"#CEB6F8",
                  },
                ]}
                onPress={() =>
                  navigation.navigate('SubCategories', {
                    categoryId: item._id,
                    name: item.categoryname,
                  })
                }
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color:Colors.white,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {item.categoryname}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            {row2.map((item, index) => (
              <TouchableOpacity
                key={`row2-${index}`}
                style={[
                  styles.chip,
                  {
                    borderColor: "#CEB6F8",
                  },
                ]}
                onPress={() =>
                  navigation.navigate('SubCategories', {
                    categoryId: item._id,
                    name: item.categoryname,
                  })
                }
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                       color:Colors.white,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {item.categoryname}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
    paddingTop: 15,
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
    top:Platform.OS==='ios'?0:2,
    fontSize: 14,
    fontWeight: '500',
    fontFamily:"Poppins-Light",
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 1.5,
    marginTop: 20,
    marginHorizontal: 12,
  },
});

export default CategoryChips;
