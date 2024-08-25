import { Typography } from "@mui/material";
import React from "react";

const DelayLetter = ({ letter, delayMS = 0, onShow }) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
      if (onShow) {
        onShow();
      }
    }, delayMS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return <span className="inline">{show && letter}</span>;
};

export default function TypeWriter({
  text = "",
  separator = "",
  letterInterval = 1000,
  delayStartMS = 0,
}) {
  const letters = text.split(separator);
  // number of letters had been shown
  const [count, setCount] = React.useState(0);
  const handleLetterShow = () => {
    setCount((count) => count + 1);
  };
  return (
    <React.Fragment>
      {letters.map((letter, i) => {
        return (
          <DelayLetter
            key={`${letter}-${i}`}
            letter={letter}
            delayMS={i * letterInterval + delayStartMS}
            onShow={handleLetterShow}
          />
        );
      })}
      {count < letters.length ? (
        <span className="inline leading-7 animate-flash-caret">_</span>
      ) : null}
    </React.Fragment>
  );
}
