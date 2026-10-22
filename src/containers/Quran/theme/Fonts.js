import {Platform} from 'react-native';
import {SIZES} from './Sizes';
import BlueTheme from '../../../theme/blue';

export const FONTS = {
  poppinsLight: 'Poppins-Light',
  poppinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsBlack: 'Poppins-Black',
  poppinsBold: 'Poppins-Bold',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsSemiBold: 'Poppins-SemiBold',
  trochutBold: 'Trochut-Bold',
  trochutItalic: 'Trochut-Italic',
  trochutRegular: 'Trochut',
  arabic_Indopak: 'AlQuran-IndoPak-by-QuranWBW',
  arabic_Tajweed: 'me_quran2',
  arabic_Uthmani: 'KFGQPC HAFS Uthmanic Script',
  arabic_Al_Mushaf_Quran:
    Platform?.OS === 'ios' ? 'Al_Mushaf' : 'arabic_Al_Mushaf_Quran',
  arabic_AmiriQuran_Regular:
    Platform?.OS === 'ios' ? 'AmiriQuran-Regular' : 'arabic_AmiriQuran_Regular',
  arabic_Lateef_Regular:
    Platform?.OS === 'ios' ? 'Lateef-Regular' : 'arabic_Lateef_Regular',
  arabic_Madina: Platform?.OS === 'ios' ? 'Madina-Regular' : 'arabic_Madina',
  arabic_Me_Quran_Regular:
    Platform?.OS === 'ios' ? 'me_quran' : 'arabic_Me_Quran_Regular',

  arabic_noorehidayat_Regular:
    Platform?.OS === 'ios' ? 'noorehidayat' : 'arabic_noorehidayat_Regular',
  arabic_noorehira_Regular:
    Platform?.OS === 'ios' ? 'noorehira' : 'arabic_noorehira_Regular',
  arabic_noorehuda_Regular:
    Platform?.OS === 'ios' ? 'noorehuda' : 'arabic_noorehuda_Regular',
  arabic_PDMS_IslamicFont_Regular:
    Platform?.OS === 'ios'
      ? '_PDMS_IslamicFont'
      : 'arabic_PDMS_IslamicFont_Regular',
  arabic_PDMS_Saleem_QuranFont_Regular:
    Platform?.OS === 'ios'
      ? '_PDMS_Saleem_QuranFont'
      : 'arabic_PDMS_Saleem_QuranFont_Regular',
  arabic_ScheherazadeNew_Regular:
    Platform?.OS === 'ios'
      ? 'ScheherazadeNew-Regular'
      : 'arabic_ScheherazadeNew_Regular',
      urdu: 'urdu',
};

// Text presets for the Quran screens. Pass the active theme's Colors (from useTheme) so text
// follows Blue / Green / White; without it the Blue palette is used.
export const FONTSTYLE = (font, dynamicFontSize, C = BlueTheme) => {
  const text = C.quranDeep;
  return {
    bigTitle: {fontFamily: font, fontSize: SIZES.bigTitle, lineHeight: 28, color: text},
    title: {fontFamily: font, fontSize: SIZES.title, lineHeight: 26, color: text},
    headerText: {fontFamily: font, fontSize: SIZES.headerText, lineHeight: 20, color: text},
    smallTitle: {fontFamily: font, fontSize: SIZES.smallTitle, lineHeight: 18, color: text},
    inputs: {fontFamily: font, fontSize: SIZES.inputs, lineHeight: 16, color: text},
    inputBody: {fontFamily: font, fontSize: SIZES.inputBody, lineHeight: 15, color: text},
    body: {fontFamily: font, fontSize: SIZES.body, lineHeight: 14, color: text},
    bodynew: {fontFamily: font, fontSize: SIZES.body, lineHeight: 14, paddingTop: 2, color: text},
    caption: {fontFamily: font, fontSize: SIZES.caption, lineHeight: 13, color: text},
    smallText: {fontFamily: font, fontSize: SIZES.smallText, lineHeight: 12, color: text},
    smallInputText: {fontFamily: font, fontSize: SIZES.smallInputText, lineHeight: 10, color: text},
    // Arabic on the screen background: white on Blue/Green, near-black on White.
    arabicText: {fontFamily: font, fontSize: dynamicFontSize, color: C.textPrimary},
    // Arabic on light cards.
    arabicText1: {fontFamily: font, fontSize: dynamicFontSize, color: C.name === 'white' ? C.textPrimary : C.primary},
    ayahlistnumber: {fontFamily: font, fontSize: dynamicFontSize, color: '#FFFFFF'},
    headerTextNew: {fontFamily: font, fontSize: SIZES.headerText, lineHeight: 20, color: '#FFFFFF'},
  };
};
