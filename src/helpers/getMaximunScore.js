function getMaximumScore(gameMode) {
    if ( gameMode === 'Easy' ) {
        return 8;
    } else if ( gameMode === 'Medium' ) {
        return 12;
    } else {
        return 20;
    }
}

export default getMaximumScore;