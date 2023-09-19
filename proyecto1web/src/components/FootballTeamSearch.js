import React, { useState } from 'react';

function FootballTeamSearch() {
  const [temporada, setTemporada] = useState('');
  const [pais, setPais] = useState('');
  const [liga, setLiga] = useState('');
  const [texto, setTexto] = useState('');

  // Función para manejar cambios en los filtros
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'temporada':
        setTemporada(value);
        break;
      case 'pais':
        setPais(value);
        break;
      case 'liga':
        setLiga(value);
        break;
      default:
        break;
    }
  };

  // Llamar a la API con los filtros seleccionados
  const searchTeams = () => {
    // Aquí puedes hacer la llamada a la API utilizando los valores de los filtros (temporada, país, liga)
    // Puedes usar una librería como Axios para hacer la solicitud HTTP.
    setTexto('');
    setTexto(pais+" "+temporada);
    setTemporada('');
    setPais('');
    setLiga('');
    
  };

  return (
    <div>
      <label>
        Temporada:
        <input type="text" name="temporada" value={temporada} onChange={handleFilterChange} />
      </label>
      <label>
      
        País:
        <input type="text" name="pais" value={pais} onChange={handleFilterChange} />
      </label>
      <label>
        Liga:
        <input type="text" name="liga" value={liga} onChange={handleFilterChange} />
      </label>
      <button onClick={searchTeams}>Buscar</button>

      {texto == '' ? ' ✔' : texto}
    </div>
  );
}

export default FootballTeamSearch;





