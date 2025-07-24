import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LogBox } from 'react-native';
import { Colors} from '../../theme';
// store
import useStorehadith from '../../hadithstore';
import Share from 'react-native-share';
import { DuaHeartUnfillSVG,DuaShareSVG,HeartfilledSVG } from '../../assets/icons';
LogBox.ignoreAllLogs();

const HadithCard = ({ index,hadith, favouriteshadith }) => {
  const { addhadith, deletehadith } = useStorehadith();
  const isFavourited = favouriteshadith.findIndex(({ id }) => id == hadith.id) != -1;

  return (
    <View style={{flex:1,width:"100%",marginTop:25}}>

    <View style={{flexDirection:"row",flex:1,width:"95%",alignSelf:"center"}}>
     <View style={{flex:3}}>
      <Text style={{left:25,top:2,color:Colors.primary,fontSize:20,fontWeight:"500",fontFamily:"Raleway"}}>
        Hadith no : {index+1}
      </Text>
     </View>

    <View style={{flex:1,height:30,backgroundColor:Colors.transparent,right:5}}>
      <View style={{flex:1,backgroundColor:Colors.primary,borderRadius:20,}}>
      <Text style={{color:Colors.white,top:3,alignSelf:"center",fontSize:15,textTransform:"capitalize",fontWeight:"500",fontFamily:"Raleway"}}>
              {hadith.status}
           </Text>
      </View>
    </View>
    <View style={{flex:1,top:6,flexDirection:"row"}}>
    <TouchableOpacity onPress={async () => {
            if (!isFavourited) {
              addhadith(hadith);
            } else {
              deletehadith(hadith);
            }
          }}>
          {isFavourited ? <HeartfilledSVG/> : <DuaHeartUnfillSVG/>}
     
   </TouchableOpacity>
    <View style={{left:8}}>
    <TouchableOpacity
        onPress={async () => {
              let options = {
                message:"Hadith"+"\n\n"+hadith.hadithEnglish+"\n\n"+"Hadith Book"+"\n\n"+hadith.bookSlug+"\n\n"+"Wasil Islamic App | www.wasil.io"
              };
              Share.open(options)
              .then(r => {
              console.log(r);
              })
              .catch(e => {
              console.log(e);
              });}}>
    <DuaShareSVG/>
    </TouchableOpacity>
    </View>
    </View>

    </View>

    <View style={styles.cardfirst}>
         <View style={{height:10}}/>
       <View style={{width:"90%",alignSelf:"center"}}> 
        <View style={{height:10}}/>
        <View style={{width:"95%",alignSelf:"center"}}>
           <Text style={{color:Colors.secondary,fontSize:15,fontFamily:"PoppinsLight"}}>
              {hadith.hadithEnglish}
           </Text>
        </View>
        <View style={{height:20}}/>
        <View style={{borderStyle: "dashed",borderWidth: 0.3,height:0.5,width:"95%",alignSelf:"center",border: 15,}}>
         
        </View>
        <View style={{height:20}}/>

        <View style={{width:"95%",alignSelf:"center"}}>
           <Text style={{color:Colors.primary,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
           Reference: {hadith.bookSlug}
           </Text>
           <Text style={{color:Colors.primary,fontSize:12,textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
           Narrator: {hadith.englishNarrator}
           </Text>
           <View style={{flexDirection:"row"}}>
           <Text style={{color:Colors.primary,fontSize:12,fontWeight:"heavy",textTransform:"capitalize",fontFamily:"PoppinsLight"}}>
           Writer Name:
           </Text>
           <Text style={{color:Colors.primary,fontSize:11,top:0.5,textTransform:"capitalize",fontFamily:"headerfont"}}>
           {" "}{hadith.book.writerName.length>= 25 ? hadith.book.writerName.slice(0, 28)+"..." : hadith.book.writerName}
           </Text>
           </View>
        </View>
        </View>
        <View style={{height:10}}>
          
        </View>
    </View>
    
</View>
  );
};

export default HadithCard;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.transparent,
    width:"100%"
  }, 
  cardfirst: {  
    flexDirection:"column",
    alignSelf:"center",
    flex:1,
    marginTop:10,
    borderRadius:7,
    borderWidth:0.7,
    borderColor:Colors.bordercolor,
    width:"85%",
    backgroundColor: 'white',  
    borderRadius: 8,  
    elevation:5,
    shadowColor: Colors.secondary,
    overflow: 'hidden',
    marginBottom: 10,
  }
});
