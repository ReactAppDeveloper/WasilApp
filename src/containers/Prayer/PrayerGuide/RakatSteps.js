import React, {useMemo, useState} from 'react';
import {View, Text, Image, ScrollView, Pressable, StyleSheet, Platform, LayoutAnimation, UIManager} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme, Images, Fonts, TypeScale, Spacing, Radius, MIN_TOUCH} from '../../../theme';
import {StepExpandedIcon, StepCollapsedIcon} from '../../../assets/icons/themed';
import {RAKATS} from './rakatData';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const pad = n => String(n).padStart(2, '0');

function Block({block, styles}) {
  if (block.arabic) {
    return <Text style={styles.arabic}>{block.arabic}</Text>;
  }
  if (block.transliteration) {
    return (
      <View>
        <Text style={styles.label}>Transliteration</Text>
        <Text style={styles.transliteration}>{block.transliteration}</Text>
      </View>
    );
  }
  if (block.note) {
    return (
      <View style={styles.note}>
        <Text style={styles.noteText}>
          <Text style={styles.noteLabel}>Note: </Text>
          {block.note}
        </Text>
      </View>
    );
  }
  return <Text style={styles.body}>{block.text}</Text>;
}

export function GuideStep({number, step, expanded, onToggle, styles}) {
  // A single instruction sits beside the illustration; longer recitations go below it.
  const simple = typeof step.image === 'function' || (step.blocks.length === 1 && step.blocks[0].text);
  return (
    <View style={styles.card}>
      <Pressable
        onPress={onToggle}
        style={styles.header}
        accessibilityRole="button"
        accessibilityState={{expanded}}
        accessibilityLabel={`Step ${number}, ${step.title}`}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{pad(number)}</Text>
        </View>
        <Text style={styles.title}>{step.title}</Text>
        {expanded ? <StepExpandedIcon /> : <StepCollapsedIcon />}
      </Pressable>
      {expanded ? (
        <View style={[styles.content, simple && styles.contentRow]}>
          {typeof step.image === 'function' ? (
            <View style={styles.artBox}>
              <step.image />
            </View>
          ) : step.image && Images[step.image] ? (
            <Image source={Images[step.image]} style={simple ? styles.imageSide : styles.imageTop} resizeMode="contain" />
          ) : null}
          <View style={[styles.blocks, simple && styles.blocksSide]}>
            {step.blocks.map((block, i) => (
              <Block key={i} block={block} styles={styles} />
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}

// Step-by-step guide for one rakat. `rakat` is a key of RAKATS, e.g. 'Fajr/Farz/FirstRakat'.
export default function RakatSteps({rakat}) {
  const {Colors} = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  const steps = RAKATS[rakat] || [];
  const [collapsed, setCollapsed] = useState({});

  const toggle = i => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(prev => ({...prev, [i]: !prev[i]}));
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.list, {paddingBottom: insets.bottom + Spacing.xxl}]}
      showsVerticalScrollIndicator={false}>
      {steps.map((step, i) => (
        <GuideStep key={i} number={i + 1} step={step} expanded={!collapsed[i]} onToggle={() => toggle(i)} styles={styles} />
      ))}
    </ScrollView>
  );
}

export const makeStyles = Colors =>
  StyleSheet.create({
    screen: {flex: 1, backgroundColor: Colors.background},
    list: {padding: Spacing.lg, gap: Spacing.md},
    card: {
      borderRadius: Radius.md,
      backgroundColor: Colors.stepCard,
      borderWidth: 1,
      borderColor: Colors.stepCardBorder,
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.md,
      minHeight: MIN_TOUCH + 12,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
    },
    badge: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: Colors.stepBadge,
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeText: {color: '#FFFFFF', fontSize: TypeScale.small, fontFamily: Fonts.bodyBold},
    title: {flex: 1, color: Colors.stepTitle, fontSize: TypeScale.subtitle - 1, fontFamily: Fonts.bodyBold},
    content: {paddingHorizontal: Spacing.md, paddingBottom: Spacing.lg, gap: Spacing.md},
    contentRow: {flexDirection: 'row', alignItems: 'center'},
    imageTop: {width: '100%', height: 150, borderRadius: Radius.sm},
    imageSide: {width: 96, height: 120, borderRadius: Radius.sm},
    artBox: {width: 110, height: 130, borderRadius: Radius.sm, overflow: 'hidden', alignSelf: 'flex-start'},
    blocks: {gap: Spacing.md},
    blocksSide: {flex: 1},
    body: {color: Colors.stepText, fontSize: TypeScale.body, lineHeight: 21, fontFamily: Fonts.body},
    arabic: {
      color: Colors.stepText,
      fontSize: 24,
      lineHeight: 44,
      textAlign: 'right',
      writingDirection: 'rtl',
      fontFamily: Fonts.arabic,
    },
    label: {
      color: Colors.stepLabel,
      fontSize: TypeScale.caption,
      letterSpacing: 0.8,
      textTransform: 'uppercase',
      fontFamily: Fonts.bodyBold,
      marginBottom: 2,
    },
    transliteration: {color: Colors.stepText, fontSize: TypeScale.body, lineHeight: 21, fontStyle: 'italic', fontFamily: Fonts.body},
    note: {borderRadius: Radius.sm, padding: Spacing.md, backgroundColor: 'rgba(0,0,0,0.12)'},
    noteText: {color: Colors.stepText, fontSize: TypeScale.small + 1, lineHeight: 19, fontFamily: Fonts.body},
    noteLabel: {fontFamily: Fonts.bodyBold},
  });
