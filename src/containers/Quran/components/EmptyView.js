import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {FONTS, FONTSTYLE} from '../theme';
import {useTheme} from '../../../theme';

const EmptyView = () => {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  return (
    <View style={styles.noDataViewStyle}>
      <Text style={styles.noDataTextStyle}>No Data Found</Text>
    </View>
  );
};

export default EmptyView;

const makeStyles = Colors =>
  ScaledSheet.create({
  noDataViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataTextStyle: {
    ...FONTSTYLE(FONTS.poppinsMedium, undefined, Colors).inputBody,
    color: Colors.textPrimary,
  },
});
