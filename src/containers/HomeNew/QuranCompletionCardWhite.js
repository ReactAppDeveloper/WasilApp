import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  WasilNewContinueReadingIcon,
  WasilNewContinueListenIcon,
} from '../../assets/icons';


import {Colors} from '../../theme';
import {getStorageItem} from '../Quran/mmkvStorage/storeData';

const QuranCompletionCardWhite = () => {
  const [lastReadSurah, setLastReadSurah] = useState(null);
   const [lastListening, setLastListening] = useState(null);
  const navigation = useNavigation();

   useFocusEffect(
   React.useCallback(() => {
     // Continue Reading
     const readData = getStorageItem('lastReadSurah');
 
     try {
       const parsed =
         typeof readData === 'string'
           ? JSON.parse(readData)
           : readData;
 
       if (parsed?.id) {
         setLastReadSurah(parsed);
       } else {
         setLastReadSurah(null);
       }
     } catch {
       setLastReadSurah(null);
     }
 
     // Continue Listening
    const playData = getStorageItem('lastListening');
 
 try {
   const parsed =
     typeof playData === 'string'
       ? JSON.parse(playData)
       : playData;
 
   if (
     parsed?.SurahItem &&
     (parsed?.AyahItem || parsed?.completed)
   ) {
     setLastListening(parsed);
   } else {
     setLastListening(null);
   }
 } catch {
   setLastListening(null);
 }
   }, []),
 );
  
   const openSurah = () => {
     if (!lastReadSurah?.id) {
       return;
     }
 
     navigation.navigate('SurahDetailPage', {
      selectedSurahItems: lastReadSurah,
       surahNumber: lastReadSurah.id,
       fromqc: 'qurancompletion',
       headersurahname: lastReadSurah.transliteratedName,
     });
   };
 
 const openListening = () => {
   if (!lastListening) return;
 
   navigation.navigate('SurahDetailPage', {
     selectedSurahItems: lastListening.SurahItem,
 
     selectedAyahItems: lastListening.completed
       ? null
       : lastListening.AyahItem,
 
     ayahIdFromBookmark: lastListening.completed
       ? null
       : lastListening.AyahItem.id,
 
     continuePlaying: !lastListening.completed,
     fromqc: 'qurancompletion',
     surahNumber: lastListening.SurahItem.id,
     headersurahname: lastListening.SurahItem.transliteratedName,
   });
 };

 const getReadingProgress = () => {
  if (!lastReadSurah) {
    return 0;
  }

  const currentAyah = Number(lastReadSurah?.verseNumber || 1);
  const totalAyahs = Number(lastReadSurah?.versesCount || 0);

  if (!totalAyahs) {
    return 0;
  }

  return Math.min((currentAyah / totalAyahs) * 100, 100);
};

const getListeningProgress = () => {
  if (!lastListening) {
    return 0;
  }

  const totalAyahs = Number(
    lastListening?.SurahItem?.versesCount || 0,
  );

  if (!totalAyahs) {
    return 0;
  }

  if (lastListening?.completed) {
    return 100;
  }

  const currentAyah = Number(
    lastListening?.AyahItem?.verseNumber || 1,
  );

  return Math.min((currentAyah / totalAyahs) * 100, 100);
};
  

  const Card = ({
  icon,
  children,
  disabled,
  onPress,
  progress,
}) => (
   <TouchableOpacity
     activeOpacity={0.85}
     disabled={disabled}
     style={[styles.wrapper, disabled && styles.disabled]}
     onPress={onPress}>
     <LinearGradient
       colors={['#F5F5F5', '#F5F5F5']}
       style={styles.card}>
       <View style={styles.leftSection}>
         <View style={styles.iconContainer}>{icon}</View>
 
         <View style={styles.textContainer}>
           {children}
           {!disabled && (
  <View style={styles.progressBar}>
    <View
      style={[
        styles.progressFill,
        {
          width: `${progress}%`,
        },
      ]}
    />
  </View>
)}
         </View>
         
       </View>
     </LinearGradient>
   </TouchableOpacity>
 );

  return (
    <View style={styles.container}>
          {/* Continue Reading */}
          <Card
     icon={<WasilNewContinueReadingIcon />}
     disabled={!lastReadSurah}
     progress={getReadingProgress()}
     onPress={openSurah}>
   
     <Text style={styles.smallText1}>
       Continue Reading
     </Text>
   
     <Text style={styles.smallText}>
       {lastReadSurah ? `Last read ${lastReadSurah.transliteratedName}` : 'No Recent Surah'}
     </Text>
   
   </Card>
    
         <Card
     icon={<WasilNewContinueListenIcon />}
     disabled={!lastListening}
     progress={getListeningProgress()}
     onPress={openListening}>
   
     <Text style={styles.smallText1}>
       Continue Listening
     </Text>
   
     <Text style={styles.smallText}>
      {lastListening ? lastListening.completed ? `Last listened ${lastListening.SurahItem.transliteratedName}` : `${lastListening.SurahItem.transliteratedName}` : 'No Recent Surah'}
     </Text>
   
   </Card>
        </View>
    );
};

export default QuranCompletionCardWhite;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 5 : 10,
  },

  wrapper: {
    width: '48%',
  },

  disabled: {
    opacity: 0.5,
  },

  card: {
    width: '100%',
    height: 76,
    borderRadius: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
  },

   smallText1: {
    color: Colors.wasilnewthemecolorsecond,
    fontSize: 12,
     fontFamily: 'NunitoSans-Bold',
   
  },

  smallText: {
    color: Colors.black,
    fontSize: 9,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Nunito Sans 7pt'
        : 'NunitoSansRegular',
  },

  title: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: 'NunitoSans-Bold',
    marginTop: 2,
  },
 progressBar: {
  height: 4,
  width: '100%',
  backgroundColor: '#D9D9D9',
  borderRadius: 4,
  marginTop: 5,
  overflow: 'hidden',
},

progressFill: {
  height: 4,
  backgroundColor: Colors.wasilnewthemecolorsecond,
  borderRadius: 4,
},
});