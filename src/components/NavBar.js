import React from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { GiComputerFan, GiSwissArmyKnife } from "react-icons/gi";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Wrapper>
      <Link exact to="/">
        <IconContext.Provider
          value={{ color: path === "/" ? "black" : "#26ffdf", size: "3em" }}
        >
          <AiFillClockCircle />
        </IconContext.Provider>
      </Link>
      <Link to="/requirements">
        <IconContext.Provider
          value={{
            color: path === "/requirements" ? "black" : "#26ffdf",
            size: "3em",
          }}
        >
          <GiComputerFan />
        </IconContext.Provider>
      </Link>
      <Link to="/intel">
        <IconContext.Provider
          value={{
            color: path === "/intel" ? "black" : "#26ffdf",
            size: "3em",
          }}
        >
          <GiSwissArmyKnife />
        </IconContext.Provider>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  display: flex;
  background-color: black;
`;

const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100%;
  border: 2px solid #26ffdf;
  width: 100%;
  &.active {
    background-color: #26ffdf;
  }
`;
