import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const hadithImages = {
  1: require('../../assets/books/revilation.png'),
  2: require('../../assets/books/belief.png'),
  3: require('../../assets/books/knowledge.png'),
};
const TopStories = () => {
  
  const [hadithSBdata, sethadithSBdata] = useState([]);
  const navigation = useNavigation();
   
  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.hadithapi.com/api/sahih-bukhari/chapters?apiKey=$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli`
        )
        console.log("hadith chapters response ==>")
        const data = response.data
        sethadithSBdata(data.chapters);
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
  }
 
  const formatTitle = (text, maxWords = 5) => {
  const cleaned = text.replace(/\s*\(.*?\)\s*/g, "").trim();
  const words = cleaned.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : cleaned;
  };

  return (
  <View style={{ backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Sahih al-Bukhari</Text>
        </View>
         
      </View>

      <View style={styles.divider} />

      <FlatList
       data={hadithSBdata.slice(0, 3)}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
         <View style={styles.card}>
           <TouchableOpacity 
           onPress={() => {
                    navigation.navigate('HadithsDetail', {
                      hadithchapternumber: item.chapterNumber,
                      hadithchaptername: item.chapterEnglish,
                      hadithbookname: item.bookSlug,
                      name: item.chapterEnglish,
                    });
                  }}
      >
             <View style={styles.imageContainer}>
               <Image 
                 source={
    hadithImages[item.id] ||
    require('../../assets/books/default.png')
  }
                 style={styles.image}
               />
             </View>
           </TouchableOpacity>
         
           <View style={styles.cardFooter}>
             <Text style={styles.title} numberOfLines={1}>
        {formatTitle(item.chapterEnglish, 5)}
      </Text>
            
           </View>
                 </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: Colors.white
  },
  headerTitle: {
    fontSize: 18,
    left:2,
    color:Colors.black,
    fontFamily:"Poppins-Bold",
  },
  headerSubtitle: {
   fontFamily:"Poppins-Bold",
    fontSize: 10,
    color: '#555',
    left:2
  },
  viewAll: {
    color: '#888',
    fontSize: 12,
    marginTop: 21,
    right:3
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 1.2,
    marginTop: 8,
    marginHorizontal: 12,
  },
  listContainer: {
    paddingLeft: 10,
    marginTop: 15,
  },
  card: {
    width: 180,
    marginRight: 12,
  },
 
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    left:5,
    marginRight: 6,
    fontFamily:"Poppins-Light",
  },
  imageContainer: {
    width: 180,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},
   

badge: {
  position: "absolute",
  top: 8,
  left: 8,
  backgroundColor: "#FFF",
  paddingHorizontal: 10,
  paddingVertical: 3,
  borderRadius: 20,
  zIndex: 10,
},

badgeText: {
  fontSize: 12,
  fontWeight: "600",
  color: "#000",
},
});


export default TopStories;
