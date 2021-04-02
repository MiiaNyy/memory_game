import React, { useState } from 'react';
import styled, { css } from "styled-components";

const Title = styled.h1`
  color: blueviolet;
  font-family: "Franklin Gothic Heavy", serif;
  text-decoration: underline;
`;

const Button = styled.button`
  padding: 1em 2em;
  margin-right: 1em;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: blueviolet;

  &:hover {
    background-color: deeppink;
  }

  ${ props=>
          props.primary && css`
            background-color: #707070;
            &:hover {
              background-color: black;
            }
          ` };
`;

const Counter = styled.p`
  font-size: 2em;
  color: #ff2af0;
`;


function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <Title>Styling exercises</Title>
            <Counter>You have clicked the button { counter } times</Counter>
            <Button primary onClick={ ()=>setCounter(counter + 1) }>Add one</Button>
            <Button onClick={ ()=>setCounter((prev)=>prev > 0 ? prev - 1 : prev) }>Subtract one</Button>

        </div>
    )
}