import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import characterData from "../../data/characterData";
import React from "react";

function Scoreboard(props) {
    const stateObj = props.stateObj;
    return (
        <div className="container flex score-counter">
            <p>Current Score { stateObj.currentScore }</p>
            <p>High score { stateObj.highScore }</p>
            <p>Max score 20</p>
            <button onClick={ ()=>stateObj.setCurrentCards(getCardsFromShuffledArr(characterData, stateObj.currentLevel)) }>
                Shuffle
            </button>
        </div>
    )
}

export default Scoreboard;

