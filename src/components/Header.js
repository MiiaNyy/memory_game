import React from "react";
import styled from "styled-components"
import logo from "../images/logo.png"

function Header() {
    return (
        <header className="container">
            <HeaderTitle>
                <HeaderImg src={ logo } alt=""/>
                <h1>Sailor Moon memory game</h1>
            </HeaderTitle>
            <HeaderText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores earum magnam odio quas.
                Adipisci animi asperiores commodi consequuntur facere, facilis harum magni non, odio perferendis
                quidem quis quo similique.
            </HeaderText>
        </header>
    )
}


const HeaderImg = styled.img`
  max-width: 10%;
  margin-right: 1em;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 1em 0;
  margin-bottom: 1em;  
  text-align: center;
`;

const HeaderText = styled.p`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2em;
`;


export default Header;
