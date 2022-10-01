import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

/**
 * 게시판 글 열람 페이지
 * 제목, 글 내용 및 목록, 수정, 삭제 버튼
 * TODO: API 연동 이후 수정 버튼 클릭 시 props 전달
 */

interface Data {
  id: number;
  createdAt: string;
  updatedAt: string;
  writer: string;
  title: string;
  content: string;
}

function ReadBoardPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<Data>();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickModify = () => {
    navigate('/board/update', { state: 
      { content: data? data.content: null,
        title: data? data.title : null } });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickDelete = () => {
    setOpen(false);
    fetch(`http://localhost:8000/boards/${id}`, {
      method: 'DELETE'
    })
  .then(()=> {
    navigate('/board');
  })
  .catch(err => console.log(err));
  };

  useEffect(() => {
    fetch(`http://localhost:8000/boards/${id}`)
    .then(res => res.json())
    .then(data => {
        setData(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
    <Box sx={{ border: '1px solid #E9E9E9', p: 3, mt: 15}}>
      <Box sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.3rem' }}>{data ? data.title : null}</Box>
      <Box sx={{ borderBottom: '1px solid #E9E9E9', mb: 3}} />
      <Box>
        {data ? data.content : null}
      </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3, mb: 5 }}>
        <Link to='/board'>
          <Button sx={{ display: 'flex'}} variant='contained' color='inherit'>목록</Button>
        </Link>
        <Box sx={{ display: 'flex'}}>
          <Button onClick={handleClickModify} variant='contained' color='inherit' sx={{ mr: 2 }}>수정</Button>
          <Button onClick={handleOpen} variant='contained' color='inherit'>삭제</Button>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"게시글을 삭제하겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            삭제한 게시글은 복구할 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClickDelete} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ReadBoardPage;