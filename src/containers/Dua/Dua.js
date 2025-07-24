import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Colors } from '../../theme';
import {
  DuaListNumberSVG,
  DuaForwardSVG,
  SearchSVG,
} from '../../assets/icons';
import BaseScreenClass from './BaseScreenClass';

class Dua extends BaseScreenClass {
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

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await axios.get('https://islamicapp.vercel.app/api/duas');
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

  renderSkeleton() {
    return (
      
      <View style={{ flex: 1}}>
         <View style={styles.searchContainer}>
          <View style={{ flex: 1, left: 20 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Dua"
              placeholderTextColor={Colors.placeholdercolor}
            />
          </View>
          <View style={{ flex: 0.1, top: 13, right: 10 }}>
            <SearchSVG />
          </View>
        </View>
        <View style={{ flex: 1,paddingHorizontal:12,paddingTop:16}} >
        <SkeletonPlaceholder borderRadius={8}backgroundColor="#f0f0f0"highlightColor="#e0e0e0">
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 70,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.bordercolor,
                marginBottom: 10,
                paddingHorizontal: 10,
                backgroundColor: Colors.white}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={{ width: '80%', height: 16, borderRadius: 4 }} />
              </View>
              <View style={{ width: 20, height: 20, borderRadius: 10 }} />
            </View>
          ))}
        </SkeletonPlaceholder>
        </View>
      </View>
    );
  }

  renderContent() {

    const { visibleData, search, noMatch, isLoadingMore } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <View style={{ flex: 1, left: 20 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Dua"
              placeholderTextColor={Colors.placeholdercolor}
              value={search}
              onChangeText={(text) => this.searchFilterFunction(text)}
            />
          </View>
          <View style={{ flex: 0.1, top: 13, right: 10 }}>
            <SearchSVG />
          </View>
        </View>

        {noMatch ? (
          <Text style={styles.noMatch}>No Match Found</Text>
        ) : (
          <ScrollView
            style={{ top: 5 }}
            onScroll={this.handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ alignItems: 'center' }}>
              {visibleData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('DuaDetail', {
                      duaname: item.duanameenglish,
                    })
                  }
                >
                  <View style={styles.card}>
                    <View style={styles.iconBox}>
                      <View style={{ height: 35 }} />
                      <DuaListNumberSVG />
                      <View style={{ height: 8 }} />
                      <Text style={styles.cardIndex}>{index + 1}</Text>
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
                  color={Colors.primary}
                />
              )}
            </View>
            <View style={{ height: 25 }} />
          </ScrollView>
        )}
      </View>
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return this.renderSkeleton();
    return this.renderContent();
  }
}

export default Dua;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1,
    alignSelf: 'center',
  },
  searchInput: {
    paddingLeft: 1,
    top: 3,
    fontSize: 13,
    color: Colors.placeholdercolor,
  },
  noMatch: {
    height: '100%',
    top: 300,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.lightgreytasbih,
    fontFamily: 'PoppinsLight',
  },
  card: {
    width: '94%',
    height: 70,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
  },
  iconBox: {
    backgroundColor: Colors.white,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textBox: {
    backgroundColor: Colors.white,
    flex: 1.4,
    justifyContent: 'center',
  },
  forwardBox: {
    backgroundColor: Colors.white,
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Raleway',
    textTransform: 'capitalize',
  },
  cardIndex: {
    bottom: 45,
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.primary,
    fontSize: 15,
    fontFamily: 'Raleway',
  },
});
