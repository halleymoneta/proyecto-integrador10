let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=es`;

fetch(url)
  .then(function(res) {
    return res.json();
  })