import React, { useState } from 'react';
import { Container, Btn, BtnContainer, Paragraph } from "./styles/generalStyles";
import { AnimationCont, HeaderTitle, StartBtn } from "./styles/startingScreenStyles";
import title from "../images/title.png";

function StartingScreen(props) {
    const [difficultySelected, setDifficultySelected] = useState(false);

    function selectLevel(level) {
        props.setGameMode(level)
        setDifficultySelected(true);
    }

    return (
        <Container>
            <HeaderTitle>
                <img src={ title } alt="sailor moon logo"/>
            </HeaderTitle>
            <Paragraph>This is Sailor Moon memory game. <br/> Your job is to click every character but only
                once. If you get all of the characters you win!
            </Paragraph>
            <Paragraph>First select difficulty level:</Paragraph>
            <BtnContainer>
                <Btn onClick={ ()=>selectLevel('Easy') } easy>Easy</Btn>
                <Btn onClick={ ()=>selectLevel('Medium') }>Medium</Btn>
                <Btn onClick={ ()=>selectLevel('Hard') } hard>Hard</Btn>
            </BtnContainer>
            <StartBtnContainer difficultySelected={difficultySelected} setGameIsStarted={props.setGameIsStarted}/>
        </Container>
    );
}

function StartBtnContainer(props) {
    if ( props.difficultySelected ) {
        return (
            <AnimationCont>
                <Paragraph>Then you can start the game when you are ready. <br/> Good luck ✨</Paragraph>
                <BtnContainer start="true">
                    <StartBtn active={ props.difficultySelected } onClick={ ()=>{
                        props.difficultySelected ? props.setGameIsStarted(true) : console.log('Difficulty level not' +
                            ' yet selected');
                    } }>start
                    </StartBtn>
                </BtnContainer>
            </AnimationCont>
        )
    } else {
        return <></>
    }
}

export default StartingScreen;