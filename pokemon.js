
document.getElementById("pokemonButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("pokemonResults").style.opacity = 0;
    function capitalizeFirstLetter(str) {
      return (str.charAt(0).toUpperCase() + str.slice(1));
    }

    const value = document.getElementById("pokemonField").value;
    let lowvalue = value.toLowerCase();
    let finalvalue = capitalizeFirstLetter(lowvalue);
    if (value === "")
      return;
    console.log(lowvalue);
    console.log(finalvalue);

  
  fetch('https://api.pokemontcg.io/v2/cards?q=name:'+finalvalue) 
  .then((res) => res.json())
  .then(function(json) {
    console.log(json);
    let results = "";
    console.log(json.data.find(obj => {
      return obj.name === finalvalue
    }));
    results+= "<img class = \"card\" src = '"+json.data.find(obj => {
      return obj.name === finalvalue
    }).images.large+"'/>";
    
    document.getElementById("pokemonResults").innerHTML = results;
    document.getElementById("pokemonResults").style.opacity = 1;
  });


  
  });