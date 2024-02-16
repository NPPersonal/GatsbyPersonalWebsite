import { Box, Fade, Slide } from "@mui/material";
import * as React from "react";

export const ExSlide = ({ delay = 0, children, ...props }) => {
  const [started, setStarted] = React.useState(false);
  const delayTimerRef = React.useRef(null);
  React.useEffect(() => {
    if (delayTimerRef.current === null) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay);
      delayTimerRef.current = timer;
    }
    return () => {
      if (delayTimerRef.current !== null) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [delay]);
  if (started) {
    return (
      <Slide {...props}>
        <Box>{children}</Box>
      </Slide>
    );
  }
  return null;
};

export const ExFade = ({ delay = 0, children, ...props }) => {
  const [started, setStarted] = React.useState(false);
  const delayTimerRef = React.useRef(null);
  React.useEffect(() => {
    if (delayTimerRef.current === null) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay);
      delayTimerRef.current = timer;
    }
    return () => {
      if (delayTimerRef.current !== null) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [delay]);
  if (started) {
    return (
      <Fade {...props}>
        <Box>{children}</Box>
      </Fade>
    );
  }
  return null;
};
