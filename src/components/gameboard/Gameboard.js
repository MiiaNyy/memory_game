import React, { useState, useEffect } from "react";
import { GameBoardContainer, Container, CharacterImage } from '../styles/styles'


import CharacterCard from "./CharacterCard";
import Scoreboard from "./Scoreboard";

import getCurrentCardDeck from "../../helpers/getCurrentCardDeck";
import { setItemsToStorage, getItemsFromStorage } from "../../helpers/localStorage"

function GameBoard() {
    const [gameMode, setGameMode] = useState('Medium');

    const [currentCards, setCurrentCards] = useState(getCurrentCardDeck(gameMode));
    const [clickedCards, setClickedCards] = useState([]);

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [maxScore, setMaxScore] = useState(getMaximumScore(gameMode));

    const stateObj = {
        currentScore,
        setCurrentScore,
        highScore,
        setHighScore,
        currentCards,
        setCurrentCards,
        clickedCards,
        setClickedCards,
        gameMode,
        setGameMode,
        maxScore,
    }

    getItemsFromStorage('highScore', setHighScore, highScore);
    setItemsToStorage('highScore', highScore);
    return (
        <Container gameboard>
            <Scoreboard stateObj={ stateObj }/>
            <GameBoardContainer>
                {
                    currentCards.map((item)=>{
                        return <CharacterCard stateObj={ stateObj } obj={ item } key={ item.id }/>
                    }) }
            </GameBoardContainer>
        </Container>
    )
}


function getMaximumScore(gameMode) {
    if ( gameMode === 'Easy' ) {
        return 8;
    } else if ( gameMode === 'Medium' ) {
        return 12;
    } else {
        return 20;
    }
}


export default GameBoard;