import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({id: '', pwd: ''})
  const [confirmPwd, setConfirmPwd] = useState<String>('');
  const [pwdMessage, setPwdMessage] = useState<String>('');
  const [confirmState, setConfirmState] = useState<Boolean>(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setConfirmPwd(e.target.value);
  };

  const handleSubmit = () => {
    if (confirmState === true && inputs.id != '') {
      // fetch
      navigate('/');
    } else if (confirmState === false) {
      alert('비밀번호를 확인해주세요.');
    } else if (inputs.id === '') {
      alert('아이디를 입력해주세요');
    } 
  };

  useEffect(() => {
    if(inputs.pwd === confirmPwd && inputs.pwd != '' && confirmPwd != '') {
      setPwdMessage('비밀번호가 일치합니다.');
      setConfirmState(true);
    } else if (confirmPwd === ''){
      setPwdMessage('');
    }
    else {
      setPwdMessage('비밀번호가 일치하지 않습니다.');
      setConfirmState(false);
    }
  }, [confirmPwd]);
  
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
              회원가입
          </Box>
          <Box sx={{
            margin: '0 auto',
            width: '20rem',
            borderBottom: '1px solid #E9E9E9',
            mb: 5,
          }} />
          <TextField sx={{ mb: 3 }} onChange={handleChange} name="id" required label="Email Address" variant="outlined" autoFocus/>
          <TextField onChange={handleChange} sx={{ mb: 3 }} name="pwd" required label="Password" variant="outlined" type="password"/>
          <TextField sx={{ mb: 0.5 }}onChange={handleCheck} name="confirmPwd" required label="Confirm Password " variant="outlined" type="password"/>
          <Box sx={{ color: '#666666', fontSize: '0.8rem', mb: 1}}>
            {pwdMessage} &nbsp;
          </Box>
          <Button onClick={handleSubmit} sx={{ mt: 1 }} variant="contained">Sign up</Button>
          <Link to="/">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'end',
              color: 'rgb(50,114,198)',
              mt: 3, 
              fontSize: '0.9rem',
              }}>
              Sign in
            </Box>
          </Link>
        </Box>
    </Container>
  );
};

export default SignupPage;