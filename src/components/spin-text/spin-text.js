import React from "react";
import SpinLetter from "./spin-letter";

/**
 * Spin each letter in a text to final letter and display whole text
 * @param text a string will be display
 * @param textSplitter a string splitter for divding text into letter
 * @param letterColor color for final decided letter
 * @param letterSize font size for final decided letter
 * @param randLetterColor color for spin letter
 * @param randLetterSize font size for spin letter
 * @param randInterval how long does it take to display for a
 * random selected letter before next one
 * @param duration how long does it take for spin animation then
 * display final decided letter.
 * @param delay how long before spin animation start
 * @param sequential if true then spin each letter one by one, otherwise
 * spin all letter all at onece
 * @returns
 */
const SpinText = ({
  text,
  textSplitter = "",
  letterColor = "inherit",
  letterSize = "inherit",
  randLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  randLetterColor = "inherit",
  randLetterSize = "inherit",
  randInterval = 50,
  duration = 1000,
  randDurationRange = undefined,
  delay = 0,
  sequential = false,
}) => {
  return (
    <div>
      {text.split(textSplitter).map((element, i) => {
        if (sequential) {
          return (
            <SpinLetter
              key={`${i}-${element}`}
              letter={element}
              randLetters={randLetters}
              letterColor={letterColor}
              randLetterColor={randLetterColor}
              letterSize={letterSize}
              randLetterSize={randLetterSize}
              randInterval={randInterval}
              duration={duration}
              randDurationRange={randDurationRange}
              delay={i * duration + delay}
            />
          );
        }
        return (
          <SpinLetter
            key={`${i}-${element}`}
            letter={element}
            randLetters={randLetters}
            letterColor={letterColor}
            randLetterColor={randLetterColor}
            letterSize={letterSize}
            randLetterSize={randLetterSize}
            randInterval={randInterval}
            duration={i * duration}
            randDurationRange={randDurationRange}
            delay={delay}
          />
        );
      })}
    </div>
  );
};

export default SpinText;
