import React, { useState } from "react";

import { Btn, BtnContainer } from "../Styles/generalStyles";
import { Flex, MessageContainer } from "../Styles/messagesStyles"
import { resetGame, playNextLevel } from "../../helpers/resetGame";

import staff from "../../images/staff.png";

function Message(props) {
    let stateObj = props.stateObj;
    // When game over or user won, animation starts and when user clicks a button another animation starts that
    // takes message away from screen
    const [toggleSlideAnimation, setSlideAnimation] = useState(false);
    const animation = toggleSlideAnimation ? "toggleOut" : "toggleIn";
    stateObj.setSlideAnimation = setSlideAnimation;

    if ( props.lastLevelWon ) {
        return (
            <MessageContainer className={ animation }>
                <img style={{maxHeight: "200px"}} src={ props.image.img } alt={ props.image.description }/>
                <h2>✨ Congratulations ✨</h2>
                <Flex message_last_level>
                    <div>
                        <p>You beat the hardest level! </p>
                        <p>You deserve the title of Sailor Guardian and this staff to keep you safe in your future
                            adventures.</p>
                    </div>
                    <img style={{transform: "rotate(20deg)"}} src={ staff } alt="moon staff"/>
                </Flex>
                <BtnContainer>
                    <Btn onClick={ ()=>location.reload() } easy>🡠 Home</Btn>
                    <Btn onClick={ ()=>resetGame(stateObj) } hard>Play Again</Btn>
                </BtnContainer>
            </MessageContainer>
        )

    } else {
        return (
            <MessageContainer className={ animation }>
                <h2>{ props.header }</h2>
                <Flex>
                    <Flex messsage_txt_cont>
                        <p>{ props.children }</p>
                        <Flex message_point_cont>
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
}
/*style={{maxHeight: "250px", maxWidth: "50%"}}*/

function ResetGameBtns(props) {
    if ( props.stateObj.gameIsOver ) {
        return <Btn onClick={ ()=>resetGame(props.stateObj) } hard>Try Again</Btn>
    } else {
        return <Btn onClick={ ()=>playNextLevel(props.stateObj) } hard>Next level 🡢</Btn>
    }
}

export default Message;