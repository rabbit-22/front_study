import React from 'react';
import { Box } from '@mui/material';

interface Props {
  name: string,
}

function FormButton(props: Props) {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'end',
      color: 'rgb(50,114,198)',
      mt: 3, 
      fontSize: '0.9rem',
      }}>
      {props.name}
    </Box>
  );
};

export default FormButton;