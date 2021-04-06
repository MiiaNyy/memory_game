import React from 'react'

import Header from "./Header";
import GameBoard from "./gameboard/Gameboard";
import { BackgroundImage, ContentWrapper } from "./styles/styles";

function App() {
    return (
        <>
            <Header/>
            <GameBoard/>
        </>
    )
}


export default App;