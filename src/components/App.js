import React, { useState } from 'react'

import Header from "./Header";
import GameBoard from "./Gameboard";

function App() {
    return (
        <>
            <Header/>
            <div className="container score-counter">
                <p>Current Score 0</p>
                <p>Max score 9</p>
            </div>
            <GameBoard/>>
        </>
    )
}


export default App;