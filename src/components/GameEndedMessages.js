import React from 'react';
import { Btn, BtnContainer } from "./styles/styles";
import crying from "../images/crying.png"
import happy from "../images/happy.png";
import getCurrentCardDeck from "../helpers/getCurrentCardDeck";

const images = {
    gameOver: {
        img: crying,
        description: 'sailor moon crying'
    },
    userWon: {
        img: happy,
        description: 'sailor moon winking'
    }
}


function GameEndedMessages(props) {
    let stateObj = props.stateObj;
    if ( stateObj.gameIsOver ) {
        return(
            <Message image={images.gameOver} header="Game over" stateObj={ stateObj } >
                Unfortunately you clicked the same character twice and LOST!
            </Message>
        )
    } /*if(props.stateObj.userWon) {
        return <CongratulationsMsg/>
    } */ else {
        return <></>
    }
}

function Message(props) {
    let stateObj = props.stateObj;
    return (
        <div className="msg">
            <h2>{props.header}</h2>
            <div className="flex">
                <div className="msg-txt">
                    <p>{ props.children }</p>
                    <div className="flex msg-points">
                        <p>Your points: 5 </p>
                        <p>Max points: 8 </p>
                    </div>
                    <BtnContainer>
                        <Btn onClick={ ()=>location.reload() } easy>🡠 Home</Btn>
                        <Btn onClick={ ()=>resetGame(stateObj) } hard>Try Again</Btn>
                    </BtnContainer>
                </div>
                <img src={ props.image.img } alt={props.image.description}/>
            </div>
        </div>

    )
}

function resetGame(obj) {
    obj.setGameIsOver(false);
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    obj.setCurrentCards(()=>getCurrentCardDeck(obj.gameMode));
}

export default GameEndedMessages;