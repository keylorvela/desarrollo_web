import React,{ useState, useEffect } from 'react';
import TeamTable from '../components/TeamTable';
import daoEquipos from '../controller/daoEquipos.js'

function Equipos() {
  const [teams, setTeams] = useState([]);
  const parametros = {
    country: 'England',
  };
   useEffect(() => {
    const execute = async () => {
      try {
        //const data = await daoEquipos.getTeamsByParams(parametros); // Utiliza la función dao importada
        //setTeams(data.response);
        //console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    execute();
  }, []);




  return (
    <div>
      <TeamTable equipos={teams}/>
      <footer>
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
        <p>Contáctanos: <a href="mailto:info@misitioweb.com">info@misitioweb.com</a></p>
    </footer>
    </div>
  );
}

export default Equipos;
