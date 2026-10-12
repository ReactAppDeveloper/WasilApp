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
import { Colors } from '../../theme';
import reciters from '../Reciters/reciters';
export default class RecitersSectionBlue extends Component {
  state = {
    loading: true,
    reciters: [],
  };

  componentDidMount() {
    this.fetchReciters();
  }

  fetchReciters = async () => {
    try {
      this.setState({ reciters: reciters, loading: false });
    } catch (e) {
      console.log('Reciters error', e);
      this.setState({ loading: false });
    }
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        this.props.navigation.navigate('ReciterDetail', {
          name:item.name,
          reciterId: item.id,
          reciterName: item.name,
        })
      }
    >
       {item.image ? (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.overlay}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>
    ) : (
      <View style={styles.placeholder}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    )}
    
    </TouchableOpacity>
  );

  render() {
    const { loading, reciters } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Reciters</Text>
          <TouchableOpacity onPress={() =>
         this.props.navigation.navigate("RecitersList")
         
      }>
          <View style={styles.viewallContainer}>
                     <Text style={styles.viewAll}>See All</Text>
                   </View>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator color={Colors.primary} />
        ) : (
          <FlatList
            data={reciters}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
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
    top:30,
    paddingVertical: 20,
    backgroundColor: Colors.primary,
    borderColor:Colors.primary,
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
    color: Colors.white,
  },
 

  viewallContainer: {
    width:50,
    height:22,
    flexDirection: 'row',
    borderColor:Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },

  viewAll: {
    alignSelf:"center",
    justifyContent:"center",
    color: Colors.primary,
    fontSize: 10,
    alignItems:"center",
   left:7,
  },

  card: {
  width: 120,
  height: 150,
  left: 5,
  borderRadius: 10,
  marginHorizontal: 5,
  overflow: 'hidden',
},

imageContainer: {
  flex: 1,
},

image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

overlay: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  paddingVertical: 8,
  paddingHorizontal: 6,
},

name: {
  color: '#fff',
  fontSize: 12,
  fontFamily: 'NunitoSans-Bold',
  textAlign: 'center',
},

placeholder: {
  flex: 1,
  backgroundColor: '#ccc',
  justifyContent: 'center',
  alignItems: 'center',
},
});
