// MovieCard.js
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  LogBox,
} from 'react-native';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
import { Colors } from '../../theme';
import useStore from '../../store';
import {
  DuaHeartUnfillSVG,
  DuaShareSVG,
  HeartfilledSVG,
  DuaDetailBismillah,
  DuaDetailInfo,
  ClosePlayDrawerSVG,
} from '../../assets/icons';
import BaseCardClass from './BaseCardClass';

const image = {
  uri: 'https://res.cloudinary.com/daof5pne5/image/upload/v1720693747/dua/duadetailbg.png',
};

LogBox.ignoreAllLogs();

class MovieCard extends BaseCardClass {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    const store = useStore.getState();
    this.addMovie = store.addMovie;
    this.deleteMovie = store.deleteMovie;
  }

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  async handleShare() {
    const { movie } = this.props;
    const options = {
      message:
        `${movie.duanameenglish}\n\n${movie.duainarabic}\n\n${movie.duatranslation}\n\nReference: ${movie.duareferrence}\n\nWasil Islamic App | www.wasil.io`,
    };
    try {
      await Share.open(options);
    } catch (e) {
      console.log(e);
    }
  }

  renderCardContent() {
    const { movie, favourites } = this.props;
    const { showModal } = this.state;
    const isFavourited = favourites.findIndex(({ _id }) => _id === movie._id) !== -1;

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={image} imageStyle={{ width: '100%' }} style={styles.cardfirst1}>
          <View style={{ height: 20 }} />
          <View style={{ flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
            <Text style={styles.duaTitle}>{movie.duanameenglish}</Text>

            <View style={styles.infoIconContainer}>
              <TouchableOpacity onPress={this.toggleModal}>
                <DuaDetailInfo />
              </TouchableOpacity>

              <Modal isVisible={showModal} animationType="none">
                <View style={styles.modalContainer}>
                  <View style={styles.closeIcon}>
                    <TouchableOpacity onPress={this.closeModal}>
                      <ClosePlayDrawerSVG />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Dua Purpose</Text>
                  </View>

                  <View style={styles.modalBody}>
                    <Text style={styles.modalText}>{movie.duapurpose}</Text>
                    <View style={{ height: 20 }} />
                  </View>
                </View>
              </Modal>
            </View>
          </View>

          <View style={{ height: 20 }} />
          <View style={styles.divider} />
        </ImageBackground>

        <View style={styles.cardfirst2}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ height: 20 }} />
            <View style={{ alignItems: 'center' }}>
              <DuaDetailBismillah />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.arabic}>{movie.duainarabic}</Text>
            </View>
            <View style={{ height: 28 }} />
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.cardfirst3}>
          <View style={{ height: 20 }} />
          <View style={styles.submit}>
            <Text style={styles.submitText}>Transliteration:</Text>
          </View>
          <View style={styles.transBox}>
            <Text style={styles.transText}>{movie.duatransliteration}</Text>
          </View>

          <View style={styles.innerDivider} />

          <View style={styles.submit3}>
            <Text style={styles.submitText}>Translation:</Text>
          </View>
          <View style={styles.transBox2}>
            <Text style={styles.transText}>{movie.duatranslation}</Text>
          </View>
          <View style={{ height: 45 }} />
          <View style={styles.divider} />
        </View>

        <View style={styles.cardfirst4}>
          <View style={{ height: 10 }} />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.refText}>
                  Reference: {movie.duareferrence}
                </Text>
              </View>
              <View style={{ flex: 0.15, flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() =>
                    isFavourited
                      ? this.deleteMovie(movie)
                      : this.addMovie(movie)
                  }
                >
                  {isFavourited ? <HeartfilledSVG /> : <DuaHeartUnfillSVG />}
                </TouchableOpacity>

                <View style={{ width: '20%' }} />
                <TouchableOpacity onPress={() => this.handleShare()}>
                  <DuaShareSVG />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ height: 10 }} />
        </View>
        
        <View style={styles.bottomDivider} />
        <View style={{ height: 20 }} />
      </View>
    );
  }

  render() {
    return super.render();
  }
}

export default MovieCard;

const styles = StyleSheet.create({
  duaTitle: {
    color: Colors.primary,
    textTransform: 'capitalize',
    fontSize: 18,
    fontFamily: 'PoppinsLight',
    textAlign: 'center',
    top: 5,
  },
  infoIconContainer: {
    resizeMode: 'contain',
    zIndex: 1,
    top: -8,
    right: -25,
    alignSelf: 'flex-end',
    height: 70,
    position: 'absolute',
  },
  modalContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    minHeight: 200,
  },
  closeIcon: {
    resizeMode: 'contain',
    zIndex: 1,
    top: 2,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  modalHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    backgroundColor: Colors.primary,
    height: 50,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'PoppinsLight',
  },
  modalBody: {
    top: 10,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: Colors.lightgreytasbih,
    fontSize: 16,
    fontFamily: 'PoppinsLight',
    textAlign: 'center',
  },
  cardfirst1: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: '100%',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  cardfirst2: {
    backgroundColor: Colors.prayercolor,
    width: '100%',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  cardfirst3: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  cardfirst4: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    shadowColor: Colors.bordercolor,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  divider: {
    backgroundColor: Colors.bordercolor,
    height: 0.7,
  },
  bottomDivider: {
    backgroundColor: Colors.bordercolor,
    height: 0.5,
  },
  arabic: {
    top: 10,
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'AlQalamQuran',
  },
  submit: {
    backgroundColor: Colors.transparent,
    left: 22,
    width: '28%',
    height: 25,
  },
  submit3: {
    backgroundColor: Colors.transparent,
    left: 22,
    width: '23%',
    height: 25,
    top: 34,
  },
  submitText: {
    fontSize: 12,
    color: Colors.primary,
    left: 8,
    fontWeight: '500',
    fontFamily: 'Raleway',
    top: 4,
  },
  transBox: {
    width: '90%',
    alignSelf: 'center',
    top: 10,
  },
  transBox2: {
    width: '90%',
    alignSelf: 'center',
    top: 44,
  },
  transText: {
    color: Colors.secondary,
    left: 5,
    fontSize: 14,
    fontFamily: 'PoppinsLight',
  },
  innerDivider: {
    backgroundColor: Colors.bordercolor,
    height: 0.6,
    top: 20,
    marginLeft: 25,
    marginRight: 20,
  },
  refText: {
    color: Colors.secondary,
    fontSize: 10,
    left: 5,
    top: 2,
    fontFamily: 'PoppinsLight',
  },
});
