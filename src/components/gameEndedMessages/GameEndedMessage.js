import React from 'react';
import crying from "../../images/crying.png"
import happy from "../../images/happy.png";
import winner from "../../images/winner.png"
import staff from "../../images/staff.png";

import Message from "./Message";
import { Flex, MessageContainer } from "../styles/messagesStyles";
import { Btn, BtnContainer } from "../styles/generalStyles";
import { resetGame } from "./resetGame";

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


function GameEndedMessage(props) {
    let stateObj = props.stateObj;
    if ( stateObj.gameIsOver ) {
        return (
            <Message image={ images.gameOver } header="Game over" stateObj={ stateObj }>
                Unfortunately you clicked the same character twice and LOST!
            </Message>
        )
    } else if ( stateObj.userWon ) {
        return (
            <Message image={ images.userWon } header="✨ Congratulations ✨"
                     stateObj={ stateObj }>
                You got all of the characters without clicking the same character twice.
            </Message>
        )
    } else if ( stateObj.hardestLevelWon) {
        return (
            <MessageContainer>
                <img className="lrg-img" src={ winner } alt="sailor guardians"/>
                <h2>✨ Congratulations ✨</h2>
                <Flex lastLevel>
                    <div>
                        <p>You beat the hardest level! </p>
                        <p>You deserve the title of Sailor Guardian.</p>
                    </div>
                    <img className="staff" src={ staff } alt="moon staff"/>
                </Flex>
                <BtnContainer>
                    <Btn onClick={ ()=>location.reload() } easy>🡠 Home</Btn>
                    <Btn onClick={ ()=>resetGame(props.stateObj) } hard>Play Again</Btn>
                </BtnContainer>
            </MessageContainer>
        )
    } else {
        return <></>
    }
}


export default GameEndedMessage;