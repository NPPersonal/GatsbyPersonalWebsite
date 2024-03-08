import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";

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

export const ExGrow = ({ delay = 0, children, ...props }) => {
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
      <Grow {...props}>
        <Box>{children}</Box>
      </Grow>
    );
  }
  return null;
};
