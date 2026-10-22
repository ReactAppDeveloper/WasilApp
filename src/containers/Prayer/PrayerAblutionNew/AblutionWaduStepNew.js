import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar, StyleSheet, Animated} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme, Fonts, TypeScale, Spacing, Radius, MIN_TOUCH} from '../../../theme';
import {
  ImageStepOneSVG,
  ImageStepTwoSVG,
  ImageStepThreeSVG,
  ImageStepFourSVG,
  ImageStepFiveSVG,
  ImageStepSixSVG,
  ImageStepSevenSVG,
  ImageStepEightSVG,
} from '../../../assets/icons';
import {VideoPlayIcon} from '../../../assets/icons/themed';
import {GuideStep, makeStyles as makeStepStyles} from '../PrayerGuide/RakatSteps';

const VIDEO_ID = '2xS70Zn-jRk';
const REPEAT = {text: 'Repeat this process three times.'};

const WUDU_STEPS = [
  {
    title: 'Make your intention to perform wudhu',
    image: ImageStepOneSVG,
    blocks: [
      {text: 'Begin wudhu by saying:'},
      {arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ'},
      {transliteration: 'Bismillahir Rahmanir Raheem.'},
    ],
  },
  {
    title: 'Wash both hands up to the wrists',
    image: ImageStepTwoSVG,
    blocks: [
      {
        text: 'Begin by cleaning your hands thoroughly, starting from the fingertips and moving towards the wrists, ensuring they are free from any dirt. Start with your right hand, washing it from the fingertips to the wrist three times. Ensure that water reaches every part of the hand. Then, repeat the same process with your left hand.',
      },
    ],
  },
  {
    title: 'Rinse your mouth',
    image: ImageStepThreeSVG,
    blocks: [
      {text: 'Take some water into your right hand and rinse your mouth three times. Do this thoroughly to clean your mouth properly.'},
      REPEAT,
    ],
  },
  {
    title: 'Rinse your nose',
    image: ImageStepFourSVG,
    blocks: [
      {
        text: 'Using your right hand, take some water and sniff it into your nose. This involves inhaling the water gently into your nostrils and then expelling it out. Be cautious not to inhale too much water to avoid discomfort.',
      },
      REPEAT,
    ],
  },
  {
    title: 'Wash your face from the hairline to the chin',
    image: ImageStepFiveSVG,
    blocks: [
      {
        text: 'Wash your entire face thoroughly, from the hairline to the chin, ensuring every part is cleansed. Cover from ear to ear and from the forehead to the chin. If you have a beard, ensure to run wet hands through it while washing your face.',
      },
      REPEAT,
    ],
  },
  {
    title: 'Wash both arms up to the elbows',
    image: ImageStepSixSVG,
    blocks: [
      {
        text: 'Begin by washing your right arm from the fingertips up to the elbow. Ensure thorough coverage, leaving no part dry. Then, repeat the same process for your left arm.',
      },
      REPEAT,
    ],
  },
  {
    title: 'Wipe your head and ears with wet hands',
    image: ImageStepSevenSVG,
    blocks: [
      {
        text: 'Wipe your head with wet hands, moving gently from your forehead to the back of your head, then from the back to the forehead. Afterward, gently wipe both the inside and outside of your ears with wet fingers.',
      },
    ],
  },
  {
    title: 'Wash both feet',
    image: ImageStepEightSVG,
    blocks: [
      {
        text: 'Start by washing your right foot, beginning from the toes and working up to and including the ankle. Ensure that water reaches every part of the right foot, including between the toes and the back of the ankle. Then, repeat the same process for your left foot.',
      },
    ],
  },
  {
    title: 'Recite the Shahadah',
    image: ImageStepOneSVG,
    blocks: [
      {arabic: 'أَشْهَدُ أَنْ لا إِلَـٰهَ إِلاَّ اللَّهُ وَحْدَهُ لا شَرِيكَ لَـهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ'},
      {transliteration: "Ashhadu alla ilaha illallah, wa ashhadu anna Muhammadan 'abduhu wa rasuluhu."},
    ],
  },
];

// Step-by-step wudhu guide with a floating button that plays the how-to video.
export default function AblutionWaduStepNew() {
  const {Colors} = useTheme();
  const insets = useSafeAreaInsets();
  const stepStyles = useMemo(() => makeStepStyles(Colors), [Colors]);
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  const [collapsed, setCollapsed] = useState({});
  const [videoOpen, setVideoOpen] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.spring(scale, {toValue: 1.12, useNativeDriver: true}),
        Animated.spring(scale, {toValue: 1, useNativeDriver: true}),
      ]),
    );
    pulse.start();
    return () => pulse.stop();
  }, [scale]);

  return (
    <View style={stepStyles.screen}>
      <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.headerBg} />
      <ScrollView
        contentContainerStyle={[stepStyles.list, {paddingBottom: insets.bottom + 96}]}
        showsVerticalScrollIndicator={false}>
        {WUDU_STEPS.map((step, i) => (
          <GuideStep
            key={step.title}
            number={i + 1}
            step={step}
            expanded={!collapsed[i]}
            onToggle={() => setCollapsed(prev => ({...prev, [i]: !prev[i]}))}
            styles={stepStyles}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.fab, {bottom: insets.bottom + Spacing.xl}]}
        onPress={() => setVideoOpen(true)}
        accessibilityRole="button"
        accessibilityLabel="Watch how to perform wudhu">
        <Animated.View style={{transform: [{scale}]}}>
          <VideoPlayIcon />
        </Animated.View>
      </TouchableOpacity>

      <Modal
        isVisible={videoOpen}
        onBackdropPress={() => setVideoOpen(false)}
        onBackButtonPress={() => setVideoOpen(false)}
        useNativeDriver>
        <View style={styles.videoCard}>
          <View style={styles.videoHeader}>
            <Text style={styles.videoTitle} accessibilityRole="header">
              How to perform wudhu
            </Text>
            <TouchableOpacity
              onPress={() => setVideoOpen(false)}
              style={styles.close}
              accessibilityRole="button"
              accessibilityLabel="Close video">
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>
          {videoOpen ? <YoutubePlayer height={200} play videoId={VIDEO_ID} /> : null}
        </View>
      </Modal>
    </View>
  );
}

const makeStyles = Colors =>
  StyleSheet.create({
    fab: {position: 'absolute', right: Spacing.lg},
    videoCard: {borderRadius: Radius.md, overflow: 'hidden', backgroundColor: Colors.background},
    videoHeader: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: Spacing.lg},
    videoTitle: {color: Colors.textPrimary, fontSize: TypeScale.subtitle, fontFamily: Fonts.bodyBold},
    close: {width: MIN_TOUCH, height: MIN_TOUCH, alignItems: 'center', justifyContent: 'center'},
    closeText: {color: Colors.textSecondary, fontSize: 18},
  });
