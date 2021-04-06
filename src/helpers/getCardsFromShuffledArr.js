// Takes in a array and shuffles the order and returns right amount of cards depending on game level
function getCardsFromShuffledArr(arr) {

    return arr
        .map((a)=>({sort: Math.random(), value: a}))
        .sort((a, b)=>a.sort - b.sort)
        .map((a)=>a.value)

}

export default getCardsFromShuffledArr;