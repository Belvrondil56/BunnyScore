import React, { Component, useState, useContext, useEffect } from 'react';
import LoginScreen from './Screen/LoginScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from './Screen/SignUpScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthStack (props) {

    const [pageRegister, setPageRegister] = useState(false);

    if(pageRegister==false){
        return (
            <LoginScreen setAuth={props.setAuth} setPageRegister={setPageRegister}/>
        );
    }

    return(
        <SignUpScreen setAuth={props.setAuth} setPageRegister={setPageRegister}/>
    );
    

}
