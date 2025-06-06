let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=es`;

fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let contenedor = document.querySelector(".contenedor-generos");
    for (let i = 0; i < data.genres.length; i++) {
      let genero = data.genres[i];
      contenedor.innerHTML += `
        <a href="detail-genres.html?id=${genero.id}&type=tv" class="foto-genero">${genero.name}</a>
      `;
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });