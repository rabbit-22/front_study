import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WriteBoardPage from './components/board/WriteBoardPage';
import BoardPage from './components/board/BoardPage';
import ScrollToTop from './components/common/ScrollToTop';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import ReadBoardPage from './components/board/ReadBoardPage';
import Header from './components/common/Header';
import { Box, Container } from '@mui/material';

function Router() {
  return (
    <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Container maxWidth="md" >
        <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', alginItems: 'center', m: '0 2rem'}}>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/board" element={<BoardPage />} />
              <Route path="/board/write" element={<WriteBoardPage />} />
              <Route path="/board/:id" element={<ReadBoardPage />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
