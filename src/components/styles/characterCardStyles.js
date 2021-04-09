// CARDS
import styled from "styled-components";

const CharacterImage = styled.img
    `
      width: 100%;
      max-height: 170px;
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
    ;

      & > h3 {
        padding: 0.5em 0;
        margin-bottom: 0;
        font-size: 1.5rem;
      }
    `
;

export { Card, CharacterImage };