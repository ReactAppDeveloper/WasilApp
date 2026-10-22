import React, {useMemo} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme, Fonts, TypeScale, Spacing, Radius} from '../../../theme';

const Tab = createMaterialTopTabNavigator();
const LABELS = ['1st Rakah', '2nd Rakah', '3rd Rakah', '4th Rakah'];
const NAMES = ['FirstRakat', 'SecondRakat', 'ThirdRakat', 'FourthRakat'];

// Banner artwork for the prayer, then one tab per rakat (each a RakatSteps screen).
export default function RakatTabs({Banner, rakats}) {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  const screenOptions = useMemo(
    () => ({
      lazy: true,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabItem,
      tabBarIndicatorStyle: styles.indicator,
      tabBarActiveTintColor: Colors.tabActiveText,
      tabBarInactiveTintColor: Colors.tabInactiveText,
      tabBarLabelStyle: styles.label,
      tabBarPressColor: 'transparent',
    }),
    [Colors, styles],
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.headerBg} />
      {Banner ? (
        <View style={styles.banner}>
          <Banner />
        </View>
      ) : null}
      <Tab.Navigator screenOptions={screenOptions} sceneContainerStyle={styles.scene}>
        {rakats.map((Screen, i) => (
          <Tab.Screen key={NAMES[i]} name={NAMES[i]} component={Screen} options={{tabBarLabel: LABELS[i]}} />
        ))}
      </Tab.Navigator>
    </View>
  );
}

const makeStyles = Colors =>
  StyleSheet.create({
    screen: {flex: 1, backgroundColor: Colors.background},
    scene: {backgroundColor: Colors.background},
    banner: {alignSelf: 'center', height: 120, marginTop: Spacing.lg},
    tabBar: {
      backgroundColor: Colors.tabTrack,
      marginHorizontal: Spacing.lg,
      marginTop: Spacing.lg,
      borderRadius: Radius.md,
      elevation: 0,
      shadowOpacity: 0,
      height: 50,
    },
    tabItem: {borderRadius: Radius.md},
    indicator: {backgroundColor: Colors.tabIndicator, height: '100%', borderRadius: Radius.md},
    label: {fontSize: TypeScale.body, textTransform: 'none', fontFamily: Fonts.bodySemiBold},
  });
