import useMeteoApi from "../apiville.js";

Vue.component("meteo", {
  template: `
  <table class="striped">
       <tbody>
            <tr> <td>  </td> <td> {{meteo.name}} </td></tr>
            <tr> <td>  </td> <td> {{meteo.main.temp}} </td></tr>
            <tr> <td>  </td> <td> {{meteo.timezone}} </td></tr>
      </tbody>
  </table>`
});
