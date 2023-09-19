import dao from '../controller/dao.js'
import React, { useState, useEffect } from 'react';


//Ejemplo uso dao!!
function Enfrentamientos() {
  const [countries, setCountries] = useState([]);

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
      <h1>Lista de Países</h1>
      {countries.get}
      <ul>
        {/*!--- Importante el signo de pregunta ?*/}
        {countries.response?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

    </div>
  );

}


export default Enfrentamientos;