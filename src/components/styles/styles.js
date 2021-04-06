import styled from "styled-components";

const GameBoardContainer = styled.section`
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    `;

const CurrentLevelHeader = styled.h3`
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
      margin-top: 1em;
      
    `;

export {GameBoardContainer, CurrentLevelHeader};