import React, { useState } from 'react'

import Header from "./Header";
import GameBoard from "./gameboard/Gameboard";
import StartingScreen from "./StartingScreen";


function App() {
    const [gameMode, setGameMode] = useState('Easy');
    const [gameIsStarted, setGameIsStarted] = useState(true);
    return (
        <>
            <Header/>
            <GameBoard gameMode={gameMode} setGameMode={setGameMode}/>
        </>
    )

}


/*    if ( !gameIsStarted ) {
        return <StartingScreen setGameMode={setGameMode} setGameIsStarted={setGameIsStarted}/>
    } else {
        return (
            <>
                <Header/>
                <GameBoard gameMode={gameMode} setGameMode={setGameMode}/>
            </>
        )
    }*/
export default App;