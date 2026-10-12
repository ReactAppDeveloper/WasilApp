import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,ImageBackground
} from 'react-native';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Colors } from '../../theme';
import {
  DuaListNumberSVGG,
  DuaForwardSVG,
  SearchSVG,
} from '../../assets/icons';
import BaseScreenClassWhite from './BaseScreenClassWhite';
const tasbihbgmainimage = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1769082963/dua/duacategoryback.png'};
class DuaCategoryDetailWhite extends BaseScreenClassWhite {
  constructor(props) {
    super(props);
    this.state = {
      duadata: [],
      visibleData: [],
      search: '',
      isLoading: true,
      isLoadingMore: false,
      error: null,
      noMatch: false,
      loadIndex: 10,
    };
  }

  componentDidMount = async() =>{
    const { duacategoryid } = this.props.route.params;
    try {
      const response = await axios.get(`https://islamicapp.vercel.app/api/duabycategory?duacategoryId=${duacategoryid}`);
      const data = response.data;
      this.setState({
        duadata: data,
        visibleData: data.slice(0, 10),
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  }

  searchFilterFunction(text) {
    const { duadata } = this.state;
    const filtered = text
      ? duadata.filter((item) =>
          item.duanameenglish?.toUpperCase().includes(text.toUpperCase())
        )
      : duadata;

    this.setState({
      visibleData: filtered.slice(0, 10),
      search: text,
      noMatch: filtered.length === 0,
      loadIndex: 10,
    });
  }

  loadMoreData = () => {
    const { duadata, visibleData, loadIndex, isLoadingMore } = this.state;

    if (isLoadingMore || visibleData.length >= duadata.length) return;

    const nextIndex = loadIndex + 10;
    const nextChunk = duadata.slice(0, nextIndex);

    this.setState({
      visibleData: nextChunk,
      loadIndex: nextIndex,
      isLoadingMore: true,
    }, () => {
      setTimeout(() => this.setState({ isLoadingMore: false }), 300);
    });
  };

  handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isBottomReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isBottomReached) {
      this.loadMoreData();
    }
  };

  renderContent() {

    const { visibleData, search, noMatch, isLoadingMore } = this.state;
    const { navigation } = this.props;
    const { duacategorytitle } = this.props.route.params;

    return (
      <View style={{ flex: 1,backgroundColor: Colors.white}}>
         <View style={styles.searchContainer1}>
                 <View style={{ top: 13,left:10 }}>
                    <SearchSVG />
                  </View>
                  <View style={{ flex: 1, left: 15 }}>
                    <TextInput
                      style={styles.searchInput1}
                      placeholder="Search Duas"
                      placeholderTextColor={"#757575"}
                      value={search}
                      onChangeText={(text) => this.searchFilterFunction(text)}
                    />
                  </View>
                 
                </View>

        {noMatch ? (
          <Text style={styles.noMatch}>No Match Found</Text>
        ) : (
          <ScrollView
            style={{ top: 25 }}
            onScroll={this.handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ alignItems: 'center' }}>
              {visibleData.map((item, index) => (
  <TouchableOpacity
    key={index}
    onPress={() =>
      navigation.navigate('DuaDetailNew', {
        duacategoryid: item.duacategoryId,
        selectedIndex: index,
        duacategorytitle: duacategorytitle,
        name: duacategorytitle,
      })
    }>
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <View style={{ height: 15 }} />

        <View style={{ left: 17 }}>
          <DuaListNumberSVGG />
        </View>

        <View style={{ height: 5 }} />

        <Text
          style={{
            bottom: 37,
            textAlign: 'center',
            fontWeight: '500',
            color: Colors.wasilnewthemecolorsecond,
            fontSize: 18,
            fontFamily:
              Platform.OS === 'ios'
                ? 'Poppins-Regular'
                : 'Raleway',
          }}>
          {index + 1}
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text numberOfLines={1} style={styles.cardText}>
          {item.duanameenglish}
        </Text>
      </View>

      <View style={styles.forwardBox}>
        <DuaForwardSVG />
      </View>
    </View>
  </TouchableOpacity>
))}
              {isLoadingMore && (
                <ActivityIndicator
                  style={{ marginVertical: 20 }}
                  size="small"
                  color={Colors.wasilnewthemecolorsecond}
                />
              )}
            </View>
            <View style={{ height: 80 }} />
          </ScrollView>
        )}
      </View>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default DuaCategoryDetailWhite;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '92%',
    top:10,
    height: 120,
    borderRadius:10,
    borderColor: Colors.white,
    backgroundColor: "#D2E0FF",
    borderWidth: 1,
    alignSelf: 'center',
  },
  searchInput: {
    borderRadius:20,
    paddingLeft: Platform.OS === 'ios' ? 50 : 50,
    paddingTop:Platform.OS === 'ios' ? 1 : 1,
    top: Platform.OS === 'ios' ? 17 : 17,
    fontSize: 13,
    color: Colors.bordercolor,
  },
  noMatch: {
    height: '100%',
    top: 300,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.lightgreytasbih,
    fontFamily: 'Poppins-Light',
  },

  card: {
    flexDirection: 'row',
    width: "95%",
    height: 70,
    borderColor:Colors.wasilnewthemecolor,
    borderWidth: 1,
    marginTop:10,
    borderRadius:12,
    alignSelf: "center",
  },
  iconBox: {
    flex: 0.4,
  },
  textBox: {
    flex: 1.4,
    justifyContent: 'center',
  },
  forwardBox: {
    flex: 0.3,
    top:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardText: {
    color: Colors.black,
    fontSize: 14,
    top:2,
    fontFamily: Platform.OS === 'ios' ? 'NunitoSans-Semibold' : 'NunitoSans-Semibold',
    textTransform: 'capitalize',
  },
   cardText1: {
    position:"absolute",
    color: Colors.black,
    fontSize: 16,
    top:-35,
    fontFamily: Platform.OS === 'ios' ? 'Asul-Regular' : 'AsulRegular',
    textTransform: 'capitalize',
  },
  cardIndex: {
  width: 40,
  height: 40,
  borderRadius: 20,
  borderWidth:1,
  borderColor:"#757575",
  color: "#757575",
  fontSize: 17,
  fontWeight: '500',
  textAlign: 'center',
  left:15,
  top:18,
  textAlignVertical: 'center',
  lineHeight: 40,
  fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway',
},
 searchContainer1: {
    flexDirection: 'row',
    width: '95%',
    height: 50,
    borderColor:Colors.bordercolor,
    backgroundColor: Colors.white,
    borderWidth: 1,
    top:20,
    borderRadius:12,
    alignSelf: 'center',
  },
  searchInput1: {
    paddingLeft: 1,
    top: Platform.OS === 'ios' ? 16 : 1,
    fontSize: 13,
    color: Colors.secondary,
    fontFamily:"NunitoSans-SemiBold"
  },
});
