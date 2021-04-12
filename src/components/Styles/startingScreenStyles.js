import styled from "styled-components";

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
  padding: 2em 1em 0 1em;
  text-align: center;
`;


export { HeaderTitle, StartBtn };