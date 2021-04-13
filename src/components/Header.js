import React from "react";
import title from "../images/title.png"

import { Container, Paragraph } from './Styles/generalStyles';
import { HeaderTitle } from "./Styles/startingScreenStyles";

function Header() {
    return (
        <Container>
            <Title/>
            <Paragraph>
                This is Sailor Moon inspired memory game. Your job is to click every character but only once. If you get
                all of the characters you win! <br/> Good luck ✨
            </Paragraph>
        </Container>
    )
}

function Title() {
    return (
        <HeaderTitle>
            <img src={ title } alt="sailor moon logo"/>
        </HeaderTitle>
    )
}

/* Title image from https://www.pngjoy.com/fullpng/x4e3i5r4f2q5h0/ */

export {Title, Header};
