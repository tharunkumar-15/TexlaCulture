import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SupportIcon from "@mui/icons-material/Support";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

const theme=createTheme({
  typography:{
    fontFamily:[
      'Inter', 
      'sans-serif',
    ].join(','),
  }
})

const useStyles = makeStyles((theme) => ({
  rotatedIcon: {
    transform: "rotate(90deg)",
  },
  companyname: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    paddingTop: "20px",
  },
  companylogocontainer:{
    display:"flex",
  },
  companyNameText: {
    color: "#2b49bd",
    fontWeight: "bold ",
    fontSize: "26px ",
    border: "4px solid #2b49bd",
    padding: "6px 5px",
    marginRight: "5px",
  },
  culturetext: {
    color: "#2b49bd",
    fontSize: "26px",
    fontWeight:"bold",
    marginTop:"10px"
  },
}));

function Sidenav() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.companyname}>
          <div className={classes.companylogocontainer}>
          <Typography variant="h1" className={classes.companyNameText}>
            TEXLA
          </Typography>
          <Typography variant="h1" className={classes.culturetext}>CULTURE</Typography>
          </div>
        </div>
        <Toolbar />
        <Typography variant="h6" textAlign={'left'} style={{ fontSize: "15px",color: "grey", paddingLeft: "10px" }}>
          General
        </Typography>
        <List>
          <ListItem button style={{ background: "#a3b0e2" }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" style={{ fontSize: "15px", fontWeight: "bold", color: "#2b49bd" }}>Dashboard</Typography>
            </ListItemText>
            <ChevronRightIcon
              className={classes.rotatedIcon}
              sx={{ color: "gray", ":hover": { color: "#000" } }}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" style={{ fontSize: "15px", fontWeight: "bold" }}>Companies</Typography>
            </ListItemText>
            <ChevronRightIcon sx={{ color: "gray", ":hover": { color: "#000" } }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SupportIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" style={{ fontSize: "15px", fontWeight: "bold" }}>Support & Tickets</Typography>
            </ListItemText>
            <ChevronRightIcon sx={{ color: "gray", ":hover": { color: "#000" } }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" style={{ fontSize: "15px", fontWeight: "bold" }}>User Admins</Typography>
            </ListItemText>
            <ChevronRightIcon sx={{ color: "gray", ":hover": { color: "#000" } }} />
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Sidenav;
