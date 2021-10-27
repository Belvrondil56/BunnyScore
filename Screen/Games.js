import React from "react";
import { render } from "react-dom";
import {View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView} from "react-native";

const Games = props => {
    return(
        <ImageBackground source={require("../assets/lapinRoi.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
            {{opacity:0.24}} blurRadius={1}>
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.titreApp}>Mes parties</Text>
            <View style={styles.blocBody}>
                
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    blocBody: {

    }
})

export default Games;