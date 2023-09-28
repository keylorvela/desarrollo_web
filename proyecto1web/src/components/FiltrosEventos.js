import countries from '../data/countries.json';
import leagues from '../data/leagues.json';
import states from '../data/states.json';


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
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function OptionsCountry(){
  return(
    <>
    
    </>
  )
};//


//Eliminar repetidos
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

function Teams({handleChange}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

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
      onChange={(event, newValue) => {
          handleChange(newValue.league);
        }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Ligas"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}


function Ligas({handleChange}) {
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
      onChange={(event, newValue) => {
          if(newValue  != null)
            handleChange(newValue.league);
          else
            handleChange('');
        }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Ligas"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}


function States({handleChange}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState(states);
  const loading = open && options.length === 0;
  
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {
        setOptions([...states.response]);
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
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.desc === value.desc}
      getOptionLabel={(option) => option.desc}
      options={options}
      loading={loading}
      onChange={(event, newValue) => {
          if(newValue != null)
            handleChange(newValue.code);
          else
            handleChange('');
        }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Estados"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
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











const search = {
    backgroundColor: '#000000',
    color: '#FFFFFF'
  };


function FootballTeamSearch({pparams, handler}) {
  const top100Films = [];
  const seasons = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];


  const handleSeasonChange = (value) => {
    const newParams = { ...pparams, season: value};
    handler(newParams);
  };

  const handleTeamChange = (value) => {
    const newParams = { ...pparams, team: value};
    handler(newParams);
  };

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

const handleLeagueChange = (league) => {
  const newParams = { ...pparams, league: league};    
  handler(newParams);
};

const handleStateChange = (state) => {
  const newParams = { ...pparams, state: state};
  handler(newParams);
};


  

  // Llamar a la API con los filtros seleccionados
  const searchTeams = () => {

    handler(pparams);
    
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1, mx: 2, mt:3}}>

      <Grid container spacing={3} alignItems="center" >
        
        <Grid item xs = {2} mx={3}>
          <Autocomplete
        id="free-solo-demo"
        onChange={(event, newValue) => {
          if(newValue)
            handleSeasonChange(newValue);
          else
            handleSeasonChange('');
        }}
        options={seasons.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Temporada" />}
      />
        </Grid>

        <Grid item xs = {2}>
          <Autocomplete
        id="free-solo-demo"
        freeSolo
        onChange={(event, newValue) => {
          if(newValue)
            handleTeamChange(newValue);
          else
            handleTeamChange('');
        }}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Equipo" />}
      />
        </Grid>

        <Grid item xs = {1}>
           <Button variant="contained" style = {search} >Buscar</Button>
        </Grid>

      </Grid>
      
      <div style={{ marginBottom: '50px' }}></div>
      <h3 style={{ textAlign: 'left' }}>Filtros</h3>

      <Grid container spacing = {2} my = {2} mx={2}>

        <Grid item>
          <Checkbox
          checked={pparams.vivo}
          onChange={handleChangeLive}
          inputProps={{ 'aria-label': 'controlled' }}/> EN VIVO
        </Grid>

        <Grid item >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            label = "Desde"
              value={pparams.from}
              onChange={handleFromDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            label = "Hasta"

              value={pparams.to}
              onChange={handleToDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item >
          <SelectCustom handleChange={handleSelectChange} label = {"Pais"} items = {OptionsCountry} />
        </Grid>

        <Grid item xs = {2}>
          <Ligas handleChange = {handleLeagueChange}/>
        </Grid>

        <Grid item xs = {2}>
          <States handleChange = {handleStateChange}/>
        </Grid>


      </Grid>


    </Box>
    </div>
  );
}


export default FootballTeamSearch;

