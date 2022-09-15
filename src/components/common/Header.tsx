import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from '../../images/snowman-solid.svg';


function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', position: 'fixed', width: '100vw', top: 0, py: 2, backgroundColor: '#73a2ff ', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)'}}>
      <img src={logo} alt='logo' width="50px" style={{ margin: '0 0 0 2rem'}} />
      <Box sx={{ display: 'flex', alignItems: 'center', '& > *': { ml: 5, fontSize: '1.1rem', color: 'white'}, '& > *:hover': {color: '#627eb3'}, '&:last-child': { mr: 5} }}>
        <Link to="/board">게시판</Link>
        <Link to="/board/write">글쓰기</Link>
        <Link to="/">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </Box>
    </Box>
  );
};

export default Header;