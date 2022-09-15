import React from 'react';
import BoardTable from './BoardTable';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * 게시판 페이지
 * 게시판 테이블, 글쓰기 버튼
 */

function BoardPage() {
  return (
    <>
      <BoardTable />
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 3}}>
        <Link to="/board/write">
          <Button variant="contained">글쓰기</Button>
        </Link>
      </Box>
    </>
  );
}

export default BoardPage;