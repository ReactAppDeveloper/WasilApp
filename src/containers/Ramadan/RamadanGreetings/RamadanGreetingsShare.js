import React from 'react';
import {StatusBar, StyleSheet,View,Image,TouchableOpacity,Text,LogBox,ScrollView,FlatList} from 'react-native';
import {Colors} from '../../../theme';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Share from 'react-native-share';
LogBox.ignoreAllLogs();

const greetingsdata = 
[
  {
   "_id": "6685709a4e40d0181d44013c",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851066/greetingcards/ramadan/ramadanfirst.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:24.434Z",
    "updatedAt": "2023-03-22T12:37:24.434Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d44013d",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851071/greetingcards/ramadan/ramadansecond.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:38:00.005Z",
    "updatedAt": "2023-03-22T12:38:00.005Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d44013e",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851061/greetingcards/ramadan/ramadanthird.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:38:24.157Z",
    "updatedAt": "2023-03-22T12:38:24.157Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d44013f",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851056/greetingcards/ramadan/ramadanfourth.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:38:25.951Z",
    "updatedAt": "2023-03-22T12:38:25.951Z",
    "__v": 0
  },
  {
    "_id": "6685709a4e40d0181d440140",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851052/greetingcards/ramadan/ramadanfifth.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d440141",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851047/greetingcards/ramadan/ramadansixth.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d440142",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851043/greetingcards/ramadan/ramadanseven.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d440143",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851039/greetingcards/ramadan/ramadaneight.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
  },
  {
   "_id": "6685709a4e40d0181d440144",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851034/greetingcards/ramadan/ramadannine.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
  },
  {
    "_id": "6685709a4e40d0181d440145",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851031/greetingcards/ramadan/ramadanten.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
   },
   {
     "_id": "6685709a4e40d0181d440146",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851027/greetingcards/ramadan/ramadaneleven.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
    },
    {
     "_id": "6685709a4e40d0181d440147",
    "path": "https://res.cloudinary.com/daof5pne5/image/upload/v1719851024/greetingcards/ramadan/ramadantwelve.png",
    "categoryId": "65b8b00f867f6277874b5c2b",
    "createdAt": "2023-03-22T12:37:23.805Z",
    "updatedAt": "2023-03-22T12:37:23.805Z",
    "__v": 0
     }
]
const RamadanGreetingsShare = ({ route,navigation}) => { 
  const {cardimage,catname} = route.params;
  
  const shareImage = () => {
    ReactNativeBlobUtil.fetch(
      'GET',
       cardimage,)
      .then(res => {
        let status = res.info().status;
        if (status === 200) {
          let base64Str = res.base64();
          let options = {
            message:catname,
            url: `data:image/jpeg;base64,${base64Str}`,
          }; 
          Share.open(options)
            .then(r => {
              console.log(r);
            })
            .catch(e => {
              console.log(r);
            });
        } else {
          console.log(r);
        }
      })
      .catch(err => {
        console.log(r);
      });
  };

  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.primary}/>
         <ScrollView 
         style={styles.maincontainer}>
         <View style={{alignSelf:"center",top:10}}>
            <View>
            <Image style={styles.advImage} source={{uri:cardimage}}/>
            </View>
         </View>
        
        
         <View style={styles.extralayer}>
             <TouchableOpacity style={styles.submit} onPress={shareImage}>
                <Text style={styles.submitText}>Send eCard</Text>  
             </TouchableOpacity>
         </View>
      

        <View style={{left:10}}>
          <View style={styles.advTextRow}>
            <Text style={styles.advTextFontStyle}>More Ramadan Greetings</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            style={{marginRight:15}}
            showsHorizontalScrollIndicator={false}
            data={greetingsdata}
            renderItem={({ item,index}) => (
              <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('RamadanGreetingsShare', {
                  cardimage: item.path,
                  catname: "Ramadan Greetings",
                });
              }}>
              <View key={item} style={{top:5}}>
              <Image style={styles.advImage1} source={{uri:item.path}}/>
              <View style={{height:10}}></View>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{height:10}}></View>
        </ScrollView>
    </View>
  );
};

export default RamadanGreetingsShare;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  containerMain: {
    flex: 1,
    backgroundColor:Colors.white,
  },
  advImage: {
    height:500,
    width:400,
    borderRadius:7,
    resizeMode:"stretch"
  },
  submit: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    height:45,
    width:200,
    alignSelf:"center",
    top:20
  },
  submitText: {
    fontSize:15,
    top:9,
    color: Colors.white,
    fontFamily:"Raleway",
    alignSelf:'center',
    fontWeight:"400"
  },
  advTextRow: {
    height: 35,
    width: "80%",
    flexDirection: "row",
  },
  advTextFontStyle: {
    fontSize: 18,
    top:7,
    color: Colors.secondary,
    fontWeight:"600",
    fontFamily: "heading",
  },
  advImage1: {
    width: 140,
    height: 150,
    resizeMode:"contain",
    borderRadius:15,
  },
  extralayer: {
    marginTop:10,
    width:400,
    height:80,
    alignSelf:"center",
    marginBottom:10,
    backgroundColor:Colors.transparent,
    top:-4,
    zIndex:-1,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    elevation:3,
    shadowColor: Colors.bordercolor,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity:  0.5,
    shadowRadius: 0.5,
  },
});
