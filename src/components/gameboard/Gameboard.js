import React, { useState } from "react";
import {GameBoardContainer, CurrentLevelHeader} from '../styles/styles'

import CharacterCard from "./CharacterCard";
import Scoreboard from "./Scoreboard";

import characterData from "../../data/characterData";
import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import { setItemsToStorage, getItemsFromStorage } from "../../helpers/localStorage"


function GameBoard() {
    const [gameMode, setGameMode] = useState('Hard');

    const [currentCards, setCurrentCards] = useState(getCardsFromShuffledArr(characterData, gameMode));
    const [clickedCards, setClickedCards] = useState([]);

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    getItemsFromStorage('highScore', setHighScore, highScore);
    setItemsToStorage('highScore', highScore);


    const stateObj = {
        currentScore,
        setCurrentScore,
        highScore,
        setHighScore,
        setCurrentCards,
        clickedCards,
        setClickedCards,
        gameMode,
        setGameMode
    }



    return (
        <div className="container">
            <Scoreboard stateObj={ stateObj }/>
            <CurrentLevelHeader>Game Mode: { gameMode }</CurrentLevelHeader>
            <GameBoardContainer>
                { currentCards.map((item)=>{
                    return <CharacterCard stateObj={ stateObj } obj={ item } key={ item.id }/>
                }) }
            </GameBoardContainer>

        </div>
    )
}


export default GameBoard;