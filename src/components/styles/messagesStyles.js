// GAME ENDED MESSAGES
import styled, { css } from "styled-components";

const MessageContainer = styled.div`
  position: fixed;
  width: 90%;
  max-width: 650px;
  padding: 1em 1em 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid #dfb0ff;
  background-color: rgba(255, 255, 255, 0.92);
  text-align: center;


  & > h2 {
    font-weight: 400;
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
    padding: 0 0 0.5em;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  ${ props=>
          props.endMsgPoints && css`
            margin: 0 auto;
            width: 80%;
            padding: 0 0.5em;
            border-bottom: 2px solid #dfb0ff;` };
  ${ props=>
          props.endMsgText && css`
            flex-direction: column;
            text-align: center;` };
  ${ props=>
          props.lastLevel && css`
            width: 65%;
            margin: 0 auto;
            padding-bottom: 1em;
          ` };
`;

const NewHighScoreMessage = styled.div`
  width: 90%;
  max-width: 300px;
  position: fixed;
  top: 5%;
  right: 5%;
  padding: 0.5em 0;
  text-align: center;
  border: 10px solid #f66b92;
  background-color: rgba(255, 255, 255, 0.92);
  -webkit-box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);
  -moz-box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);
  box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);
  transition: all 0.8s ease-in-out;
  opacity: 0;

  & > p {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export { MessageContainer, Flex, NewHighScoreMessage };