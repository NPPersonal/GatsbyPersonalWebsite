import * as React from "react";
import CommonLayout from "../../../layouts/common-layout";
import {
  Box,
  Button,
  Divider,
  SvgIcon,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import * as yup from "yup";
import { clsx } from "clsx";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your e-mail")
    .email("Enter a valid e-mail")
    .required("E-mail is required"),
  message: yup.string("Enter your message").required("Message is required"),
});

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
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok === false) {
        throw Error("Unable to send message");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonLayout>
      <Typography className="my-8" variant="h3" align="center">
        Message Me
      </Typography>
      <Box className={formWrapperClx}>
        <form
          data-netlify="true"
          name="contact"
          method="post"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            className="mb-4"
            fullWidth
            id="name"
            name="name"
            label="Name"
            placeholder="Your name here"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className="mb-4"
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            placeholder="Your E-mail here"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className="mb-4"
            fullWidth
            multiline
            id="message"
            name="message"
            label="Message"
            placeholder="What do you want to tell me"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Box className="flex justify-center">
            <Button type="submit" variant="contained">
              Send
            </Button>
          </Box>
        </form>
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
