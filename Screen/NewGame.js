import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, KeyboardAvoidingViewBase, TextInput} from "react-native";
import { supabase } from "../supabaseClient";

const NewGame = props => {

    const [scroll, setScroll] = useState(false);
    const [newPlayer3, setNewPlayer3] = useState(null);
    const [newPlayer4, setNewPlayer4] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [player3, setPlayer3] = useState(null);
    const [player4, setPlayer4] = useState(null);
    const [player1Points, setPlayer1Points] = useState(null);
    const [player2Points, setPlayer2Points] = useState(null);
    const [player3Points, setPlayer3Points] = useState(null);
    const [player4Points, setPlayer4Points] = useState(null);
    const [nbrPlayer, setNbrPlayer] = useState(2);
    const [toto, setData] = useState(null);
    const [scores, setScores] = useState(false);


    const handleAddNewPlayer3 = () => {
        setNbrPlayer(nbrPlayer + 1)
        setNewPlayer3(true);
    }
    const handleAddNewPlayer4 = () => {
        setNbrPlayer(nbrPlayer + 1)
        setNewPlayer4(true);
    }
    const handleRemoveNewPlayer3 = () => {
        setNbrPlayer(nbrPlayer - 1)
        setNewPlayer3(false);
        setPlayer3(null);
        setPlayer3Points(null);
    }
    const handleRemoveNewPlayer4 = () => {
        setNbrPlayer(nbrPlayer - 1)
        setPlayer4(null);
        setNewPlayer4(false);
        setPlayer4Points(null);
    }

    function checkPlayer(player){
        console.log("player", player)
    }

    async function getData() {
        
        const {data, error} = await supabase.from('profiles').select('username')

        console.log("player :", data)

        if (data!=null){
            console.log("le pseudo existe")
        }
        else {
            console.log("le pseudo n'existe pas")
        }
        return data;
    }

    function handleSaveGame(){
        haveScore()
        console.log(scores);
        console.log("players 1:", player1, player1Points);
        console.log("players 2:", player2, player2Points);
        console.log("players 3", player3, player3Points);
        console.log("players 4:", player4, player4Points);
        console.log('nombre de joueurs', nbrPlayer);
        /*const {game, error} = await supabase.from("game").insert([
            {
              nbr_players: nbrPlayer
            },
          ]);
          
          if (error){
            console.log(error?.message);
            return;
          }*/
        //const {data, error2} = await supabase.from('profiles').select();
        let data = getData();
        data.then(res => console.log("data :", res[0].username));
    }

    function haveScore() {
        if(nbrPlayer==2 && player1Points>0 && player2Points>0){
            setScores(true);
        } else if (nbrPlayer==3 && player1Points>0 && player2Points>0 && player3Points>0){
            setScores(true);
        } else if (nbrPlayer==4 && player1Points>0 && player2Points>0 && player3Points>0 && player4Points>0){
            setScores(true);
        } else {
            setScores(false);
        }
    }

    return(
        <ImageBackground source={require("../assets/lapinGold.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
            {{opacity:0.24}} blurRadius={1}>
             
        <View style={styles.container}>         
            <ScrollView scrollEnabled={scroll} contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.contentContainer}>
                <Text style={styles.titreApp}>Nouvelle Partie</Text>
                <View style={styles.blocBody}>
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {checkPlayer(player); setPlayer1(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {checkPlayer(playerPoints); setPlayer1Points(playerPoints)}}></TextInput>
                    </View>
                    {newPlayer3 ?
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {checkPlayer(player); setPlayer3(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {checkPlayer(playerPoints); setPlayer3Points(playerPoints)}}></TextInput>
                        <TouchableOpacity onPress={() => handleRemoveNewPlayer3()}>
                            <Text style={styles.cross}>X</Text>
                        </TouchableOpacity>
                    </View> : 
                    <View style={styles.playerBloc}>
                        <TouchableOpacity onPress={() => handleAddNewPlayer3()} style={styles.AddPlayerButton}>
                            <Text style={styles.addPlayer}>+</Text>
                        </TouchableOpacity>
                    </View> }
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {checkPlayer(player); setPlayer2(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {checkPlayer(playerPoints); setPlayer2Points(playerPoints)}}></TextInput>
                    </View>
                    {newPlayer4 ?  
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {checkPlayer(player); setPlayer4(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {checkPlayer(playerPoints); setPlayer4Points(playerPoints)}}></TextInput>
                        <TouchableOpacity onPress={() => handleRemoveNewPlayer4()}>
                            <Text style={styles.cross}>X</Text>
                        </TouchableOpacity>
                    </View> : 
                    <View style={styles.playerBloc}>
                        <TouchableOpacity onPress={() => handleAddNewPlayer4()} style={styles.AddPlayerButton}>
                            <Text style={styles.addPlayer}>+</Text>
                        </TouchableOpacity>
                    </View> }
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSaveGame}>
                        <Text style={styles.buttonText}>Lancer la partie</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flex:1
    },
    imgBackground:{
        width: "100%",
        height: "100%",
        flex: 1
    },
    titreApp: {
        fontSize: 26,
        height: 30,
        marginBottom: 40,
        fontWeight: 'bold',
    },
    cross: {
        marginTop: 20,
        color: 'red',
        fontSize: 30
    },
    contentContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    blocBody: {
        width: "100%",
        height: "40%",
        flexWrap: "wrap",
        marginBottom: 100
    },
    playerBloc: {
        margin: 10,
        marginLeft: 20,
        width: 160,
        height: 160,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#CEDEE0",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
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
    input: {
        width: "80%",
        height: 30,
        marginTop: 5,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
    },
    icons: {
        fontSize: 100,
        color: "blue"
    },
    addPlayer: {
        color: "#FFF",
        fontSize: 50
    },
    AddPlayerButton: {
        width: '50%',
        backgroundColor: "#03768A",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    }
})

export default NewGame;