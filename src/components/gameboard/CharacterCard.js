import getCardsFromShuffledArr from "../../helpers/getCardsFromShuffledArr";
import characterData from "../../data/characterData";
import React from "react";

let clickCounter = 0;

function CharacterCard(props) {
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
    let currentCard = characterObj.id;
    let gameCanContinue = checkIfGameContinues(stateObj, currentCard);

    if ( gameCanContinue ) {
        stateObj.setClickedCards((prev)=>{
            return [...prev, currentCard]
        });
        stateObj.setCurrentScore((prev)=>prev + 1);
        stateObj.setCurrentCards(()=> getCardsFromShuffledArr(stateObj.currentCards));
    }
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
    alert('GAME OVER');
    obj.setCurrentCards(()=>getCardsFromShuffledArr(obj.currentCards));
    if ( obj.currentScore > obj.highScore ) {
        obj.setHighScore(obj.currentScore);
    }
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    clickCounter = 0;
}


export default CharacterCard;