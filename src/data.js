//Función para ordenar alfabéticamente
export const sortData = (data, order) => {
  //Creando un nuevo array de data para ordenarlo sin modificar el original
  let newArrPokemon = [...data];
  console.log ('esto es el nuevo array', newArrPokemon);

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
  

