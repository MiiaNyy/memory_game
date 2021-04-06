// Takes in a array and shuffles the order and returns right amount of cards depending on game level
function getCardsFromShuffledArr(arr, gameMode) {
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

    return arr
        .map((a)=>({sort: Math.random(), value: a}))
        .sort((a, b)=>a.sort - b.sort)
        .map((a)=>a.value)
        .filter((a, index)=>index < numOfCards);
}

export default getCardsFromShuffledArr;