import React, { useState } from "react";
import { GameBoardContainer, Container } from '../styles/styles'

import CharacterCard from "./CharacterCard";
import Scoreboard from "./Scoreboard";
import GameEndedMessages from "../GameEndedMessages";

import getCurrentCardDeck from "../../helpers/getCurrentCardDeck";
import { setItemsToStorage, getItemsFromStorage } from "../../helpers/localStorage"

function GameBoard(props) {

    const [currentCards, setCurrentCards] = useState(getCurrentCardDeck(props.gameMode));
    const [clickedCards, setClickedCards] = useState([]);

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const [userWon, setUserWon] = useState(false);
    const [gameIsOver, setGameIsOver] = useState(false);

    const maxScore = getMaximumScore(props.gameMode);

    const stateObj = {
        currentScore,
        setCurrentScore,
        highScore,
        setHighScore,
        currentCards,
        setCurrentCards,
        clickedCards,
        setClickedCards,
        gameMode: props.gameMode,
        setGameMode: props.setGameMode,
        maxScore,
        gameIsOver,
        setGameIsOver,
        userWon,
        setUserWon,

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
            <GameEndedMessages stateObj={ stateObj }/>
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