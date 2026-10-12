import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from "react-native";
import RenderHTML from "react-native-render-html";

const { width, height } = Dimensions.get("window");

const ReadStoryDetail = ({ route }) => {
  const { story } = route.params || {};
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    if (!story?.longdescription) {
      setPages(["<p>No story content available.</p>"]);
      setLoading(false);
      return;
    }

    try {
  const cleanHTML = story.longdescription
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gi, "")
    .trim();

  const paragraphs = cleanHTML
    .split(/<\/p\s*>/i)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => (p.endsWith("</p>") ? p : p + "</p>"));

  const charsPerPage = 1700;
  const generatedPages = [];
  let currentPage = "";

  paragraphs.forEach((para) => {
    const visibleLength = para.replace(/<\/?[^>]+(>|$)/g, "").length;

    if (currentPage.replace(/<\/?[^>]+(>|$)/g, "").length + visibleLength < charsPerPage) {
      currentPage += para;
    } else {
      if (visibleLength > charsPerPage) {
        let tempText = para.replace(/<\/?[^>]+(>|$)/g, "");
        let start = 0;
        while (start < tempText.length) {
          let end = start + charsPerPage;
          if (end < tempText.length) {
            const lastSpace = tempText.lastIndexOf(" ", end);
            const lastPunct = tempText.lastIndexOf(".", end);
            const safeEnd = Math.max(lastSpace, lastPunct);
            if (safeEnd > start + 500) end = safeEnd + 1;
          }
          const slice = tempText.slice(start, end).trim();
          generatedPages.push(`<p>${slice}</p>`);
          start = end;
        }
      } else {
        generatedPages.push(currentPage);
        currentPage = para;
      }
    }
  });

  if (currentPage) generatedPages.push(currentPage);
  setPages(generatedPages.length ? generatedPages : ["<p>No content</p>"]);
} catch (err) {
  console.log("⚠️ Error splitting pages:", err);
  setPages(["<p>Error loading story.</p>"]);
} finally {
  setLoading(false);
}
  }, [story]);

  useEffect(() => {
    const id = scrollX.addListener(({ value }) => {
      const pageIndex = Math.round(value / width);
      setCurrentPage(pageIndex);
    });
    return () => scrollX.removeListener(id);
  }, [scrollX]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#6C28FF" />
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: "clamp",
    });

    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [50, 0, -50],
      extrapolate: "clamp",
    });

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.96, 1, 0.96],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={[styles.pageWrapper, { width }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated.View
            style={[
              styles.pageContainer,
              { opacity, transform: [{ translateX }, { scale }] },
            ]}
          >
            <RenderHTML
              contentWidth={width - 50}
              source={{ html: item }}
              baseStyle={styles.pageText}
              tagsStyles={{
              h1: styles.h1,
              h2: styles.h2,
              p: styles.p,
              em: styles.em,
              strong: styles.strong,
              blockquote: styles.blockquote,
              li: styles.li,
              ul: styles.ul,
  }}
            />
          </Animated.View>
        </ScrollView>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={pages}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        initialNumToRender={1}
        windowSize={2}
      />

      <View style={styles.footer}>
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressIndicator,
              {
                width: `${((currentPage + 1) / Math.max(1, pages.length)) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={styles.footerText}>
          Page <Text style={styles.currentPage}>{currentPage + 1}</Text> /{" "}
          {pages.length}
        </Text>
      </View>
    </View>
  );
};

export default ReadStoryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9FF",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageWrapper: {
    flex: 1,
  },
  pageContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 14,
    marginVertical: 24,
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    minHeight: height * 0.8,
  },
  pageText: {
    fontSize: 18,
    lineHeight: 30,
    color: "#2C2C2C", 
    textAlign: "justify",
    fontFamily: "NunitoSansRegular",
  },
  footer: {
    backgroundColor: "#FBF9FF",
    paddingVertical: 12,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    marginTop: 8,
  },
  currentPage: {
    color: "#6C28FF",
    fontWeight: "700",
  },
  progressBar: {
    width: width * 0.64,
    height: 6,
    backgroundColor: "#EADFFF",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressIndicator: {
    height: 6,
    backgroundColor: "#6C28FF",
    borderRadius: 4,
  },
  h1: {
  fontSize: 26,
  fontWeight: "800",
  color: "#1A1A1A",
  marginBottom: 12,
  textAlign: "left",
},

h2: {
  fontSize: 22,
  fontWeight: "700",
  color: "#2C2C2C",
  marginTop: 18,
  marginBottom: 10,
},

p: {
  fontSize: 18,
  lineHeight: 30,
  color: "#3A3A3A",
  marginBottom: 12,
},

em: {
  fontStyle: "italic",
  color: "#6C28FF",
  fontWeight: "600",
  textDecorationLine: "underline", // helps verify it's applied
},
strong: {
  fontWeight: "800",
  color: "#000",
},

blockquote: {
  borderLeftWidth: 4,
  borderLeftColor: "#6C28FF",
  paddingLeft: 12,
  marginVertical: 12,
  backgroundColor: "#F5F0FF",
},

ul: {
  marginVertical: 10,
  paddingLeft: 18,
},

li: {
  fontSize: 17,
  lineHeight: 28,
  color: "#444",
  marginBottom: 6,
},
});
