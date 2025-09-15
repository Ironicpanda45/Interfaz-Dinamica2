const url_api = "https://pokeapi.co/api/v2/pokemon";

fetch(url_api)
  .then(respuesta => {
    if (respuesta.ok) {
      console.log(respuesta);
      return respuesta.json();
    } else {
      throw new Error("Error en la peticion: " + respuesta.status);
    }
  })
    .then(datos => {
    datos.results.forEach(pokemon => {
      console.log(pokemon.name);
      fetch(pokemon.url)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error al obtener datos de ${pokemon.name}`);
          }
        })
        .then(datos_pokemon => {
          console.log(datos_pokemon.name);
        })
    });
  })