import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardPage from './components/board/BoardPage';
import ScrollToTop from './components/common/ScrollToTop';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

function Router() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/board" element={<BoardPage />} />
            {/* <Route path="/board/:id" element={<BoardPage />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
