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
    document.querySelector(".titulo").innerText = data.name;
    document.querySelector(".rating").innerText = `Calificación: ${data.vote_average}/10`;
    document.querySelector(".fecha").innerText = `Fecha de estreno: ${data.first_air_date}`;
    document.querySelector(".sinopsis").innerText = `Sinopsis: ${data.overview}`;
    document.querySelector(".portada").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    document.querySelector(".portada").alt = data.name;

    let generoContainer = document.querySelector(".generos");
    generoContainer.innerHTML = "Géneros: ";
    for (let i = 0; i < data.genres.length; i++) {
      generoContainer.innerHTML += `<a href="./detail-genres.html?id=${data.genres[i].id}&type=serie">${data.genres[i].name}</a>`;
      if (i !== data.genres.length - 1) {
        generoContainer.innerHTML += " | ";
      }
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
    document.querySelector("main").innerHTML = "<p>No se pudo cargar la información de la serie.</p>";
  });
