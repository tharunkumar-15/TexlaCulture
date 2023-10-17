import { Typography,Input, FormControl } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Search } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import TableData from "./TableData";

const useStyles = makeStyles((theme) => ({
  onlinecontainer: {
    display: "flex",
    flexDirection: "column",
  },
  Onlinetext: {
    marginLeft: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "15px",
    paddingLeft: "10px",
  },
  rotatedIcon: {
    transform: "rotate(90deg)",
    color: "#637381",
  },
  companydatacontainer: {
    borderTop: "2px solid #e5e8eb",
    borderBottom: "2px solid #e5e8eb",
    paddingTop: "10px",
  },
  insideborder: {
    display: "flex",
    justifyContent: "space-between",
    width:"160px",
  },
  serviceType: {
    marginLeft: "5px",
    border: "2px solid #ccd1d8",
    borderRadius: "10px",
    textAlign: "left",
    height:"40px"
  },
  servicetext: {
    color: "#ccd1d8",
    fontSize: "18px",
  },
  Alltext: {
    display: "flex",
  },
  searchcontainer: {
    marginTop:"5px",
    marginLeft: "15px",
    border: "2px solid #ccd1d8",
    borderRadius: "10px",
  },
  searchInput: {
    width: "580px",
    padding: "10px",
    height:"10px"
  },
  searchLabel: {
    fontSize: "14px",
  },
  searchicon: {
    marginLeft: "10px",
    cursor: "pointer",
  },
}));

function OnboardCompanies() {
  const classes = useStyles();
  return (
    <div className={classes.onlinecontainer}>
      <Typography className={classes.Onlinetext} textAlign={"left"}>Online Companies</Typography>
      <div className={classes.companydatacontainer}>
        <div className={classes.Alltext}>
          <fieldset className={classes.serviceType} textAlign={"left"}>
            <legend className={classes.servicetext}>Service type</legend>
            <div className={classes.insideborder}>
              <Typography
                variant="h6"
                textAlign={"left"}
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                All
              </Typography>
              <ChevronRightIcon className={classes.rotatedIcon} />
            </div>
          </fieldset>
          <div className={classes.searchcontainer}>
            <FormControl className={classes.searchInput}>
              <Input
                placeholder="Search client or invoice number..."
                startAdornment={
                  <InputAdornment position="start">
                    <Search className={classes.searchIcon} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <TableData/>
      </div>
    </div>
  );
}

export default OnboardCompanies;
