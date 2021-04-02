import cardData from "../helpers/characterData";
import React from "react";

function GameBoard() {
    return (
        <div className="container game-board">
            { cardData.map((item)=>{
                return <Card obj={ item } key={item.id}/>
            }) }
        </div>
    )
}

function Card (props) {
    return (
        <div id={props.obj.id} className="card">
            <h3>{props.obj.name}</h3>
            <img className="card__img" src={ props.obj.image } alt=""/>
        </div>
    )
}

export default GameBoard;

