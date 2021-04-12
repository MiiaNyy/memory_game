import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import { CharacterImage, Card } from "../styles/characterCardStyles"
import React, { useState } from "react";


function CharacterCard(props) {
    const characterObj = props.obj;
    const stateObj = props.stateObj;
    const [cardAnimation, setCardAnimation] = useState(false);

    const animate = cardAnimation ? "high-score_animation" : "hidden";

    return (
        <Card className={ animate } counter={ props.counter } onClick={ ()=>handleCardClick(stateObj, characterObj) }
              id={ characterObj.id }>
            <h3>{ characterObj.name }</h3>
            <CharacterImage src={ characterObj.image } alt={ characterObj.description }/>
        </Card>
    )
}

function handleCardClick(stateObj, characterObj) {
    let currentCard = characterObj.id;
    let gameIsOver = checkForGameOver(stateObj, currentCard);

    if ( !gameIsOver ) {
        stateObj.setClickedCards((prev)=>{
            return [...prev, currentCard]
        });
        stateObj.setCurrentScore((prev)=>prev + 1);
        checkForHighScore(stateObj);
        checkIfUserWon(stateObj);
        stateObj.setCurrentCards(()=>getCardsFromShuffledArr(stateObj.currentCards));
    }
}


function checkIfUserWon(obj) {
    if ( obj.currentScore === (obj.maxScore - 1) || obj.currentScore >= obj.maxScore ) {
        obj.setUserWon(true);
    }
}

function checkForHighScore(obj) {
    if ( obj.currentScore === (obj.highScore) || obj.currentScore >= obj.highScore ) {
        obj.setHighScore((prev)=>prev + 1);
        obj.setHighScoreAnimation(true);
        setTimeout(()=>{
            obj.setHighScoreAnimation(false);
        }, 2500)
    }
}

function checkForGameOver(stateObj, currentCharacter) {
    let clickedCards = stateObj.clickedCards;

    if ( clickedCards.length > 0 ) {
        for (let i = 0; i < clickedCards.length; i++) {
            if ( currentCharacter === clickedCards[i] ) {
                stateObj.setGameIsOver(true);
                return true;
            }
        }
    }
    return false;
}


export default CharacterCard;