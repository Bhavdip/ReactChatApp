/* @flow */

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Platform,
} from 'react-native';

import MainScreen from './MainScreen'
import SignInScreen from './SignInScreen'
import routes from './routes'
import NavBarRouteMapper from './NavBarRouteMapper'

class App extends Component {
  _renderScreen(route,navigator){
    switch (route.name) {
      case 'SignInScreen':
        return <SignInScreen />
      case 'MainScreen':
      default:
        return (
          <MainScreen getHelpPressHandler = {() => {
              navigator.push(routes.signIn)
            }}
          />
      )
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        sceneStyle={styles.screenContainer}
        initialRoute={routes.main}
        renderScene={this._renderScreen}
        navigationBar={<Navigator.NavigationBar
           routeMapper = {NavBarRouteMapper}
           style={styles.navBar}
          />}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    marginTop:Platform.OS === 'ios'? 64 : 56,
  },
  navBar:{
    backgroundColor:'#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#494949',
  },
});

export default App
