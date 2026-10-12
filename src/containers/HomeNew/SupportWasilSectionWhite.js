import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  BackHandler,
  LogBox,Linking
} from 'react-native';
import { Colors } from '../../theme';
import Modal from 'react-native-modal';
import {
  ClosePlayDrawerSVG,
  FacebookFollowUpSVG,
  YoutubeFollowUpSVG,
  InstagramFollowUpSVG,
  TiktokFollowUpSVG,
} from '../../assets/icons';

export default class SupportWasilSectionWhite extends Component {
state = {
  showmemodal: false,
};
_toggleModal = () => {
  this.setState({ showmemodal: true });
};

closetoggleModal = () => {
  this.setState({ showmemodal: false });
};
componentDidMount() {
    LogBox.ignoreLogs([
      'A props object containing a "key" prop is being spread into JSX',
    ]);
    if (!BackHandler.removeEventListener) {
      BackHandler.removeEventListener = () => {};
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>

          <Text style={styles.title}>
            Support Wasil
            Be a Part of Something Greater
          </Text>

          <Text style={styles.description}>
            Your support helps us keep Wasil free for
            everyone and build a meaningful Islamic
            experience that benefits millions around
            the world.
          </Text>

        </View>

        <View style={styles.buttonsContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={this._toggleModal}
          >
            <Text style={styles.buttonText}>
              Join Wasil Circle
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate('RateFeedback')
            }
          >
            <Text style={styles.buttonText}>
              Rate & Feedback
            </Text>
          </TouchableOpacity>

        </View>
        <Modal
  isVisible={this.state.showmemodal}
  animationType="none"
>
  <View
    style={{
      width: '100%',
      alignSelf: 'center',
      borderRadius: 10,
      backgroundColor: Colors.white,
      paddingBottom: 20,
    }}
  >
    <TouchableOpacity
      onPress={this.closetoggleModal}
      style={{
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
      }}
    >
      <ClosePlayDrawerSVG />
    </TouchableOpacity>

    <View
      style={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.wasilnewthemecolorsecond,
        paddingVertical: 12,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: Colors.white,
          textAlign: 'center',
          fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular"
        }}
      >
        Follow Us
      </Text>
    </View>

    {[
      {
        icon: <FacebookFollowUpSVG />,
        url: 'https://www.facebook.com/wasilislamic',
      },
      {
        icon: <YoutubeFollowUpSVG />,
        url: 'https://www.youtube.com/@WasilIslamicChannel',
      },
      {
        icon: <TiktokFollowUpSVG />,
        url: 'https://www.tiktok.com/@WasilIslamic',
      },
      {
        icon: <InstagramFollowUpSVG />,
        url: 'https://instagram.com/wasilislamic',
      },

    ].map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => Linking.openURL(item.url)}
        style={{
          top:10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        {item.icon}

        <Text
          style={{
            marginLeft: 10,
            fontSize: 13,
            color: Colors.wasilnewthemecolorthird,
          }}
        >
          {item.url}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</Modal>


      </View>
      
    );
  }
}



const styles = StyleSheet.create({

  container: {
    marginHorizontal:10,
    marginTop:20,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.transparent,
    borderRadius: 10,
    borderWidth:0.5,
    borderColor:'#E5E5E5',
  },

  iconContainer:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#6D41D8',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20,

  },

  content:{
    flex:1,
    paddingRight:10,
  },


  title:{
    fontSize:14,
    fontFamily:'NunitoSans-Bold',
    color:'#333',
  },

  description:{
    marginTop:8,
    fontSize:14,
    lineHeight:20,
    color:'#666',
    fontFamily:
      Platform.OS === 'ios'
        ? 'NunitoSans-Regular'
        : 'NunitoSansRegular',
  },

  buttonsContainer:{
    justifyContent:'center',
  },


  button:{
    backgroundColor:'#6D41D8',
    minWidth:120,
    height:28,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5,
    paddingHorizontal:15,
  },

  buttonText:{
    color:'#fff',
    fontSize:14,
    fontFamily:'NunitoSans-Bold',
  },
});