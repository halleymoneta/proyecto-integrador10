let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let idGenero = queryStringObj.get("id");
let tipo = queryStringObj.get("type");

let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/discover/${tipo}?api_key=${apiKey}&language=es-ES&with_genres=${idGenero}`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let contenedor = document.querySelector(".resultados-genero");
    let contenido = "";

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
