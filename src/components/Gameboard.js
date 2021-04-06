import React, { useState, useRef } from "react";

import characterData from "../data/characterData";
import getCardsFromShuffledArr from "../helpers/getCardsFromShuffledArr";
import { setItemsToStorage, getItemsFromStorage } from "../helpers/localStorage"


function GameBoard() {
    const [currentCards, setCurrentCards] = useState(getCardsFromShuffledArr(characterData));

    const [clickedCharacters, setClickedCharacters] = useState([]);

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
        clickedCharacters,
        setClickedCharacters,
    }

    return (
        <div className="container game-board">

            <div className="container flex score-counter">
                <p>Current Score { currentScore }</p>
                <p>High score { highScore }</p>
                <p>Max score 20</p>
                <button onClick={ ()=>setCurrentCards(getCardsFromShuffledArr(characterData)) }>
                    Shuffle
                </button>
            </div>
            {
                currentCards.map((item)=>{
                    return <Card stateObj={ stateObj } obj={ item } key={ item.id } id={ item.id }/>
                }) }
        </div>
    )
}

function gameOver(obj) {
    alert('GAME OVER');
    obj.setCurrentCards(()=>getCardsFromShuffledArr(characterData));
    if ( obj.currentScore > obj.highScore ) {
        obj.setHighScore(obj.currentScore);
    }
    obj.setCurrentScore(0);
    obj.setClickedCharacters([]);
}



function Card(props) {
    const characterObj = props.obj;
    const stateObj = props.stateObj;



    return (
        <div onClick={ ()=>handleCardClick(stateObj, characterObj) } id={ characterObj.id } className="card">
            <h3>{ characterObj.name }</h3>
            <img className="card__img" src={ characterObj.image } alt={ characterObj.description }/>
        </div>
    )
}



function handleCardClick(stateObj, characterObj) {
    let currentCharacter = characterObj.id;
    let clickedCharacters = stateObj.clickedCharacters;
    let gameIsOver = false;

    if ( clickedCharacters.length > 0 ) {
        for (let i = 0; i < clickedCharacters.length; i++) {
            if ( currentCharacter === clickedCharacters[i] ) {
                gameIsOver = true;
                gameOver(stateObj, );
            }
        }
    }
    if ( !gameIsOver ) {
        stateObj.setClickedCharacters((prev) => {
            return [...prev, currentCharacter]
        });
        stateObj.setCurrentScore((prev)=>prev + 1);
        stateObj.setCurrentCards(()=>getCardsFromShuffledArr(characterData));
        console.log(stateObj.clickedCharacters.length);
    }

}





export default GameBoard;