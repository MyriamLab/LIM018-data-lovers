//Función para ordenar alfabéticamente
export const sortData = (data, order) => {
  //Creando un nuevo array de data para ordenarlo sin modificar el original
  let newArrPokemon = [...data];

  //Ordenando los pokemon alfabéticamente
  let arrOrder = newArrPokemon.sort((a,b) => a.name < b.name ? -order : order) //-order a se va a posicionar antes (asc)    
    return arrOrder 
  };

  //Función para filtrar por tipo de pokémon
  export const filterData = (data, type) => {
  let pokemonType = data.filter((x) => {
    return x.type == type;
  }) 
  return pokemonType
};
  
  //Función para mostrar porcentaje de pokémon por tipo
  export const computeStats = (data, pokemonType) => {
    let pokePercen = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].type == pokemonType) {
        pokePercen.push(data[i].type)
      }
    }
    console.log (pokePercen)
    return ((pokePercen.length) * 100 / 251).toFixed(2) + '%'
    };
  
  //Función para buscar pokémon con la barra de búsqueda
  export const searchData = (data) => {
   let results = data.filter((x) => 
    x.name.toLowerCase().includes(document.querySelector('#searchBar').value.toLowerCase()))
    return results;
  };
