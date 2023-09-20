import countries from '../data/countries.json';
import leagues from '../data/leagues.json';


import React, { useState } from 'react';
import dayjs from 'dayjs';


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


import Checkbox from '@mui/material/Checkbox';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CircularProgress from '@mui/material/CircularProgress';


function OptionsCountry(){
  return(
    <>
    
    </>
  )
};//

function noRep(){
  const nombresUnicos = new Set(); // Conjunto para realizar un seguimiento de los nombres únicos
  const datosUnicos = []; // Array para almacenar objetos únicos

  leagues.response?.forEach((objeto) => {
    if (!nombresUnicos.has(objeto.league.name)) {
      nombresUnicos.add(objeto.league.name); // Agregar el nombre al conjunto
      datosUnicos.push(objeto); // Agregar el objeto único al nuevo array
    }
  });
  return datosUnicos;
}


function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...noRep()]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.league.name === value.league.name}
      getOptionLabel={(option) => option.league.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

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
}//


function FootballTeamSearch({pparams, handler}) {
  
  const handleChangeLive = (event) => {
  const newParams = { ...pparams, vivo: !pparams.vivo };
  handler(newParams);
};

const handleFromDateChange = (date) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  const newParams = { ...pparams, from: formattedDate };
  handler(newParams);
};

const handleToDateChange = (date) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  const newParams = { ...pparams, to: formattedDate };
  handler(newParams);
};

const handleSelectChange = (event) => {
  const newParams = { ...pparams, country: event.target.value };
  handler(newParams);
};

  

  // Llamar a la API con los filtros seleccionados
  const searchTeams = () => {

    handler(pparams);
    
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        
        <Grid item xs>
          <Checkbox
          checked={pparams.vivo}
          onChange={handleChangeLive}
          inputProps={{ 'aria-label': 'controlled' }}/> EN VIVO
        </Grid>

        <Grid item xs>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={pparams.from}
              onChange={handleFromDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={pparams.to}
              onChange={handleToDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs>
          <SelectCustom handleChange={handleSelectChange} label = {"Pais"} items = {OptionsCountry} />
        </Grid>

        <Grid item xs = {2}>
          <Asynchronous/>
        </Grid>

        <Grid item xs>
         <button onClick={searchTeams}>Buscar</button>
        </Grid>


      </Grid>
    </Box>

    </div>
  );
}


export default FootballTeamSearch;

