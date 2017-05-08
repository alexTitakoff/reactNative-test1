/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Bar from './app/components/Bar.js';
import Header from './app/components/Header.js';
import PhotoGrid from './app/components/PhotoGrid.js';

export default class testReact extends Component {
  render() {
    return (
      <View style={styles.container} >
          <Header></Header>
          <Bar></Bar>
          <PhotoGrid></PhotoGrid>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});


AppRegistry.registerComponent('testReact', () => testReact);
