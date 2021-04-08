import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import { CharacterImage, Card } from "../styles/styles"
import React from "react";


function CharacterCard(props) {
    const characterObj = props.obj;
    const stateObj = props.stateObj;

    return (
        <Card counter={ props.counter } onClick={ ()=>handleCardClick(stateObj, characterObj) } id={ characterObj.id }>
            <h3>{ characterObj.name }</h3>
            <CharacterImage src={ characterObj.image } alt={ characterObj.description }/>
        </Card>
    )
}

function handleCardClick(stateObj, characterObj) {
    let currentCard = characterObj.id;
    let gameCanContinue = checkIfGameContinues(stateObj, currentCard);

    if ( gameCanContinue ) {
        stateObj.setClickedCards((prev)=>{
            return [...prev, currentCard]
        });
        stateObj.setCurrentScore((prev)=>prev + 1);

        if ( stateObj.currentScore === (stateObj.maxScore - 1) || stateObj.currentScore >= stateObj.maxScore ) {
            stateObj.setUserWon(true);
        } else {
            stateObj.setCurrentCards(()=>getCardsFromShuffledArr(stateObj.currentCards));
        }
    }
    console.log('current score is ' + stateObj.currentScore + ' and max score is ' + stateObj.maxScore);
}

function checkIfGameContinues(stateObj, currentCharacter) {
    let clickedCards = stateObj.clickedCards;

    if ( clickedCards.length > 0 ) {
        for (let i = 0; i < clickedCards.length; i++) {
            if ( currentCharacter === clickedCards[i] ) {
                gameOver(stateObj);
                return false;
            }
        }
    }
    return true;
}

function gameOver(obj) {

    obj.setGameIsOver(true);

    if ( obj.currentScore > obj.highScore ) {
        obj.setHighScore(obj.currentScore);
    }

}


export default CharacterCard;