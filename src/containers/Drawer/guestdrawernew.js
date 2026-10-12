import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  Platform
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../theme';
import HomeNewBlue from '../HomeNew/HomeNewBlue';
import HomeNewWhite from '../HomeNew/HomeNewWhite';
import HomeNewGreen from '../HomeNew/HomeNewGreen';

import {
  WasilLogoDrawerSVG,
  HelpGreenSVG,
  FollowUsGreenSVG,
  RateGreenSVG,
  ContactGreenSVG,
  PolicyGreenSVG,
  FounderGreenSVG,
  FAQsGreenSVG,
  ShareGreenSVG,
  HijriGreenSVG,
  ClosePlayDrawerSVG,
  FacebookFollowUpSVG,
  YoutubeFollowUpSVG,
  InstagramFollowUpSVG,
  TiktokFollowUpSVG,
  WasilNoAdsSvg,
  WasilNoAdssSvg,
  WasilNoAdsGreenSvg
} from '../../assets/icons';
import SplashScreen from 'react-native-splash-screen';
import Modal from 'react-native-modal';
import Share from 'react-native-share';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  const [showmemodal, setshowmemodal] = useState(false);

  const _toggleModal = () => setshowmemodal(true);
  const closetoggleModal = () => setshowmemodal(false);
const { Colors } = useTheme();
  return (
    
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 0,
        flexGrow: 1,
        backgroundColor: Colors.white,
      }}
    >
      <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.primary,
            paddingVertical: 70,
          }}
        >
          <View style={{top:10}}>
          <WasilLogoDrawerSVG />
          </View>
        </View>

        <View style={{ backgroundColor: Colors.primary, height: 5 }} />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ThemeSetting')}
          style={{
            marginHorizontal: 10,
            marginTop: 18,
            borderRadius: 18,
            overflow: 'hidden',
            elevation: 5,
          }}>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: 'rgba(255,255,255,0.18)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 24}}>🎨</Text>
            </View>

            {/* Text */}
            <View style={{flex: 1, marginLeft: 14}}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                }}>
                Theme Settings
              </Text>

            </View>

            <Text
              style={{
                color: Colors.white,
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              ›
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 ,paddingVertical:10,paddingHorizontal:5
          }}
        >
          {[
            {
              label: 'About Us',
              icon: <HelpGreenSVG />,
              onPress: () => navigation.navigate('AboutUs'),
            },
            {
              label: 'Founder Message',
              icon: <FounderGreenSVG />,
              onPress: () => navigation.navigate('FounderMsg'),
            },
            {
              label: 'Hijri Dates Adjustment',
              icon: <HijriGreenSVG />,
              onPress: () => navigation.navigate('HijriDates'),
            },
            {
              label: 'Share Wasil App',
              icon: <ShareGreenSVG />,
              onPress: async () => {
                const options = {
                  message:
                    'Wasil Islamic App | www.wasil.io\n\nhttps://play.google.com/store/apps/details?id=com.wasilislamicapp',
                };
                try {
                  await Share.open(options);
                } catch (e) {
                  console.log(e);
                }
              },
            },
            {
              label: 'Follow Us',
              icon: <FollowUsGreenSVG />,
              onPress: _toggleModal,
            },
            {
              label: 'Rate & Feedback',
              icon: <RateGreenSVG />,
              onPress: () => navigation.navigate('RateFeedback'),
            },
            {
              label: 'Contact Us',
              icon: <ContactGreenSVG />,
              onPress: () => navigation.navigate('ContactUs'),
            },
            {
              label: "FAQ's",
              icon: <FAQsGreenSVG />,
              onPress: () => navigation.navigate('FAQs'),
            },
            {
              label: 'Privacy Policy',
              icon: <PolicyGreenSVG />,
              onPress: () => navigation.navigate('Privacypolicy'),
            },
          ].map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={item.onPress}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    height: 45,
                    borderRadius: 8,
                  }}
                >
                  <View style={{ paddingLeft: 10 }}>{item.icon}</View>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 15,
                      top:Platform.OS === 'ios' ? 0 : 1.5,
                      color: Colors.text,
                      fontFamily: 'Poppins-Light',
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: Colors.bordercolor,
                  height: 0.7,
                  marginHorizontal: 25,
                }}
              />
            </View>
          ))}
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: Colors.secondaryText,
              marginTop:50,
              fontFamily: 'Poppins-Light',
            }}
          >
            App Version 2.0
          </Text>
        </ScrollView>

        <Modal isVisible={showmemodal} animationType={'none'}>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: 'white',
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={closetoggleModal}
              style={{ position: 'absolute', right: 10, top: 10, zIndex: 1 }}
            >
              <ClosePlayDrawerSVG />
            </TouchableOpacity>

            <View
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: Colors.primary,
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.white,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins-Light',
                }}
              >
                Follow Us
              </Text>
            </View>

            {[
              {
                icon: <FacebookFollowUpSVG />,
                url: 'https://www.facebook.com/wasilislamic',
              },
              {
                icon: <YoutubeFollowUpSVG />,
                url: 'https://www.youtube.com/@WasilIslamicChannel',
              },
              {
                icon: <TiktokFollowUpSVG />,
                url: 'https://www.tiktok.com/@WasilIslamic',
              },
              {
                icon: <InstagramFollowUpSVG />,
                url: 'https://instagram.com/wasilislamic',
              },
            ].map((link, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => Linking.openURL(link.url)}
                style={{
                  top:10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                {link.icon}
                <Text
                  style={{
                    fontSize: 13,
                    color: Colors.secondary,
                    marginLeft: 10,
                  }}
                >
                  {link.url}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  const { Colors, theme } = useTheme();

  return theme === "blue" ? (
  <Drawer.Navigator
    screenOptions={{
      headerTintColor: Colors.white,
      headerStyle: { backgroundColor: Colors.cardDark },
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
        fontSize: 18,
      },
      drawerStyle: { backgroundColor: Colors.white },
      headerRight: () => (
        <View style={{ marginRight: 15 }}>
          <WasilNoAdsSvg />
        </View>
      ),
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Wasil Islamic App"
      component={HomeNewBlue}
    />
  </Drawer.Navigator>
) : theme === "green" ? (
  <Drawer.Navigator
    screenOptions={{
      headerTintColor: Colors.white,
      headerStyle: { backgroundColor: Colors.primary },
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
        fontSize: 18,
      },
      drawerStyle: { backgroundColor: Colors.white },
      headerRight: () => (
        <View style={{ marginRight: 15 }}>
          <WasilNoAdsGreenSvg />
        </View>
      ),
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Wasil Islamic App"
      component={HomeNewGreen}
    />
  </Drawer.Navigator>
) : (
  <Drawer.Navigator
    screenOptions={{
      headerTintColor: Colors.black,
      headerStyle: { backgroundColor: Colors.white },
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Colors.black,
        fontFamily: Platform.OS === "ios" ? "Asul-Bold" : "AsulBold",
        fontSize: 18,
      },
      drawerStyle: { backgroundColor: Colors.white },
      headerRight: () => (
        <View style={{ marginRight: 15 }}>
          <WasilNoAdssSvg />
        </View>
      ),
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Wasil Islamic App"
      component={HomeNewWhite}
    />
  </Drawer.Navigator>
);
}

export default function GuestDrawer() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return <MyDrawer />;
}
