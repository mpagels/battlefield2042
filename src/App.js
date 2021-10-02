import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Countdown, { zeroPad } from "react-countdown";
import "./App.css";

dayjs.extend(utc);

const preloadBetaDate = "2021-10-05 07:00:00";
const earlyAccessdBetaStartDate = "2021-10-06 07:00:00";
const normalBetaStartDate = "2021-10-08 07:00:00";

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

export default function App() {
  const preloadTime = dayjs.utc(preloadBetaDate).local().format();
  const earlyAccessTime = dayjs.utc(earlyAccessdBetaStartDate).local().format();
  const normalTime = dayjs.utc(normalBetaStartDate).local().format();
  return (
    <div className="App">
      <h1 className="Header">BATTLEFIELD 2042</h1>
      <h2 className="Header">Countdown to BETA</h2>
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
    </div>
  );
}
