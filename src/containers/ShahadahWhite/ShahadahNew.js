import React, { useEffect, useState ,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  BackHandler,
  LogBox,
  Platform,
  Animated
} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors } from '../../theme';
import {
  WasilNewSteptwoayahIcon,
  WasilNewSteptwohandIcon,
  WasilNewShahadahVideoPlayIcon,
  ClosePlayDrawerSVG
} from '../../assets/icons';
const { height} = Dimensions.get('window');


const shahadahbackimage = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1766518381/shahadah/shahadahbg.png',
};

const shahadahstepsimage = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1766518380/shahadah/shahadahstepbg.png',
};

const shahadahwelimage = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1766518381/shahadah/shahadahwelbg.png',
};

const ShahadahNew = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const [showmemodal,setshowmemodal] = useState(false);
  const lastvideolink = 'SsXHcObCLJw';
  const _toggleModal = () => {
    setshowmemodal(true)
  };
  const closetoggleModal = () => {
    setshowmemodal(false)
  };
  useEffect(() => {
    LogBox.ignoreLogs([
      'A props object containing a "key" prop is being spread into JSX',
    ]);
    if (!BackHandler.removeEventListener) {
      BackHandler.removeEventListener = () => {};
    }
  }, []);
  useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.15,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, []);


 
  return (
    <View style={styles.container} >
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerWrapper}>
        <Image source={shahadahbackimage} style={styles.headerImage} />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerText}>
            If you're ready to enter Islam, the process begins with the
            Shahadah, the declaration of faith. This step is simple but deeply
            meaningful.
          </Text>
        </View>
      </View>

      <ImageBackground
        source={shahadahstepsimage}
        style={styles.card}
        imageStyle={styles.cardBgImage}
      >
        <View style={styles.stepBadge}>
          <Text style={styles.stepText}>STEP 01</Text>
        </View>

        <Text style={styles.cardTitle}>Understand What You’re Declaring</Text>

        <Text style={styles.cardDesc}>
          Before you say the Shahadah, it’s important to know what you’re
          committing to:
        </Text>

        <Text style={styles.highlightTitle}>Belief in One God (Allah):</Text>
        <Text style={styles.paragraph}>
          You’re affirming that there is no god worthy of worship except Allah.
        </Text>

        <Text style={styles.highlightTitle1}>
          Belief in Muhammad as the Final Prophet:
        </Text>
        <Text style={styles.paragraph1}>
          You’re declaring that Muhammad (peace be upon him) is Allah’s final
          messenger who brought the teachings of Islam.
        </Text>
      </ImageBackground>

      <ImageBackground
        source={shahadahstepsimage}
        style={styles.card}
        imageStyle={styles.cardBgImage}
      >
        <View style={styles.stepBadge}>
          <Text style={styles.stepText}>STEP 02</Text>
        </View>

        <Text style={styles.cardTitle}>Recite the Shahadah</Text>

        <Text style={styles.cardDesc}>
          When you’re ready, say the following words with sincerity:
        </Text>

      <View style={styles.shahadahRow}>
  <View style={styles.ayahContainer}>
    <WasilNewSteptwoayahIcon />
    <Text style={styles.shahadahEnglish}>
      “Ashadu an la ilaha illa-llah, wa ashadu anna muhammadan rasul ullah.”
    </Text>
  </View>

  <View style={styles.handContainer}>
    <WasilNewSteptwohandIcon />
  </View>
