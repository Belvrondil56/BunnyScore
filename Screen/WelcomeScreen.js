import React, { useEffect } from "react";
import {StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NewGame from "../Screen/NewGame"
import Profile from "../Screen/Profile"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Games from "../Screen/Games"
import Acceuil from "./Accueil.js"
import { supabase } from "../supabaseClient";


const Tab = createMaterialBottomTabNavigator();

const WelcomeScreen = props => {

        return(
                <Tab.Navigator style={styles.nav}>
                    <Tab.Screen name="Accueil" component={Acceuil} options={{
                        tabBarLabel: 'Accueil',
                        tabBarIcon:({color}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        )
                        }}/>
                    <Tab.Screen name="NewGame" component={NewGame} options={{
                        tabBarLabel: 'Nouvelle Partie',
                        tabBarIcon:({color}) => (
                            <MaterialCommunityIcons name="note-plus" color={color} size={26} />
                        )
                        }}/>
                    <Tab.Screen name="Games" component={Games} options={{
                        tabBarLabel: 'Mes parties',
                        tabBarIcon:({color}) => (
                            <MaterialCommunityIcons name="file-table" color={color} size={26} />
                        )
                        }}/>
                    <Tab.Screen name="Profile" component={Profile} options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon:({color}) => (
                            <MaterialCommunityIcons name="face" color={color} size={26} />
                        )
                        }}
                />
                </Tab.Navigator>
            )
};

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: "green",
        width: "100%",
        flex: 1
    },
    nav: {
        backgroundColor: "white",
    }
});

export default WelcomeScreen;
