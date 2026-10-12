import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Colors } from '../../theme';
import useStorehadith from '../../hadithstore';
import Share from 'react-native-share';
import { DuaHeartUnfillSVG, HeartfilledSVG,DuaShareSVG } from '../../assets/icons';

const HadithCard = ({ hadith, index, favouriteshadith }) => {
  const { addhadith, deletehadith } = useStorehadith();

  const isFavourited =
    favouriteshadith.findIndex(({ id }) => id === hadith.id) !== -1;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.hadithNumber}>
          Hadith no {index + 1}
        </Text>

        <TouchableOpacity 
        style={{left:330,position:"absolute"}}
        onPress={async () => {
              let options = {
                message:"Hadith"+"\n\n"+hadith.hadithEnglish+"\n\n"+"Hadith Book"+"\n\n"+hadith.bookSlug+"\n\n"+"Wasil Islamic App | www.wasil.io"
              };
              Share.open(options)
              .then(r => {
              console.log(r);
              })
              .catch(e => {
              console.log(e);
              });}}>
    <DuaShareSVG/>
          
        </TouchableOpacity>
        <TouchableOpacity 
        style={{right:10}}
          onPress={() =>
            isFavourited ? deletehadith(hadith) : addhadith(hadith)
          }
        >
          {isFavourited ? <HeartfilledSVG /> : <DuaHeartUnfillSVG />}
        </TouchableOpacity>
      </View>

      {hadith.hadithArabic ? (
        <Text style={styles.arabicText}>
          {hadith.hadithArabic}
        </Text>
      ) : null}

      <Text style={styles.narrator}>
  {hadith.englishNarrator?.trim().toLowerCase().startsWith('narrated')
    ? hadith.englishNarrator
    : `Narrated ${hadith.englishNarrator}`}
</Text>

      <Text style={styles.englishText}>
        {hadith.hadithEnglish}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.reference}>
        Reference: {hadith.bookSlug}
      </Text>
      <Text style={styles.reference}>
        Book: {hadith.book?.bookName}
      </Text>
      <Text style={styles.reference}>
        Writer: {hadith.book?.writerName}
      </Text>
      <View style={styles.divider1} />
    
   
    </View>
  );
};

export default HadithCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    borderRadius: 2,
  },
  topRow: {
    height:40,
    width:"95%",
    borderRadius:10,
    borderWidth:0.2,
    borderColor:Colors.lightgreytasbih,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:"center",
    backgroundColor:"#E0E0E0"
  },
  hadithNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: "#757575",
    left:15,
    top:2,
    fontFamily:"Poppins-SemiBold"
  },
  arabicText: {
    padding: 16,
    top:5,
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 34,
    marginBottom: 10,
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Al Qalam Quran Majeed Web' : 'AlQalamQuran',
  },
  narrator: {
    paddingLeft: 16,
    paddingRight:16,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold",
    color:Colors.wasilnewthemecolorthird,
    marginBottom: 8,
  },
  englishText: {
    top:5,
    paddingLeft: 16,
    paddingRight:16,
    fontSize: 14,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
    lineHeight: 22,
    color: '#444',
  },
  divider: {
    width:"92%",
    alignSelf:"center",
    height: 1,
    backgroundColor: '#E6E6E6',
    marginVertical: 14,
  },
  divider1: {
    width:"92%",
    alignSelf:"center",
    height: 1,
    top:15,
    backgroundColor: '#E6E6E6',
  },
  reference: {
    paddingLeft:16,
    fontSize: 12,
    color: Colors.wasilnewthemecolorthird,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  
});
