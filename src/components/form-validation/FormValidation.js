import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import  form from "../form/Form"


const styles = () => ({
    card: {
      maxWidth: 420,
      marginTop: 50
    },
    container: {
      display: "Flex",
      justifyContent: "center"
    },
    actions: {
      float: "right"
    }
  });
const FormValidation = withFormik({
    mapPropsToValues: ({
      firstName,
      lastName,
      email,
      course,
      password,
      confirmPassword
    }) => {
      return {
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        course: course || "",
        password: password || "",
        confirmPassword: confirmPassword || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      course: Yup.string().required("Select your course category"),
      password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
      confirmPassword: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match")
    }),
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        // submit to the server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    }
  })(form);
  
  export default withStyles(styles)(FormValidation);

