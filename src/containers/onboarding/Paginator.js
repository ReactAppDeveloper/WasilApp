import React, { useEffect ,useRef, useState} from 'react';
import { View, StyleSheet, Animated,useWindowDimensions, Text } from 'react-native';
export const Paginator = ({data,scrollx}) => {
 const {width,height} = useWindowDimensions();

  return (
    <View style={{
      bottom:height*0.10,
      alignSelf:"center",
      flexDirection: 'row',}}>
        {data.map((_,i)=>{
            const inputRange = [(i-1)*width, i*width, (i+1)*width];
            const dotWidth =scrollx.interpolate({
                inputRange,
                outputRange:[10,20,10],
                extrapolate:'clamp'
            })
            const dotColor = scrollx.interpolate({
              inputRange,
              outputRange: ['#BDBDBD', '#7164FA', '#BDBDBD'], // Change colors as needed
              extrapolate: 'clamp',
          });
            return<Animated.View style={[styles.dot,{width:dotWidth,backgroundColor: dotColor,}]} key={i.toString()}/>
        })}
    </View>

  );
};

const styles = StyleSheet.create({
  dot:{
    height:10,
    borderRadius:15,
    marginHorizontal:2.5
  }
});

export default Paginator;
