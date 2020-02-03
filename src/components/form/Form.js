import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MyTextField from '../textField/MyTextField'

const courseCategory = [
    {
      value: "webDevelopment",
      label: "Web Development"
    },
    {
      value: "networking",
      label: "Networking"
    },
    {
      value: "computerScience",
      label: "Computer Science"
    }
  ];
  
const form = props => {
    const {
      classes,
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset
    } = props;
  
    return (
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <MyTextField
                id="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstName ? errors.firstName : ""}
                error={touched.firstName && Boolean(errors.firstName)}
                
              />
              <MyTextField
                id="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.lastName ? errors.lastName : ""}
                error={touched.lastName && Boolean(errors.lastName)}
               
              />
              <MyTextField
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
               
              />
              <TextField
                select
                id="course"
                label="Course Category"
                value={values.course}
                onChange={handleChange("course")}
                helperText={touched.course ? errors.course : ""}
                error={touched.course && Boolean(errors.course)}
                margin="dense"
                variant="outlined"
                fullWidth
              >
                {courseCategory.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
               




              <MyTextField
                id="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                
              />
              <MyTextField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                
              />
            </CardContent>
            <CardActions className={classes.actions}>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                SUBMIT
              </Button>
              <Button color="secondary" onClick={handleReset}>
                CLEAR
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  };
  export default form