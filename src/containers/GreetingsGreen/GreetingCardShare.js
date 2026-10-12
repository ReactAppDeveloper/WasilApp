import React from 'react';
import {StatusBar, StyleSheet,View,Image,TouchableOpacity,Text,LogBox,ScrollView,FlatList,Platform} from 'react-native';
import {Colors} from '../../theme';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Share from 'react-native-share';
LogBox.ignoreAllLogs();

const greetingsdata = 
[
  {
    "_id": "65b8b00f867f6277874b5c2c",
    "name": "Jumma Mubarak",
    "createdAt": "2023-03-15T21:42:34.083Z",
    "updatedAt": "2023-03-15T21:42:34.083Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420870/greetingcards/home/jummahome.png"
  },
  {
    "_id": "65d31eed8d4120c90ef07acb",
    "name": "Thank You",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420861/greetingcards/home/thankyouhome.png"
  },
  {
    "_id": "66792b090100a3585cff8a4a",
    "name": "Congratulations",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420864/greetingcards/home/congratulationhome.png"
  },
  {
    "_id": "66792b090100a3585cff8a4b",
    "name": "Get Well Soon",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420860/greetingcards/home/getwellsoonhome.png"
  },
  {
    "_id": "65d31eed8d4120c90ef07acc",
    "name": "Birthday",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420874/greetingcards/home/birthdayhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2b",
    "name": "Ramadan",
    "createdAt": "2023-03-15T21:43:20.274Z",
    "updatedAt": "2023-03-15T21:43:20.274Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420859/greetingcards/home/ramadanhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2d",
    "name": "Eid ul Fitr",
    "createdAt": "2023-03-15T21:43:44.638Z",
    "updatedAt": "2023-03-15T21:43:44.638Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420867/greetingcards/home/eidulfitrhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2f",
    "name": "Hajj",
    "createdAt": "2023-03-15T21:44:25.635Z",
    "updatedAt": "2023-03-15T21:44:25.635Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420807/greetingcards/home/hajjhome.png"
  },
  {
    "_id": "65b8b00f867f6277874b5c2e",
    "name": "Eid Al Adha",
    "createdAt": "2023-03-15T21:43:32.818Z",
    "updatedAt": "2023-03-15T21:43:32.818Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/daof5pne5/image/upload/v1720420865/greetingcards/home/eiduladhahome.png"
  }
]
const GreetingCardShare = ({ route,navigation}) => { 
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
              console.log(e);
            });
        } else {
          console.log("issue occured");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.containerMain}>
       <StatusBar backgroundColor={Colors.wasilgreenthemecolor}/>
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
            <Text style={styles.advTextFontStyle}>Greetings</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            style={{marginRight:10}}
            showsHorizontalScrollIndicator={false}
            data={greetingsdata}
            renderItem={({ item,index}) => (
              <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('GreetingCardListNew', {
                  cardid: item._id,
                  categoryname:item.name,
                  name:item.name
                });
              }}>
              <View key={item} style={{top:5}}>
              <Image style={styles.advImage1} source={{uri:item.image}}/>
                <View
                  style={{
                    backgroundColor: Colors.wasilgreenthemecolorsecond,
                    height: 40,
                    width: Platform.OS === 'ios' ? 139 : 140,
                    bottom:15,
                    flex:0.3,
                    marginRight: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: 12,
                      alignSelf: "center",
                      top: Platform.OS === 'ios' ? 12: 10,
                      fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
                    }}>
                    {item.name}
                  </Text>
                </View>
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

export default GreetingCardShare;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Colors.wasilgreenthemecolor,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  containerMain: {
    flex: 1,
    backgroundColor:Colors.wasilgreenthemecolor,
  },
  advImage: {
    height:500,
    width:400,
    borderRadius:7,
    resizeMode:"stretch"
  },
  submit: {
    backgroundColor: Colors.wasilgreenthemecolorsecond,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.wasilgreenborder,
    height:45,
    width:200,
    alignSelf:"center",
    top:20
  },
  submitText: {
    fontSize:15,
    top:Platform.OS === 'ios' ? 12 : 10,
    color: Colors.white,
    fontFamily:Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
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
    color: Colors.white,
    fontWeight:"600",
    fontFamily: Platform.OS === 'ios' ? 'DM Serif Text' : 'heading',
  },
  advImage1: {
    flex:1,
    width: 140,
    height: 150,
    resizeMode:"contain",
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },

  extralayer: {
    marginTop:10,
    width:400,
    height:80,
    alignSelf:"center",
    marginBottom:10,
    backgroundColor:Colors.wasilgreenthemecolor,
    top:-4,
    zIndex:-1,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    elevation:3,
    shadowColor: Colors.wasilgreenthemecolor,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity:  0.5,
    shadowRadius: 0.5,
  },



 
});
