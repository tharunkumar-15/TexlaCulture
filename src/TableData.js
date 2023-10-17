import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
const useStyles = makeStyles({
  tableHeader: {
    backgroundColor: "#f9fafb",
  },
  row1: {
    backgroundColor: "#eff3ff",
    paddingRight:"40px"
  },
  row2: {
    backgroundColor: "#ebf9f2",
    paddingRight:"40px"
  },
  row3: {
    backgroundColor: "#fff9eb",
    paddingRight:"40px"
  },
  companyNameCell: {
    display: "flex",
    paddingLeft: "10px", 
  },
  companyNameCircle: {
    width: "40px",
    height: "40px",
    backgroundColor: "#091a7a",
    borderRadius: "50%",
    marginTop:"15px",
    marginRight: "15px",
  },
  tc:{
    color:"white",
    border:"2px solid white",
    marginTop:"6px",
    fontWeight:"bold",
    width:"55%",
    textAlign:"center",
    marginLeft:"8px"
  },
  companyname: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop:"10px",
    paddingRight:"20px"
  },
  secondname: {
    textAlign: "center",
    fontSize: "15px",
    color: "#637381",
    marginLeft: "5px",
  },
  active: {
    backgroundColor: "#d6f1e4",
    color: "green",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "7px",
    borderRadius: "5px",
  },
  draft: {
    backgroundColor: "#edeff1",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "7px",
    borderRadius: "5px",
  },
  tablebottomcontainer:{
    display:"flex",
    justifyContent:"space-between"
  },
  toogleiconcontainer:{
    display:"flex",
    marginLeft:"10px",
    marginTop:"10px",
  },
  toogleicon:{
    color:"#cbd1d7 ",
    fontSize:"35px",
  },
  densetext:{
    fontSize:"18px",
    fontWeight:"bold",
    marginTop:"3px",
    marginLeft:"6px"
  },
  TableCell:{
    padding:'10px',
  },
});
const rows = [
  {
    companyName: "Textaculture",
    companySecondName: "INV-17048",
    onboardingDate: "12 Jan 2022",
    goLiveDate: "07 Aug 2022",
    totalUserbase: 244,
    lastBilling: "07 Aug 2022",
    status: "Active",
  },
  {
    companyName: "Pinch Life TC",
    companySecondName: "INV-17049",
    onboardingDate: "11 Feb 2022",
    goLiveDate: "06 May 2022",
    totalUserbase: 1000,
    lastBilling: "07 Aug 2022",
    status: "Active",
  },
  {
    companyName: "O Buddy",
    companySecondName: "INV-13042",
    onboardingDate: "10 Sep 2022",
    goLiveDate: "05 Oct 2022",
    totalUserbase: 150,
    lastBilling: "07 Aug 2022",
    status: "Draft",
  },
];
const TableData = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer style={{ marginTop: "10px" }}>
      <Table classes={{ root: classes.table }}>
        <TableHead classes={{ root: classes.tableHeader }}>
          <TableRow>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Company Name</TableCell>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Onboarding Date</TableCell>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Go-Live Date</TableCell>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Total User Base</TableCell>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Last Billing</TableCell>
            <TableCell style={{color:'#637381',fontWeight:'bold'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: classes.tableBody }}>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={row.id} classes={{ root: classes.tableRow }}>
                <TableCell
                  className={
                    index % 3 === 0
                      ? classes.row1
                      : index % 3 === 1
                      ? classes.row2
                      : classes.row3
                  }
                >
                  <div className={classes.companyNameCell}>
                    <div className={classes.companyNameCircle}><Typography className={classes.tc}>TC</Typography></div>
                    <Typography className={classes.companyname}>
                      {row.companyName}
                      <Typography className={classes.secondname}>
                    {row.companySecondName}
                  </Typography>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {row.onboardingDate}
                </TableCell>
                <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {row.goLiveDate}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {row.totalUserbase}
                </TableCell>
                <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {row.lastBilling}
                </TableCell>
                <TableCell>
                  <Typography
                    className={
                      row.status === "Active" ? classes.active : classes.draft
                    }
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    <div className={classes.tablebottomcontainer}>
      <div className={classes.toogleiconcontainer}>
        <ToggleOffIcon className={classes.toogleicon}/>
        <Typography variant="h6" className={classes.densetext}>Dense</Typography>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
    </TableContainer>
  );
};

export default TableData;
