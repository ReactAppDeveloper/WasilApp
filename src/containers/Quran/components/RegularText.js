import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, FONTSTYLE} from '../theme';
import {useTheme} from '../../../theme';

const RegularText = ({text, style}) => {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  return (
    <>
      <Text style={[styles.textStyle, style]}>{text}</Text>
    </>
  );
};

export default RegularText;

const makeStyles = Colors =>
  StyleSheet.create({
  textStyle: {
    ...FONTSTYLE(FONTS.poppinsRegular, undefined, Colors).inputs,top:2,
    color: Colors.quranDeep,
  },
});
