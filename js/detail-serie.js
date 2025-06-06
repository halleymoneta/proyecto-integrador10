let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idSerie = queryStringObj.get("id");

let apiKey = "TU_API_KEY";
let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiKey}&language=es-ES`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
