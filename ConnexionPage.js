import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import InteractiveTextInput from "react-native-text-input-interactive";

const ConnexionPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const image = {uri: "./assets"};

    return (
        <ImageBackground source={require("./assets/torpilleurlapin.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
  {{opacity:0.24}} blurRadius={1}>
    <KeyboardAvoidingView style={styles.container}>
      
        <Text style={styles.titreApp}>Bunny Score</Text>
        <View style={styles.inputContainer} >
          <InteractiveTextInput style= {styles.input} placeholder="Entrez votre identifiant" onChangeText={username => setUsername(username)} defaultValue={username} style={{padding: 15}}/><InteractiveTextInput style= {styles.input} placeholder="Entrez votre mot de passe" onChangeText={password => setPassword(password)} defaultValue={password}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => {}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.noAccount}>
        <Text style={styles.text}> Vous n'avez pas de compte ?</Text>
        <TouchableOpacity 
            onPress={() => {}}
            style={styles.signUpButton}
          >
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
      </View>
    
    </KeyboardAvoidingView>
  </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  titreApp: {
    fontSize: 26,
    marginTop: '20%',
    fontWeight: 'bold'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 15,
  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    width: '100%',
    backgroundColor: "#03768A",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
  noAccount: {
    height: 150,
    width: "100%",
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  },
  signUpButton: {
    width: '50%',
    backgroundColor: "#03768A",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  }
});

export default ConnexionPage;