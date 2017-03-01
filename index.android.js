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
  View,
  Image
} from 'react-native';

export default class zindex_test extends Component {
  render() {
    const { container, overlay } = styles;
    //Based on
    //http://stackoverflow.com/a/33763067
    return (
        <View style={styles.container}>
          <View style = {styles.backgroundContainer}>
            <Image source = {require('./img/1.gif')} resizeMode = 'cover' style = {styles.backdrop} />
          </View>
          <View style = {styles.overlay}>
            <Text style = {styles.headline}>Esto debe aparecer encima del background image</Text>
            <Image style = {styles.logo} source = {require('./img/1.gif')} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});

AppRegistry.registerComponent('zindex_test', () => zindex_test);
