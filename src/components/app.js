Vue.component("app", {
  template: `<div  id="app"> 
               <search  @search-done="searchCompleted($event)"> </search> 
             </div>`,
  data: function() {
    return {
      meteo:[]
    };
  },
  methods: {
    searchCompleted: function(data) {
      if(data != undefined){
        this.meteo = data;
        console.log(this.meteo);
      }
    }
  }
});
