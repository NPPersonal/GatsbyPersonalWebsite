import * as React from "react";
import CommonLayout from "../../../layouts/common-layout";
import { Box, Divider, SvgIcon, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { clsx } from "clsx";
import NetlifyForm from "../../../components/netlify-form/netlify-form";

const MessageMe = () => {
  const theme = useTheme();
  const divierSX = {
    "&::before, &::after": {
      borderTop: `thick solid ${
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.12)"
          : "rgba(255, 255, 255, 0.12)"
      }`,
    },
  };
  const bgColor =
    theme.palette.mode === "light" ? "bg-slate-100" : "bg-black/30";
  const shadowColor =
    theme.palette.mode === "light" ? "shadow-slate-200" : "shadow-black/30";
  const formWrapperClx = clsx(
    "p-8",
    "shadow-xl",
    "rounded-lg",
    bgColor,
    shadowColor
  );

  return (
    <CommonLayout>
      <Typography className="my-8" variant="h3" align="center">
        Message Me
      </Typography>
      <Box className={formWrapperClx}>
        <NetlifyForm />
      </Box>
      <Box className="my-8">
        <Divider sx={divierSX} variant="middle" textAlign="center">
          OR
        </Divider>
      </Box>
      <Box className="flex justify-center">
        <a href="mailto:tomneo2004@gmail.com" style={{ color: "inherit" }}>
          <SvgIcon sx={{ fontSize: 50 }}>
            <EmailIcon />
          </SvgIcon>
        </a>
      </Box>
    </CommonLayout>
  );
};

export default MessageMe;
