import React from "react";
import { useInView } from "react-intersection-observer";

const RenderInView = ({ options = undefined, children, ...props }) => {
  const areaInView = useInView(options);

  return (
    <div ref={areaInView.ref} {...props}>
      {areaInView.inView ? children : null}
    </div>
  );
};

export default RenderInView;
