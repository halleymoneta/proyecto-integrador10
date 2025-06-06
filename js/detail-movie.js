let query = new URLSearchParams(location.search);
let id = query.get("id");
let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector("#imagen").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    document.querySelector("#imagen").alt = data.title;
    document.querySelector("#titulo").innerText = data.title;
    document.querySelector("#calificacion").innerText = `Calificación: ${data.vote_average}/10`;
    document.querySelector("#estreno").innerText = `Fecha de estreno: ${data.release_date}`;
    document.querySelector("#duracion").innerText = `Duración: ${data.runtime} minutos`;
    document.querySelector("#sinopsis").innerText = `Sinopsis: ${data.overview}`;

    let generos = data.genres;
    let generoHTML = "Géneros: ";
    for (let i = 0; i < generos.length; i++) {
      generoHTML += `<a href="detail-genres.html?id=${generos[i].id}&type=movie">${generos[i].name}</a>`;
      if (i < generos.length - 1) {
        generoHTML += " | ";
      }
    }
    document.querySelector("#generos").innerHTML = generoHTML;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
