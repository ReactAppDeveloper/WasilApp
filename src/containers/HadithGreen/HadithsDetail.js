import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../theme';
import useStorehadith from '../../hadithstore';
import HadithCard from './HadithCard';

const HadithsDetail = ({ route }) => {
  const { favouriteshadith } = useStorehadith();
  const { hadithchapternumber, hadithbookname } = route.params;
  const [hadithsdetaildata, setHadithsDetailData] = useState([]);
  const [chapternumber, setchapternumber] = useState("");
  const [chapterenglishname, setchapterenglishname] = useState("");
  const [chapterarabicname, setchapterarabicname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  fetchData();
  }, []);

  const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `https://www.hadithapi.com/public/api/hadiths?book=${hadithbookname}&chapter=${hadithchapternumber}&paginate=50&apiKey=$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli`
    );

    const hadiths = response.data.hadiths.data;
    setHadithsDetailData(hadiths);

     if (hadiths.length > 0) {
      const chapter = hadiths[0].chapter; 
      
      setchapternumber(chapter.chapterNumber);
      setchapterenglishname(chapter.chapterEnglish);
      setchapterarabicname(chapter.chapterArabic);
    }
  } catch (e) {
    console.log(e);
  }
  setIsLoading(false);
};

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.wasilgreenthemecolor} />

       <View style={styles.headerCard}>
  <Text style={styles.headerTitle}>
    ({chapternumber}) Chapter: {chapterenglishname}
  </Text>

  <Text style={styles.headerArabic}>
    {chapterarabicname}
  </Text>
</View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {hadithsdetaildata.map((item, index) => (
          <HadithCard
            key={index}
            hadith={item}
            index={index}
            favouriteshadith={favouriteshadith}
          />
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default HadithsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolor,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.wasilgreenthemecolor
  },
  headerCard: {
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    margin: 16,
    borderRadius: 12,
    padding: 16,
    width:"95%",
    alignSelf:"center"
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  headerArabic: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: Platform.OS === 'ios' ? 'Al Qalam Quran Majeed Web' : 'AlQalamQuran',
  },
});
