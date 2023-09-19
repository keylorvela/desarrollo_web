import countries from '../data/countries.json';

import React, { useState } from 'react';
import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Checkbox from '@mui/material/Checkbox';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function OptionsCountry(){
  return(
    <>
    
    </>
  )
};


function SelectCustom({ handleChange, label, items }) { // Añade handleChange como una prop
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        defaultValue=""
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange} // Usa la función handleChange pasada como prop
        label="{label}"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {countries.response?.map((item, index) => (
          <MenuItem key = {index} value={item.code}>{item.name}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
  );
}


function FootballTeamSearch() {
  //TODO Pasar props desde el padre

  const [params, setParams] = React.useState(null);

  const [checked, setChecked] = React.useState(false);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [countrie, setCountrie] = React.useState(null);


  // 

  const handleChangeLive = (event) => {
    setChecked(!checked);
  };

  const handleFromDateChange = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    setFromDate(formattedDate);
  };

  const handleToDateChange = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    setToDate(formattedDate);
  };

  const handleSelectChange = (event) => {
    setCountrie(event.target.value);
  };

  

  // Llamar a la API con los filtros seleccionados
  const searchTeams = () => {

    const obj = {
      vivo : checked,
      from : fromDate,
      to : toDate,
      countrie : countrie
    }

    setParams(obj);
    
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        
        <Grid item xs>
          <Checkbox
          checked={checked}
          onChange={handleChangeLive}
          inputProps={{ 'aria-label': 'controlled' }}/> EN VIVO
        </Grid>

        <Grid item xs>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={fromDate}
              onChange={handleFromDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={toDate}
              onChange={handleToDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs>
          <SelectCustom handleChange={handleSelectChange} label = {"Pais"} items = {OptionsCountry} />
        </Grid>



        <Grid item xs>
         <button onClick={searchTeams}>Buscar</button>
        </Grid>


      </Grid>
    </Box>
    
      {/*Pruebillas*/}

      {params === null ? 'NULLLLL' : params.vivo ? 'True': 'False'}
      {fromDate} ---- {toDate}
      {countrie === null ? 'X' : countrie}
    </div>
  );
}

export default FootballTeamSearch;

