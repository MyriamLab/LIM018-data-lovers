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
  });
  return pokemonType; // este arreglo esn de los tipo fuego
};

// Esta función devuelve los pokemos fire. En main.js guardo estos valores en la const filteredData.

/*

//import data from "./data/pokemon/pokemon.js";
export const sortData = (data) => {
  //Creando un nuevo array de data para ordenarlo sin modificar el original
  let newArrPokemon = [...data];
  //console.log ('esto es el array original', data);
  //console.log ('esto es el nuevo array', newArrPokemon);

  //Ordenando los pokemon alfab de la A-Z
  let arrOrderAtoZ = newArrPokemon.sort((a,b) => a.name < b.name ? -1 : 1) //-1 a se va a ordenar antes de b

  //Ordenando los pokemon alfab de la Z-A
  let arrOrderZtoA = [...newArrPokemon];
  arrOrderZtoA.reverse()

    //console.log ('esto es el array ordenado A-Z', arrOrderAtoZ)
    //console.log ('esto es el array ordenado Z-A', arrOrderZtoA)
    
    //return??? 
  }; 

  // función filter
  export const filterData = (data, type) => {
    
    let pokemonFire = data.filter((x) => x.type == "fire");
    console.log("este es tipo fuego", pokemonFire);
    
    let pokemonEnergy = data.filter((x) => x.egg == "not in eggs");
    console.log(pokemonEnergy);
  };
    


  


/*
 else {
      newArrPokemon.sort(function(a,b){
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
      });
       }


Ordenando los objetos del array A-Z
  function sortAToZ (a,b){
   return a.name.localeCompare(b.name);
  }
let arrOrder_Az = newArrPokemon.sort(sortAToZ);
console.log ('esto es el array ordenado A-Z', arrOrder_Az);

estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

const pokemonFire = pokemons.filter((x) => x.type == "fire");
console.log("esto es tipo fuego", pokemonFire);
*/
