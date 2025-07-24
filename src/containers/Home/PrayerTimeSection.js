import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import {FajrHomeSVG, DhuhrHomeSVG, AsrHomeSVG, MaghribHomeSVG, EshaHomeSVG,PrayerHomeFajrSVG, PrayerHomeDhuhrSVG, PrayerHomeAsrSVG, PrayerHomeMaghribSVG, PrayerHomeEshaSVG} from '../../assets/icons';
import moment from 'moment';

export default class PrayerTimeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrayer: '',
    };
    this.timer = null;
  }

  componentDidMount() {
    this.evaluateCurrentPrayer();
    this.timer = setInterval(this.evaluateCurrentPrayer, 60000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  evaluateCurrentPrayer = () => {
  const { timings } = this.props;
  if (!timings) return;

  const now = moment();

  const getTime = (key) => {
    return moment(`${moment().format('YYYY-MM-DD')} ${timings[key]}`, 'YYYY-MM-DD HH:mm');
  };

  const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  for (let i = 0; i < prayerOrder.length; i++) {
    const currentPrayerName = prayerOrder[i];
    const nextPrayerName = prayerOrder[(i + 1) % prayerOrder.length];

    let current = getTime(currentPrayerName);
    let next = getTime(nextPrayerName);

    if (next.isBefore(current)) {
      next.add(1, 'day');
    }

    if (now.isBetween(current, next)) {
      this.setState({ currentPrayer: currentPrayerName });
      return;
    }
  }

  this.setState({ currentPrayer: 'Isha' });
};


  renderPrayerCard = (name, time, iconDefault, iconActive) => {
    const { currentPrayer } = this.state;
    const isActive = currentPrayer === name;
    const backgroundColor = isActive ? Colors.intermediate : Colors.homeprayericon;
    const textColor = isActive ? Colors.primary : Colors.white;
    const icon = isActive ? iconActive : iconDefault;

    return (
      <View style={[styles.card, { backgroundColor }]}>
        <Text style={[styles.nameText, { color: textColor }]}>{name}</Text>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={[styles.timeText, { color: textColor }]}>{time}</Text>
      </View>
    );
  };

  render() {
    const { timings } = this.props;

    if (!timings) return null;

    return (
      <View style={styles.container}>
        {this.renderPrayerCard('Fajr', timings.Fajr, <FajrHomeSVG />, <PrayerHomeFajrSVG />)}
        {this.renderPrayerCard('Dhuhr', timings.Dhuhr, <DhuhrHomeSVG />, <PrayerHomeDhuhrSVG />)}
        {this.renderPrayerCard('Asr', timings.Asr, <AsrHomeSVG />, <PrayerHomeAsrSVG />)}
        {this.renderPrayerCard('Maghrib', timings.Maghrib, <MaghribHomeSVG />, <PrayerHomeMaghribSVG />)}
        {this.renderPrayerCard('Isha', timings.Isha, <EshaHomeSVG />, <PrayerHomeEshaSVG />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
    height: 100,
    position: 'absolute',
    top: 140,
    alignSelf: 'center',
    width: '102%',
    zIndex: 10,
    },
  card: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  nameText: {
    fontFamily: 'Raleway',
    fontSize: 13,
    marginBottom: 3,
  },
  timeText: {
    fontSize: 12,
    fontFamily: 'PoppinsLight',
    marginTop: 2,
  },
  iconContainer: {
    marginVertical: 3,
  },
});