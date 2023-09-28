import React,{ useState, useEffect } from 'react';
import TeamTable from '../components/TeamTable';
import Filtros from '../components/FiltrosEquipos.js';
import daoEquipos from '../controller/daoEquipos.js'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const empty = {
  league: '',
  country: '',
  season: '',
};

function Equipos() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const [params, setParams] = React.useState(empty);
  /*const parametros = {
    league: '',
    country: '',
    season: '',
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
        /*const data = await daoEquipos.getTeamsByParams(params); // Utiliza la función dao importada
        setTeams(data.response);
        console.log(data);
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
    
    <div>
      <Filtros pparams = {params} handler = {handleParamChange}/>
      <TeamTable equipos={teams}/>
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

export default Equipos;
