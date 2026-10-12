import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  BackHandler,
  StatusBar
} from 'react-native';
import { Colors } from '../../theme';
import MovieCardNewGreen from './MovieCardNewGreen';
import { FavouriteEmptySVG } from '../../assets/icons';
import BaseScreenClassGreen from './BaseScreenClassGreen';
import useStore from '../../store';

class DuaNewFavouritesGreen extends BaseScreenClassGreen {
  constructor(props) {
    super(props);

    const store = useStore.getState();

    this.state = {
      favourites: store.favourites || [],
    };
  }

  componentDidMount() {
    if (!BackHandler.removeEventListener) {
      BackHandler.removeEventListener = () => {};
    }

    // Subscribe to Zustand store
    this.unsubscribe = useStore.subscribe((state) => {
      this.setState({ favourites: state.favourites || [] });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  renderContent() {
    const { favourites } = this.state;

    if (!favourites || favourites.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <FavouriteEmptySVG />
          <Text style={styles.emptyText}>
            No Favourites yet!
          </Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1,backgroundColor:Colors.wasilgreenthemecolor, }}>
          <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
        <FlatList
  data={favourites}
  keyExtractor={(item) => item._id?.toString()}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <MovieCardNewGreen movie={item} favourites={favourites} />
  )}
  ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
  contentContainerStyle={{
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 40,
  }}
/>
      </View>
    );
  }

  render() {
    return super.render({
      isLoading: false,
      error: null,
    });
  }
}

export default DuaNewFavouritesGreen;


const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.wasilgreenthemecolor,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 12,
    color: Colors.white,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
