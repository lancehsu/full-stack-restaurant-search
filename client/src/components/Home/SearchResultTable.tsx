import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { State } from '../../store/rootReducer';
import { Restaurant } from '../../store/restaurants/types';
import { parseTimeToStr } from '../../util/dateToStrProcess';
import { IconButton } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';

const tableHead = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SearchResultTable: FC = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector<State, Restaurant[]>((state) => state.restaurants);

  return (
    <TableContainer style={{ gridArea: '6 / 1 / 12 / 13', width: '90%' }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {tableHead.map((e) => (
              <TableCell key={e}>{e}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[0].open, row[0].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[1].open, row[1].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[2].open, row[2].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[3].open, row[3].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[4].open, row[4].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[5].open, row[5].close)}
              </TableCell>
              <TableCell style={{ whiteSpace: 'pre-line' }} align="right">
                {parseTimeToStr(row[6].open, row[6].close)}
              </TableCell>
              <TableCell>
                <IconButton color="inherit">
                  <Bookmark />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResultTable;