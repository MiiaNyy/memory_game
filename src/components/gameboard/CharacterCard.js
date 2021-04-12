import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import { CharacterImage, Card } from "../Styles/characterCardStyles"
import React from "react";


function CharacterCard(props) {
    const characterObj = props.obj;
    const stateObj = props.stateObj;


    return (
        <Card hoverEffect={ stateObj.gameIsOn } onClick={ ()=>handleCardClick(stateObj, characterObj) } id={ characterObj.id }>
            <h3>{ characterObj.name }</h3>
            <CharacterImage src={ characterObj.image } alt={ characterObj.description }/>
        </Card>
    )
}

function handleCardClick(stateObj, characterObj) {
    let currentCard = characterObj.id;
    let gameContinues = checkForGameOver(stateObj, currentCard);

    // These just ensures that game is on and there is not and game over
    if ( stateObj.gameIsOn ) {
        if ( gameContinues ) {
            stateObj.setClickedCards((prev)=>{
                return [...prev, currentCard]
            });
            stateObj.setCurrentScore((prev)=>prev + 1);
            checkForHighScore(stateObj);
            checkIfUserWon(stateObj);
            stateObj.setCurrentCards(()=>getCardsFromShuffledArr(stateObj.currentCards));
        }
    }
}

function checkIfUserWon(obj) {
    if ( obj.currentScore === (obj.maxScore - 1) || obj.currentScore >= obj.maxScore ) {
        obj.setUserWon(true);
        obj.setGameIsOn(false);
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
                stateObj.setGameIsOn(false);
                return false;
            }
        }
    }
    return true;
}


export default CharacterCard;