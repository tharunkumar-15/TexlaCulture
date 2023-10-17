import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  keytext: {
    fontWeight: "bold",
    marginTop: "15px",
    fontSize: "18px ",
  },
  activebar: {
    border:"1px solid #f4f6f8",
    borderRadius: "10px",
    height: "90px",
    marginLeft: "20px",
    paddingRight: "20px",
  },
  percentageindicator: {
    display: "flex",
    padding: "15px",
  },
  bluecircle: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: "#1939b7",
    marginLeft: "10px",
  },
  greencircle: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    marginLeft: "10px",
    backgroundColor: "#36b37e",
  },
  bar: {
    display: "flex",
  },
  blueindicator: {
    width: "200px",
    height: "25px",
    borderRadius: "20px",
    backgroundColor: "#1939b7",
    marginLeft: "25px",
  },
  greenindicator: {
    width: "80px",
    height: "25px",
    borderRadius: "20px",
    backgroundColor: "#36b37e",
    marginLeft: "20px",
  },
}));

export default function ActiveBar() {
  const classes = useStyles();
  return (
    <div className={classes.activestatus}>
      <Typography
        variant="h6"
        textAlign={"left"}
        style={{ marginLeft: "1px" }}
        className={classes.keytext}
      >
        Active User Base
      </Typography>
      <div className={classes.activebar}>
        <div className={classes.percentageindicator}>
          <div className={classes.bluecircle}></div>
          <Typography
            variant="h6"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            89% App User
          </Typography>
          <div className={classes.greencircle}></div>
          <Typography
            variant="h6"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            11% App User
          </Typography>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueindicator}></div>
          <div className={classes.greenindicator}></div>
        </div>
      </div>
    </div>
  );
}
