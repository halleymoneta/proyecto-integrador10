let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let termino = queryStringObj.get("query");
let tipo = queryStringObj.get("type");

let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&language=es-ES&query=${termino}`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector(".titulo-busqueda").innerText = `Resultados para: "${termino}"`;
    let contenedor = document.querySelector(".resultados-busqueda");
    let contenido = "";

    if (data.results.length === 0) {
      contenedor.innerHTML = "<p class='resultado-nulo'>No se encontraron resultados para tu búsqueda.</p>";
      return;
    }

    for (let i = 0; i < data.results.length; i++) {
      let item = data.results[i];
      let titulo = item.title || item.name;
      let id = item.id;
      let imagen = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : "img/no-image.png";

      let link =
        tipo === "movie"
          ? `detail-movie.html?id=${id}`
          : `detail-serie.html?id=${id}`;

      contenido += `
        <article>
          <a href="${link}">
            <img src="${imagen}" alt="${titulo}">
            <h3>${titulo}</h3>
          </a>
        </article>
      `;
    }

    contenedor.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
