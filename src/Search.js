import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, CardMedia } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import PeopleIcon from '@mui/icons-material/People';
const useStyles = makeStyles((theme) => ({
  searchcontainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchicon: {
    fontSize: '28px !important',
    color: 'grey',
    padding: '10px',
    marginTop:"10px"
  },
  righticons: {
    display: 'flex',
    marginRight: '50px',
    paddingTop: '20px',
    justifyContent: 'space-around',
  },
  flagicon: {
    width: '32px',
    height: '22px',
    borderRadius: '5px',
    marginRight:"10px"
  },
  bellicon: {
    fontSize: '30px !important',
    color: 'grey',
    marginLeft: "5px",
    marginTop: "-6px", 
    marginRight:"13px"
  },
  notificationBadge: {
    position: 'relative',
  },
  badgeCount: {
    backgroundColor: 'orange',
    color: 'white',
    borderRadius: '80%',
    padding: '1px 8px',
    position: 'absolute',
    top: '-15px',
    right: '5px',
  },
  peopleicon:{
    fontSize: '32px !important',
    color: 'grey',
    marginLeft: "5px",
    marginTop: "-8px", 
    marginRight:"17px"
  },
  userAvatar: {
    width: '35px',
    height: '35px',
    marginTop:"-12px",
  },
  usericon:{
    width:"80%",
  }
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.searchcontainer}>
      <SearchIcon className={classes.searchicon} />
      <div className={classes.righticons}>
        <CardMedia
          className={classes.flagicon}
          image="https://www.anbg.gov.au/images/flags/union-jack.gif"
          title="Image title"
        />
        <div className={classes.notificationBadge}>
          <NotificationsIcon className={classes.bellicon} />
          <span className={classes.badgeCount}>8</span>
        </div>
        <PeopleIcon className={classes.peopleicon}/>
        <Avatar alt="User" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" className={classes.userAvatar}>
          <CardMedia
            component="img"
            alt="User Photo"
            image="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"
            title="User Photo"
            className={classes.usericon}
          />
        </Avatar>
      </div>
    </div>
  );
}

export default SearchBar;
