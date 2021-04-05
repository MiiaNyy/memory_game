
// Takes in a array and shuffles the order and returns first eight items
function getEightCardsFromShuffledArr(arr) {
    return arr
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .filter((a, index)=>index < 8);
}

export default getEightCardsFromShuffledArr;