import getCardsFromShuffledArr from "./getCardsFromShuffledArr";
import characterData from "../data/characterData";

function getCurrentCardDeck(gameMode) {

    // This returns shuffled card deck, which includes ALL of the cards
    const cardDeck = getCardsFromShuffledArr(characterData);
    let numOfCards;

    switch (gameMode) {
        case 'Easy':
            numOfCards = 8;
            break;
        case 'Medium':
            numOfCards = 12;
            break;
        case 'Hard':
            numOfCards = 20;
            break;
    }
    // This returns right amount of cards that we use in different levels
    return cardDeck.filter((a, index)=>index < numOfCards);
}

export default getCurrentCardDeck;