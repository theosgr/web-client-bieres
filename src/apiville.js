const API_KEY = "1a28bed364c3b4a39cae5340370a9030";

const useVilleApi = {
  bySearch: search =>
    new Promise((resolve, reject) => {
      const VILLE_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`;

      fetch(VILLE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    byId : (search) => new Promise((resolve, reject) => {
      const MOVIE_API_URL = `https://api.openweathermap.org/data/2.5/weather?i=${search}&appid=${API_KEY}}`;

      fetch(MOVIE_API_URL)
          .then(response => response.json())
          .then(jsonResponse => resolve(jsonResponse))
          .catch((err) => reject(err))
  })
};

export default useVilleApi;
