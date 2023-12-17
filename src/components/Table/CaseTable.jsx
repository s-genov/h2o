import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('BCD', 1, 'Beginknooppunt, Afstand ...', "13:29:00", "Begonnen in punt ..", "",),
  createData('BBE-C', 2, 'Een ander voorwerp ligt op ...', "", "",),
  createData('BBE-D', 3, "Afstand BCD in mtr.: 15", "", "", ""),
  createData('BBE-E', 4, 'Afstand BCD in mtr.: 25', "" , "")  ,
  createData('BBE-F', 5, 'Afstand BCD in mtr.: 35', "", ""),
  createData('BBE-E', 6, 'Afstand BCD in mtr.: 45')
];

const CaseTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>GEBREK</TableCell>
            <TableCell align="left">VOORWARDE</TableCell>
            <TableCell align="left">ERNST</TableCell>
            <TableCell align="left">OMVANG</TableCell>
            <TableCell align="left">INTENSITEIT</TableCell>
            <TableCell align="left">TIJDSTIP</TableCell>
            <TableCell align="left">KLOKSTAND</TableCell>
            <TableCell align="left">NAMEN UPLOAD FILE</TableCell>
            <TableCell align="left">VIDEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align='left'></TableCell>
              <TableCell align='left'></TableCell>
              <TableCell align='left'></TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left"></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CaseTable;