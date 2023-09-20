import daoEquipos from '../controller/daoEquipos.js'
import daoEventos from '../controller/daoEventos.js'
import React, { useState, useEffect } from 'react';
import EventsTable from '../components/EventsTable';
import Filtros from '../components/Filtros.js';
//Ejemplo uso dao!!
function Enfrentamientos() {
  const [teams, setTeams] = useState([]);
  const parametros = {
    country: 'England',
  };
   useEffect(() => {
    const execute = async () => {
      try {
        const data = await daoEquipos.getTeamsByParams(parametros); // Utiliza la función dao importada
        setTeams(data);
        console.log(data.response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    execute();
  }, []);


  return (
    <div className="App">
      <Filtros/>
      <EventsTable/>
      <h1>Lista de Países</h1>



      


      
      <footer>
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
        <p>Contáctanos: <a href="mailto:info@misitioweb.com">info@misitioweb.com</a></p>
    </footer>
    </div>
  );

}


export default Enfrentamientos;