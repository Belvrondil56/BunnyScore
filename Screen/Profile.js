import React from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Image} from "react-native";
import { supabase } from "../supabaseClient";
import {LoginScreen} from "./LoginScreen"

const Profile = props => {

    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']



    const signOut = async () => {
        await supabase.auth.signOut();
        console.log("auth", supabase.auth.user());
    }

    return(
        <ImageBackground source={require("../assets/lapinBarbare.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
            {{opacity:0.24}} blurRadius={1}>
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.titreApp}>Profil</Text>
            <View style={styles.blocBody} >
                <View style={styles.profile}>
                    <Image source={require("../assets/lapin.jpg")} style={styles.imgProfile} resizeMode='cover' />
                </View>
                <Text> Pseudo </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={signOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    imgBackground:{
        width: "100%",
        height: "100%",
        flex: 1
    },
    titreApp: {
        fontSize: 26,
        height: '5%',
        marginTop: '20%',
        fontWeight: 'bold',
        flex: 1,
    },
    imgProfile: {
        width: '100%',
        height: "100%",
        flex: 1,
    },
    blocBody: {
        width: 350,
        height: "70%",
        alignItems: "center",
        marginBottom: 100,
    },
    profile: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: 10
    }
})

export default Profile;