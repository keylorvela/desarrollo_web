import countries from '../data/countries.json';
const local = false;
const apiUrl = "https://v3.football.api-sports.io/countries";

  const requestOptions = {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'baca20a8194e316f4264a6b5a5a73b3c',
    },
  };


const dao = {
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
};


export default dao;