let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let contenedor = document.querySelector("#peliculas-populares");
    for (let i = 0; i < 5; i++) {
      let pelicula = data.results[i];
      contenedor.innerHTML += `
        <a href="detail-movie.html?id=${pelicula.id}" class="foto">
          <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.title}">
          <p class="titulo">${pelicula.title}</p>
          <p class="fecha">${pelicula.release_date}</p>
        </a>`;
    }
  });

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es`)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let contenedor = document.querySelector("#series-populares");
    for (let i = 0; i < 5; i++) {
      let serie = data.results[i];
      contenedor.innerHTML += `
        <a href="detail-serie.html?id=${serie.id}" class="foto">
          <img src="https://image.tmdb.org/t/p/w300${serie.poster_path}" alt="${serie.name}">
          <p class="titulo">${serie.name}</p>
          <p class="fecha">${serie.first_air_date}</p>
        </a>`;
    }
  });

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es`)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let contenedor = document.querySelector("#peliculas-valoradas");
    for (let i = 0; i < 5; i++) {
      let pelicula = data.results[i];
      contenedor.innerHTML += `
        <a href="detail-movie.html?id=${pelicula.id}" class="foto">
          <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.title}">
          <p class="titulo">${pelicula.title}</p>
          <p class="fecha">${pelicula.release_date}</p>
        </a>`;
    }
  });
