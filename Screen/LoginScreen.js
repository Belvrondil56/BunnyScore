import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import InteractiveTextInput from "react-native-text-input-interactive";
import SignUpScreen from "./SignUpScreen.js"
import { supabase } from '../supabaseClient.js';

const LoginScreen = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      setAuth(session);
    });
  })

  const checkAuth = (username, password) => {
    /*const user = async () => await supabase.from('Users').select(username, password);
    if (user==null){
      console.log("Le compte n'existe pas")
    } else {
      console.log("le compte existe")
    }*/
    const user = async () => await supabase.auth.signIn({
      username: username,
    })
    console.log("user", supabase.auth.user())
  }

  const goToWelcome = () => {
    console.log("pseudo: ", username)
    console.log("mot de passe: ", password)

    //checkAuth(username, password);

    if (auth==true){
      props.navigation.navigate("Welcome");
    } else {
      props.navigation.navigate("Login");
    }
  }
  const goToSignUp = () => {
    props.navigation.navigate("SignUp");
  }

    return (
    <ImageBackground source={require("../assets/torpilleurlapin.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
  {{opacity:0.24}} blurRadius={1}>
      <KeyboardAvoidingView style={styles.container}>
      
        <Text style={styles.titreApp}>Bunny Score</Text>
        <View style={styles.inputContainer} >
          <InteractiveTextInput style= {styles.input} placeholder="Entrez votre identifiant" onChangeText={username => setUsername(username)} defaultValue={username} style={{padding: 15}}/><InteractiveTextInput style= {styles.input} placeholder="Entrez votre mot de passe" onChangeText={password => setPassword(password)} defaultValue={password}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={goToWelcome}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.noAccount}>
        <Text style={styles.text}> Vous n'avez pas de compte ?</Text>
        <TouchableOpacity 
            onPress={goToSignUp}
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

export default LoginScreen;