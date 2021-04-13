import React from 'react';
import crying from "../../images/crying.png" //http://robinscels.rubberslug.com/gallery/inv_info.asp?ItemID=304903
import happy from "../../images/happy.png";
import winner from "../../images/winner.png"; //https://www.kindpng.com/imgv/hbThxJm_sailor-moon-sailor-mars-sailor-jupiter-hd-png/
import Message from "./Message";

const images = {
    gameOver: {
        img: crying,
        description: 'sailor moon crying'
    },
    userWon: {
        img: happy,
        description: 'sailor moon winking'
    },
    lastLevelWon: {
        img: winner,
        description: "sailor guardians",
    }
}

function GameEndedMessage(props) {
    let stateObj = props.stateObj;
    if ( stateObj.gameIsOver ) {
        return (
            <Message image={ images.gameOver } header="Game over" stateObj={ stateObj }>
                Unfortunately you clicked the same character twice and LOST!
            </Message>
        )
    } else if ( stateObj.userWon && stateObj.gameMode !== 'Hard' ) {
        return (
            <Message image={ images.userWon } header="✨ Congratulations ✨" stateObj={ stateObj }>
                You got all of the characters without clicking the same character twice.
            </Message>
        )
    } else if ( stateObj.userWon && stateObj.gameMode === 'Hard') {
        return (
            <Message image={images.lastLevelWon} stateObj={ stateObj } lastLevelWon={true}/>
        )
    } else {
        return <></>
    }
}


export default GameEndedMessage;