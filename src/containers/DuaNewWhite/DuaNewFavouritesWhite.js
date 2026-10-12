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
import MovieCardNew from './MovieCardNewWhite';
import { FavouriteEmptySVG } from '../../assets/icons';
import BaseScreenClassWhite from './BaseScreenClassWhite';
import useStore from '../../store';

class DuaNewFavouritesWhite extends BaseScreenClassWhite {
  constructor(props) {
    super(props);

    const store = useStore.getState();

    this.state = {
      favourites: store.favourites || [],
    };
  }

  componentDidMount() {
    // Android back handler safety
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

  /* ---------------- Render content ---------------- */
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
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.black}/>
        <FlatList
  data={favourites}
  keyExtractor={(item) => item._id?.toString()}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <MovieCardNew movie={item} favourites={favourites} />
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

export default DuaNewFavouritesWhite;


const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
