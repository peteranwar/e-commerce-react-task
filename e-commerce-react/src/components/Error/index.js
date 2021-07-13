import React from 'react'
import {  Box, Typography } from '@material-ui/core';
function Error() {
    return (
        <Box display="flex" paddingY="100px" marginX="auto">
          <Typography variant="h3" color="secondary">
            Oops... Something went wrong.
          </Typography>
        </Box>
    )
}

export default Error
