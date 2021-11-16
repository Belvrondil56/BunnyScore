import React, { Component, useState, useContext, useEffect } from 'react';
import LoginScreen from './Screen/LoginScreen';
import WelcomeScreen from './Screen/WelcomeScreen.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from './Screen/SignUpScreen';
import 'react-native-url-polyfill/auto';

import { supabase } from './supabaseClient';
import { AuthStack } from './AuthStack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App(){

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setAuth(session);
      console.log("auth:", supabase.auth.session())
    })
  })

  if(auth==null){
    return(
      <AuthStack setAuth={setAuth}/>
    );
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Welcome" component={WelcomeScreen}/>
      </Navigator>
    </NavigationContainer>
    
  );
}


