import React, { Component, useState } from 'react';
import LoginScreen from './Screen/LoginScreen';
import WelcomeScreen from './Screen/WelcomeScreen.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={LoginScreen}/>
        <Screen name="Welcome" component={WelcomeScreen}/>
      </Navigator>
    </NavigationContainer>
    
  );
}


