import React, { useState, useRef } from "react";

import characterData from "../data/characterData";
import getEightCardsFromShuffledArr from "../helpers/getEightCardsFromShuffledArr";


function GameBoard() {
    const [currentCards, setCurrentCards] = useState(getEightCardsFromShuffledArr(characterData));

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);


    return (
        <div className="container game-board">

            <div className="container score-counter">
                <p>Current Score { currentScore }</p>
                <p>High score { highScore }</p>
                <button onClick={ ()=>setCurrentCards(()=>getEightCardsFromShuffledArr(characterData)) }>
                    Shuffle
                </button>
            </div>
            {
                currentCards.map((item)=>{
                    return <Card setCurrentScore={ setCurrentScore } setCurrentCards={ setCurrentCards } obj={ item }
                                 key={ item.id }/>
                }) }
        </div>
    )
}


function Card(props) {
    let obj = props.obj;
    const countRef = useRef(0);

    function handleCardClick() {
        countRef.current++;
        if ( countRef.current > 1 ) {
            console.log('GAME OVER')
            console.log('I have clicked this ' + countRef.current + ' times');
        } else {
            props.setCurrentCards(()=>getEightCardsFromShuffledArr(characterData));
            props.setCurrentScore((prev)=> prev+1);
            console.log('This is the first time I have clicked this card');
        }

    };
    return (
        <div onClick={ handleCardClick  } id={ obj.id } className="card">
            <h3>{ obj.name }</h3>
            <img className="card__img" src={ obj.image } alt={ obj.description }/>
        </div>
    )
}

export default GameBoard;

