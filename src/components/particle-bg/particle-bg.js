import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBG = ({ particleConfig }) => {
  const [init, setInit] = React.useState(false);
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return init ? <Particles id="particles" options={particleConfig} /> : null;
};

export default ParticleBG;
