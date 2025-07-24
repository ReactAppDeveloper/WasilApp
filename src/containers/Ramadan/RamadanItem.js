import React, { useState, useEffect,useRef} from "react";
import { View, StatusBar, StyleSheet ,Dimensions,Text} from 'react-native';
import {Colors} from "../../theme";
const { width, height } = Dimensions.get('window');
import {RamadanSehriSVG,RamadanIftariSVG} from '../../assets/icons';

export const RamadanItem = ({item}) => {
  return (
    <View style={[styles.container,{width}]}>     
    
       <View style={{height:100,top:15}}>
       <View style={{alignItems:"center"}}>
             <Text style={{fontSize:13,top:10,textAlign:"center",color:Colors.white,fontFamily:"Poppins-Medium"}}>
            {item.maslak}
            </Text>
             <View style={{width:"95%",height:55,flex:1,top:15,justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
            
                    <View style={{flexDirection:"row",flex:1,height:55,backgroundColor:Colors.intermediate,borderTopLeftRadius:10,borderBottomLeftRadius:10,borderWidth:1,borderColor:Colors.intermediate}}>
                     <View style={{height:12}}></View>
                     <View style={{flex:1,alignSelf:"center"}}>
                     <Text style={styles.submitTextQuran}>Sehri</Text>
                     <Text style={styles.submitTextQuran1}>{item.sehritime}</Text>
                     </View>
                     <View style={{flex:1,top:7,alignItems:"center",left:8}}>
                     <RamadanSehriSVG/>
                     </View>
    
                        </View>
                        <View style={{flexDirection:"row",flex:1,left:0.2,height:55,backgroundColor:Colors.intermediate,borderTopRightRadius:10,borderBottomRightRadius:10,borderWidth:1,borderColor:Colors.intermediate}}>
                     <View style={{height:12}}></View>
                     <View style={{flex:1,alignSelf:"center"}}>
                     <Text style={styles.submitTextQuran}>Iftari</Text>
                     <Text style={styles.submitTextQuran1}>{item.iftaritime}</Text>
                     </View>
                     <View style={{flex:1,top:12,alignItems:"center",left:10}}>
                     <RamadanIftariSVG/>
                     </View>
                    
                        </View>
                      
                    </View>
           </View>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    resizeMode:"contain"
  },
  textContainer: {
    flex: 0.7,
    backgroundColor: Colors.transparent,
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  headingText: {
    fontSize: width * 0.07, 
    fontFamily: 'heading',
    color: Colors.secondary,
    lineHeight: height * 0.05,
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  descriptionText: {
    fontSize: width * 0.04,
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
    lineHeight: height * 0.03,
  },
  bottomView: {
    width: '95%',

    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.02,
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'flex-start',
    flex: 1,
    left:20
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  nextButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    height: height * 0.04,
    width: width * 0.2,
    justifyContent: 'center',
  },
  nextButtonText: {
    top:1,
    fontSize: width * 0.035,
    alignSelf: 'center',
    fontFamily: 'PoppinsLight',
    color: Colors.secondary,
  },
  submitTextQuran: {
    fontSize: 20,
    top: 3,
    color: Colors.primary,
    left:12,
    fontFamily: "Raleway",
  },
  submitTextQuran1: {
    fontSize: 12,
    color: Colors.primary,
    left:14,
    bottom:4,
    fontFamily: "Raleway",
  },
});

export default RamadanItem;
