//vue principale appellée dans index.html
//elle va permettre d'appeller les autres components et récupérer les modeles de données pour pouvoir les manipuler dans d'autres components


Vue.component("app", {
  template: `<div  id="app"> 
               <search  @search-done="searchCompleted($event)"> </search> 
               <div class="col s4">
                        <div class="row">
                            <meteo v-for="meteo in meteos"
                            v-bind:name="meteo.name"
                            v-bind:main="meteo.weather[0].main"
                            v-bind:description="meteo.weather[0].description" 
                            v-bind:temp="meteo.main.temp"
                            v-bind:tempF="meteo.main.feels_like"
                            v-bind:tempMin="meteo.main.temp_min"
                            v-bind:tempMax="meteo.main.temp_max"
                            v-bind:pressure="meteo.main.pressure"
                            v-bind:humidity="meteo.main.humidity"
                            v-bind:lon="meteo.coord.lon"
                            v-bind:lat="meteo.coord.lat"
                            v-bind:key="meteo.id"
                            v-on:brewerys-done="bieresByCity($event)"> </meteo>
                        </div>
                    </div>
                <div class="col s4">
                  <div class="row">
                    <bieres v-for="brewery in brewerys" v-bind:key="brewery.breweryId" v-bind:brewery="brewery" v-on:brewery-selected="beersByBrewery($event)"> </bieres>
                </div>
              </div> 
              <div class="col s4">
                  <div class="row">
                    <beers v-for="beer in bieres" v-bind:key="beer.id" v-bind:beer="beer"> </beers>
                  </div>
                </div>
             </div>`,
            
  data: function() {
    return {
      meteos:[],
      brewerys :[],
      bieres:[]
    };
  },
  methods: {
    // méthodes pour récupérer les données json envoyé par les autres components 
    searchCompleted: function(data) {
      if(data != undefined){
        this.meteos = [data];
        if(data.cod == 404){
          window.alert("La ville choisie n'existe pas");
        }
       console.log(this.meteos);
      } 
    },
    bieresByCity : function(data) {
      if(data!=undefined){
        this.brewerys = data;
       } else {
            window.alert("Aucune brasserie aux alentours");
       }
    },
    beersByBrewery : function(data) {
      if(data!=undefined){
        this.bieres = data;
        console.log(data);
      }
    }


  }
});
