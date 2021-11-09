import React, { Component, useState, useContext, useEffect } from 'react';
import LoginScreen from './Screen/LoginScreen';
import WelcomeScreen from './Screen/WelcomeScreen.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from './Screen/SignUpScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={LoginScreen}/>
        <Screen name="Welcome" component={WelcomeScreen}/>
        <Screen name="SignUp" component={SignUpScreen}/>
      </Navigator>
    </NavigationContainer>
    
  );
}


