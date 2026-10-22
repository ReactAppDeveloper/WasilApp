import React from 'react';
import useTheme from '../../theme/useTheme';
import * as Icons from './index';

// Picks the Blue / Green / White artwork of an icon family for the active theme.
const themed = (blue, green, white) => {
  const ThemedIcon = (props) => {
    const { theme } = useTheme();
    const Icon = theme === 'green' ? green : theme === 'white' ? white : blue;
    return Icon ? <Icon {...props} /> : null;
  };
  return ThemedIcon;
};

export const FavouriteFillIcon = themed(Icons.WasilNewFavouriteFillBTSvg, Icons.WasilNewFavouriteFillGSvg, Icons.WasilNewFavouriteFillSvg);
export const FavouriteUnFillIcon = themed(Icons.WasilNewFavouriteUnFillBTSvg, Icons.WasilNewFavouriteUnFillGSvg, Icons.WasilNewFavouriteUnFillSvg);
export const DuaNumberIcon = themed(Icons.DuaListNumberBTSVGG, Icons.DuaListNumberGSVGG, Icons.DuaListNumberSVGG);
export const EmptyFavouritesArt = themed(Icons.WasilNewEmptyViewFavBTSvg, Icons.WasilNewEmptyViewFavGSvg, Icons.WasilNewEmptyViewFavSvg);
export const EmptyBookmarksArt = themed(Icons.WasilNewEmptyViewBookBTSvg, Icons.WasilNewEmptyViewBookGSvg, Icons.WasilNewEmptyViewBookSvg);
export const BackArrowIcon = themed(Icons.WasilNewBackArrowBTSvg, Icons.WasilNewBackArrowBTSvg, Icons.WasilNewBackArrowSvg);
export const TranslateIcon = themed(Icons.WasilNewTranslateBTSvg, Icons.WasilNewTranslateBTSvg, Icons.WasilNewTranslateWhiteSvg);
export const QuranSettingsIcon = themed(Icons.WasilNewSettingBTSvg, Icons.WasilNewSettingBTSvg, Icons.QuranBottomSettingWhiteSVG);
export const TranslationWorldIcon = themed(Icons.WasilTranslationWorldBTSvg, Icons.WasilTranslationWorldGSvg, Icons.WasilTranslationWorldSvg);
export const QuranReadIcon = themed(Icons.WasilNewQuranReadBSvg, Icons.WasilNewQuranReadGSvg, Icons.WasilNewQuranReadSvg);
export const QuranListenIcon = themed(Icons.WasilNewQuranListenBSvg, Icons.WasilNewQuranListenGSvg, Icons.WasilNewQuranListenSvg);
export const ReadTranslationIcon = themed(Icons.WasilNewReadTranslationBSvg, Icons.WasilNewReadTranslationGSvg, Icons.WasilNewReadTranslationSvg);
export const ReadTafsirIcon = themed(Icons.WasilNewReadTafsirBSvg, Icons.WasilNewReadTafsirGSvg, Icons.WasilNewReadTafsirSvg);
export const QuranReadCardArt = themed(Icons.WasilNewQuranReadSvgBBox, Icons.WasilNewQuranReadSvgGBox, Icons.WasilNewQuranReadSvgBox);
export const QuranListenCardArt = themed(Icons.WasilNewQuranListenSvgBBox, Icons.WasilNewQuranListenSvgGBox, Icons.WasilNewQuranListenSvgBox);
export const TranslationCardArt = themed(Icons.WasilNewTransBSvg, Icons.WasilNewTransGSvg, Icons.WasilNewTransWSvg);
export const TafsirCardArt = themed(Icons.WasilNewTafsirBSvg, Icons.WasilNewTafsirGSvg, Icons.WasilNewTafsirWSvg);
export const MakkahIcon = themed(Icons.WasilNewBTMakkahSvg, Icons.WasilNewGMakkahSvg, Icons.WasilNewMakkahSvg);
export const MadinaIcon = themed(Icons.WasilNewBTMadinaSvg, Icons.WasilNewGMadinaSvg, Icons.WasilNewMadinaSvg);
export const ReciterPlayIcon = themed(Icons.WasilNewRecitersBTPlayIcon, Icons.WasilNewRecitersBTPlayIcon, Icons.WasilNewRecitersWhitePlayIcon);
export const ReciterPauseIcon = themed(Icons.WasilNewRecitersBTPauseIcon, Icons.WasilNewRecitersBTPauseIcon, Icons.WasilNewRecitersWhitePauseIcon);
export const StoryPlayIcon = themed(Icons.IslamicStoryPlayBTAudioSVG, Icons.IslamicStoryGPlayAudioSVG, Icons.IslamicStoryPlayAudioSVG);
export const StoryPauseIcon = themed(Icons.IslamicStoryPauseBTAudioSVG, Icons.IslamicStoryGPauseAudioSVG, Icons.IslamicStoryPauseAudioSVG);
export const HeaderTranslateIcon = themed(Icons.WasilNewBTTranslateSvg, Icons.WasilNewBTTranslateSvg, Icons.WasilNewTranslateWhiteSvg);
export const HeaderSettingsIcon = themed(Icons.WasilNewBTSettingSvg, Icons.WasilNewBTSettingSvg, Icons.QuranBottomSettingWhiteSVG);
export const StepExpandedIcon = themed(Icons.WasilNewArrowOpenBTSvg, Icons.WasilNewArrowOpenGSvg, Icons.WasilNewArrowOpenSvg);
export const StepCollapsedIcon = themed(Icons.WasilNewArrowUnopenBTSvg, Icons.WasilNewArrowUnopenGSvg, Icons.WasilNewArrowUnopenSvg);
// Prayer guide banners
export const AsrFirst4FarzBanner = themed(Icons.WasilNewBTPrayerAsrFarzSvg, Icons.WasilNewGPrayerAsrFarzSvg, Icons.WasilNewPrayerAsrFarzSvg);
export const AsrFirst4SunnahBanner = themed(Icons.WasilNewBTPrayerAsrSunnahSvg, Icons.WasilNewGPrayerAsrSunnahSvg, Icons.WasilNewPrayerAsrSunnahSvg);
export const DhuhrFirst4FarzBanner = themed(Icons.WasilNewBTPrayerDhuhrFarzSvg, Icons.WasilNewGPrayerDhuhrFarzSvg, Icons.WasilNewPrayerDhuhrFarzSvg);
export const DhuhrFirst4SunnahBanner = themed(Icons.WasilNewBTPrayerDhuhrSunnahSvg, Icons.WasilNewGPrayerDhuhrSunnahSvg, Icons.WasilNewPrayerDhuhrSunnahSvg);
export const Dhuhr2NafilBanner = themed(Icons.WasilNewBTPrayerDhuhrNafilSvg, Icons.WasilNewGPrayerDhuhrNafilSvg, Icons.WasilNewPrayerDhuhrNafilSvg);
export const Dhuhr2SunnahBanner = themed(Icons.WasilNewBTBTPrayerDhuhrTSunnahSvg, Icons.WasilNewGPrayerDhuhrTSunnahSvg, Icons.WasilNewPrayerDhuhrTSunnahSvg);
export const FajrFarzBanner = themed(Icons.WasilNewBTPrayerFajrFarzSvg, Icons.WasilNewGPrayerFajrFarzSvg, Icons.WasilNewPrayerFajrFarzSvg);
export const FajrSunnahBanner = themed(Icons.WasilNewBTPrayerFajrSuunahSvg, Icons.WasilNewGPrayerFajrSuunahSvg, Icons.WasilNewPrayerFajrSuunahSvg);
export const IshaFirst4FarzBanner = themed(Icons.WasilNewBTPrayerIshaFarzSvg, Icons.WasilNewGPrayerIshaFarzSvg, Icons.WasilNewPrayerIshaFarzSvg);
export const IshaFirst4SunnahBanner = themed(Icons.WasilNewBTPrayerIshaSunnahSvg, Icons.WasilNewGPrayerIshaSunnahSvg, Icons.WasilNewPrayerIshaSunnahSvg);
export const IshaLast2NafilBanner = themed(Icons.WasilNewBTPrayerIshaTNafilSvg, Icons.WasilNewGPrayerIshaTNafilSvg, Icons.WasilNewPrayerIshaTNafilSvg);
export const Isha2NafilBanner = themed(Icons.WasilNewBTPrayerIshaNafilSvg, Icons.WasilNewGPrayerIshaNafilSvg, Icons.WasilNewPrayerIshaNafilSvg);
export const Isha2SunnahBanner = themed(Icons.WasilNewBTPrayerIshaTSunnahSvg, Icons.WasilNewGPrayerIshaTSunnahSvg, Icons.WasilNewPrayerIshaTSunnahSvg);
export const IshaWitrBanner = themed(Icons.WasilNewBTPrayerIshaWitrSvg, Icons.WasilNewGPrayerIshaWitrSvg, Icons.WasilNewPrayerIshaWitrSvg);
export const MaghribFarzBanner = themed(Icons.WasilNewBTPrayerMaghribFarzSvg, Icons.WasilNewGPrayerMaghribFarzSvg, Icons.WasilNewPrayerMaghribFarzSvg);
export const Maghrib2NafilBanner = themed(Icons.WasilNewBTPrayerMaghribNafilSvg, Icons.WasilNewGPrayerMaghribNafilSvg, Icons.WasilNewPrayerMaghribNafilSvg);
export const Maghrib2SunnahBanner = themed(Icons.WasilNewBTPrayerMaghribSunnahSvg, Icons.WasilNewGPrayerMaghribSunnahSvg, Icons.WasilNewPrayerMaghribSunnahSvg);
export const PrayerFajrIcon = themed(Icons.WasilNewPrayerFajrBTSvg, Icons.WasilNewPrayerFajrGSvg, Icons.WasilNewPrayerFajrSvg);
export const PrayerDhuhrIcon = themed(Icons.WasilNewPrayerDhuhrBTSvg, Icons.WasilNewPrayerDhuhrGSvg, Icons.WasilNewPrayerDhuhrSvg);
export const PrayerAsrIcon = themed(Icons.WasilNewPrayerAsrBTSvg, Icons.WasilNewPrayerAsrGSvg, Icons.WasilNewPrayerAsrSvg);
export const PrayerMaghribIcon = themed(Icons.WasilNewPrayerMaghribBTSvg, Icons.WasilNewPrayerMaghribGSvg, Icons.WasilNewPrayerMaghribSvg);
export const PrayerIshaIcon = themed(Icons.WasilNewPrayerIshaBTSvg, Icons.WasilNewPrayerIshaGSvg, Icons.WasilNewPrayerIshaSvg);
export const VideoPlayIcon = themed(Icons.PrayerNamazPlayBTSVG, Icons.PrayerNamazPlayGSVG, Icons.PrayerNamazPlaySVG);
