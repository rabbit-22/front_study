import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WriteBoardPage from './pages/WriteBoardPage';
import BoardPage from './pages/BoardPage';
import ScrollToTop from './components/common/ScrollToTop';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReadBoardPage from './pages/ReadBoardPage';
import Header from './components/common/Header';
import { Box, Container } from '@mui/material';
import UpdateBoardPage from './pages/UpdateBoardPage';

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
              <Route path="/board/update" element={<UpdateBoardPage />} />
              <Route path="/board/:id" element={<ReadBoardPage />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
