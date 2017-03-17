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

import MainScreen from './components/MainScreen'
import SignInScreen from '/components/SignInScreen'

export default class chatapp extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
}
AppRegistry.registerComponent('chatapp', () => chatapp);
