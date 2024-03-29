import * as React from "react";

/**
 * Spin a set of random letters as animation effect then reach
 * final decided letter
 *
 * @param letter final decided letter to display
 * @param letterColor color for final decided letter
 * @param letterSize font size for final decided letter
 * @param randLetters string with a set of letters that will be
 * selected randomly to display while spin animation is running
 * @param randLetterColor color for spin letter
 * @param randLetterSize font size for spin letter
 * @param randInterval how long does it take to display for a
 * random selected letter before next one
 * @param duration how long does it take for spin animation then
 * display final decided letter.
 * @param randDurationRange an array [min_duration, max_duration] to define
 * random duration. If this parameter is given then **duration** will be
 * ignored
 * @param delay how long before spin animation start
 * @returns
 */
const SpinLetter = ({
  letter,
  letterColor = "inherit",
  letterSize = "inherit",
  randLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  randLetterColor = "inherit",
  randLetterSize = "inherit",
  randInterval = 100,
  duration = 2000,
  randDurationRange = undefined,
  delay = 0,
}) => {
  const [char, setChar] = React.useState("");
  const [charColor, setCharColor] = React.useState(randLetterColor);
  const [charScale, setCharScale] = React.useState(randLetterSize);
  const [started, setStarted] = React.useState(false);
  const intervalTimerRef = React.useRef(null);
  const finishTimerRef = React.useRef(null);
  const delayTimerRef = React.useRef(null);

  React.useEffect(() => {
    if (delayTimerRef.current === null) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay);
      delayTimerRef.current = timer;
    }

    if (started) {
      if (finishTimerRef.current === null) {
        let totalDuration = duration;
        if (randDurationRange) {
          totalDuration = Math.floor(
            Math.random() * randDurationRange[1] + randDurationRange[0]
          );
        }
        const timer = setTimeout(() => {
          if (intervalTimerRef.current !== null) {
            clearInterval(intervalTimerRef.current);
          }
          setCharColor(letterColor);
          setCharScale(letterSize);
          setChar(letter);
        }, totalDuration);
        finishTimerRef.current = timer;
      }

      if (intervalTimerRef.current === null) {
        const timer = setInterval(() => {
          const idx = Math.floor(Math.random() * randLetters.length);
          setChar(randLetters[idx]);
        }, randInterval);
        intervalTimerRef.current = timer;
      }
    }

    return () => {
      if (intervalTimerRef.current !== null) {
        clearInterval(intervalTimerRef.current);
      }
      if (finishTimerRef.current !== null) {
        clearTimeout(finishTimerRef.current);
      }
      if (delayTimerRef.current !== null) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [started]);

  return (
    <div className="inline" style={{ color: charColor, fontSize: charScale }}>
      {char}
    </div>
  );
};

export default SpinLetter;
