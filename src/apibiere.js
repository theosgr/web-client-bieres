//l'API concerné se nomme BreweryDB.

const API_KEY = "81f0f80779ee7a120d8047178ad4ee71";
 //en récupérant une latitude et une longitude, on va rechercher les brasseries a proximités
const useBiereApi = {
  bySearch: (lat,long) =>
    new Promise((resolve, reject) => {
      //le radius est en miles, nous l'avons mis au maximum (100) pour trouver plus de brasserie
      const BIERE_API_URL = `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${long}&radius=100&key=${API_KEY}`; 
      //On est obligé de passé par un proxy pour accepter la polique cors permettant de récupérer le json en tant que tier
     var proxyUrl = `https://cors-anywhere.herokuapp.com/`; //URL du proxy cors
        

      //bières d'une brasserie :
      //https://sandbox-api.brewerydb.com/v2/brewery/[ID_BRASSERY]/beers?key=81f0f80779ee7a120d8047178ad4ee71
      //ex id : IImUD9

      //brasserie avec leurs locations :
      //https://sandbox-api.brewerydb.com/v2/breweries/?key=81f0f80779ee7a120d8047178ad4ee71&withLocations=Y

      //chercher près d'une localisation :
      //https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=39.7562717&lng=-104.9912319&radius=10&key=81f0f80779ee7a120d8047178ad4ee71
   
      fetch(proxyUrl + BIERE_API_URL) //utilisation du proxy et de la requete
      
        .then(response => response.json()) //récupération du json
        .then(jsonResponse => resolve(jsonResponse))
        .catch((err) => reject(err));
    }),
    // récuperer le bières par l'id de la brasserie
    byId : (id) => new Promise((resolve, reject) => {
      const BEERS_API_URL = `https://sandbox-api.brewerydb.com/v2/brewery/${id}/beers?key=${API_KEY}`;
      var proxyUrl = `https://cors-anywhere.herokuapp.com/`; 

      fetch(proxyUrl + BEERS_API_URL)
          .then(response => response.json())
          .then(jsonResponse => resolve (jsonResponse))
          .catch((err) => reject(err))
  })
};

export default useBiereApi;
