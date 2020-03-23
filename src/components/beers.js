//représente une vue permettant d'afficher des bieres
Vue.component("beers", {
    props:["beer"],
    template: `
    <div class="content-brewerys">
      <div class="collection" style="margin-left:10px;">
      <p class="label" style="font-weight:bold;color:#26a69a;"> {{beer.name}}  </p>
      </div>
  
    </div>
   `,
  
  })
  
  
  
  
  