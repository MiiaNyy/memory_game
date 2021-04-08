import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import React from "react";
import { ScoreContainer, Btn } from "../styles/styles.js"


function Scoreboard(props) {
    const stateObj = props.stateObj;
    return (
        <>
            <ScoreContainer>
                <p>Max score { stateObj.maxScore }</p>
                <p>Game Mode: { stateObj.gameMode }</p>
            </ScoreContainer>

            <ScoreContainer primary>
                <p>Current Score { stateObj.currentScore }</p>
                <p>High score { stateObj.highScore }</p>
                <Btn onClick={ ()=>stateObj.setCurrentCards(getCardsFromShuffledArr(stateObj.currentCards)) }>
                    Shuffle
                </Btn>
            </ScoreContainer>
        </>

    )
}

export default Scoreboard;

