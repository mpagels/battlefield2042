import React from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { GiComputerFan } from "react-icons/gi";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <Wrapper>
      <Link exact to="/">
        <IconContext.Provider
          value={{ color: isRoot ? "black" : "#26ffdf", size: "3em" }}
        >
          <AiFillClockCircle />
        </IconContext.Provider>
      </Link>
      <Link to="/requirements">
        <IconContext.Provider
          value={{ color: isRoot ? "#26ffdf" : "black", size: "3em" }}
        >
          <GiComputerFan />
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
  display: flex; ;
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
