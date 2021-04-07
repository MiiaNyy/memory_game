import React from "react";
import title from "../images/title.png"
import { Container, HeaderTitle, HeaderParagraph } from './styles/styles'

function Header() {
    return (
        <Container>
            <HeaderTitle>
                <img src={title} alt="sailor moon logo"/>
            </HeaderTitle>
            <HeaderParagraph>
                This is Sailor Moon inspired memory game. Your job is to click every character but only once. <br/>Good luck ✨
            </HeaderParagraph>
        </Container>
    )
}



export default Header;
