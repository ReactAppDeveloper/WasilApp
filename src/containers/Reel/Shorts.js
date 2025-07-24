import {FlatList,StyleSheet,
  View,
} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';

import ShortItem from './ShortItem';
import uuid from 'react-native-uuid';

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 50,
};

function Shorts(props) {
  const flatListRef = useRef(null);
  const {items, onEndReached, onRefresh} = props;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems?.viewableItems?.length > 0) {
      const index = viewableItems?.viewableItems?.[0]?.index;
      setVisibleIndex(index);
    }
  });

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        setLayout(e.nativeEvent.layout);
      }}>
      <FlatList
        ref={flatListRef}
        data={items}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item?._id || uuid.v4().toString()}
        refreshing={false}
        onRefresh={() => onRefresh?.()}
        onEndReached={onEndReached}
        decelerationRate="fast"
        renderItem={useCallback(
          ({item, index}) => {
            return (
              <ShortItem
                index={index}
                url={item.url}
                paused={index !== visibleIndex}
                layout={layout}
                playing={index === visibleIndex}
                visible={index === visibleIndex}
              />
            );
          },
          [layout, visibleIndex],
        )}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignSelf: 'stretch'},
});

export default memo(Shorts);