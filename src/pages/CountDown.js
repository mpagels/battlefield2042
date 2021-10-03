import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { preloadTime, earlyAccessTime, normalTime } from "../utils/getDates";
import "../App.css";
import styled from "styled-components";

const Available = () => {
  return <span className="CountDown">AVAILABLE</span>;
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return completed ? (
    Available()
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
        <Countdown
          date={preloadTime}
          renderer={renderer}
          onComplete={Available}
        />
      </section>
      <section>
        <h3 className="Header">EARLY ACCESS:</h3>
        <Countdown date={earlyAccessTime} renderer={renderer} />
      </section>
      <section>
        <h3 className="Header">START:</h3>
        <Countdown date={normalTime} renderer={renderer} />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
`;
