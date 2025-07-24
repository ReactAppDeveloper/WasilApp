import React,{ useState, useEffect }  from 'react';
import {StatusBar, StyleSheet,View,Text,ScrollView,LogBox,ActivityIndicator,TouchableOpacity} from 'react-native';
import {Colors} from '../../theme';
import Share from 'react-native-share';
import { DuaHeartUnfillSVG,DuaShareSVG,HeartfilledSVG } from '../../assets/icons';
LogBox.ignoreAllLogs();

const RamadanAllDua = ({ route }) => { 
    const greetingsdata = 
    [
      {
       "id": "1",
        "duaarabic": "رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِين",
        "duaenglish": "“O! My Lord forgives and has Mercy, and You are the Best of Merciful.”",
      },
      {
        "id": "2",
        "duaarabic": "اَسْتَغْفِرُ اللہَ رَبِّی مِنْ کُلِّ زَنْبٍ وَّ اَتُوْبُ اِلَیْہِ",
        "duaenglish": "“I seek forgiveness from Allah for all my sins and turn to Him.”",
      },
      {
        "id": "3",
        "duaarabic": "اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
        "duaenglish": "“O Allah, save me from the fire (Jahannam).”",
      },
      {
        "id": "4",
        "duaarabic": "سُبْحَانَ ذِی الْمُلْکِ وَالْمَلَکُوْتِ ط سُبْحَانَ ذِی الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْکِبْرِيَآئِ وَالْجَبَرُوْتِ ط سُبْحَانَ الْمَلِکِ الْحَيِ الَّذِی لَا يَنَامُ وَلَا يَمُوْتُ سُبُّوحٌ قُدُّوْسٌ رَبُّنَا وَرَبُّ الْمَلَائِکَةِ وَالرُّوْحِ ط اَللّٰهُمَّ اَجِرْنَا مِنَ النَّارِ يَا مُجِيْرُ يَا مُجِيْرُ يَا مُجِيْر ",
        "duaenglish": "“Glory be to the Possessor of the Kingdom and the Dominion, Glory be to the Possessor of Might, Majesty, Awe, and Power, and to the Possessor of Greatness and Omnipotence. Glory be to the Living King who never sleeps or dies, the Holy and Pure, Lord of the angels and the spirit. O Allah, save us from the fire. O protector, O protector, O protector.” ",
      }
    ]
    const [isLoading,setisLoading] = useState(false);
    const [error,seterror] = useState(null);
    
  
    if(isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={"large"} color={Colors.primary}>
  
        </ActivityIndicator>
        </View>
      );
    }
    if(error){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
        Error in Fetching Data..... Please Check Your Internet Connection.
        </Text>
        </View>
      );
    }
   
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
       <View style={{flexDirection:"column"}}>
                <ScrollView>
                 {greetingsdata.map((item, index) => (
              <View style={{flex:1,width:"100%",marginTop:25}}>

              <View style={{flexDirection:"row",flex:1,width:"95%",alignSelf:"center"}}>
               <View style={{flex:3}}>
                <Text style={{left:15,top:2,color:Colors.primary,fontSize:20,fontWeight:"500",fontFamily:"Raleway"}}>
                  Dua no : {index+1}
                </Text>
               </View>
          
              <View style={{flex:1,top:6,flexDirection:"row"}}>
              <View style={{left:65}}>
              <TouchableOpacity
                  onPress={async () => {
                        let options = {
                          message:"Dua"+"\n\n"+item.duaenglish+"\n\n"+"Wasil Islamic App | www.wasil.io"
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
                  <View style={{height:5}}/>
                  <View style={{width:"95%",alignSelf:"center"}}>
                     <Text style={{color:Colors.primary,textAlign:"center",fontSize:25,fontFamily:"Poppins-Medium",fontFamily:"AlQalamQuran"}}>
                        {item.duaarabic}
                     </Text>
                  </View>
                  <View style={{height:10}}/>
                  <View style={{width:"95%",alignSelf:"center"}}>
                     <Text style={{color:Colors.secondary,textAlign:"center",fontSize:16,fontFamily:"Poppins-Light"}}>
                        {item.duaenglish}
                     </Text>
                  </View>
                  </View>
                  <View style={{height:20}}>
                  </View>
              </View>
              
          </View>
            ))}
                <View style={{height:30}}></View>
                </ScrollView>           
           </View>
    </View>
  );
};

export default RamadanAllDua;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.transparent
  },
  cardfirst: {  
    flexDirection:"column",
    alignSelf:"center",
    flex:1,
    marginTop:10,
    borderRadius:7,
    borderWidth:0.7,
    borderColor:Colors.bordercolor,
    width:"90%",
    backgroundColor: 'white',  
    borderRadius: 8,  
    elevation:5,
    shadowColor: Colors.secondary,
    overflow: 'hidden',
    marginBottom: 10,
  }
});