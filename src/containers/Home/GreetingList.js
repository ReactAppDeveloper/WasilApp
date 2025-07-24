// src/components/GreetingList.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from '../../theme';
const { width } = Dimensions.get('window');

export default class GreetingList extends Component {
  renderGreetingCard = ({ item }) => {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('GreetingCardList', {
            cardid: item._id,
            categoryname: item.name,
            name: item.name,
          })
        }>
        <Image source={item.image} style={styles.image} />
        <View style={styles.labelWrapper}>
          <Text numberOfLines={1} style={styles.labelText}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { data = [] } = this.props;

    if (data.length === 0) return null;

    return (
      <View style={{ paddingLeft: 10,top:40 }}>
        <Text style={styles.title}>Greetings</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `greeting-${index}`}
          renderItem={this.renderGreetingCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'heading',
    color: Colors.secondary,
    marginVertical: 8,
  },
  card: {
    marginRight: 10,
    alignItems: 'center',
    width: 140,
  },
  image: {
    width: 140,
    height: 150,
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  labelWrapper: {
    backgroundColor: Colors.primary,
    height: 40,
    width: 140,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -15,
  },
  labelText: {
    color: Colors.white,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Raleway',
  },
});
