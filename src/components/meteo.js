import useMeteoApi from "../apiville.js";
import useBieresApi from "../apibiere.js";

Vue.component('meteo', {
  props: ["name","main","description","temp","tempF","tempMin","tempMax","pressure","humidity","lon","lat"],
  template: `
  <form @submit.prevent="apiBieres">
  <table class="striped">
       <tbody>
            <tr> <td style="font-weight:bold">{{name}} </td></tr>
            <tr> <td> Temps : {{main}} | {{description}} </td></tr>
            <tr> <td> Température : {{temp}} °C </td></tr>
            <tr> <td> Ressenti : {{tempF}} °C </td></tr>
            <tr> <td> Température minimale : {{tempMin}} °C </td></tr>
            <tr> <td> Température maximale : {{tempMax}} °C </td></tr>
            <tr> <td> Pression de l'air :{{pressure}} hPa </td></tr>
            <tr> <td> Humidité : {{humidity}} % </td></tr>
      </tbody>
      
        <input type="submit" value="Afficher les brasseries" class="btn"/>
     
  </table>
  </form>
`
  ,
methods : {
    apiBieres: function() {
    useBieresApi
      .bySearch(this.lat,this.lon)
      .then(data => this.$emit("brewerys-done", data));
      
  }
}

})                                          
                            
                            
