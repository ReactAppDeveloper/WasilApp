import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
const NewArrival = () => {
  const [hadithSBdata, sethadithSBdata] = useState([]);
  const navigation = useNavigation();
   useEffect(() => {
   fetchData();
   }, []);
  const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://islamicapp.vercel.app/api/speakers`
        )
        console.log("speakers data response ==>")
        const data = response.data
        sethadithSBdata(data);
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
  }

  return (
  <View style={{ backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Durs & Podcast</Text>
        </View>
        <TouchableOpacity   onPress={() => {
           navigation.navigate('BySpeakersNew');
        }}>
        <View style={styles.viewallContainer}>
          <Text style={styles.viewAll}>See All</Text>
        </View>
        </TouchableOpacity>
         
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
                    navigation.navigate('SpeakersDetailNew', {
          name:item.speakerName,
          speakerid: item._id,
          speakername: item.speakerName,
        })
                  }}
      >
             <View style={styles.imageContainer}>
               {item.coverImage ? (
    <SvgUri
      width="100%"
      height="100%"
      uri={item.coverImage}
      style={styles.advImage}
    />
  ) : (
    <Image
      source={require('../../assets/books/default.png')}
      style={styles.image}
    />
  )}
             </View>
           </TouchableOpacity>
         
           <View style={styles.cardFooter}>
             <Text style={styles.title} numberOfLines={1}>
        {item.speakerName}
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
    backgroundColor: Colors.white
  },
  headerTitle: {
    fontSize: 18,
    left:2,
    color:Colors.black,
    fontFamily:"Poppins-Bold",
  },

   viewallContainer: {
    width:50,
    height:22,
    flexDirection: 'row',
    borderColor:Colors.wasilnewthemecolorsecond,
    backgroundColor: Colors.wasilnewthemecolorsecond,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },

  viewAll: {
    alignSelf:"center",
    justifyContent:"center",
    color: Colors.white,
    fontSize: 10,
    alignItems:"center",
    left:7,
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 1.2,
    marginTop: 2,
    marginHorizontal: 12,
  },
  listContainer: {
    paddingLeft: 10,
  },
  card: {
    width: 180,
    marginRight: 12,
  },
 
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
   

});


export default NewArrival;
