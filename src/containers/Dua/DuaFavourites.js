// DuaFavourites.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { Colors } from '../../theme';
import MovieCard from './MovieCard';
import { FavouriteEmptySVG } from '../../assets/icons';
import BaseScreenClass from './BaseScreenClass';
import useStore from '../../store';

class DuaFavourites extends BaseScreenClass {
  constructor(props) {
    super(props);
    const store = useStore.getState();
    this.state = {
      favourites: store.favourites,
    };
  }

  componentDidMount() {
    this.unsubscribe = useStore.subscribe((state) => {
      this.setState({ favourites: state.favourites });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  renderContent() {
    const { favourites } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {favourites.length > 0 ? (
          <FlatList
            data={favourites}
            renderItem={({ item }) => (
              <MovieCard movie={item} favourites={favourites} />
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.7}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <FavouriteEmptySVG />
            <Text style={styles.emptyText}>No Favorites yet!</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    return super.render({ isLoading: false, error: null });
  }
}

export default DuaFavourites;

const styles = StyleSheet.create({
  emptyContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    top: 20,
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Cairo-Regular',
  },
});
