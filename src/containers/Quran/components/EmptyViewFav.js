import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {EmptyFavouritesArt} from '../../../assets/icons/themed';
const EmptyViewFav = () => {
  return (
    <View style={styles.noDataViewStyle}>
      <EmptyFavouritesArt/>
    </View>
  );
};

export default EmptyViewFav;

const styles = ScaledSheet.create({
  noDataViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
