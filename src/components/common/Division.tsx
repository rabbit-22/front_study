import React from 'react';
import { Box } from '@mui/material';

/**
 * 구분선
 */

function Division() {
  return (
    <React.Fragment>
      <Box sx={{
        margin: '0 auto',
        width: '20rem',
        borderBottom: '1px solid #E9E9E9',
        mb: 5,
      }} />
    </React.Fragment>
  );
};

export default Division;