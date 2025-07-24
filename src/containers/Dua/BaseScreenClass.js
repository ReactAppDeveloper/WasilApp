
import React, { Component } from 'react';
import { View, ActivityIndicator, Text, StatusBar, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export default class BaseScreenClass extends Component {
  renderContent() {
    // Child class must override this method
    return null;
  }

  render() {
    const { isLoading, error } = this.props;

    if (isLoading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centered}>
          <Text>Error in Fetching Data..... Please Check Your Internet Connection.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
