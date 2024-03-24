import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { useI18next } from "gatsby-plugin-react-i18next";
import Recaptcha from "react-recaptcha";
import Typography from "@mui/material/Typography";

const validationSchema = (t) =>
  yup.object({
    name: yup.string("Enter your name").required(t("form-name-required")),
    email: yup
      .string("Enter your e-mail")
      .email(t("form-email-invalid"))
      .required(t("form-email-required")),
    message: yup
      .string("Enter your message")
      .required(t("form-message-required")),
    recaptcha: yup.string().required(t("no-robot")),
  });

const NetlifyForm = ({ feedbackDuration = 6000, lang = "en-GB" }) => {
  const { t } = useI18next();
  const [error, setError] = React.useState(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const recaptchaRef = React.useRef(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema(t),
    onSubmit: async (values) => {
      // according to netlify
      // https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax
      values = {
        "form-name": "contact",
        name: values.name,
        email: values.email,
        message: values.message,
      };
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
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setSending(false);
        setSubmitSuccess(true);
      } catch (error) {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setSending(false);
        setError(error.message);
      }
    },
  });
  const onVerifyCallback = (response) => {
    formik.setFieldValue("recaptcha", response);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={submitSuccess}
        autoHideDuration={feedbackDuration}
        onClose={() => setSubmitSuccess(false)}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>{t("form-success-message")}</strong>
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error ? true : false}
        autoHideDuration={feedbackDuration}
        onClose={() => setError(null)}
      >
        <Alert severity="error">
          <AlertTitle>Fail</AlertTitle>
          <strong>{t("form-error-message")}</strong>
          <div>{error}</div>
        </Alert>
      </Snackbar>
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
          label={t("form-name-label")}
          placeholder={t("form-placeholder-name")}
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
          label={t("form-email-label")}
          placeholder={t("form-placeholder-email")}
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
          label={t("form-message-label")}
          placeholder={t("form-placeholder-message")}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Box className="flex flex-col flex-wrap justify-center items-center">
          <Box className="my-4">
            <Recaptcha
              ref={recaptchaRef}
              id="recaptcha"
              name="recaptcha"
              render="explicit"
              hl={lang}
              sitekey={process.env.GATSBY_RECAPTCHA_KEY}
              verifyCallback={onVerifyCallback}
            />
            {formik.errors.recaptcha && (
              <Typography className="text-red-600" component="p" align="center">
                {formik.errors.recaptcha}
              </Typography>
            )}
          </Box>
          <Button type="submit" variant="contained" disabled={sending}>
            {t("send")}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default NetlifyForm;
