import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import ConsoleList from './console';
import GameList from './game';
import Box from '@material-ui/core/Box';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    padding: '0 30px'
  },
  right:{
    padding: '0 30px',
    flex: 10
  },
  colorGrey:{
    background: '#212121'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [app, setApp] = useState('console');
  const [exitFlag, setExitFlag] = useState(false);

  const exitApp = () => {
    const remote = require('electron').remote;
    let window = remote.getCurrentWindow();
    window.close()
  }

  return (
    <div className={classes.root}>
    <Box p={1}>
      <AppBar position="static" className={classes.colorGrey}>
        <Toolbar>
          <Typography variant="h6">
              CRUSTYCRUD<b>RENT</b>
          </Typography>
          <Button color="inherit" onClick={() => {setApp('games')}}>Games</Button>
          <Button color="inherit" onClick={() => {setApp('console')}}>Console</Button>
          <Typography variant="h6" className={classes.right}>

          </Typography>
          <Button color="inherit" onClick={ () => {
            setExitFlag(true);
            exitApp();
          }}><PowerSettingsNewIcon/></Button>
        </Toolbar>
      </AppBar>
      </Box>
      {(app==='console')? <ConsoleList></ConsoleList>:<GameList></GameList>}
    </div>
  );
}
