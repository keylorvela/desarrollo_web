  const requestOptions = {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'baca20a8194e316f4264a6b5a5a73b3c',
    },
  };

const daoEventos = {

  async  getFixturesByParams(params) {
    try {
      const queryParams = new URLSearchParams(params);
      const url = `https://v3.football.api-sports.io/fixtures?${queryParams.toString()}`;
  
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getFixturesByParams:', error);
      throw error;
    }
  }
  

};


export default daoEventos;