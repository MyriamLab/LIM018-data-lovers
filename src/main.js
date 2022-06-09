import { sortData } from "./data.js";
import { filterData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Llamando a la sección donde estará la info de los pokémon
let pokemonInfo = document.getElementById("pokemonInfo");

//Almacenando la data en una variable
const pokemons = data.pokemon;

//Por cada objeto del array que muestre la info especificada
function showInfo(dataPokemon) {
  pokemonInfo.innerHTML = "";
  dataPokemon.forEach(function (pokemon) {
    pokemonInfo.innerHTML += `<div class="pokemonInfo" ><img src = '${pokemon.img}' alt='foto del pokémon'> <br> <p>${pokemon.name}</p> <p>${pokemon.num}</p> <p>${pokemon.type}</p></div>`;
  
  });
}
// Se muestran los pokémon en el navegador
showInfo(pokemons);

//Traemos al select donde están A-Z Z-A
let alphabeticalOrder = document.getElementById ('alphabeticalOrder');

//Al escoger una opción (change) se muestra en consola ordenados alfabéticamente
alphabeticalOrder.addEventListener('change', function (ev) {
let alphabeticOrder = ev.target.value
const sortedData = sortData(pokemons, alphabeticOrder);
showInfo (sortedData);
});

//Traemos al select donde están las opciones de tipo de pokémon
let pokeTypes = document.getElementById ('pokeTypes');

//Al escoger una opción (change) se muestra en consola los tipos de pokémon escogidos
pokeTypes.addEventListener('change', function (e) {
  let typePokemon = e.target.value 
  const filteredData = filterData(pokemons, typePokemon);
  showInfo(filteredData);
});

