import React, {useMemo} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {useTheme} from '../../../theme';

const headerImage = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/c_limit,q_auto,w_1200/v1720698320/prayertimes/nullifies.png',
};

const nullifiesList = [
  'Passing stool.',
  'Passing urine.',
  'Passing gas or any substance emitted from the front or back private parts invalidates the ablution.',
  'If blood or pus is discharged.',
  'Vomiting a mouthful.',
  'Sleeping.',
  'Becoming unconscious or intoxicated.',
  'Laughing loudly during Salah (prayer).',
  'Ejaculation or intercourse, which necessitates a complete ritual bath (ghusl) to regain ritual purity.',
];

const NullifiesNew = () => {
  const {Colors} = useTheme();
  const styles = useMemo(() => makeStyles(Colors), [Colors]);
  return (
    <View style={styles.container}>
    <StatusBar barStyle={Colors.statusBar} backgroundColor={Colors.headerBg}/>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerWrapper}>
            <Image source={headerImage} style={styles.headerImage} />
          </View>

        <View style={styles.contentWrapper}>
          <Text style={styles.title}>
            Factors that break the Wudhu (ablution) are as follows:
          </Text>

          {nullifiesList.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NullifiesNew;
const makeStyles = Colors =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headerWrapper: {
    height: 220,
    bottom:38
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode:"contain"
  },

  contentWrapper: {
    bottom:50,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom:20
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: Colors.textPrimary,
    marginBottom: 16,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.stepCardBorder,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.accent,
    marginTop: 6,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 22,
    color: Colors.textPrimary,
    fontFamily: 'Poppins-Regular',
  },
});

