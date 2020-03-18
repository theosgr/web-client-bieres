import useVilleApi from "../apiville.js";

Vue.component('search', {
  template: `<form  @submit.prevent="handleSubmit">
                    <input type="text" v-model="nomVille"/>
                    <input type="submit" value="SEARCH" class="btn"/>
            </form>`,
  data: function() {
    return {
      nomVille: ""
    };
  },
  methods: {
    handleSubmit: function() {
      useVilleApi
        .bySearch(this.nomVille)
        .then(data => this.$emit("search-done", data));
    }
  }
});
