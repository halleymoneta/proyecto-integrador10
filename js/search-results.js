let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let termino = queryStringObj.get("query");
let tipo = queryStringObj.get("type");

let apiKey = "49f77e6a13f6c95371d8c2e2d5585eee";
let url = `https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&language=es-ES&query=${termino}`;
