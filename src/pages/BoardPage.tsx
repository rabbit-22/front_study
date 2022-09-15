import React from 'react';
import BoardTable from '../components/BoardTable';
import { Button, Box, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * 게시판 페이지
 * 게시판 테이블, 글쓰기 버튼
 */

function BoardPage() {
  return (
    <>
      <BoardTable />
      <Box sx={{ position: 'relative' }}>
        <Pagination count={10} sx={{ display: 'flex', justifyContent: 'center', mt: 3}} />
        <Box sx={{ display: 'flex', justifyContent: 'end', position: 'absolute', right: 0, bottom: 0 }}>
          <Link to="/board/write">
            <Button variant="contained">글쓰기</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default BoardPage;