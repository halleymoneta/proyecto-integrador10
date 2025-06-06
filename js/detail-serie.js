let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idSerie = queryStringObj.get("id");

let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiKey}&language=es-ES`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.querySelector(".titulo").innerText = data.name;
document.querySelector(".rating").innerText = `${data.vote_average}`;
document.querySelector(".fecha").innerText = `${data.first_air_date}`;
document.querySelector(".sinopsis").innerText = data.overview;
document.querySelector(".portada").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
document.querySelector(".portada").alt = data.name;

let generoContainer = document.querySelector(".generos");
for (let genero of data.genres) {
  generoContainer.innerHTML += `<a href="./detail-genres.html?id=${genero.id}&type=serie">${genero.name}</a> `;
}

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
