import React, { useState } from "react";
import styled from "styled-components";
import Minimum from "../components/Minimum";
import Recommended from "../components/Recommended";

export default function Requirements({ children }) {
  const [isMinimum, setIsMinimum] = useState(true);

  function handleIsMinimum() {
    setIsMinimum(true);
  }
  function handleIsRecommendet() {
    setIsMinimum(false);
  }
  return (
    <Wrapper>
      {children}
      <Select isActive={isMinimum} onClick={handleIsMinimum}>
        MINIMUM
      </Select>
      <Select isActive={isMinimum === false} onClick={handleIsRecommendet}>
        RECOMMENDED
      </Select>
      <ListBackground>
        <List>{isMinimum ? <Minimum /> : <Recommended />}</List>
      </ListBackground>
      <Info>
        Click the <span>GPU</span> for comparision site.
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
`;

const ListBackground = styled.div`
  background-color: black;
  padding: 15px;
`;

const List = styled.ul`
  color: white;
  list-style: none; /* Remove default bullets */
  padding: 0 0 0 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8em;
`;

const Select = styled.button`
  all: unset;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? `
  background-color: #26ffdf;
  `
      : `
      border-inline-style: 2px solid #26ffdf; 
  color: #26ffdf;
  `}
  padding: 1.2em;
  font-size: 1.2em;
`;

const Info = styled.p`
  color: #26ffdf;
  & span {
    background-color: #26ffdf;
    color: black;
    padding: 4px;
  }
`;
