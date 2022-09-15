import React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Division from '../common/Division';

/**
 * 로그인 페이지
 * 이메일, 비밀번호 입력창 
 * 로그인 버튼, 회원가입 버튼
 */

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        alginItems: 'center',}}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            mb: 4,
            color: '#222222',
            }}>
            로그인
          </Box>
          <Division />
          <TextField sx={{ mb: 3 }} id="email" required label="Email Address" variant="outlined" autoFocus/>
          <TextField id="password" required label="Password" variant="outlined" type="password"/>
          <Button sx={{mt: 3}} variant="contained">Sign in</Button>
          <Link to="/signup">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              color: 'rgb(50,114,198)',
              mt: 3, 
              fontSize: '0.9rem',
              }}>
              Sign up
            </Box>
          </Link>
      </Box>
    </Container>
  );
};

export default LoginPage;
