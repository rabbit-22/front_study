import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../common/FormButton';
import Division from '../common/Division';
import InputTitle from '../common/InputTitle';
import { useCookies } from 'react-cookie';

/**
 * 로그인 입력폼
 * 이메일, 비밀번호 입력창 
 * 로그인 버튼, 회원가입 버튼
 */

function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [cookies, setCookies] = useCookies(['sid']);
  const handleChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }
  const handleChangePwd = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }

  const handleClick = () => {
    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        'id': id,
        'password': pwd
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response.sid) {
        navigate('/board');
      } else {
        alert('아이디와 비밀번호를 다시 확인해주세요');
      }
    })
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
          <TextField sx={{ mb: 3 }} onChange={handleChangeId} id="email" required label="Email Address" variant="outlined" autoFocus/>
          <TextField id="password" onChange={handleChangePwd} required label="Password" variant="outlined" type="password"/>
          <Button  onClick={handleClick} sx={{mt: 3}} variant="contained">Sign in</Button>
          <Link to="/signup">
            <FormButton name='Sign up'/>
          </Link>
      </Box>
    </Container>
  );
};

export default LoginForm;