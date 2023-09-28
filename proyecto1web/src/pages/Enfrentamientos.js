import daoEventos from '../controller/daoEventos.js'
import React, { useState, useEffect } from 'react';
import EventsTable from '../components/EventsTable';
import Filtros from '../components/FiltrosEventos.js';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


//console.log(JSON.stringify())

const empty = {
  team:'',
  season:'',
  to:'',
  state:'',
  from:'',
  league : '',
  country:'',
  vivo:false
};


//Ejemplo uso dao!!
function Enfrentamientos() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [params, setParams] = React.useState(empty);
  /*const parametros = {
    league:'20',
    season: '2020',
  };*/

  const handleParamChange = (newParams) => {
    setParams(newParams);
  };

  const handleCloseError = () => {
    console.log('Cerrando ventana de error');
    setError(null);
  };

   useEffect(() => {
    const execute = async () => {
      try {
        /*const data = await daoEventos.getFixturesByParams(params); // Utiliza la función dao importada
        setEvents(data.response);
        console.log(data.response);
        if (data.errors.length != 0) {
          setError('data.errors.required');
        }*/
      } catch (error) {
        console.error('Error:', error);
      }
    };
    execute();
  }, []);


  return (
    <div className="App">
      <Filtros pparams = {params} handler = {handleParamChange}/>
<div>
      {/*<p>Parámetros de filtro: {JSON.stringify(params)}</p>*/}
  </div>    
      <EventsTable eventos={events}/>
      <footer>
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
        <p>Contáctanos: <a href="mailto:info@misitioweb.com">info@misitioweb.com</a></p>
      </footer>

      {error && (
        <div className="centered-alert">
        <Alert severity="error" onClose={handleCloseError}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
        </div>
      )}
    </div>
  );

}


export default Enfrentamientos;