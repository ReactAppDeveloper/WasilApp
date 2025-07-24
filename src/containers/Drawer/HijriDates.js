import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AnimatedSelectorItem from './AnimatedSelectorItem';
import AnimatedArrowButton from './AnimatedArrowButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HijriAdjustSVG} from '../../assets/icons';
import { Colors } from '../../theme';
export default class HijriDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOffset: 0,
    };
  }

  setSelectedOffset = (value) => {
    this.setState({ selectedOffset: value });
  };

  getStatusText = () => {
    const { selectedOffset } = this.state;
    if (selectedOffset === 0) return 'Same day as Saudi Arabia';
    return `${Math.abs(selectedOffset)} day ${
      selectedOffset < 0 ? 'behind' : 'ahead'
    } Saudi Arabia`;
  };

 // Inside your handleContinue method
handleContinue = async () => {
  const { selectedOffset } = this.state;
  try {
    await AsyncStorage.setItem('HIJRI_OFFSET', selectedOffset.toString());
    console.log('Saved offset:', selectedOffset);
    this.props.navigation.navigate('Guest', { refresh: true });

  } catch (e) {
    console.error('Error saving Hijri Offset:', e);
  }
};

  render() {
    const { selectedOffset } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <HijriAdjustSVG />
        </View>
        <Text style={styles.title}>Hijri Date Adjustment</Text>

        <Text style={styles.description}>
         Islamic months begin with moon sightings🌙 which may vary from country to country. You can shift the Hijri date to match your local moon sighting or stay with Saudi Arabia.
        </Text>

        <View style={styles.selectorContainer}>
          {[-2, -1, 0, 1, 2].map((value) => (
            <AnimatedSelectorItem
              key={value}
              value={value}
              isSelected={selectedOffset === value}
              onPress={() => this.setSelectedOffset(value)}
            />
          ))}
        </View>

        <Text style={styles.statusText}>{this.getStatusText()}</Text>

        <AnimatedArrowButton onPress={this.handleContinue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: Colors.intermediate,
    marginTop: 10,
    fontFamily:"Poppins-Medium"
  },
  description: {
    color: Colors.lightgreytasbih,
    fontFamily:"Poppins-Medium",
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 20,
  },
  selectorContainer: {
    flexDirection: 'row',
    backgroundColor: '#E6E1DC',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  statusText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 14,
  },
});
