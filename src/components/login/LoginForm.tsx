import React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../common/FormButton';
import Division from '../common/Division';
import InputTitle from '../common/InputTitle';

/**
 * 로그인 입력폼
 * 이메일, 비밀번호 입력창 
 * 로그인 버튼, 회원가입 버튼
 */

function LoginForm() {
  const navigate = useNavigate();
  const handleClick = () => {
    //fetch
    navigate('/board');
  }
  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        alginItems: 'center',}}>
          <InputTitle title='로그인' />
          <Division />
          <TextField sx={{ mb: 3 }} id="email" required label="Email Address" variant="outlined" autoFocus/>
          <TextField id="password" required label="Password" variant="outlined" type="password"/>
          <Button  onClick={handleClick} sx={{mt: 3}} variant="contained">Sign in</Button>
          <Link to="/signup">
            <FormButton name='Sign up'/>
          </Link>
      </Box>
    </Container>
  );
};

export default LoginForm;