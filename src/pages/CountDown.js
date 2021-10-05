import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import {
  preloadTime,
  earlyAccessTime,
  normalTime,
  endTime,
} from "../utils/getDates";
import "../App.css";
import styled from "styled-components";

const Message = ({ message }) => {
  return <span className="CountDown">{message}</span>;
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return completed ? (
    <Message message="AVAILABLE" />
  ) : (
    <span className="CountDown">
      {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

const endRenderer = ({ days, hours, minutes, seconds, completed }) => {
  return completed ? (
    <Message message="HAS ENDED" />
  ) : (
    <span className="CountDown">
      {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

export default function CountDown({ children }) {
  return (
    <Wrapper>
      {children}
      <section>
        <h3 className="Header">PRELOAD:</h3>
        <Countdown date={preloadTime} renderer={renderer} />
      </section>
      <section>
        <h3 className="Header">EARLY ACCESS:</h3>
        <Countdown date={earlyAccessTime} renderer={renderer} />
      </section>
      <section>
        <h3 className="Header">START:</h3>
        <Countdown date={normalTime} renderer={renderer} />
      </section>
      <section>
        <h3 className="Header">END:</h3>
        <Countdown date={endTime} renderer={endRenderer} />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
  margin-bottom: 90px;
`;
