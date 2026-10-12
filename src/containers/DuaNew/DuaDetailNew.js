import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

import axios from 'axios';

import BaseScreenClass from './BaseScreenClass';
import MovieCardNew from './MovieCardNew';

import useStore from '../../store';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.88;
const CARD_SPACING = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

class DuaDetailNew extends BaseScreenClass {
  constructor(props) {
    super(props);

    const store = useStore.getState();

    this.scrollX = new Animated.Value(0);

    this.state = {
      data: [],
      favourites: store.favourites,
      isLoading: true,
      error: null,
      currentIndex: 0,
    };
  }

  async componentDidMount() {
    const { duacategoryid } = this.props.route.params;

    try {
      const res = await axios.get(
        `https://islamicapp.vercel.app/api/duaversebycategory?duacategoryId=${duacategoryid}`,
      );

      this.setState({
        data: res.data,
      });
    } catch (e) {
      this.setState({
        error: e,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }

    this.unsubscribe = useStore.subscribe(state => {
      this.setState({
        favourites: state.favourites,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  renderContent() {
  

    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={Colors.intermediate1}/>
        <Animated.FlatList
          data={this.state.data}
          horizontal
          pagingEnabled={false}
          disableIntervalMomentum={true}
          removeClippedSubviews={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={SNAP_INTERVAL}
          decelerationRate={0.98}
          snapToAlignment="start"
          bounces={false}
          keyExtractor={item => item._id}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: width - CARD_WIDTH - 20,
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          onMomentumScrollEnd={event => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x /
                SNAP_INTERVAL,
            );

            this.setState({
              currentIndex: index,
            });
          }}
          renderItem={({ item, index }) => (
            <MovieCardNew
              movie={item}
              favourites={this.state.favourites}
              index={index}
              scrollX={this.scrollX}
              cardWidth={CARD_WIDTH}
              spacing={CARD_SPACING}
            />
          )}
        />

        {/* Pagination */}

        {this.state.data.length > 0 && (
          <View style={styles.pagination}>
            <Text style={styles.paginationText}>
              {this.state.currentIndex + 1}/
              {this.state.data.length}
            </Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    return super.render({
      isLoading: this.state.isLoading,
      error: this.state.error,
    });
  }
}

export default DuaDetailNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.intermediate1,
    paddingTop: 20,
  },

  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.wasilnewthemecolorsecond,
    marginTop: 15,
    marginBottom: 20,

    fontFamily:
      Platform.OS === 'ios'
        ? 'NunitoSans-Bold'
        : 'NunitoSansBold',
  },

  pagination: {
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },

  paginationText: {
    color: Colors.wasilnewthemecolorsecond,
    fontSize: 16,

    fontFamily:
      Platform.OS === 'ios'
        ? 'NunitoSans-Bold'
        : 'NunitoSansBold',
  },
});