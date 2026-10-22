import React, {useMemo} from 'react';
import {Platform, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-screen-helper';
import {ScaledSheet} from 'react-native-size-matters';
import {FONTS, FONTSTYLE} from '../theme';
import Searchbar from './Searchbar';
import {useTheme} from '../../../theme';
import {BackArrowIcon, TranslateIcon, QuranSettingsIcon} from '../../../assets/icons/themed';

const HIT_SLOP = {bottom: 40, top: 40, left: 20, right: 20};
const ICON_HIT_SLOP = {top: 10, bottom: 10, left: 10, right: 10};

const Header = ({
  title = '',
  leftIcon = true,
  rightIcon = true,
  secondRightIcon = false,
  onPressLeftIcon = () => {},
  onPressRightIcon = () => {},
  onPressSecondRightIcon = () => {},
  onClickCloseSearch = () => {},
  onChangeText = () => {},
  customBackIcon = null,
  customRightIcon = null,
  customTitleTextStyle = {},
  searchEnable = false,
  searchText,
}) => {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.background} />
      {searchEnable ? (
        <Searchbar
          onPressLeftIcon={() => {}}
          onPressRightIcon={onClickCloseSearch}
          onChangeText={onChangeText}
          searchText={searchText}
        />
      ) : (
        <View style={styles.mainView}>
          <View style={styles.leftIconView}>
            {leftIcon ? (
              <TouchableOpacity hitSlop={HIT_SLOP} onPress={onPressLeftIcon} accessibilityRole="button" accessibilityLabel="Back">
                <BackArrowIcon />
              </TouchableOpacity>
            ) : customBackIcon ? (
              customBackIcon()
            ) : null}
          </View>
          <View style={[styles.titleTextView, customTitleTextStyle]}>
            <Text style={styles.titleText} numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View style={styles.rightIconView}>
            {secondRightIcon && (
              <TouchableOpacity
                style={styles.rightButton}
                hitSlop={ICON_HIT_SLOP}
                onPress={onPressSecondRightIcon}
                accessibilityRole="button"
                accessibilityLabel="Translation">
                <TranslateIcon />
              </TouchableOpacity>
            )}
            {rightIcon ? (
              <TouchableOpacity
                style={styles.rightButton}
                hitSlop={ICON_HIT_SLOP}
                onPress={onPressRightIcon}
                accessibilityRole="button"
                accessibilityLabel="Settings">
                <QuranSettingsIcon />
              </TouchableOpacity>
            ) : customRightIcon ? (
              customRightIcon()
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;

const makeStyles = Colors =>
  ScaledSheet.create({
    container: {
      justifyContent: 'center',
      paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : '10@s',
      backgroundColor: Colors.background,
      minHeight: '46@s',
    },
    mainView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '15@s',
      paddingBottom: '10@s',
    },
    leftIconView: {
      width: '20%',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    titleTextView: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightIconView: {
      width: '30%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    rightButton: {
      minWidth: '32@s',
      height: '40@s',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      ...FONTSTYLE(FONTS.poppinsSemiBold, undefined, Colors).headerText,
      alignSelf: 'center',
      color: Colors.textPrimary,
    },
  });
