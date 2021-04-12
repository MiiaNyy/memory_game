import React, { useState } from "react";
import { Container } from '../Styles/generalStyles'
import { NewHighScoreMessage } from "../Styles/messagesStyles";
import { GameboardContainer } from "../Styles/gameboardStyles";

import CharacterCard from "./CharacterCard";
import Scoreboard from "./Scoreboard";
import GameEndedMessage from "../gameEndedMessages/GameEndedMessage";

import getCurrentCardDeck from "../../helpers/getCurrentCardDeck";
import getMaximumScore from "../../helpers/getMaximunScore";
import { setItemsToStorage, getItemsFromStorage } from "../../helpers/localStorage"

function GameBoard(props) {

    const [currentCards, setCurrentCards] = useState(getCurrentCardDeck(props.gameMode));
    const [clickedCards, setClickedCards] = useState([]);

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const [userWon, setUserWon] = useState(false);
    const [gameIsOver, setGameIsOver] = useState(false);

    const [highScoreAnimation, setHighScoreAnimation] = useState(false);

    const animation = highScoreAnimation ? "high-score_animation" : "hidden";
    const maxScore = getMaximumScore(props.gameMode);

    // All of the states so children components can use and change them
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
        setHighScoreAnimation
    }

    getItemsFromStorage('highScore', setHighScore, highScore);
    setItemsToStorage('highScore', highScore);

    return (
        <Container gameboard>
            <Scoreboard stateObj={ stateObj }/>
            <GameboardContainer>
                { currentCards.map((item)=>{
                    return <CharacterCard stateObj={ stateObj } obj={ item } key={ item.id }/>
                }) }
            </GameboardContainer>
            <GameEndedMessage stateObj={ stateObj }/>
            <NewHighScoreMessage className={ animation }>
                <p>✨ New high score ✨</p>
            </NewHighScoreMessage>
        </Container>
    )
}





export default GameBoard;