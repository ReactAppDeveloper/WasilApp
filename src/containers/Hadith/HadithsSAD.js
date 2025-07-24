import React,{ useState, useEffect }  from 'react';
import { StatusBar,StyleSheet,View,Text,TouchableOpacity ,FlatList,LogBox,ActivityIndicator,TextInput,ScrollView} from 'react-native';
import {Colors} from '../../theme';
import axios from "axios";
import {DuaForwardSVG,DuaListNumberSVG,SearchSVG} from '../../assets/icons';
LogBox.ignoreAllLogs();


const HadithsSAD = ({ navigation }) => { 
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [hadithSADdata, sethadithSADdata] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error,seterror] = useState(null);
  const [noMatch, setNoMatch] = useState(false);
  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.hadithapi.com/api/abu-dawood/chapters?apiKey=$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli"
        )
        console.log("received response")
        const data = response.data
        sethadithSADdata(data.chapters);
        setMasterDataSource(data.chapters);
      } catch (e) {
        console.log(e)
      }
      setisLoading(false);
    }

    fetchData()
  }, [])
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
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.chapterEnglish
            ? item.chapterEnglish.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      sethadithSADdata(newData);
      setSearch(text);
      setNoMatch(newData.length === 0); 
    } else {
        sethadithSADdata(masterDataSource);
      setSearch(text);
      setNoMatch(false); 
    }
  };

  return (
    <View style={styles.containerMain}>
    <StatusBar backgroundColor={Colors.primary}/>
    <View style={{flexDirection:"row",width:"100%",height:50,borderColor:Colors.white,backgroundColor:Colors.white, borderWidth: 1,alignSelf:"center"}}>
                 <View style={{flex:1,left:20}}>
                    <TextInput
                     style={{paddingLeft:1,top:3,fontSize:13,color:Colors.placeholdercolor}}
                     keyboardType={'default'}
                     placeholder="Search Hadith Chapter"
                     fontFamily={"Raleway"}
                     placeholderTextColor={Colors.placeholdercolor}
                     onChangeText={(text) => searchFilterFunction(text)}
                     value={search}>
                    </TextInput>
                  </View>
                  <View style={{flex:0.1,top:13,right:10}}>
                  <SearchSVG/>
                  </View>
                 </View>
                 {noMatch ?
          <Text style={{height:"100%",top:300,fontSize:15,alignSelf:"center",color:Colors.lightgreytasbih,fontFamily:"PoppinsLight"}}>No Match Found</Text>
:
         <View style={{top:5}}>
            <ScrollView>
               <View>
                   <View>
                   {hadithSADdata.map((item, index) => (
       <TouchableOpacity key={index} onPress={() => {
        navigation.navigate('HadithsDetail', {
          hadithchapternumber: item.chapterNumber,
          hadithchaptername: item.chapterEnglish,
          hadithbookname: item.bookSlug,
          name:item.chapterEnglish,
        });
      }}>
          <View key={item} style={styles.advImageContainer}>
            <View style={{backgroundColor:Colors.white,flex:0.5,alignItems:"center",justifyContent:"center",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                <View style={{height:30}}></View>
                <DuaListNumberSVG/>
                <View style={{height:3}}></View>
                <Text style={{bottom:41,textAlign:"center",fontWeight:"500",color:Colors.primary,fontSize:15,fontFamily:"Raleway"}}>{index+1}</Text>
            </View>
            <View style={{backgroundColor:Colors.white,flex:1.4}}>
              <View style={{flex:1}}>
              <Text numberOfLines={1} style={{alignSelf:"flex-start",top:21,color:Colors.primary,fontSize:14,fontWeight:"600",fontFamily:"Raleway"}}>{item.chapterEnglish}</Text>
              </View>
             
            </View>
            <View style={{backgroundColor:Colors.white,flex:0.3,alignItems:"center",justifyContent:"center",borderTopRightRadius:8,borderBottomRightRadius:8}}>
                <DuaForwardSVG/>
            </View>
          </View>
       </TouchableOpacity>
       
     ))}
                    </View>
                    <View style={{height:70}}></View>
                </View>
            </ScrollView>
         </View>

    }
    </View>
  );
};

export default HadithsSAD;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:Colors.transparent
  },
  advImageContainer: {
    width: "95%",
    height: 70,  
    flexDirection:'row',
    marginTop:10,
    borderRadius:8,
    borderWidth:1,
    borderColor:Colors.bordercolor,
    overflow:"hidden",
    alignSelf:"center",
  },
});
