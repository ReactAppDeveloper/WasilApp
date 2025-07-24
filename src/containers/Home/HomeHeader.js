// src/components/HomeHeader.js
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground,Animated,FlatList } from 'react-native';
import { LocationColorSVG } from '../../assets/icons'; // Adjust the path as needed
import { Colors } from '../../theme';
import moment from 'moment';
const { width } = Dimensions.get('window');
const backgroundImage = { uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720693588/home/homebg.png' };
import HomeItem from "./HomeItem";
import slideshome from "./slideshome";
import HomePaginator from "./HomePaginator";
export default class HomeHeader extends Component {
  constructor(props) {
    super(props);

  handleLocationPress = () => {
    const { onLocationPress } = this.props;
    if (onLocationPress) {
      onLocationPress();
    }
  };

  this.scrollx = new Animated.Value(0);
    this.slidesRef = React.createRef();

    this.state = {
      currentIndex: 0,
    };

    this.viewConfig = {
      viewAreaCoveragePercentThreshold: 50,
    };

    this.autoScrollInterval = null;
}

 componentDidMount() {
    this.startAutoScroll();
  }

  componentWillUnmount() {
    this.stopAutoScroll();
  }

  startAutoScroll = () => {
    this.autoScrollInterval = setInterval(() => {
      const nextIndex = (this.state.currentIndex + 1) % slideshome.length;
      this.slidesRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      this.setState({ currentIndex: nextIndex });
    }, 3000); // every 3 seconds
  };

  stopAutoScroll = () => {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  };

  viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      this.setState({ currentIndex: viewableItems[0].index });
    }
  };

  render() {
    const { hijriDate, address } = this.props;
    const today = moment().format('dddd, Do MMM YYYY');

    return (
      <ImageBackground
        source={backgroundImage}
        resizeMode="contain"
        imageStyle={styles.imageStyle}
        style={styles.container}
      >
        <View style={styles.headerRow}>
          <View style={styles.dateColumn}>
            <Text style={styles.hijriText}>{hijriDate}</Text>
            <Text style={styles.gregorianText}>{today}</Text>
          </View>

        <TouchableOpacity onPress={this.handleLocationPress} style={styles.locationColumn}>
  <View style={styles.locationRow}>
    <View style={{bottom:2}}>
 <LocationColorSVG />
    </View>
   
    <Text style={styles.addressText} numberOfLines={1} ellipsizeMode="tail">
      {address || 'Locating...'}
    </Text>
  </View>
</TouchableOpacity>
        </View>
        <View style={{ flex: 1,bottom:18 }}>
        <FlatList
          data={slideshome}
          renderItem={({ item }) => <HomeItem item={item} />}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollx } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={this.viewableItemsChanged}
          viewabilityConfig={this.viewConfig}
          ref={this.slidesRef}
        />

        <HomePaginator data={slideshome} scrollx={this.scrollx} />
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 210,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageStyle: {
    top: 23,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 18,
  },
  dateColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  hijriText: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: 'Raleway',
    marginBottom: 4,
  },
  gregorianText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: 'PoppinsLight',
    bottom:5
  },
 locationColumn: {
  justifyContent: 'center',
  alignItems: 'flex-end',
  bottom: 10,
},

locationRow: {
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: width * 0.5, // Adjust as needed
},

addressText: {
  color: Colors.bordercolor,
  fontSize: 13,
  fontFamily: 'Raleway',
  marginLeft: 6,
  maxWidth: '100%',
},
});
