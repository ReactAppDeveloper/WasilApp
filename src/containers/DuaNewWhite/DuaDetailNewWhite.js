import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

import axios from 'axios';

import BaseScreenClassWhite from './BaseScreenClassWhite';
import MovieCardNewWhite from './MovieCardNewWhite';

import useStore from '../../store';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.88;
const CARD_SPACING = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

class DuaDetailNewWhite extends BaseScreenClassWhite {
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
    const {
      duacategoryid,
      selectedIndex = 0,
    } = this.props.route.params;

    console.log('==============================');
    console.log('SELECTED INDEX:', selectedIndex);
    console.log('CATEGORY ID:', duacategoryid);
    console.log('==============================');

    try {
      const res = await axios.get(
        `https://islamicapp.vercel.app/api/duaversebycategory?duacategoryId=${duacategoryid}`,
      );

      const data = res.data || [];

      console.log('TOTAL DUA:', data.length);
      console.log('OPENING INDEX:', selectedIndex);
      console.log('SELECTED DUA:', data[selectedIndex]);

      this.setState(
        {
          data,
          currentIndex: selectedIndex,
          isLoading: false,
        },
        () => {
          // Wait for FlatList to render
          setTimeout(() => {
            if (
              this.flatListRef &&
              data.length > 0 &&
              selectedIndex >= 0 &&
              selectedIndex < data.length
            ) {
              const offset =
                selectedIndex * SNAP_INTERVAL;

              console.log(
                'SCROLLING TO OFFSET:',
                offset,
              );

              this.flatListRef.scrollToOffset({
                offset,
                animated: false,
              });

              // Keep animation position in sync
              this.scrollX.setValue(offset);
            }
          }, 100);
        },
      );
    } catch (e) {
      console.log('DUA API ERROR:', e);

      this.setState({
        error: e,
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
        <StatusBar backgroundColor={Colors.black} />

        <Animated.FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
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
          keyExtractor={(item, index) =>
            item._id || String(index)
          }
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight:
              width - CARD_WIDTH - 20,
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
            <MovieCardNewWhite
              movie={item}
              favourites={this.state.favourites}
              index={index}
              scrollX={this.scrollX}
              cardWidth={CARD_WIDTH}
              spacing={CARD_SPACING}
            />
          )}
        />

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

export default DuaDetailNewWhite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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