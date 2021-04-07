import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2em auto 0;
  padding: 0 5em;
  background-color: rgba(0, 7, 15, 0.56);
  ${ props=>
          props.gameboard && css`
            padding-bottom: 1em;
            margin-bottom: 2em;
            margin-top: 0` }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5em;
  margin-bottom: 2em;
  ${ props=>
          props.start && css`
            padding-bottom: 2em` }
`;

const Button = styled.button`
  background-color: ${ props=>props.easy
          ? '#ffd166'
          : props.hard
                  ? '#ffafcc'
                  : '#82ddf0'
  };

  border: 2px solid ${ props=>props.easy
          ? '#faa13c'
          : props.hard
                  ? '#f66b92'
                  : '#00a5bd'
  };

  &:hover {
    background-color: #AFB3F7;
    border: 2px solid #7479ff;
    transform: scale(1.1);
  }
;

  &:focus {
    background-color: #AFB3F7;
    border: 2px solid #82ddf0;
    transform: scale(1.1);
  }
;
`;

const StartBtn = styled.button`
  font-size: ${ props=>(props.active ? "1.2rem" : "1rem") };
  background-color: ${ props=>(props.active ? "#F47AE1" : "rgba(0, 7, 15, 0.56)") };
  border: ${ props=>(props.active ? "2px solid #f66b92" : "2px solid rgba(0, 7, 15, 0.56)") };
  &:hover {
    background-color: ${ props=>(props.active ? "#AFB3F7" : "rgba(0, 7, 15, 0.56)") };
    border: 2px solid ${ props=>(props.active ? "#7479ff" : "rgba(0, 7, 15, 0.56)") };
    transform: ${ props=>(props.active ? "scale(1.1)" : "none") };;
  }
`;

//HEADER

const HeaderTitle = styled.div`
  padding: 2em 0;
  text-align: center;
`;

const HeaderParagraph = styled.p
    `
      width: 90%;
      text-align: center;
      font-weight: 700;
      margin: 0 auto;
      padding-bottom: 2em;
      letter-spacing: 0.1em;
      line-height: 2em;
      color: #fdefef;
      ${ props=>
              props.start && css`
                width: 60%` }
    `
;


// Gameboard
const GameBoardContainer = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2em;
      margin-bottom: 2em;
    `
;


// Scoreboard
const ScoreContainer = styled.section
    `
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1em;
      background-color: rgba(0, 7, 15, 0.41);
      color: #e0e0e0;
      font-weight: 700;
      letter-spacing: 0.1em;
      ${ props=>
              props.primary && css`
                background-color: rgba(0, 7, 15, 0.71)` }
    `
;


const CharacterImage = styled.img
    `
      width: 100%;
      max-height: 160px;
      object-fit: cover;
      object-position: center top;
    `
;


const Card = styled.div
    `
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      max-width: 180px;
      margin-top: 2em;
      text-align: center;
      background: #FFDDE1; /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #ffdde1, #ee9ca7); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      border: 10px solid palevioletred;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    `
;


export {
    GameBoardContainer,
    ScoreContainer,
    Container,
    CharacterImage,
    Card,
    HeaderParagraph,
    HeaderTitle,
    Button,
    StartBtn,
    ButtonContainer,
};