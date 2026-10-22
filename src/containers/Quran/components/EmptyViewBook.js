import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {EmptyBookmarksArt} from '../../../assets/icons/themed';
const EmptyViewBook = () => {
  return (
    <View style={styles.noDataViewStyle}>
      <EmptyBookmarksArt/>
    </View>
  );
};

export default EmptyViewBook;

const styles = ScaledSheet.create({
  noDataViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