</View>

        
      </ImageBackground>

      <ImageBackground
        source={shahadahwelimage}
        style={styles.welcomeCard}
        imageStyle={styles.welcomeImage}
      >
        <View style={styles.welcomeOverlay}>
          <Text style={styles.welcomeTitle}>Welcome to Islam</Text>
          <Text style={styles.welcomeText}>
            May Allah guide and bless you{'\n'}on this beautiful path!
          </Text>
        </View>
      </ImageBackground>

      <View style={{ height: 10 }} />
    </ScrollView>
    <View style = {{resizeMode:"contain",top:height*0.45,right:height*0.03,alignSelf:"flex-end",width:50,height:50,position:"absolute"}}>
        <TouchableOpacity onPress={_toggleModal}>
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
    >
      <WasilNewShahadahVideoPlayIcon />
    </Animated.View>
  </TouchableOpacity>
       <Modal isVisible={showmemodal} animationType={'none'}>
                  <View
                    style={{
                      width: "100%",
                      height: 188,
                      alignSelf:"center",
                     
                      marginTop: 50,
                     
                      backgroundColor: 'white',
                    }}>
                  <View style = {{resizeMode:"contain",right:-35,zIndex:1,top:-12,alignSelf:"flex-end",width:50,height:70,position:"absolute"}}>
       <TouchableOpacity onPress={closetoggleModal}>
       <ClosePlayDrawerSVG/>
       </TouchableOpacity>
       </View>
                    
                    <View>
                    <View style={{flex:1}}>
                         <YoutubePlayer height={200} play={true} videoId={lastvideolink} />
                      </View>
                      
                    </View>
                  </View>
                </Modal>
       </View>
       </View>
  );
};

export default ShahadahNew;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

 headerWrapper: {
  width: '100%',
  aspectRatio: 16 / 9,
},
headerImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},
headerOverlay: {
  backgroundColor:"#FFFFFFF",
  position: 'absolute',
  bottom: 120,
  left: 16,
  right: 16,
  padding: 14,
  borderRadius: 14,
},
  headerText: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.wasilnewthemecolorsecond,
    fontWeight: '500',
    fontFamily:"NunitoSans-SemiBold"
  },

  card: {
    margin: 16,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.wasilnewthemecolorsecond,
    backgroundColor: '#EEEEEE',
    overflow: 'hidden',
  },

  cardBgImage: { resizeMode: 'cover' },

  stepBadge: {
    backgroundColor: Colors.wasilnewthemecolorsecond,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  stepText: { color: '#fff', fontWeight: '700',fontFamily:"NunitoSans-Bold" },
  cardTitle: { fontSize: 20, fontWeight: '600', color: Colors.wasilnewthemecolorsecond, marginBottom: 8,fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold" },
  cardDesc: { fontSize: 14, color: '#555', marginBottom: 14,fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },
  highlightTitle: { fontSize: 15, fontWeight: '700', color: Colors.wasilnewthemecolorsecond, fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },
  highlightTitle1: { fontSize: 15, fontWeight: '700', color: Colors.wasilnewthemecolorsecond,top:10, fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },

  paragraph: { fontSize: 14, color: '#444', marginTop: 6, lineHeight: 20,fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },
  paragraph1: { fontSize: 14, color: '#444', marginTop: 20, lineHeight: 20,fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },

  shahadahEnglish: {
    color:Colors.black,
    fontSize: 14,
    top:10,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" 
  },

  audioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  progressContainer: {
    flex: 1,
    height: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },

  audioProgress: {
    height: 4,
    backgroundColor: Colors.wasilnewthemecolorsecond,
  },

  audioTime: { fontSize: 12, color: Colors.black,fontFamily:"Poppins-SemiBold" },

  welcomeCard: {
    height: 170,
    margin: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.wasilnewthemecolorsecond,
    overflow: 'hidden',
  },

  welcomeImage: { resizeMode: 'cover' },
  welcomeOverlay: { position: 'absolute', left: 16, bottom: 45 },
  welcomeTitle: { fontSize: 28, fontWeight: '600', color: Colors.wasilnewthemecolorsecond,fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold"  },
  welcomeText: { fontSize: 14, fontWeight: '600',color:Colors.black,fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular" },
  shahadahRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 16,
},

ayahContainer: {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 8,
},

handContainer: {
  width: 80,
  alignItems: 'center',
},
});
