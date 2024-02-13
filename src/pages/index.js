import * as React from "react";
import { Typography, duration } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import { useInView } from "react-intersection-observer";

const SpinText = ({
  text,
  textSplitter = "",
  randInterval = 50,
  duration = 1000,
  randDuration = false,
  randDurationRange = [1000, 3000],
}) => {
  return (
    <div>
      {text.split(textSplitter).map((element, i) => {
        return (
          <SpinLetter
            key={`${i}-${element}`}
            letter={element}
            randInterval={randInterval}
            duration={i * duration}
            randDuration={randDuration ? randDurationRange : undefined}
          />
        );
      })}
    </div>
  );
};

const SpinLetter = ({
  letter,
  randLetters = `!@#$%^&*~<>?{}[]\\|abcdefghijklmnopqrstuvwxyz1234567890`,
  randInterval = 100,
  duration = 2000,
  randDuration = undefined,
}) => {
  const [char, setChar] = React.useState("");
  const intervalTimerRef = React.useRef(null);
  const finishTimerRef = React.useRef(null);

  React.useEffect(() => {
    if (finishTimerRef.current === null) {
      let totalDuration = duration;
      if (randDuration) {
        totalDuration = Math.floor(
          Math.random() * randDuration[1] + randDuration[0]
        );
      }
      const timer = setTimeout(() => {
        if (intervalTimerRef.current !== null) {
          clearInterval(intervalTimerRef.current);
        }
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

    return () => {
      if (intervalTimerRef.current !== null) {
        clearInterval(intervalTimerRef.current);
      }
      if (finishTimerRef.current !== null) {
        clearTimeout(finishTimerRef.current);
      }
    };
  }, []);

  return <div className="inline">{char === " " ? "  " : char}</div>;
};

const IndexPage = () => {
  const titleInView = useInView({
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  });
  const subtitleInView = useInView({
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  });
  return (
    <CommonLayout>
      <Typography variant="h5" align="center">
        <SpinText text="Hello and welcome" duration={200} />
      </Typography>
      <div ref={titleInView.ref} className="overflow-hidden">
        <Typography
          className={`transition ease-out duration-[800ms] ${
            titleInView.inView ? "translate-y-0" : "translate-y-10"
          }`}
          variant="h2"
          align="center"
        >
          Hello
        </Typography>
      </div>
      <div ref={subtitleInView.ref} className="overflow-hidden">
        <Typography
          className={`transition ease-out delay-[800ms] duration-[800ms] ${
            subtitleInView.inView ? "translate-y-0" : "translate-y-10"
          }`}
          variant="h3"
          align="center"
        >
          Wellcome
        </Typography>
      </div>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" description="This is home page" />;
