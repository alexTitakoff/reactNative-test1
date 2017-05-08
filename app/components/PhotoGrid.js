
 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';


export default class PhotoGrid extends Component {
  render() {
    return (
        <ScrollView>
          <View style={styles.photoGrid}>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/img1.jpg')}/>
              </View>

              <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/img2.jpg')}/>
              </View>

              <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/img3.jpg')}/>
              </View>

              <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/img4.jpg')}/>
              </View>

              <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/img5.jpg')}/>
              </View>

          </View>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
PhotoGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},
photoWrap: {
  margin: 2,
  height: 150,
  width: (Dimensions.get('window').width ),
},
photo: {
  flex: 1,
  width: null,
  alignSelf: 'stretch'
}

});
