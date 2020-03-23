
Vue.component("bieres", {
  props:["brewery"],
  template: `
  <div class="content-brewerys">
    <div class="collection" style="margin-left:10px;">
    <p class="label" style="font-weight:bold;color:#26a69a;"> {{brewery.name}}  </p>
    <p class="label"> Adresse : {{brewery.streetAddress}} </p>
    <p class="label"> Localisation : {{brewery.locality}} </p>
    <p class="label"> Région : {{brewery.region}} </p>
    <p class="label"> Code postal : {{brewery.postalCode}} </p>
    <p class="label"> Téléphone : {{brewery.phone}} </p>
    <p class="label"> Site web : {{brewery.website}} </p>
    <p class="label"> Téléphone : {{brewery.phone}} </p>
    </div>




  </div>
 `,
 
  methods :  {

    
  }


})




