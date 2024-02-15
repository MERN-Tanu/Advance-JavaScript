import { useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { durationSecond } = useRef(31);
  const [colors, setColors] = useState(["#dadfe0", 1]);

  const startTimer = () => {
    setIsPlaying(true);
    setColors([["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]);
    const audioE1 = document.getElementsByClassName("audio-element")[0];
    audioE1.play();
  };

  const resetTimer = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setColors([["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]);
    }
  };

  const renderTime = (value) => {
    if (value === 0) {
      return (
        <div>
          <button className="btn-white" onClick={resetTimer}>
            Start
          </button>
        </div>
      );
    }

    if (value === 31) {
      return (
        <div className="timer">
          <button className="btn-white" onClick={startTimer}>
            Start
          </button>
          <audio className="audio-element">
            <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"></source>
          </audio>
        </div>
      );
    }

    if (value <= 30) {
      return (
        <div className="timer">
          <div className="value">{value}</div>
        </div>
      );
    }
  };
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      size={240}
      durationSecond={durationSecond}
      colors={colors}
      trailColor={"#dadfe0"}
      renderTime={renderTime}
      onComplete={() => [false]}
    />
  );
}

export default Timer;
