let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let idGenero = queryStringObj.get("id");
let tipo = queryStringObj.get("type");

let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/discover/${tipo}?api_key=${apiKey}&language=es-ES&with_genres=${idGenero}`;
