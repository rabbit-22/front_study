import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Division from '../common/Division';
import FormButton from '../common/FormButton';
import InputTitle from '../common/InputTitle';

/**
 * 회원가입 입력폼
 * 이메일, 비밀번호, 비밀번호 확인 입력창
 * 회원가입 버튼, 로그인 버튼
 */

function SignupForm() {
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
          <InputTitle title='회원가입' />
          <Division />
          <TextField sx={{ mb: 3 }} onChange={handleChange} name="id" required label="Email Address" variant="outlined" autoFocus/>
          <TextField onChange={handleChange} sx={{ mb: 3 }} name="pwd" required label="Password" variant="outlined" type="password"/>
          <TextField sx={{ mb: 0.5 }}onChange={handleCheck} name="confirmPwd" required label="Confirm Password " variant="outlined" type="password"/>
          <Box sx={{ color: '#666666', fontSize: '0.8rem', mb: 1}}>
            {pwdMessage} &nbsp;
          </Box>
          <Button onClick={handleSubmit} sx={{ mt: 1 }} variant="contained">Sign up</Button>
          <Link to="/">
            <FormButton name='Sign in'/>
          </Link>
        </Box>
    </Container>
  );
};

export default SignupForm;