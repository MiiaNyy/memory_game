import styled, { css } from "styled-components";



// Gameboard
const GameBoardContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2em;
`;


// Scoreboard
const ScoreContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  background-color: rgba(0, 7, 15, 0.41);
  color: aliceblue;
  ${ props=>
          props.primary && css`
            background-color: rgba(0,7,15,0.71)` }
`;

export { GameBoardContainer, ScoreContainer };