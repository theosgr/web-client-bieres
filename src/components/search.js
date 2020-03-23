import useVilleApi from "../apiville.js";

////représente une vue permettant de recherché une ville
Vue.component('search', {
  template: `<form  @submit.prevent="handleSubmit">
                    <input type="text" v-model="nomVille"/>
                    <input type="submit" value="SEARCH" class="btn"/>
            </form>`,
  data: function() {
    return {
      nomVille: "" // nom de la ville entré
    };
  },
  methods: {
    // on envoie le json en fonction du nom entré dans la barre de recherche
    handleSubmit: function() {
      useVilleApi
        .bySearch(this.nomVille)
        .then(data => this.$emit("search-done", data));
    }
  }
});
