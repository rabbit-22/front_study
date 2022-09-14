import React, { PureComponent } from 'react';
import BoardTable from './BoardTable';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface BoardProps {}
interface BoardState {}

class BoardPage extends PureComponent<BoardProps, BoardState> {
  constructor(props: BoardProps) {
      super(props);
    }
  render() {
    return (
      <Box sx={{ m: 3}}>
        <BoardTable />
        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 3}}>
          <Link to="/">
            <Button variant="contained">글쓰기</Button>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default BoardPage;