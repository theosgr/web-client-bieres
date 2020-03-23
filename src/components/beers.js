//représente une vue permettant d'afficher des bieres
// j'ai l'impression qu'il ne reconnait pas le component dans app je ne comprends pas pourquoi
Vue.component('beers', {
    props:["beer"],
    template: `
      <div class="collection" style="margin-left:10px;">
      <p class="label" style="font-weight:bold;color:#26a69a;"> {{beer.name}}  </p>
      </div>
  
   `,
  
  })
  
  
  
  
  