// Gameboard
import styled, { css } from "styled-components";

const GameboardContainer = styled.main`
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 2em;
          margin-bottom: 2em;
          padding-top: 1em;
    `
;

// Scoreboard
const ScoreContainer = styled.section
    `
      display: flex;
      justify-content: space-around;
      gap: 1em;
      flex-direction: column-reverse;
      padding: 1em;
      text-align: center;
      background-color: rgba(0, 7, 15, 0.41);
      color: #e0e0e0;
      font-weight: 700;
      letter-spacing: 0.1em;
      ${ props=>
              props.primary && css`
                position: -webkit-sticky; /* Safari */
                position: sticky;
                top: 0;
                font-size: 1.2rem;
                background-color: rgba(0, 7, 15, 0.71)` };

      @media (min-width: 550px) {
        flex-direction: row;
        align-items: center;
      }
    `
;

export {GameboardContainer, ScoreContainer};