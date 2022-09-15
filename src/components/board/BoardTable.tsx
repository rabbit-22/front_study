import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, TablePagination } from '@mui/material';
import { rows } from './Rows';
import { Link } from 'react-router-dom';

/**
 * 게시판 테이블 
 * 글 제목, 작성자, 작성일
 */

function BoardTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#d1d1d1'}}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>글 제목</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>작성자</TableCell>
            <TableCell align='right' sx={{ width:'5rem', fontWeight: 'bold' }}>작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Link to={`/board/${row.id}`}>{row.title}</Link>
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BoardTable;