import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Title({title} ) {
    return (
        <Typography variant="h3" gutterBottom component="div">
          {title}
      </Typography>
    )
}