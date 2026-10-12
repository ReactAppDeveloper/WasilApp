import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../theme';
import axios from 'axios';

const API_BASE_URL = 'https://islamicapp.vercel.app';

export default class WallOfRemembranceBlue extends Component {
  state = {
    loading: true,
    datawallofemeｍber: [],
  };

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/remembrance/approved`,
      );

      console.log('Approved Remembrance API:', res.data);

     const remembranceData = Array.isArray(res.data?.data)
  ? [...res.data.data].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    )
  : [];

      this.setState({
        datawallofemeｍber: remembranceData,
        loading: false,
      });
    } catch (e) {
      console.log(
        'Remembrance stories error:',
        e?.response?.data || e?.message || e,
      );

      this.setState({
        datawallofemeｍber: [],
        loading: false,
      });
    }
  };

  renderItem = ({item}) => {
    const name = item?.lovedOneName || 'Unnamed';
    const imageUrl = item?.photo?.url || null;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('WallofrememberDetail', {
            wallOfRememberId: item._id,
          })
        }>
        <View style={styles.card}>
          {imageUrl ? (
            <Image
              source={{uri: imageUrl}}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>No Image</Text>
            </View>
          )}

          <View style={styles.nameContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {loading, datawallofemeｍber} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>Wall of Remembrance</Text>

            <Text style={styles.subtitle}>
              A lasting sadaqah jariyah, Remember your loved ones.
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RemembranceForm')
              }>
              <View style={styles.viewallContainer}>
                <Text style={styles.viewAll}>Add Your Loved Ones</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Wallofremember')
              }>
              <View style={styles.viewallContainer1}>
                <Text style={styles.viewAll}>See All Members</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              size="small"
              color={Colors.wasilnewthemecolorsecond}
            />
          </View>
        ) : (
          <FlatList
            data={datawallofemeｍber}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  No remembrances available.
                </Text>
              </View>
            }
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 45,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },

  header: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 15,
   color: Colors.white,
  },

  button: {
    backgroundColor:Colors.white,
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: 25,
    height: 28,
  },

  buttonText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },

   card: {
  width: 120,
  height: 150,
  marginRight: 10,
  borderRadius: 10,
  borderWidth:0.15,
  overflow: 'hidden',
  backgroundColor: Colors.white,
},
image: {
  width: '100%',
  height: 115,
},
  info: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 10,
   color: Colors.white,
  },
  year: {
    fontSize: 10,
    marginTop: 5,
   color: Colors.white,
    fontWeight: '600',
  },
    viewallContainer: {
    width:130,
    height:22,
    flexDirection: 'row',
    borderColor:Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },
   viewallContainer1: {
    width:100,
    height:22,
    top:10,
    flexDirection: 'row',
    borderColor:Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius:12,
    alignSelf: 'center',
  },

  viewAll: {
    textAlign:"center",
    alignSelf:"center",
    color: Colors.primary,
    fontSize: 11,
    left:7,
  },
    nameContainer: {
  height: 35,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 5,
},name: {
  fontSize: 13,
  fontFamily: 'NunitoSans-Bold',
  color: Colors.black,
  textAlign: 'center',
  fontWeight: '500',
},
loaderContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});