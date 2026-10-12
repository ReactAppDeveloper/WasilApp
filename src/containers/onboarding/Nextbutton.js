import React, { useEffect ,useRef} from 'react';
import { View, StyleSheet, Animated,TouchableOpacity ,Dimensions} from 'react-native';
import Svg, {G, Circle} from "react-native-svg";
import {OnboardingForward} from '../../assets/icons';
const { height } = Dimensions.get('window');
export const Nextbutton = ({percentage,scrollTo}) => {
    const size = 48;
    const strokeWidth = 1.5;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);
    const animation = (toValue)=>{
      return Animated.timing(progressAnimation,{
        toValue,
        duration:250,
        useNativeDriver:true
      }).start()
    }
    useEffect(() => {
      animation(percentage);
    },[percentage]);
    useEffect(() => {
      progressAnimation.addListener((value) => {
        const strokeDashoffset = circumference - (circumference * value.value)/100;
        if(progressRef?.current){

          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
      },[percentage]
    );
    return()=>{
      progressAnimation.removeAllListeners()
    }
    },[]);

  return (
    <View style={styles.container}>
       <Svg width={size} height={size} fill={"#6B61F6"}>
        <G rotation={-90} origin={center}>
        <Circle stroke="#FAFAFA"cx={center} cy={center} r={radius} strokeWidth={strokeWidth}/>
        <Circle ref={progressRef}stroke="#432889" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference}
        />
        </G>
       </Svg>
       <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
         <OnboardingForward/>    
       </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-end",
    right:20,
    position: 'absolute',
    bottom: height * 0.030,
  },
  button:{
    position:"absolute",
    borderRadius:100,
    padding:20
  }
});

export default Nextbutton;
