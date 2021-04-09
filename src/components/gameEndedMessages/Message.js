import React, { useState } from "react";
import { Btn, BtnContainer } from "../styles/generalStyles";
import { Flex, MessageContainer } from "../styles/messagesStyles"
import { resetGame, playNextLevel } from "./resetGame";

function Message(props) {
    let stateObj = props.stateObj;
    const [toggleSlideAnimation, setSlideAnimation] = useState(false);
    const animation = toggleSlideAnimation ? "toggleOut" : "toggleIn";
    stateObj.setSlideAnimation = setSlideAnimation;

    return (
        <MessageContainer  className={ animation }>
            <h2>{ props.header }</h2>
            <Flex>
                <Flex endMsgText>
                    <p>{ props.children }</p>
                    <Flex endMsgPoints>
                        <p>Your points: { stateObj.currentScore } </p>
                        <p>Max points: { stateObj.maxScore } </p>
                    </Flex>
                    <BtnContainer>
                        <Btn onClick={ ()=>location.reload() } easy>🡠 Home</Btn>
                        <ResetGameBtns stateObj={ stateObj }/>
                    </BtnContainer>
                </Flex>
                <img src={ props.image.img } alt={ props.image.description }/>
            </Flex>
        </MessageContainer>
    )
}

function ResetGameBtns(props) {
    if ( props.stateObj.gameIsOver ) {
        return <Btn onClick={ ()=>resetGame(props.stateObj) } hard>Try Again</Btn>
    } else {
        return <Btn onClick={ ()=>playNextLevel(props.stateObj) } hard>Next level 🡢</Btn>
    }
}

export default Message;