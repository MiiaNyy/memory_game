import React from "react";
import title from "../images/title.png"

import { Container, Paragraph } from './styles/generalStyles';
import { HeaderTitle } from "./styles/startingScreenStyles";

function Header() {
    return (
        <Container>
            <HeaderTitle>
                <img src={ title } alt="sailor moon logo"/>
            </HeaderTitle>
            <Paragraph>
                This is Sailor Moon inspired memory game. Your job is to click every character but only once. If you get
                all of the characters you win! <br/> Good luck ✨
            </Paragraph>
        </Container>
    )
}

export default Header;
