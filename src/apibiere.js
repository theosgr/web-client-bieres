const API_KEY = "81f0f80779ee7a120d8047178ad4ee71";

const useBiereApi = {
  bySearch: (lat,long) =>
    new Promise((resolve, reject) => {
      const BIERE_API_URL = `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${long}&radius=100&key=${API_KEY}`;
      var proxyUrl = `https://cors-anywhere.herokuapp.com/`;
        

      //bières d'un bar :
      //https://sandbox-api.brewerydb.com/v2/brewery/IImUD9/beers?key=81f0f80779ee7a120d8047178ad4ee71
      //brasserie avec leurs locations :
      //https://sandbox-api.brewerydb.com/v2/breweries/?key=81f0f80779ee7a120d8047178ad4ee71&withLocations=Y
      //chercher près d'une localisation :
      //https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=39.7562717&lng=-104.9912319&radius=10&key=81f0f80779ee7a120d8047178ad4ee71
      console.log(proxyUrl + BIERE_API_URL)
      fetch(proxyUrl + BIERE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch(err => reject(err));
    })
};

export default useBiereApi;
