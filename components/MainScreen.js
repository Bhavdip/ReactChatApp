/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Awesome support</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.props.getHelpPressHandler}>
            <Text style={styles.buttonText}>
              Get Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MainScreen.propTypes = {
  getHelpPressHandler:PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#36c4c0',
  },
  titleContainer: {
    flex:1,
    justifyContent:'center'
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  buttonContainer:{
    flex:2,
    justifyContent:'center',
  },
  button:{
    width:300,
    height:300,
    justifyContent:'center',
    borderWidth:10,
    borderRadius:150,
    borderColor:'#8e3429',
    backgroundColor:'#cb3b27',
    padding:10,
    elevation:15,
    shadowColor:'#cb3b27',
    shadowOffset:{ width:10, height:10},
    shadowOpacity:0.6,
    shadowRadius:0,
  },
  buttonText:{
      color:'#ffff',
      fontSize:55,
      textAlign:'center',
      backgroundColor:'rgba(0,0,0,0)'
  },
});
