import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import InteractiveTextInput from "react-native-text-input-interactive";
import { supabase } from '../supabaseClient';

const SignUpScreen = props => {

  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const avatar = "";


  const handleSignUp = async() => {
    console.log("password:", password)
    const response = await supabase.auth.signUp({email: email, password: password});

    if (response?.error){
      console.log(response?.error?.message);
      return;
    }

    console.log("id:", response.user.id);
    console.log("pseudo:", pseudo);
    const user = await supabase.auth.signIn({email: email, password: password});
    console.log("user: ", user);
    const {data, error} = await supabase.from("profiles").insert([
      {
        id: response.user?.id,
        username: pseudo,
      },
    ]);
    
    if (error){
      console.log(error?.message);
      return;
    }

    

  }

    return (
    <ImageBackground source={require("../assets/torpilleurlapin.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
  {{opacity:0.24}} blurRadius={1}>
      <KeyboardAvoidingView style={styles.container}>
      
        <Text style={styles.titreApp}>Bunny Score</Text>
        <View style={styles.inputContainer} >
          <InteractiveTextInput style= {styles.input} placeholder="Entrez un pseudo" onChangeText={pseudo => setPseudo(pseudo)} defaultValue=     {pseudo} style={{padding: 15}}/>
          <InteractiveTextInput style= {styles.input} placeholder="Entrez un email" onChangeText={email => setEmail(email)} defaultValue={email} style={{padding: 15}}/>
          <InteractiveTextInput style= {styles.input} placeholder="Entrez un mot de passe" onChangeText={password => setPassword(password)} defaultValue={password}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={handleSignUp}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Créer le compte</Text>
          </TouchableOpacity>
        </View>
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

export default SignUpScreen;