import getCurrentCardDeck from "./getCurrentCardDeck";

function playNextLevel(obj) {
    resetStates(obj);
    setTimeout(()=>{
        obj.setUserWon(false);
    }, 1000);

    if ( obj.gameMode === 'Easy' ) {
        obj.setGameMode('Medium');
        obj.setCurrentCards(()=>getCurrentCardDeck('Medium'));
    } else if ( obj.gameMode === 'Medium' ) {
        obj.setGameMode('Hard');
        obj.setCurrentCards(()=>getCurrentCardDeck('Hard'));
    }
}

function resetGame(obj) {
    resetStates(obj);
    setTimeout(()=>{
        if ( obj.gameMode === 'Hard' ) {
            obj.setUserWon(false);
        } else {
            obj.setGameIsOver(false);
        }
    }, 1000);
    obj.setCurrentCards(()=>getCurrentCardDeck(obj.gameMode));
}

function resetStates(obj) {
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    obj.setSlideAnimation(true);
}


export { resetGame, playNextLevel };