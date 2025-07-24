import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import Shorts from './Shorts';

const ReelsComponent = () => {
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

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#00b894" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Shorts items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReelsComponent;
