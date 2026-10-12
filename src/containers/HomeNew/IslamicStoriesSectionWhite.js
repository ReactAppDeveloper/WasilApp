import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { Colors } from '../../theme';
export default class IslamicStoriesSectionWhite extends Component {
  state = {
    loading: true,
    stories: [],
  };

  componentDidMount() {
    this.fetchStories();
  }

 fetchStories = async () => {
  try {
    const res = await axios.get(
      'https://islamicapp.vercel.app/api/islamiccategories'
    );
    const allStories = res.data;
    this.setState({
      stories: allStories,
      loading: false,
    });
  } catch (e) {
    console.log('stories error', e);
    this.setState({ loading: false });
  }
};


  renderItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() =>
                  this.props.navigation.navigate('SubCategories', {
                    categoryId: item._id,
                    name: item.categoryname,
                  })
                }
    style={styles.card}>
        {item.path ? (
          <Image source={{ uri: item.path }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
    </TouchableOpacity>
  );

  render() {
    const { loading, stories } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Islamic Stories</Text>
          <TouchableOpacity 
           onPress={() => this.props.navigation.navigate('AllSubCategories')}>
            
           <View style={styles.viewallContainer}>
                                <Text style={styles.viewAll}>See All</Text>
                              </View>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator color={Colors.wasilnewthemecolorsecond} />
        ) : (
          <FlatList
  data={stories}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item._id?.toString()}
  renderItem={this.renderItem}
  contentContainerStyle={{ paddingRight: 12 }}
/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:10,
    width:"95%",
    height:220,
    top:10,
    paddingVertical: 20,
    backgroundColor: Colors.transparent,
    borderColor:Colors.lightgreytasbih,
    borderRadius: 10,
    borderWidth:0.15,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    bottom:3,
    fontFamily: 'NunitoSans-Bold',
    color: Colors.black,
  },
  viewallContainer: {
    width:50,
    height:22,
    flexDirection: 'row',
    borderColor:Colors.wasilnewthemecolorsecond,
    backgroundColor: Colors.wasilnewthemecolorsecond,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },

  viewAll: {
    alignSelf:"center",
    justifyContent:"center",
    color: Colors.white,
    fontSize: 10,
    alignItems:"center",
    left:7,
  },
  card: {
    width: 120,
    height: 150,
    left:5,
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
   placeholder: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
