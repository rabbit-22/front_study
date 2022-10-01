import React, { useState } from 'react';
import { Box, Button, TextareaAutosize, TextField } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createPost } from '../components/board/function';

/**
 * 게시판 글 수정 페이지
 * 제목, 내용 입력 및 등록, 취소
 */

function UpdateBoardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { title: string, content: string};
  const title = state.title;
  const content = state.content;
  const [inputs, setInputs] = useState({title: '', content: ''});

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  
  const handleClick = () => {
    if (inputs.title != ''){
      createPost('PUT', inputs.title, inputs.content);
      navigate('/board');
    } else {
      alert('제목을 입력해주세요');
    }
  };

  return (
    <React.Fragment>
      <TextField onChange={handleChange} value={title} name='title' variant="standard" sx={{ mb: 1, mt: 5 }} autoFocus placeholder='제목을 입력해 주세요'/>
      <TextareaAutosize onChange={handleChange} name='content' value={content} minRows={25} maxRows={25} style={{ resize:'none'}}/>
      <Box sx={{ display: 'flex', justifyContent:'space-between', mt: 3 }}>
        <Link to='/board'>
          <Button variant='contained' color='inherit' sx={{ mr: 2 }}>취소</Button>  
        </Link>
        <Button onClick={handleClick} variant='contained'>수정</Button>
      </Box>
    </React.Fragment>
  );
}

export default UpdateBoardPage;