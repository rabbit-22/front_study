import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * 게시판 테이블 
 * 글 제목, 작성자, 작성일
 */
interface Props {
  id: number;
  createdAt: string;
  updatedAt: string;
  writer: string;
  title: string;
  content: string;
}

function BoardTable() {
  const [data, setData] = useState<Props[]>();
  useEffect(() => {
    fetch('http://localhost:8000/boards/')
        .then(res => res.json())
        .then(data => {
            setData(data);
        }).catch(err => console.log(err));
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#d9e6ff'}}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>글 제목</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>작성자</TableCell>
            <TableCell align='right' sx={{ width:'5rem', fontWeight: 'bold' }}>작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((data, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Link to={`/board/${data.id}`}>{data.title}</Link>
              </TableCell>
              <TableCell align='right'>{data.writer}</TableCell>
              <TableCell align='right'>{data.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BoardTable;