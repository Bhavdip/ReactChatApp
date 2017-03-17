/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';

const SignInScreen = (props) => (
  <View style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.label}>My Name:</Text>
      <TextInput style={styles.textbox} underlineColorAndroid="transparent"/>

      <Text style={styles.label}>My Account Number:</Text>
      <TextInput style={styles.textbox} keyboardType="numeric" underlineColorAndroid="transparent"/>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Go</Text>
      </TouchableOpacity>
      <Text style={styles.externalLink}
        onPress={openHelpUrl}
        >
        Forgot your account number?
      </Text>
    </View>
  </View>
);

function openHelpUrl(){
  Linking.openURL('http://www.google.com')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#68b8db',
  },
  formContainer:{
    flex:1,
    justifyContent:'center',
  },
  textbox:{
    width:300,
    height:40,
    color:'#4ba3c9',
    borderWidth:2,
    alignItems:'center',
    borderColor:'#4d96b5',
    borderRadius:6,
    backgroundColor:'#ffffff',
    paddingHorizontal:15,
  },
  label:{
    fontSize:20,
    marginTop:10,
    marginBottom:6,
    color:'#ffffff',
    fontWeight:'bold',
  },
  actionButton:{
    marginTop:36,
    width:100,
    height:40,
    alignSelf:'flex-end',
    borderWidth:2,
    borderColor:'#cb3b27',
    borderRadius:6,
    backgroundColor:'#cb3b27',
  },
  actionButtonText:{
    color:'#ffff',
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
  },
  externalLink:{
    fontSize:18,
    color:'#dfdfdf',
    textDecorationLine:'underline',
    alignItems:'center',
    marginHorizontal:17,
    marginTop:17,
  }
});

export default SignInScreen;
