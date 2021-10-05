import React from "react";
import styled from "styled-components";

export default function Intel({ children }) {
  return (
    <Wrapper>
      {children}
      <section>
        <SubTitle>HOW TO GET EARLY ACCESS:</SubTitle>
        <List>
          <Item>PRE-ORDER THE GAME</Item>
          <Item>SUBSCRIBE TO EA PLAY</Item>
        </List>
      </section>
      <section>
        <SubTitle>BETA SIZE (INSTALLED):</SubTitle>
        <List>
          <Item>PS5: 16.5 GB</Item>
          <Item>PS4: 20.75 GB</Item>
          <Item>XBOX SERIES X/S: 17.20 GB</Item>
          <Item>XBOX ONE: 9.34 GB</Item>
          <Item>PC: 17.7 GB</Item>
        </List>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
  margin-bottom: 90px;
`;

const SubTitle = styled.h3`
  color: #26ffdf;

  padding: 1.2em;
  font-size: 1.2em;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background-color: #26ffdf;
  padding: 10px;
  margin: 2px 0;
`;
