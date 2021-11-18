import { useLinkBuilder } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, KeyboardAvoidingViewBase, TextInput} from "react-native";
import { supabase } from "../supabaseClient";
import uuid from 'react-native-uuid';

const NewGame = props => {

    console.log("refresh")

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
    const [players, setPlayers] = useState([]);
    const [resultatBDD, setResultatBDD] = useState([]);
    const [scores, setScores] = useState(null);
    const [resultat, setResultat] = useState(false);


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

    

    

    async function addGame(){
        players.forEach(player => {
            searchPlayerById(player)
            console.log("player id : ", resultatBDD)
        })

    async function searchPlayerById(player){
        const {data: profiles, error} = await supabase.from('profiles').select('id').eq('username', player);
        console.log(profiles[0].id)
        setResultatBDD(res => [...res, profiles[0].id])
    }    
        /*const {game, error} = await supabase.from("game").insert([
            {
              nbr_players: nbrPlayer
            },
          ]);

          if (error){
            console.log(error?.message);
          }*/

        


        /*const {gamePlayer, error2} = await supabase.from("player_game").insert([
            {
              
            },
          ]);
          
          if (error2){
            console.log(error2?.message);
          }*/
    }

    async function handleSaveGame(){

        console.log("bonjour")
        await haveScore();
        checkPlayerList();
        if(players!=[]){       
            checkPlayer();
            addGame();
        } else {
            console.log("dommage")
        }
    }

    async function haveScore() {
        let tempScores = true;
        if(nbrPlayer==2 && player1Points>0 && player2Points>0){
            tempScores = true;
        } else if (nbrPlayer==3 && player1Points>0 && player2Points>0 && (player3Points>0 || player4Points>0)){
            tempScores = true;
        } else if (nbrPlayer==4 && player1Points>0 && player2Points>0 && player3Points>0 && player4Points>0){
            tempScores = true;
        } else {
            tempScores = false;
        }
        setScores(tempScores);
        console.log("Scores : ",scores)
    }

    async function checkPlayerList(){
        let tempTab = []
        tempTab.push(player1)
        tempTab.push(player2)
        if(newPlayer3==true){
            tempTab.push(player3)
        } 
        if (newPlayer4==true){
            tempTab.push(player4)
        }
        setPlayers(tempTab)
    }

    async function checkPlayer(){
        players.forEach(player => {
            getData2(player)
            if(resultat==true){
                console.log("resultat : ", player)
            }
            else if (resultat==false){
                addPlayer(player)
            }
        })
    }

    async function addPlayer(player){
        console.log("player ajouté: ", player)
        const uuidconst = uuid.v4();
            const {data, error} = await supabase.from("profiles")
            .insert([{
                id: uuidconst,
                username: player,
                invited: true
            }])
    }

    async function getData2(player){
        let tempRes = true
        const {data: profiles, error} = await supabase
            .from('profiles')
            .select('username')
            .eq('username', player)
            .single();
            if (profiles!=null){
                tempRes = true
            }
            else if (profiles==null){
                tempRes = false
            }
            setResultat(tempRes)
    }

    console.log("Tableau de joueurs :",players)
    return(
        <ImageBackground source={require("../assets/lapinGold.jpg")} style={ styles.imgBackground } resizeMode='cover' imageStyle= 
            {{opacity:0.24}} blurRadius={1}>
             
        <View style={styles.container}>         
            <ScrollView scrollEnabled={scroll} contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.contentContainer}>
                <Text style={styles.titreApp}>Nouvelle Partie</Text>
                <View style={styles.blocBody}>
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {setPlayer1(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {setPlayer1Points(playerPoints)}}></TextInput>
                    </View>
                    {newPlayer3 ?
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {setPlayer3(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {setPlayer3Points(playerPoints)}}></TextInput>
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
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {setPlayer2(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {setPlayer2Points(playerPoints)}}></TextInput>
                    </View>
                    {newPlayer4 ?  
                    <View style={styles.playerBloc}>
                        <TextInput placeholder="Entrez un pseudo" style={styles.input} onChangeText={(player) => {setPlayer4(player)}}></TextInput>
                        <TextInput placeholder="Entrez le score" keyboardType = 'numeric' style={styles.input} onChangeText={(playerPoints) => {setPlayer4Points(playerPoints)}}></TextInput>
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