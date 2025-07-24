import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

const banners = [
  { uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1752494316/banner0002_i1bgqu.png' },
  { uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1752494316/banner0003_ne0zqa.png' },
  { uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1753107602/banner00011_rtgsmf.png' },
];

export default class Banner extends Component {
  scrollRef = React.createRef();
  intervalId = null;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    this.intervalId = setInterval(() => {
      let nextIndex = (this.state.activeIndex + 1) % banners.length;
      this.scrollToIndex(nextIndex);
    }, 4000);
  };

  stopAutoPlay = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  scrollToIndex = (index) => {
    this.scrollRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
    this.setState({ activeIndex: index });
  };

  handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / width);
    this.setState({ activeIndex });
  };

  renderDots = () => (
    <View style={styles.dotsContainer}>
      {banners.map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this.stopAutoPlay();
            this.scrollToIndex(index);
            this.startAutoPlay();
          }}
        >
          <View
            style={[
              styles.dot,
              this.state.activeIndex === index && styles.activeDot,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.bannerContainer}>
         <ScrollView
  horizontal
  pagingEnabled
  ref={this.scrollRef}
  showsHorizontalScrollIndicator={false}
  onScroll={this.handleScroll}
  scrollEventThrottle={16}
>
  {banners.map((banner, index) => (
    <View key={index} style={styles.bannerPage}>
      <Image
        source={{ uri: banner.uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  ))}
</ScrollView>
        </View>
        {this.renderDots()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 35,
  },
  bannerContainer: {
    width: width,
    height: 150,
  },
  bannerPage: {
    width: width, // full screen width per page
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.94, // image is slightly narrower than full width
    height: 150,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.bordercolor,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 8,
    height: 8,
  },
});

