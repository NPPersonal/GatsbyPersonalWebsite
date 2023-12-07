import * as React from "react";
import CommonLayout from "../../../layouts/common-layout";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  Snackbar,
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
  const [error, setError] = React.useState(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [sending, setSending] = React.useState(false);
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
    onSubmit: async (values) => {
      // according to netlify
      // https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax
      values = { "form-name": "contact", ...values };
      const urlEncoded = new URLSearchParams(values).toString();
      try {
        setSending(true);
        setError(null);
        setSubmitSuccess(false);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncoded,
        });
        if (response.ok === false) {
          throw Error("Unable to send message");
        }
        formik.resetForm();
        setSending(false);
        setSubmitSuccess(true);
      } catch (error) {
        setSending(false);
        setError(error.message);
      }
    },
  });

  return (
    <CommonLayout>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={() => setSubmitSuccess(false)}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>The message had been sent</strong>
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error ? true : false}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert severity="error">
          <AlertTitle>Fail</AlertTitle>
          <strong>Something went wrong</strong>
          <div>{error}</div>
        </Alert>
      </Snackbar>
      <Typography className="my-8" variant="h3" align="center">
        Message Me
      </Typography>
      <Box className={formWrapperClx}>
        <form
          data-netlify="true"
          name="contact"
          method="post"
          onSubmit={formik.handleSubmit}
        >
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
            <Button type="submit" variant="contained" disabled={sending}>
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
