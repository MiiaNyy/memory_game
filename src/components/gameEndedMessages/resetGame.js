import getCurrentCardDeck from "../../helpers/getCurrentCardDeck";

function playNextLevel(obj) {
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    obj.setSlideAnimation(true);
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
    obj.setSlideAnimation(true);
    setTimeout(()=>{
        if(obj.gameMode === 'Hard') {
            obj.setHardestLevelWon(false);
        } else {
            obj.setGameIsOver(false);
        }
    }, 1000);
    obj.setCurrentScore(0);
    obj.setClickedCards([]);
    obj.setCurrentCards(()=>getCurrentCardDeck(obj.gameMode));
}

export {resetGame, playNextLevel};