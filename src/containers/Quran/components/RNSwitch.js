import React from 'react';
import {Platform, Switch, View} from 'react-native';
import {COLORS} from '../theme';
import {useTheme} from '../../../theme';

const RNSwitch = ({onValueChange, value}) => {
  const {Colors} = useTheme();
  return (
    <View>
      <Switch
        trackColor={{
          false: COLORS.thirdGray,
          true: Colors.accent,
        }}
        thumbColor={Colors.primary}
        ios_backgroundColor={COLORS.thirdGray}
        onValueChange={onValueChange}
        value={value}
        style={{
          transform:
            Platform.OS === 'ios'
              ? [{scaleX: 0.9}, {scaleY: 0.85}]
              : [{scaleX: 1}, {scaleY: 1}],
        }}
      />
    </View>
  );
};

export default RNSwitch;
