import React from "react";
import { Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PieChart, Pie, Cell } from "recharts";

const useStyles = makeStyles({
  piecharcontainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    position: "relative",
  },
  Regionaltext: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "15px",
    marginLeft: "20px",
    marginBottom: "10px",
  },
  graphcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border:"1px solid #f4f6f8",
    borderRadius: "10px",
    paddingLeft: "60px",
    paddingRight: "70px",
    paddingTop: "40px",
    paddingBottom: "35px",
  },
  legendContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    paddingLeft: "20px",
  },
  legendItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  legendColor: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },
  categoryName: {
    fontSize: "14px",
    fontWeight:"bold",
    marginRight:"10px"
  },
  chartContainer: {
    width: "100%",
    position: "relative",
  },
  eastdetails: {
    position: "absolute",
    top: "130px",
    left: "370px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  northdetails: {
    position: "absolute",
    top: "180px",
    right: "380px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  southdeatils: {
    position: "absolute",
    top: "360px",
    right: "300px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  westdeatils: {
    position: "absolute",
    top: "280px",
    right: "50px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  arrowcontainer: {
    display: "flex",
  },
  arrowicon: {
    width: "30px",
    height: "25px",
  },
});

const RegionalMetrics = () => {
  const data = [
    { name: "East", value: 30, color: "#ffab00" },
    { name: "North", value: 35, color: "#36b37e" },
    { name: "South", value: 25, color: "#ff5630" },
    { name: "West", value: 10, color: "#3366ff" },
  ];
  const classes = useStyles();

  return (
    <div className={classes.piecharcontainer}>
      <Typography className={classes.Regionaltext} textAlign={"left"}>
        Regional Metrics
      </Typography>
      <div className={classes.graphcontainer}>
        <div className={classes.legendContainer}>
          {data.map((item, index) => (
            <div key={index} className={classes.legendItem}>
              <Typography className={classes.categoryName}>
                {item.name}
              </Typography>
              <div
                className={classes.legendColor}
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          ))}
        </div>
        <div className={classes.chartContainer}>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx={200}
              cy={130}
              innerRadius={55}
              outerRadius={100}
              fill="#F4F6F8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className={classes.piechartdestailscontainer}>
          <div className={classes.eastdetails}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "19px" }}
            >
              6 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("./Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹250000
              </Typography>
            </div>
          </div>
          <div className={classes.northdetails}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "19px" }}
            >
              20 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("./Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "17px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹500000
              </Typography>
            </div>
          </div>
          <div className={classes.southdeatils}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "19px" }}
            >
              5 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("./Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹100000
              </Typography>
            </div>
          </div>
          <div className={classes.westdeatils}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "19px" }}
            >
              1 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("./Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹20000
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalMetrics;
