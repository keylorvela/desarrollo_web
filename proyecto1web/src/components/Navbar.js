
import logo from '../logos/logo_white.png';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom';

const customStyle = {
    backgroundColor: '#4A982D'
  };
const custom = {
    backgroundColor: '#72BB56'
  };
const sselected = {
    backgroundColor: '#134700',
    color: 'white'
  };
const nselected = {
    backgroundColor: '#A8DF94',
    color: 'black'
  };


function Navbar() {
    const [selected, setSelected] = React.useState(-1);
    const handleSelected = (id) => {
        setSelected(id);
    };
  return (
    <>
    <AppBar position="static" style = {customStyle}>
      <Toolbar>
    <Box sx={{mb:1.5}}>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{flexGrow: 0, mt:2}}>
            
<Link to="/">
<img
      src={logo} // Reemplaza con la ruta de tu imagen
      alt="Logo"
      width="270px" // Ancho fijo de 200 píxeles
      height="115px" // Alto fijo de 150 píxeles
      onClick = {() => handleSelected(-1)}
    />
            </Link>


          </Box>
        </Grid>
        <Grid item xs={8}> </Grid>
        <Grid item xs={12}  >
            <Grid container  >
            <Grid item xs={1} sx={{mx:0.1}}>
            <Link to="/enfrentamientos"><Button variant="contained" style = {selected == 1? sselected : nselected} onClick = {() => handleSelected(1)}>Enfrentamientos</Button></Link> </Grid>
            <Grid item xs={3}> </Grid> 
            <Grid item xs={1} sx={{mx:0.1}}> <Link to="/equipos"><Button variant="contained" style = {selected == 2? sselected : nselected} onClick = {() => handleSelected(2)}>Equipos</Button>
            </Link> </Grid>                   
            </Grid>
          </Grid>
        </Grid>
      </Box>
      </Toolbar>
    </AppBar>
    </>
  );
}


export default Navbar;