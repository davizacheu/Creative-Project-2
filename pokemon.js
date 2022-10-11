
document.getElementById("pokemonButton").addEventListener("click", function(event) {
    event.preventDefault();
    
    const value = document.getElementById("pokemonField").value;
    let lowvalue = value.toLowerCase();
    if (value === "")
      return;
    console.log(lowvalue);
    
// require ('@favware/graphql-pokemon');

// interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
//   data: Record<K, Omit<Query[K], '__typename'>>;
// }

fetch('https://graphqlpokemon.favware.tech/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
        getPokemon(pokemon:`+lowvalue+`) {
            num
            species
            color
            shinySprite
            smogonTier
            smogonPage
            serebiiPage
            bulbapediaPage
            abilities
        }
      }
    `
  })
})
  .then((res) => res.json())
  .then(function(json) {
    console.log(json);
    let results = "";
    results+= "<h2> This is " + value+ "</h2>";
    results+= "<p>Number:"+ json.data.getPokemon.num+"</p>";
    results+= "<img src='"+json.data.getPokemon.shinySprite+"'/>";
    results+= "<img src='"+json.data.getPokemon.smogonPage+"'/>";
    
    document.getElementById("pokemonResults").innerHTML = results;
  });

  



  
  });