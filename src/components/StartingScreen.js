import React, { useState } from 'react';
import { Container, HeaderTitle, Btn, BtnContainer, Paragraph, StartBtn, AnimationCont } from "./styles/styles";
import title from "../images/title.png"

function StartingScreen(props) {
    const [difficultySelected, setDifficultySelected] = useState(false);

    function selectLevel(level) {
        props.setGameMode(level)
        setDifficultySelected(true);
    }

    function StartBtnContainer() {
        if ( difficultySelected ) {
            return (
                <AnimationCont>
                    <Paragraph>Then you can start the game when you are ready. <br/> Good luck ✨</Paragraph>
                    <BtnContainer start="true">
                        <StartBtn active={ difficultySelected } onClick={ ()=>{
                            difficultySelected ? props.setGameIsStarted(true) : console.log('Difficulty level not yet' +
                                ' selected');
                        } }>start
                        </StartBtn>
                    </BtnContainer>
                </AnimationCont>
            )
        } else {
            return <BtnContainer start="true"/>
        }
    }

    return (
        <Container>
            <HeaderTitle>
                <img src={ title } alt="sailor moon logo"/>
            </HeaderTitle>
            <Paragraph>This is Sailor Moon inspired memory game. <br/> Your job is to click every character but only
                once. If you get all of the characters you win!
            </Paragraph>
            <Paragraph>First select difficulty level:</Paragraph>
            <BtnContainer>
                <Btn onClick={ ()=>selectLevel('Easy') } easy>Easy</Btn>
                <Btn onClick={ ()=>selectLevel('Medium') }>Medium</Btn>
                <Btn onClick={ ()=>selectLevel('Hard') } hard>Hard</Btn>
            </BtnContainer>
            <StartBtnContainer/>

        </Container>
    );
}

export default StartingScreen;