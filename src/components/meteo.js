import useMeteoApi from "../apiville.js";

Vue.component('meteo', {
  props: ["name","main","description","temp","tempF","tempMin","tempMax","pressure","humidity"],
  template: `
  <table class="striped">
       <tbody>
            <tr> <td> {{name}} </td></tr>
            <tr> <td> {{main}} </td></tr>
            <tr> <td> {{description}} </td></tr>
            <tr> <td> {{temp}} °C </td></tr>
            <tr> <td> {{tempF}} °C </td></tr>
            <tr> <td> {{tempMin}} °C </td></tr>
            <tr> <td> {{tempMax}} °C </td></tr>
            <tr> <td> {{pressure}} hPa </td></tr>
            <tr> <td> {{humidity}} % </td></tr>
      </tbody>
  </table>`,
methods : {
 // handleSelected : function() {
    // this.$emit('film-selected',this.movie.imdbID);
 // }
},

})
                            
                            
