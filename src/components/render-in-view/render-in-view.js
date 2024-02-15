import * as React from "react";
import { useInView } from "react-intersection-observer";

const RenderInView = ({ options = undefined, children }) => {
  const areaInView = useInView(options);

  return (
    <div ref={areaInView.ref} className="overflow-hidden">
      {areaInView.inView ? children : null}
    </div>
  );
};

export default RenderInView;
