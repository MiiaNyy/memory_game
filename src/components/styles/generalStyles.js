import styled, { css, keyframes } from "styled-components";

// GENERAL COMPONENTS
const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 1em auto 0;
  background-color: rgba(0, 7, 15, 0.56);
  padding-bottom: 1em;
  ${ props=>
          props.gameboard && css`
            padding-bottom: 0.6em;
            margin-bottom: 2em;
            margin-top: 0` };
  @media (min-width: 900px) {
    padding: 0 5em 1em 5em;
  }
`;

const Paragraph = styled.p
    `
      width: 90%;
      max-width: 700px;
      text-align: center;
      margin: 0 auto;
      padding-bottom: 2em;
      color: #fdefef;
    `;

// BUTTONS
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 2em;
  transition: all 0.2s ease-in-out;
  ${ props=>props.start && css`
            padding-bottom: 2em` };
  @media (min-width: 550px) {
    gap: 5em
  }
`;

const Btn = styled.button`
  background-color: ${ props=>props.easy
          ? '#ffd166'
          : props.hard
                  ? '#ffafcc'
                  : '#82ddf0' };

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
    outline: 2px solid #82ddf0;
  }
;
`;


export {
    Container,
    Paragraph,
    Btn,
    BtnContainer

};