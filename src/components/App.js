import React, { useState } from 'react'

import Header from "./Header";
import GameBoard from "./gameboard/Gameboard";
import StartingScreen from "./StartingScreen";


function App() {
    const [gameIsStarted, setGameIsStarted] = useState(false);

    if ( !gameIsStarted ) {
        return <StartingScreen setGameIsStarted={setGameIsStarted}/>
    } else {
        return (
            <>
                <Header/>
                <GameBoard/>
            </>
        )
    }
}



export default App;