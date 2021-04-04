import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";

import characterData from "../helpers/characterData";
import shuffleArrayOrder from "../helpers/shuffleArrayOrder";

function getEightCardItems(arr) {
    return arr.filter((item, index)=>index < 8);
}

function GameBoard() {
    const [cardArray, setCardArray] = useState(shuffleArrayOrder(characterData));
    const [eightCardItems, setEightCardItems] = useState(getEightCardItems(cardArray));

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div className="container game-board">

            <div className="container score-counter">
                <p>Current Score { currentScore }</p>
                <p>High score { highScore }</p>
                <button onClick={ ()=>{
                    setCardArray((prev)=>shuffleArrayOrder(prev));
                    setEightCardItems(getEightCardItems(cardArray))
                } }>
                    Shuffle
                </button>

            </div>
            {
                eightCardItems.map((item)=>{
                    return <Card obj={ item } key={ item.id }/>
                }) }
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

