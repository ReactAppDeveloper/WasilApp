import React, { memo, useCallback, useRef, useState } from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import ShortItemNew from './ShortItemNew';
import uuid from 'react-native-uuid';

const { height } = Dimensions.get('window');
const viewabilityConfig = { viewAreaCoveragePercentThreshold: 80 };

function ShortsNew({ items, onEndReached, onRefresh }) {
  const flatListRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [layout, setLayout] = useState({ height: 0, width: 0 });

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems?.length > 0) setVisibleIndex(viewableItems[0].index);
  });

  const scrollToNext = () => {
    if (visibleIndex < items.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: visibleIndex + 1,
        animated: true,
      });
    }
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <ShortItemNew
        index={index}
        url={item.url}
        paused={index !== visibleIndex}
        layout={layout.height ? layout : { height, width: '100%' }}
        playing={index === visibleIndex}
        visible={index === visibleIndex}
        onNext={scrollToNext}
      />
    ),
    [layout, visibleIndex]
  );

  return (
    <View style={styles.container} onLayout={(e) => setLayout(e.nativeEvent.layout)}>
      <FlatList
        ref={flatListRef}
        data={items}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id || uuid.v4().toString()}
        refreshing={false}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        decelerationRate="fast"
        renderItem={renderItem}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewabilityConfig}
        pagingEnabled
        windowSize={5}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        removeClippedSubviews
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
  },
});

export default memo(ShortsNew);
