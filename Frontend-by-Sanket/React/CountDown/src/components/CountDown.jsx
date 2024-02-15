import { useState, useEffect, useRef } from "react";
import "./CountDown.css";
// import Timer from "../components/Timer/Timer";

export default function CountDown() {
  const [target, setTarget] = useState(null);

  const [diff, setDiff] = useState(0);
  //   const [id, setId] = useState(-1);
  //   useEffect(() => {
  //     setDiff(new Date(target) - new Date());
  //   }, [target]);
  const id = useRef(0);
  function handleSubmit() {
    id.current = setInterval(() => {
      // });

      setDiff(new Date(target) - new Date());
    }, 1000);
  }
  useEffect(() => {
    if (diff < 0) {
      clearInterval(id.current);
    }
  }, [diff]);

  const getDays = () => {
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const getHours = () => {
    const hoursInMs = diff % (1000 * 60 * 60 * 24);
    return Math.floor(hoursInMs / (100 * 60 * 60 * 24));
  };

  const getMinutes = () => {
    const minuteInMs = diff % (1000 * 60 * 60);
    return Math.floor(minuteInMs / (1000 * 60));
  };

  const getSeconds = () => {
    const secondInMs = diff % (1000 * 60);
    return Math.floor(secondInMs / 1000);
  };

  return (
    <>
      <h1>CountDown Timer App</h1>

      <div id="input">
        <input
          type="datetime-local"
          id="datetime"
          onChange={(e) => setTarget(e.target.value)}
        />

        <button id="submit" onClick={handleSubmit}>
          Start
        </button>
        <audio className="audio-element">
          <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"></source>
        </audio>
      </div>
      {diff}
      <div id="display">
        <ul>
          <li id="days">
            <span>{getDays()}</span>days
          </li>
          <li id="hours">
            <span>{getHours()}</span>hours
          </li>
          <li id="minutes">
            <span>{getMinutes()}</span>min
          </li>
          <li id="second">
            <span>{getSeconds()}</span>sec
          </li>
        </ul>
      </div>
      <div>{/* <Timer /> */}</div>
    </>
  );
}
