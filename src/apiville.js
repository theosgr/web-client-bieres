//L'API concerné est OpenWeatherMap 
const API_KEY = "1a28bed364c3b4a39cae5340370a9030";

const useVilleApi = {
  bySearch: search => //search correspond a une ville
    new Promise((resolve, reject) => {
      const VILLE_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;

      fetch(VILLE_API_URL)
        .then(response => response.json()) //récupération du json
        .then(jsonResponse => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),

};

export default useVilleApi;
