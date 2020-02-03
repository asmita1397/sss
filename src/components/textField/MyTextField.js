import React from 'react'
import TextField from "@material-ui/core/TextField";

function MyTextField(props) {
    return (
        <TextField
               {...props}
               margin="dense"
                variant="outlined"
                fullWidth
              />
    )
}

export default MyTextField
