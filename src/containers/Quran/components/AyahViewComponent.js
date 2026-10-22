import React, {useMemo} from 'react';
import {Platform, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {getStorageItem} from '../mmkvStorage/storeData';
import {COLORS, FONTS, FONTSTYLE} from '../theme';
import {useTheme} from '../../../theme';

const AyahViewComponent = ({
  detailTextCustomeStyle,
  detailContainerCustomeStyle,
  ayahItem,
}) => {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  const isArabic = getStorageItem('isArabic');
  const isTranslation = getStorageItem('isTranslation');
  const isTransliteration = getStorageItem('isTransliteration');
  const isArabicFont = useSelector(state => state.services.isArabicFont);

  const arabicFontSize = useSelector(state => state.services.arabicFontSize);
  const translationFontSize = useSelector(
    state => state.services.translationFontSize,
  );


  return (
    <>
      <View style={[styles.detailContainer, detailContainerCustomeStyle]}>
         {isArabic && (
  <Text
    style={[
      styles.detailText,
      {
        ...FONTSTYLE(Platform.OS === 'android'
            ? isArabicFont?.key
            : FONTS[isArabicFont?.key], arabicFontSize, Colors).arabicText,
      },
      detailTextCustomeStyle,
    ]}>
    {ayahItem?.words
      ?.map(item =>
        item?.textUthmani
          ?.replace(/[\d\u0660-\u0669]+/g, '')
          ?.trim(),
      )
      .join(' ')}
    <Text
      style={[
      styles.detailText,
      {
        ...FONTSTYLE(FONTS.trochutBold, arabicFontSize*0.8, Colors).arabicText,
      },
      detailTextCustomeStyle,
    ]}>
      {'﴿'}{ayahItem?.verseKey?.split(':')[1]}{'﴾'}
    </Text>
  </Text>
)}

        {isTransliteration && (
          <>
            <Text
              style={[
                {
                  ...FONTSTYLE(FONTS.poppinsLight, translationFontSize, Colors)
                    .arabicText,
                  marginTop: 15,
                },
                styles.caption,
              ]}>
              {ayahItem?.words
                ?.map(item =>
                  (item?.transliteration?.text || '').replace(/null/g, ''),
                )
                .join('  ')}
            </Text>
          </>
        )}
        {isTransliteration && isTranslation && <View style={styles.line} />}
        
        {isTranslation && (
          <View>
            {ayahItem?.translations?.map((item, index) => (
              <View key={item?.id}>
                  <Text
                  style={[
                    {
                      ...FONTSTYLE(FONTS.poppinsLight, translationFontSize, Colors)
                        .arabicText,
                    },
                    styles.caption,
                  ]}>
                 
                    {item?.text?.replace(/<sup[^>]*>.*?<\/sup>/g, '')}
                
                </Text>
                {index !== ayahItem?.translations?.length - 1 && (
                  <View style={styles.line} />
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </>
  );
};

export default AyahViewComponent;

const makeStyles = Colors =>
  ScaledSheet.create({
  detailContainer: {
    padding: '15@s',
    borderBottomWidth: 1,
    borderColor: Colors.quranBorder,
    backgroundColor: Colors.quranReader,
  },
  detailText: {
    alignSelf: 'flex-end',
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  caption: {
    color: Colors.textPrimary,
  },
  line: {
    height: 1,
    marginVertical: '10@s',
    backgroundColor: COLORS.lightSlateGray,
  },
});
