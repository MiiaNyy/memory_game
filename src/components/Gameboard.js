import React, { useState } from "react";

import cardData from "../helpers/characterData";
import shuffleArray from "../helpers/shuffleArray";


function GameBoard() {
    const shuffledCardData = shuffleArray(cardData)
    const [cardArray, setCardArray] = useState(shuffledCardData);

    return (
        <div className="container game-board">
            <div className="container score-counter">
                <p>Current Score 0</p>
                <p>Max score 9</p>
                <button onClick={ ()=>{
                    let newState = shuffleArray(cardArray);
                    console.log('previous state is ' + cardArray);
                    console.log('new state is ' + newState);
                    setCardArray(newState);
                } }>Shuffle
                </button>
            </div>
            {
                cardArray.map((item)=>{
                    return <Card obj={ item } key={ item.id }/>
                })
            }
        </div>
    )
}

function Card(props) {
    return (
        <div id={ props.obj.id } className="card">
            <h3>{ props.obj.name }</h3>
            <img className="card__img" src={ props.obj.image } alt=""/>
        </div>
    )
}

export default GameBoard;

