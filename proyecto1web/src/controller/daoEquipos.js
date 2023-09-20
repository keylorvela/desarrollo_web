import countries from '../data/countries.json';
const local = true;
const apiUrl = "https://v3.football.api-sports.io/countries";

  const requestOptions = {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'baca20a8194e316f4264a6b5a5a73b3c',
    },
  };

const daoEquipos = {

  getCountries: async () => {
    if (local)
      return countries;
    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getCountries:', error);
      throw error;
    }
  },

  getLeagues: async () => {
    try {
      const response = await fetch("https://v3.football.api-sports.io/leagues", requestOptions);

      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getCountries:', error);
      throw error;
    }
  },

  async  getVenuesByParams(params) {
    try {
      const queryParams = new URLSearchParams(params);
      const url = `https://v3.football.api-sports.io/venues?${queryParams.toString()}`;
  
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getVenuesByParams:', error);
      throw error;
    }
  },

  async  getTeamsByParams(params) {
    try {
      const queryParams = new URLSearchParams(params);
      const url = `https://v3.football.api-sports.io/teams?${queryParams.toString()}`;
  
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      return response.json(); // Parsea la respuesta JSON y la retorna
    } catch (error) {
      console.error('Error en la función getTeamsByParams:', error);
      throw error;
    }
  }
  
  

};


export default daoEquipos;