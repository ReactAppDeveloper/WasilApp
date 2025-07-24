import React,{ useState, useEffect }  from 'react';
import {  StatusBar, StyleSheet,View,Text,LogBox,FlatList} from 'react-native';
import { Colors} from '../../theme';
import useStorehadith from '../../hadithstore';
import HadithCard from './HadithCard';
import {FavouriteEmptySVG} from '../../assets/icons';
LogBox.ignoreAllLogs();
const HadithsFavourites = () => { 
  const { favouriteshadith } = useStorehadith();
  console.log('favouriteshadith', favouriteshadith);

  return (
    <View style={styles.containerMain}>
    <StatusBar backgroundColor={Colors.primary}/>
        
    <View>
    {favouriteshadith.length > 0 ? (
        <FlatList
          data={favouriteshadith}
          renderItem={({ item,index }) => <HadithCard hadith={item} favouriteshadith={favouriteshadith} index={index} />}
          onEndReachedThreshold={0.7}
        />
      ) : (
        <View style={{height:"100%",alignItems:"center",justifyContent:"center"}}>
          <View >
        <FavouriteEmptySVG/>
        </View>
        <Text style={{top:20,fontSize:12,color:Colors.secondary,fontWeight:"500",textAlign:"center",fontFamily:"Cairo-Regular"}}>
           No Favorites yet!
        </Text>
      
</View>
      )}
                  </View>
    </View>
  );
};

export default HadithsFavourites;

const styles = StyleSheet.create({

  containerMain: {
    height:"100%",
    backgroundColor:Colors.transparent,
  }, 
});
