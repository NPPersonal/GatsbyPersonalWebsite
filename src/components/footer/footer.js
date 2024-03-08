import React from "react";
import Box from "@mui/material/Box";

const Footer = ({ shadow = false, children, ...props }) => {
  const up_shadow = shadow ? "shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]" : "";
  return (
    <Box className={`${up_shadow}`} component="footer" {...props}>
      {children}
    </Box>
  );
};

export default Footer;
