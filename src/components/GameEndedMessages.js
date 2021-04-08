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
        return (
            <Message image={ images.gameOver } header="Game over" stateObj={ stateObj }>
                Unfortunately you clicked the same character twice and LOST!
            </Message>
        )
    } else if ( stateObj.userWon ) {
        return (
            <Message image={ images.userWon } header="✨ Congratulations ✨" stateObj={ stateObj }>
                You got all of the characters without clicking the same character twice.
            </Message>
        )
    } else {
        return <></>
    }
}

function Message(props) {
    let stateObj = props.stateObj;
    return (
        <div className="msg">
            <h2>{ props.header }</h2>
            <div className="flex">
                <div className="msg-txt">
                    <p>{ props.children }</p>
                    <div className="flex msg-points">
                        <p>Your points: { stateObj.currentScore } </p>
                        <p>Max points: { stateObj.maxScore } </p>
                    </div>
                    <BtnContainer>
                        <Btn onClick={ ()=>location.reload() } easy>🡠 Home</Btn>
                        <ResetGameBtns stateObj={ stateObj }/>
                    </BtnContainer>
                </div>
                <img src={ props.image.img } alt={ props.image.description }/>
            </div>
        </div>
    )
}

function ResetGameBtns(props) {
    if ( props.stateObj.gameIsOver ) {
        return <Btn onClick={ ()=>resetGame(props.stateObj) } hard>Try Again</Btn>
    } else {
        return <Btn onClick={ ()=>playNextLevel(props.stateObj) } hard>Next level 🡢</Btn>
    }
}

function playNextLevel(obj) {
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    if ( obj.gameMode === 'Easy' ) {
        obj.setGameMode('Medium');
        obj.setCurrentCards(()=>getCurrentCardDeck('Medium'));
    } else if ( obj.gameMode === 'Medium' ) {
        obj.setGameMode('Hard');
        obj.setCurrentCards(()=>getCurrentCardDeck('Hard'));
    }
}

function resetGame(obj) {
    obj.setGameIsOver(false);
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    obj.setCurrentCards(()=>getCurrentCardDeck(obj.gameMode));
}

export default GameEndedMessages;