import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  LogBox,
  StatusBar,
} from 'react-native';
import AnimatedSelectorItem from './AnimatedSelectorItemWhite';
import AnimatedArrowButton from './AnimatedArrowButtonWhite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HijriAdjustSVG } from '../../assets/icons';
import { Colors } from '../../theme';

export default class HijriDatesWhite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOffset: 0,
    };
  }

  componentDidMount() {
    LogBox.ignoreLogs([
      'A props object containing a "key" prop is being spread into JSX',
    ]);

    if (!BackHandler.removeEventListener) {
      BackHandler.removeEventListener = () => {};
    }

    // Load saved value when screen opens
    this.loadHijriOffset();

    // Load again whenever screen comes into focus
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.loadHijriOffset();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  loadHijriOffset = async () => {
    try {
      const value = await AsyncStorage.getItem('HIJRI_OFFSET');

      if (value !== null) {
        this.setState({
          selectedOffset: parseInt(value, 10),
        });
      }
    } catch (e) {
      console.log('Error loading Hijri Offset:', e);
    }
  };

  setSelectedOffset = (value) => {
    this.setState({
      selectedOffset: value,
    });
  };

  getStatusText = () => {
    const { selectedOffset } = this.state;

    if (selectedOffset === 0) {
      return 'Same day as Saudi Arabia';
    }

    return `${Math.abs(selectedOffset)} day ${
      selectedOffset < 0 ? 'behind' : 'ahead'
    } Saudi Arabia`;
  };

  handleContinue = async () => {
    const { selectedOffset } = this.state;

    try {
      await AsyncStorage.setItem(
        'HIJRI_OFFSET',
        selectedOffset.toString(),
      );

      console.log('Saved offset:', selectedOffset);

      this.props.navigation.navigate('GuestNew', {
        refresh: true,
      });
    } catch (e) {
      console.log('Error saving Hijri Offset:', e);
    }
  };

  render() {
    const { selectedOffset } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.black} />

        <View style={styles.image}>
          <HijriAdjustSVG />
        </View>

        <Text style={styles.title}>Hijri Date Adjustment</Text>

        <Text style={styles.description}>
          Islamic months begin with moon sightings🌙 which may vary from
          country to country. You can shift the Hijri date to match your
          local moon sighting or stay with Saudi Arabia.
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

        <Text style={styles.statusText}>
          {this.getStatusText()}
        </Text>

        <AnimatedArrowButton
          onPress={this.handleContinue}
        />
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
    color: Colors.wasilnewthemecolorsecond,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  description: {
    color: Colors.lightgreytasbih,
    fontFamily: 'Poppins-Medium',
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