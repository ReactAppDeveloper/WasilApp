import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, Image, Dimensions } from 'react-native';
import { Colors } from '../../theme';
import {
 WasilDUKBTSvg
} from '../../assets/icons';
import axios from 'axios';
const { width } = Dimensions.get('window');
const duabackgroundimage = { uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1776942424/home/homeduabg.png' };

export default class DuaCardNewListBlue extends Component {
  state = {
    activeIndex: 0,
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.autoScroll();
     this.fetchDidYouKnow();
  }

fetchDidYouKnow = async () => {
  try {
    const res = await axios.get(
      'https://islamicapp.vercel.app/api/didyouknow'
    );

    console.log('Did You Know:', res.data);

    this.setState(
      {
        data: res.data,
        loading: false,
      },
      () => {
        this.autoScroll();
      }
    );
  } catch (error) {
    console.log('Did You Know Error:', error);
    this.setState({ loading: false });
  }
};

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  autoScroll = () => {
  const { data } = this.state;

  if (!data || data.length <= 1) return;

  this.timer = setInterval(() => {
    let nextIndex = this.state.activeIndex + 1;

    if (nextIndex >= data.length) {
      nextIndex = 0;
    }

    this.flatListRef?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });

    this.setState({
      activeIndex: nextIndex,
    });
  }, 3000);
};

  renderDuaCard = ({ item }) => {
  return (
    <View style={styles.duaCard}>
      <Image source={duabackgroundimage} style={styles.duaImage} />

      <View style={{ flexDirection: "row", bottom: 145 }}>
        <View style={{ left: 20 }}>
          <WasilDUKBTSvg />
        </View>

        <Text style={styles.locationText} numberOfLines={1}>
          Did You Know ?
        </Text>
      </View>

      <Text style={styles.duaEnglish}>
        {item.content}
      </Text>
    </View>
  );
};

  renderDots = () => {
  const { data, activeIndex } = this.state;

  if (data.length <= 1) return null;

  return (
    <View style={styles.dotsContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                activeIndex === index
                  ? "#673AB7"
                  : Colors.bordercolor,
            },
          ]}
        />
      ))}
    </View>
  );
};

  onScrollEnd = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    this.setState({ activeIndex: index });
  };

  render() {
   const { data, loading } = this.state;

if (loading) {
  return null;
}

if (!data.length) {
  return null;
}
    return (
      <View>
        <FlatList
          ref={(ref) => (this.flatListRef = ref)}
          data={data}
          keyExtractor={(item, index) => `dua-${index}`}
          renderItem={this.renderDuaCard}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onScrollEnd}
          style={{ flexGrow: 0 }}
        />
        {this.renderDots()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  duaCard: {
    marginTop:20,
    height: 170,
    width: width * 0.95,
    borderRadius: 10,
    borderWidth: 0.7,
    backgroundColor:Colors.primary,
    borderColor: Colors.primary,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: width * 0.09 / 3.3,
  },
  duaImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  duaArabic: {
    position: 'absolute',
    color: '#000',
    fontSize: 22,
    bottom: 65,
    width: '90%',
    textAlign: 'right',
    fontFamily: Platform.OS === 'ios' ? 'Al Qalam Quran Majeed' : 'AlQalamQuran',
  },
  duaEnglish: {
    position: 'absolute',
    top: 60,
    color: Colors.white,
    fontSize: 17,
    width: '90%',
    textAlign: 'center',
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
   locationText: {
    fontSize: 22,
    color: Colors.white,
    flex: 1,
    bottom:2,
    paddingLeft:35,
    fontFamily:Platform.OS === 'ios' ? "Asul-Regular" : "AsulRegular",
   
  },
});
