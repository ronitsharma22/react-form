import * as React from 'react';
import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

import { connect } from "react-redux";
import { actions } from "./actions";



 function CandidateTable(props) {

  const { savedFormDataRes, formDataArr, getFormdata } = props;
  console.log("new incoming data", formDataArr)
  useEffect(() => {
    getFormdata();
  }, [savedFormDataRes]);

  return (<>
    <Box display={"flex"} sx={{ justifyContent: "center" }}>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontWeight: "800",
          fontSize: "26px",
          lineHeight: "120%",
          color: "#25324B",
          marginTop: "5%"
        }}
      >
        Record Table
      </Typography>
    </Box>
    <hr style={{ width: "5%" }} />

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Residential Address</TableCell>
            <TableCell>Permanent Address</TableCell>
            <TableCell>Files Uploaded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formDataArr?.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.DOB}</TableCell>
              <TableCell>{row.raStreet1}&nbsp;{row.raStreet2}</TableCell>
              <TableCell>{row.paStreet1}&nbsp;{row.paStreet2}</TableCell>
              <TableCell>{row.fileArr.map((item,index)=>{
                  return (index+1!==row.fileArr.length?item.fileName + ", ":item.fileName +"")
              })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}
const mapDipatchToProps = (dispatch) => {
  return {
    saveFormData: (params) => dispatch(actions.saveFormData(params)),
    getFormdata: () => dispatch(actions.getFormdata()),
  };
};
const mapStateToProps = (state) => {
  return {
    formDataArr: state.formDataArr,
    savedFormDataRes: state.savedFormDataRes,
  };
};

export default connect(mapStateToProps, mapDipatchToProps) (CandidateTable);