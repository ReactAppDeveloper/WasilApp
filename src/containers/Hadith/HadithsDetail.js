import React,{ useState, useEffect }  from 'react';
import {StatusBar, StyleSheet,View,Text,ScrollView,LogBox,ActivityIndicator} from 'react-native';
import {Colors} from '../../theme';
import axios from "axios";
import useStorehadith from '../../hadithstore';
import HadithCard from './HadithCard';
LogBox.ignoreAllLogs();

const HadithsDetail = ({ route }) => { 
    const { favouriteshadith } = useStorehadith();
    const {hadithchapternumber,hadithbookname} = route.params;
    const [hadithsdetaildata, sethadithsdetaildata] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,seterror] = useState(null);
    useEffect(() => {
      setisLoading(true);
      const fetchData = async () => 
      {
        try {
          const response = await axios.get(
            'https://www.hadithapi.com/public/api/hadiths?book='+hadithbookname+'&chapter='+hadithchapternumber+'&&paginate=50&apiKey=$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli')
          console.log("received response")
          const data = response.data.hadiths.data
          sethadithsdetaildata(data);
 
        } catch (e) {
          console.log("Error")
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
   
  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
       <View style={{flexDirection:"column"}}>
                <ScrollView>
                 {hadithsdetaildata.map((item, index) => (
              <HadithCard key={index} hadith={item} favouriteshadith={favouriteshadith} index={index}/>
            ))}
                <View style={{height:70}}></View>
                </ScrollView>           
           </View>
    </View>
  );
};

export default HadithsDetail;

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
    width:"85%",
    backgroundColor: 'white',  
    borderRadius: 8,  
    elevation:5,
    shadowColor: Colors.secondary,
    overflow: 'hidden',
    marginBottom: 10,
  }
});