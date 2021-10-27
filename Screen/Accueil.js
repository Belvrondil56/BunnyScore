import React from "react";
import { render } from "react-dom";
import {View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Acceuil = props => {
   return(
    <ImageBackground source={require("../assets/roiCarotte.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
    {{opacity:0.24}} blurRadius={1}>
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.titreApp}>Bunny Score</Text>
            <View style={styles.blocBody} imageStyle={{opacity: 0.5}}>
                <Text style={styles.text}>Bienvenue dans Bunny Score.</Text>
                <Text style={styles.text}>Avec cette application, tu peux :</Text>
                <Text style={styles.text}>Créer une nouvelle partie</Text>
                <Text style={styles.text}>Ajouter les joueurs</Text>
                <Text style={styles.text}>Rentrer les scores</Text>
                <Text style={styles.text}>Sauvegarder</Text>
                <Text style={styles.text}>Voir vos parties</Text>
                <Text style={styles.text}>Amusez-vous bien !</Text>
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
   )
}


const styles = StyleSheet.create({
    imgBackground: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
    },
    titreApp: {
        fontSize: 26,
        height: '5%',
        marginTop: '20%',
        fontWeight: 'bold',
        flex: 1,
    },
    blocBody: {
        backgroundColor: "white",
        width: 350,
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 200,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
})

export default Acceuil;
