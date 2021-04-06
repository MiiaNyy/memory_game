import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import React from "react";
import { ScoreContainer } from "../styles/styles.js"


function Scoreboard(props) {
    const stateObj = props.stateObj;
    return (
        <div>
            <ScoreContainer>
                <p>Max score { stateObj.maxScore }</p>
                <p>Game Mode: { stateObj.gameMode }</p>
            </ScoreContainer>
            <ScoreContainer primary>
                <p>Current Score { stateObj.currentScore }</p>
                <p>High score { stateObj.highScore }</p>
                <button onClick={ ()=>stateObj.setCurrentCards(getCardsFromShuffledArr(stateObj.currentCards)) }>
                    Shuffle
                </button>
            </ScoreContainer>
        </div>
    )
}

export default Scoreboard;

