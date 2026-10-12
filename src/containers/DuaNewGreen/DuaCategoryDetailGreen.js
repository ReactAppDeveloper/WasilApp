import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../theme';
import {
  DuaListNumberGSVGG,
  DuaForwardSVG,
  SearchSVG,
} from '../../assets/icons';
import BaseScreenClassGreen from './BaseScreenClassGreen';
const tasbihbgmainimage = {uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1769082963/dua/duacategoryback.png'};
class DuaCategoryDetailGreen extends BaseScreenClassGreen {
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
      <View style={{ flex: 1,backgroundColor: Colors.wasilgreenthemecolor}}>
         <View style={styles.searchContainer1}>
                 <View style={{ top: 13,left:10 }}>
                    <SearchSVG />
                  </View>
                  <View style={{ flex: 1, left: 15 }}>
                    <TextInput
                      style={styles.searchInput1}
                      placeholder="Search Duas"
                      placeholderTextColor={Colors.wasilgreentext}
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
                      duacategorytitle:duacategorytitle,
                      name:duacategorytitle
                    })
                  }>
                  <View style={styles.card}>
                    <View style={styles.iconBox}>
                       <View style={{ height: Platform.OS === 'ios' ? 15 : 15}}></View>
                       <View style={{ left: Platform.OS === 'ios' ? 17 : 17}}>
                        <DuaListNumberGSVGG />
                        </View>
                        <View style={{ height: 5 }}></View>
                        <Text style={{ bottom: Platform.OS === 'ios' ? 37 : 37, textAlign: "center", fontWeight: "500", color: Colors.wasilgreentext, fontSize: 18, fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Raleway' }}>{index + 1}</Text>
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

export default DuaCategoryDetailGreen;

const styles = StyleSheet.create({
  
  noMatch: {
    height: '100%',
    top: 300,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Light',
  },

  card: {
    flexDirection: 'row',
    width: "95%",
    height: 70,
    borderColor:Colors.wasilgreenborder,
    borderWidth: 0.8,
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
    top:Platform.OS === 'ios' ? 3 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardText: {
    color: Colors.white,
    fontSize: 14,
    top:Platform.OS === 'ios' ? 2 : 0,
    fontFamily: Platform.OS === 'ios' ? 'NunitoSans-Semibold' : 'NunitoSans-Semibold',
    textTransform: 'capitalize',
  },
 searchContainer1: {
    flexDirection: 'row',
    width: '95%',
    height: 50,
    borderColor:Colors.wasilgreenborder,
    backgroundColor: Colors.wasilgreenthemecolor,
    borderWidth: 0.8,
    top:20,
    borderRadius:12,
    alignSelf: 'center',
  },
  searchInput1: {
    paddingLeft: 1,
    top: Platform.OS === 'ios' ? 16 : 1,
    fontSize: 13,
    color: Colors.white,
    fontFamily:"NunitoSans-SemiBold"
  },
});
