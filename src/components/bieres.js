import useBiereApi from "../apibiere.js";

////représente une vue lié à une ville où l'on affiche une brasserie
Vue.component('bieres', {
  props:["brewery"],
  template: `
  <form @submit.prevent="getBeers">
  <div class="content-brewerys">
    <div class="collection" style="margin-left:10px;">
    <p class="label" style="font-weight:bold;color:#26a69a;"> {{brewery.name}}  </p>
    <p class="label"> Adresse : {{brewery.streetAddress}} </p>
    <p class="label"> Localisation : {{brewery.locality}} </p>
    <p class="label"> Région : {{brewery.region}} </p>
    <p class="label"> Code postal : {{brewery.postalCode}} </p>
    <p class="label"> Téléphone : {{brewery.phone}} </p>
    <p class="label"> Site web : {{brewery.website}} </p>
    <input type="submit" class="btn" value="Afficher les bières"/>
    </div>

  </div>
  </form>
 `,

  methods :  {
      getBeers : function() {
          useBiereApi
        	.byId(this.brewery.breweryId)
          .then(data => this.$emit("brewery-selected", data.data));    
          //console.log(this.brewery.breweryId);  
          }
    }

})




