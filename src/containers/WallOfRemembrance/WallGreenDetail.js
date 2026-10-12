import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Platform,
} from 'react-native';

import {Colors} from '../../theme';

const HomeBannerimage = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1790084756/wallofremeber/walltwo.png',
};
const API_BASE_URL = 'https://islamicapp.vercel.app';

const PURPLE = '#6838B8';

const WallGreenDetail = ({navigation, route}) => {
  const {wallOfRememberId} = route.params || {};

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (wallOfRememberId) {
      fetchWallOfRemembrance();
    } else {
      setError('Remembrance ID is missing.');
      setLoading(false);
    }
  }, [wallOfRememberId]);

  const fetchWallOfRemembrance = async () => {
    try {
      setLoading(true);
      setError('');

      console.log(
        'Fetching remembrance ID:',
        wallOfRememberId,
      );

      const response = await fetch(
        `${API_BASE_URL}/api/remembrance/${wallOfRememberId}`,
      );

      const result = await response.json();

      console.log(
        'Remembrance Detail API:',
        result,
      );

      if (!response.ok) {
        throw new Error(
          result?.message ||
            'Unable to fetch remembrance',
        );
      }

      if (result?.success && result?.data) {
        setPerson(result.data);
      } else {
        setError('No remembrance found.');
      }
    } catch (e) {
      console.log(
        'Wall of Remembrance Error:',
        e,
      );

      setError(
        e?.message ||
          'Something went wrong.',
      );
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#F7F4FF"
        />

        <View style={styles.loader}>
          <ActivityIndicator
            size="large"
            color={PURPLE}
          />
        </View>
      </SafeAreaView>
    );
  }


  if (error || !person) {
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar
          backgroundColor={Colors.white}
        />

        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error || 'No remembrance found.'}
          </Text>

          <TouchableOpacity
            style={styles.retryButton}
            onPress={fetchWallOfRemembrance}>
            <Text style={styles.retryText}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }


  const personName =
    person?.lovedOneName || 'Unnamed';

  const personPhoto =
    person?.photo?.url || null;

  const relationship =
    person?.relationship || '';

  const shortDescription =
    person?.shortdescription || '';

  const description =
    person?.description || '';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F4FF"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>


        <ImageBackground
          style={styles.headermain}
          source={HomeBannerimage}
          imageStyle={{
            position: 'absolute',
            height: 250,
            width: 280,
          }}>

          {/* PROFILE IMAGE */}

          <View style={styles.imageWrapper}>
            {personPhoto ? (
              <Image
                source={{
                  uri: personPhoto,
                }}
                style={styles.profileImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.noImage}>
                <Text style={styles.noImageText}>
                  No Photo
                </Text>
              </View>
            )}
          </View>

          {/* PROFILE INFO */}

          <View style={styles.profileInfo}>

            <Text
              numberOfLines={3}
              style={styles.name}>
              {personName}
            </Text>

            <View style={styles.line} />


            <Text style={styles.arabic}>
              رَحِمَهُ اللهُ
            </Text>

            <Text style={styles.dua}>
              May Allah grant him{'\n'}
              Jannatul Firdaus and bless{'\n'}
              him with eternal peace.
            </Text>

          </View>
        </ImageBackground>


        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            In Loving Memory of {personName}
          </Text>


          {description ? (
            <Text style={styles.cardText}>
              {description}
            </Text>
          ) : null}

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default WallGreenDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolor,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  headermain: {
    height: 200,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
  },

  imageWrapper: {
    width: 180,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
    zIndex: 2,
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  noImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noImageText: {
    color: '#888888',
    fontSize: 13,
  },

  profileInfo: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    zIndex: 2,
  },

  name: {
    color: Colors.white,
    fontSize: 18,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Asul-Bold'
        : 'AsulBold',
  },

  line: {
    height: 1,
    backgroundColor: '#D6D2D7',
    marginTop: 10,
    width: '100%',
    marginBottom: 8,
  },

  relationship: {
    color: Colors.white,
    fontSize: 12,
    marginBottom: 6,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Nunito Sans 7pt'
        : 'NunitoSansRegular',
  },

  arabic: {
    color: Colors.white,
    fontSize: 20,
    marginBottom: 8,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Al Qalam Quran Majeed Web'
        : 'AlQalamQuran',
  },

  dua: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Nunito Sans 7pt'
        : 'NunitoSansRegular',
    width: '100%',
  },

  card: {
    marginHorizontal: 20,
    marginTop: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#CEB6F8',
    borderRadius: 20,
    backgroundColor: Colors.wasilgreenthemecolorthird,
  },

  cardTitle: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 22,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Asul-Bold'
        : 'AsulBold',
    marginBottom: 10,
  },

  shortDescription: {
   color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Nunito Sans 7pt'
        : 'NunitoSansRegular',
  },

  cardText: {
   color: Colors.white,
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 10,
    fontFamily:
      Platform.OS === 'ios'
        ? 'Nunito Sans 7pt'
        : 'NunitoSansRegular',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  errorText: {
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },

  retryButton: {
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },

  retryText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});