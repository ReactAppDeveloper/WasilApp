// src/components/DuaCardList.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

export default class DuaCardList extends Component {
  renderDuaCard = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{item.ramadanday}</Text>
        <View style={styles.separator} />
        <Text style={styles.arabicText}>{item.ramadancurrentdate}</Text>
        <Text style={styles.translation}>{item.sehrihanafi}</Text>
      </View>
    );
  };

  render() {
    const { data } = this.props;

    if (!data || data.length === 0) return null;

    return (
       <View style={{ top:20}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `dua-${index}`}
        renderItem={this.renderDuaCard}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 10,
  },
  cardContainer: {
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: Colors.transparent,
    borderRadius: 10,
    paddingVertical: 15,
  
  },
  title: {
    color: Colors.intermediate,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    marginLeft: 15,
  },
  separator: {
    backgroundColor: Colors.bordercolor,
    height: 0.6,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  arabicText: {
    color: Colors.secondary,
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 35,
    fontWeight: '500',
    fontFamily: 'AlQalamQuran',
    marginTop: 12,
  },
  translation: {
    color: Colors.secondary,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'PoppinsLight',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
});
