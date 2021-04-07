import React, {useState} from 'react';
import { Container, HeaderTitle, Button, ButtonContainer, HeaderParagraph, StartBtn } from "./styles/styles";
import title from "../images/title.png"

function StartingScreen(props) {
    const [difficultySelected, setDifficultySelected] = useState(false);

    function selectLevel(e) {
        console.log(e);
        setDifficultySelected(true);
    }

    return (
        <Container >
            <HeaderTitle>
                <img src={ title } alt="sailor moon logo"/>
            </HeaderTitle>
            <HeaderParagraph start="true">
                This is Sailor Moon inspired memory game. <br/> Your job is to click every character but only once. If you get all of the characters you win!
            </HeaderParagraph>
            <HeaderParagraph start="true">
                First select difficulty level:
            </HeaderParagraph>
            <ButtonContainer>
                <Button onClick={(e) => selectLevel()} easy>Easy</Button>
                <Button onClick={(e) => selectLevel()}>Medium</Button>
                <Button onClick={(e) => selectLevel()} hard>Hard</Button>
            </ButtonContainer>
            <HeaderParagraph start="true">
                Then you can start the game when you are ready. <br/> Good luck ✨
            </HeaderParagraph>
            <ButtonContainer start="true">
                <StartBtn active={difficultySelected}  onClick={ () => {
                    difficultySelected ? props.setGameIsStarted(true) : console.log('Difficulty level not yet' +
                        ' selected');
                } }>start</StartBtn>
            </ButtonContainer>
        </Container>
    );
}

export default StartingScreen;