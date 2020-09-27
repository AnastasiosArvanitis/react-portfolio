import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@material-ui/core";
sssssssssssssssssssssssss
import { ErrorMessage, Field, Form, Formik, useField } from "formik";

import { string, object } from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import cx from "clsx";

/* import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../style/theme'; */

import "./Contact.scss";

const useStyles = makeStyles({
  buttonStyle: {
    backgroundColor: "#090955",
    color: "#e6e6e6",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#2a41eb",
    },
    "&:active": {
      backgroundColor: "#f21d1d",
    },
  },
  textField: {
    color: "red",
  },
  contactTitle: {
    color: "#090955",
    textAlign: "center",
  },
});

const cardStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e6e6e6",
    margin: "auto",
    borderRadius: "70px 30px 70px 30px",
    padding: "20px",
  },
}));

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const classes = useStyles();
  const cardStyle = cardStyles();

  const fadeShadowStyles = useFadedShadowStyles();

  return (
    <section className="contact-section">
      {/* <ThemeProvider theme={theme}> */}
      <Card className={cx(cardStyle.root, fadeShadowStyles.root)}>
        <CardContent>
          <Box marginBottom={3}>
            <Typography variant="h6" className={classes.contactTitle}>
              Contact me
            </Typography>
          </Box>

          <Formik
            validationSchema={object({
              name: string().required("Your name is required").min(2).max(20),
              lastName: string()
                .required("Your last name is required")
                .min(2)
                .max(20),
              email: string().email().required(),
              message: string()
                .required("Your message is required")
                .min(2)
                .max(200),
            })}
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {
              fetch("http://localhost:3000/send", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  lastName: values.lastName,
                  email: values.email,
                  message: values.message,
                }),
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form>
                <Box marginBottom={2} className={classes.textField}>
                  <FormGroup>
                    <Field
                      name="name"
                      as={TextField}
                      label="Name"
                      variant="outlined"
                    />
                    <ErrorMessage name="name" />
                  </FormGroup>
                </Box>

                <Box marginBottom={2}>
                  <FormGroup className={classes.textField}>
                    <Field
                      name="lastName"
                      as={TextField}
                      label="Last Name"
                      variant="outlined"
                      color="primary"
                    />
                    <ErrorMessage name="lastName" />
                  </FormGroup>
                </Box>

                <Box marginBottom={2}>
                  <FormGroup className={classes.textField}>
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      variant="outlined"
                      color="primary"
                    />
                    <ErrorMessage name="email" />
                  </FormGroup>
                </Box>

                <Box marginBottom={2}>
                  <FormGroup className={classes.textField}>
                    <Field
                      name="message"
                      as={TextField}
                      label="Your Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      color="primary"
                    />
                    <ErrorMessage name="message" />
                  </FormGroup>
                </Box>

                <Box>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    fullWidth
                    className={classes.buttonStyle}
                  >
                    Submit
                  </Button>
                </Box>

                {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                {/*<pre>{JSON.stringify(values, null, 4)}</pre>*/}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      {/* </ThemeProvider> */}
    </section>
  );
};

export default Contact;

/* <pre>{JSON.stringify(errors, null, 4)}</pre>
<pre>{JSON.stringify(values, null, 4)}</pre> */

/*  setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log('---------');
                res();
              }, 5000); */

/* const onSubmit = (values) => {
                      console.log(values);
                      fetch('http://localhost:8000/api/v1/users/login/', {
                        method: 'POST',
                        headers: {
                          'content-type': 'application/json'
                        },
                        body: JSON.stringify({ 'email': values.email, 'password': values.password })
                      }).then(res => {
                        console.log(res);
                      }).catch(err => {
                        console.log(err);
                      })

                    } */
