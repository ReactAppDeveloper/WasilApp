import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import HadithBookCard from "./HadithBookCard";
import { fetchHadithBooks } from "./hadithApi";
import { BOOK_IMAGES } from "./HadithbookImages";
import { BOOK_DESCRIPTION } from "./HadithBookDescription";
import { Colors } from '../../theme';

const HadithBooksScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await fetchHadithBooks();
      setBooks(data);
    } catch (error) {
  console.log('Quran Error Message:', error?.message);
  console.log('Quran Error String:', String(error));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HadithBookCard
            title={item.bookName}
            name={item.bookName}
            hadithbookname={item.bookSlug}
            description={BOOK_DESCRIPTION[item.bookSlug]}
            image={BOOK_IMAGES[item.bookSlug]}
          />
        )}
      />
    </View>
  );
};

export default HadithBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.wasilgreenthemecolor
  },
});
