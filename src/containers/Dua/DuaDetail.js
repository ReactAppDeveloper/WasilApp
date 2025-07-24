// DuaDetail.js
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Colors } from '../../theme';
import MovieCard from './MovieCard';
import axios from 'axios';
import BaseScreenClass from './BaseScreenClass';
import useStore from '../../store';

const image = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720693748/dua/duabg.png',
};

class DuaDetail extends BaseScreenClass {
  constructor(props) {
    super(props);
    const store = useStore.getState();
    this.state = {
      Duadetaildata: [],
      isLoading: true,
      error: null,
      favourites: store.favourites,
    };
  }

  async componentDidMount() {
    const { duaname } = this.props.route.params;

    try {
      const response = await axios.get(
        `https://islamicapp.vercel.app/api/duaverse?duanameenglish=${duaname}`
      );
      this.setState({ Duadetaildata: response.data });
    } catch (error) {
      this.setState({ error });
    }

    // Subscribe to store updates
    this.unsubscribe = useStore.subscribe((state) => {
      this.setState({ favourites: state.favourites });
    });

    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  renderContent() {
    const { Duadetaildata, favourites } = this.state;

    return (
      <ImageBackground source={image} imageStyle={{ top: 400, height: 550 }}>
        <ScrollView>
          {Duadetaildata.map((item, index) => (
            <MovieCard key={index} movie={item} favourites={favourites} />
          ))}
          <View style={{ height: 70 }} />
        </ScrollView>
      </ImageBackground>
    );
  }

  render() {
    const { isLoading, error } = this.state;
    return super.render({ isLoading, error });
  }
}

export default DuaDetail;
