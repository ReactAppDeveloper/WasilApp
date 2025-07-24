// src/components/SpeakerList.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions,Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

export default class SpeakerList extends Component {
 
  renderSpeaker = ({ item }) => {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('SpeakersDetail', {
            speakerid: item._id,
            speakername: item.speakerName,
            name: item.speakerName,
          })
        }
      >
         <Image source={item.image} style={styles.image} />
        <View style={styles.labelWrapper}>
          <Text numberOfLines={1} style={styles.labelText}>
            {item.speakerName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { data = [] } = this.props;

    if (data.length === 0) return null;

    return (
      <View style={{ paddingLeft: 10,top:30 }}>
        <Text style={styles.title}>Videos</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `speaker-${index}`}
          renderItem={this.renderSpeaker}
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
    marginVertical: 1,
  },
  card: {
    marginRight: 10,
    alignItems: 'center',
    width: 140,
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
   image: {
    width: 140,
    height: 150,
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
