import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyPerformance from "./KeyPerformance";
import Compaines from "./Compaines";
import ActiveBar from "./ActiveBar";

const useStyles = makeStyles((theme) => ({
  datacontainer: {
    display: "flex",
    marginLeft: "18px",
    marginTop: "15px",
  },
  valuecontainer: {
    display: "flex",
  },
}));
function ClientManagement() {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        textAlign={"left"}
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginLeft: "18px",
          marginTop: "10px",
        }}
      >
        Client Management
      </Typography>
      <div className={classes.datacontainer}>
        <Typography
          variant="h6"
          style={{
            paddingBottom: "10px",
            fontSize: "16px",
            marginRight: "20px",
            fontWeight: "bold",
            borderBottom: "3px solid black",
            borderColor: "green",
          }}
        >
          DashBoard
        </Typography>
        <Typography
          variant="h6"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#454f5b" }}
        >
          Client Details
        </Typography>
      </div>
      <div className={classes.valuecontainer}>
        <KeyPerformance />
        <Compaines />
        <ActiveBar />
      </div>
    </>
  );
}

export default ClientManagement;
