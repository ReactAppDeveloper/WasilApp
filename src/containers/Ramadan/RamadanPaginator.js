import React from 'react';
import {View,StyleSheet,Animated,useWindowDimensions} from 'react-native';

export const HomePaginator = ({data,scrollx}) => {
const {width,height} = useWindowDimensions();

  return (
    <View style={{
      bottom:12,
      alignSelf:"center",
      flexDirection: 'row',}}>
        {data.map((_,i)=>{
            const inputRange = [(i-1)*width, i*width, (i+1)*width];
            const dotWidth =scrollx.interpolate({
                inputRange,
                outputRange:[8,20,8],
                extrapolate:'clamp'
            })
            return<Animated.View style={[styles.dot,{width:dotWidth}]} key={i.toString()}/>
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot:{
    height:5,
    borderRadius:10,
    backgroundColor:"#FFF",
    marginHorizontal:2
  }
});

export default HomePaginator;
