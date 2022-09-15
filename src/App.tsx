import React from 'react';
import { Box, Container } from '@mui/material';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" >
        <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', alginItems: 'center', m: '0 2rem'}}>
          <Router />
        </Box>
      </Container>
    </div>
  );
}

export default App;
