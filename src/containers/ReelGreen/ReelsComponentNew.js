import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShortsNew from './ShortsNew';
import { Colors } from '../../theme';

const ReelsComponentNew = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch('https://islamicapp.vercel.app/api/reels');
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError('Failed to load reels.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReels();
  }, []);

  if (loading) return <View style={styles.centered}><ActivityIndicator size="large" color="#170026" /></View>;
  if (error) return <View style={styles.centered}><Text>{error}</Text></View>;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <ShortsNew items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.wasilgreenthemecolor },
  backButton: { position: 'absolute', top: Platform.OS === 'android' ? 15 : 50, left: 15, zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12 },
  backText: { color: '#fff', fontSize: 22, fontWeight: '600' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ReelsComponentNew;
