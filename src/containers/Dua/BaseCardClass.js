// BaseCardClass.js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class BaseCardClass extends Component {
  renderCardContent() {
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCardContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});
