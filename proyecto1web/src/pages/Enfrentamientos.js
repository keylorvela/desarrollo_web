import dao from '../controller/dao.js'
import React, { useState, useEffect } from 'react';
import EventsTable from '../components/EventsTable';
import Filtros from '../components/Filtros.js';


//console.log(JSON.stringify())

const empty = {
  season:'',
  to:'',
  from:'',
  country:'',
  vivo:false
};


//Ejemplo uso dao!!
function Enfrentamientos() {
  const [countries, setCountries] = useState([]);
  const [params, setParams] = React.useState(empty);
  

  const handleParamChange = (newParams) => {
    setParams(newParams);
  };

   useEffect(() => {
    const execute = async () => {
      try {
        const data = await dao.getCountries(); // Utiliza la función dao importada
        setCountries(data);
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
      <p>Parámetros de filtro: {JSON.stringify(params)}</p>
  </div>    
      <EventsTable/>

      <h1>Lista de Países</h1>



      {countries.get}



      <ul>
        {/*!--- Importante el signo de pregunta ?*/}
        {countries.response?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>


      
      <footer>
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
        <p>Contáctanos: <a href="mailto:info@misitioweb.com">info@misitioweb.com</a></p>
      </footer>
    </div>
  );

}


export default Enfrentamientos;