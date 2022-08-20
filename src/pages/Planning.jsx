import { Box, Button, Card, CardHeader, FormControl, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

const StyledContainer = styled(Box)({
   display:"flex",
   justifyContent:"center",
   cursor:"pointer",
   padding:'20px 0px 20px 0px',
   marginTop:'50px'
})

const StyledCard = styled(Card)(()=>({
   display:'flex',
   justifyContent:'center',
   maxWidth:420,
  
 
   
}))

const StyledTableCell = styled(TableCell)(({theme})=>({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.bleu,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 19,
  },
}))
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 5,
  },
}));


function createData(name,depart, arrivee, ticket, price) {
  return { name,depart, arrivee, ticket, price };
}

const rows = [
  createData('YAOUNDE', '06h50', '10h50', 24, 5000),
  createData('YAOUNDE', '09h50', '14h50', 37, 5000),
  createData('YAOUNDE', '012h50', '17h50', 24, 5000),
  createData('YAOUNDE', '15h50', '20h50', 67, 5000),
  createData('YAOUNDE', '18h50', '23h50', 49, 5000),
];
function Planning() {
  return (
    // <StyledContainer>
    //  <StyledCard>
    //   <Typography> Jorl</Typography>
    //  </StyledCard>
    // </StyledContainer>
    // <Paper sx={{padding:4}}>
      <Container sx={{ padding:10}}>
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <StyledCard>
            <CardHeader  title="Planning Des Voyages" />
          </StyledCard>
          </Grid>
        </Stack>


        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <TableContainer component={Paper}  elevation={10}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" ele>
        <TableHead>
          <TableRow>
            <StyledTableCell>NUMERO  VOYAGE</StyledTableCell>
            <StyledTableCell align="right">DEPART</StyledTableCell>
            <StyledTableCell align="right">ARRIVEE</StyledTableCell>
            <StyledTableCell align="right">BILLET</StyledTableCell>
            <StyledTableCell align="right">PRIX</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.depart}</StyledTableCell>
              <StyledTableCell align="right">{row.arrivee}</StyledTableCell>
              <StyledTableCell align="right">{row.ticket}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right"><Button size="small" variant="contained" startIcon={<ConfirmationNumberOutlinedIcon/>}>ACHAT DE BILLET</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Stack>
      </Container>
    // </Paper>
  );
}

export default Planning;