import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  LogBox,
  Text,
  Dimensions,
  Platform,
  ActivityIndicator,
  Image
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../theme';
import {
  WasilNewBlueTQuranBannerSvg,
} from '../../assets/icons';
LogBox.ignoreAllLogs();
const API_BASE_URL = 'https://islamicapp.vercel.app';

const { width } = Dimensions.get('window');
const Wallofremember = ({ navigation,route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datawallofremember, setDatawallofremember] = useState([]);

  useEffect(() => {
  fetchRemembrances();
}, []);

const fetchRemembrances = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await axios.get(
        `${API_BASE_URL}/api/remembrance/approved`,
      );

      console.log('Approved remembrance response:', res.data);

     const remembranceData = Array.isArray(res.data?.data)
  ? [...res.data.data].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    )
  : [];

      setDatawallofremember(remembranceData);
    } catch (e) {
      console.log(
        'Wall of remembrance error:',
        e?.response?.data || e?.message,
      );

      setError(
        e?.response?.data?.message ||
          'Unable to load remembrances.',
      );
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.wasilnewthemecolorsecond} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.loader}>
        <Text>Error fetching data</Text>
      </View>
    );
  }
  

  return (
    <View style={styles.containerMain}>
     <StatusBar
          backgroundColor={Colors.white}
        />
       <View style={styles.headerWrapper}>
      <WasilNewBlueTQuranBannerSvg style={styles.banner} />
        <View style={styles.textContainer}>
            
            <Text style={styles.description}>
                            رَبَّنَا ٱغْفِرْ لِي وَلِوَٰلِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ
            </Text>
      
            <Text style={styles.subtitletrans}>
             Our Lord! Forgive me, my parents, and the believers the Day when the judgment will come to pass.
            </Text>

             <Text style={styles.subtitle}>
                 Surah Ibrahim, Verse: 41
                  </Text>
      
        </View>
     
      </View>
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.membersContainer}>
          {datawallofremember.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No approved members available.
              </Text>
            </View>
          ) : (
            datawallofremember.map((item, index) => {
              const memberName =
                item?.lovedOneName || 'Unnamed';

              const memberDescription =
                item?.shortdescription || '';

              const memberRelationship =
                item?.relationship || '';

              const memberPhoto =
                item?.photo?.url || null;

              return (
                <TouchableOpacity
                  key={item?._id || index}
                  activeOpacity={0.9}
                  style={styles.memberCard}
                  onPress={() => {
                    navigation.navigate(
                      'WallofrememberDetail',
                      {
                        wallOfRememberId: item._id,
                      },
                    );
                  }}
                >
                  {/* Image */}
                  {memberPhoto ? (
                    <Image
                      source={{
                        uri: memberPhoto,
                      }}
                      style={styles.memberImage}
                      resizeMode="cover"
                    />
                  ) : (
                    <View
                      style={[
                        styles.memberImage,
                        styles.noImageContainer,
                      ]}
                    >
                      <Text style={styles.noImageText}>
                        No Photo
                      </Text>
                    </View>
                  )}

                  {/* Information */}
                  <View style={styles.memberInfo}>
                    <View style={styles.nameYearRow}>
                      <Text
                        numberOfLines={2}
                        style={styles.memberName}
                      >
                        {memberName}
                      </Text>
                    </View>

                    <View style={styles.memberLine} />


                    <Text
                      numberOfLines={6}
                      style={styles.memberDescription}
                    >
                      {memberDescription}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default Wallofremember;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.intermediate1,
  },
  loader: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
 
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.white,
  }, 
  errorText: {
    fontSize: 15,
     color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.wasilnewthemecolorsecond,
  },

  retryText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
   headerWrapper: {
    top:10,
    width: "100%",
    height: 200,
    right:1,
    alignItems: 'center',  
    position: 'relative',
    justifyContent: 'center',
    flexDirection:"column"
  },
   banner: {
    width: '100%',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  title: {
    bottom:5,
    fontSize: 18,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
     color: Colors.white,
  },

  description: {
    width:300,
    fontSize: 20,
     color: Colors.white,
    textAlign:"center",
    fontFamily: Platform.OS === 'ios' ? 'Al Qalam Quran Majeed Web' : 'AlQalamQuran'
  },
  subtitle: {
    fontSize: 11,
     color: Colors.white,
    top:20,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  
  subtitletrans: {
    fontSize: 10,
    width:250,
    top:8,
     color: Colors.white,
    textAlign:"center",
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  
decorativeTopRight: {
  position: 'absolute',
  right: -10,
  top: -20,
},

decorativeBottomLeft: {
  position: 'absolute',
  left: -10,
  bottom: -25,
},

decorativeText: {
  fontSize: 100,
  color: '#C8B5F5',
  opacity: 0.7,
},


membersContainer: {
  top:10,
  width: '100%',
},

memberCard: {
  marginHorizontal: 10,
  marginBottom: 10,
  minHeight: 140,
  borderRadius: 10,
   borderWidth: 0.5,
  borderColor: '#E5E5E5',
  backgroundColor: Colors.intermediate1,
  flexDirection: 'row',
  padding: 10,
},

memberImage: {
  width: width >= 720 ? 235 : width * 0.30,
  height: width >= 720 ? 235 : width * 0.30,
  borderRadius: 10,
},

memberInfo: {
  flex: 1,
  marginLeft: 12,
  justifyContent: 'center',
},

nameYearRow: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

memberName: {
  flex: 1,
  fontSize:20,
  color: Colors.white,
  marginRight: 10,
  fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
},

memberYear: {
  fontSize: 12,
 color: Colors.white,
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
},

memberLine: {
  width: '100%',
  height: 1.5,
  backgroundColor: '#E0E0E0',
  marginTop: 4,
  marginBottom: 10,
},

memberCategory: {
  fontSize: 12,
  color: Colors.white,
  marginBottom: 4,
  fontFamily:
    Platform.OS === 'ios'
      ? 'Nunito Sans 7pt'
      : 'NunitoSansRegular',
},

memberDescription: {
  fontSize: 12,
  lineHeight: 18,
  color: Colors.white,
  fontFamily:
    Platform.OS === 'ios'
      ? 'Nunito Sans 7pt'
      : 'NunitoSansRegular',
},
 emptyContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
  },
});
