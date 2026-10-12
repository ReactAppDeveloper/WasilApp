import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet ,Platform} from 'react-native';
import { Colors } from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const TopChoices = ({ title, data }) => {
  const [bookmarked, setBookmarked] = useState([]);
  const navigation = useNavigation();
   
  const toggleBookmark = (index) => {
    setBookmarked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
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
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>Popular Stories</Text>
        </View>
       
      </View>

      <View style={styles.divider} />

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
         <View style={styles.card}>
           <TouchableOpacity
           onPress={() => {
                             navigation.navigate('StoryDetailScreen', {
                               storyid: item.storyId,
                               storytitle:item.title,
                             });
                           }}>
             <View style={styles.imageContainer}>
               <Image 
                 source={item.path ? { uri: item.path } : null}
                 style={styles.image}
               />
             </View>
           </TouchableOpacity>
         
           <View style={styles.cardFooter}>
             <Text style={styles.title} numberOfLines={1}>
               {formatTitle(item.title, 5)}
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
    marginTop: 18,
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
    width: 140,
    marginRight: 12,
  },
 
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    flex: 1,
    left:3,
    marginRight: 6,
    color:Colors.secondary,
     fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  imageContainer: {
  width: 140,
    height: 170,
   
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

export default TopChoices;
