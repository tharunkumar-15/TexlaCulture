import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  keytext: {
    fontWeight: "bold",
    paddingLeft:"30px",
    marginTop: "15px ",
    fontSize: "18px",
  },
  statusvalues: {
    display: "flex",
    border:"1px solid #f4f6f8",
    borderRadius: "10px",
    height: "70px",
    paddingTop: "20px",
    marginLeft: "20px",
  },
  total: {
    borderLeft: "3px solid #091a7a",
    marginLeft: "30px",
    height: "60px",
  },
  active: {
    borderLeft: "3px solid #006124",
    marginLeft: "40px",
    height: "60px",
  },
  newvalues: {
    borderLeft: "3px solid #006c9c",
    marginLeft: "30px",
    height: "60px",
  },
}));

function Compaines() {
  const classes = useStyles();
  return (
    <div className={classes.compaines}>
      <Typography
        variant="h6"
        textAlign={"left"}
        style={{ marginLeft: "1px" }}
        className={classes.keytext}
      >
        Compaines Status
      </Typography>
      <div className={classes.statusvalues}>
        <div className={classes.total}>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            Total
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#091a7a",
            }}
          >
            20
          </Typography>
        </div>
        <div className={classes.active}>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            Active
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#006124",
            }}
          >
            15
          </Typography>
        </div>
        <div className={classes.newvalues}>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            New
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "20px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#006c9c",
            }}
          >
            15
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Compaines;
