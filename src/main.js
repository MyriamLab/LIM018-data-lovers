import { sortData } from "./data.js";
import { filterData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Nuevo código

//Llamando a la sección donde estará la info de los pokémon
let pokemonInfo = document.getElementById("pokemonInfo");

//Almacenando la data en una variable
const pokemons = data.pokemon;
const sortedData = sortData(pokemons, 1);
 // fire entre "" porque es el string

//Por cada objeto del array que muestre la info especificada

function showInfo(dataPokemon) {
  pokemonInfo.innerHTML = "";
  dataPokemon.forEach(function (pokemon) {
    pokemonInfo.innerHTML += `<div class="pokemonInfo" ><img src = '${pokemon.img}' alt='foto del pokémon'> <br> <p>${pokemon.name}</p> <p>${pokemon.num}</p> <p>${pokemon.type}</p></div>`;
  });

}
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

//*Evento change*/
//let sectionPrueba = document.getElementById("prueba"); // atrapo el id del section id prueba
let tipos = document.getElementById("tipos");

tipos.addEventListener("change", function (e) {
  // (e) para recibir al evento
  let valor = e.target.value; // valor almacena  el string "water"
  const filteredData = filterData(pokemons, valor); //es una función y devuleve un arreglo
  showInfo(filteredData);
  /*let soloType = [];
  for (let i = 0; i < valor.length; i++) {
    let valorActual = valor[i];
    soloType.push(valorActual);
    console.log(soloType);
  }

  soloType.forEach(function (item) {
    // valor no es iterable?
    const tipo = document.createElement("p");
    tipo.textContent = item;
    sectionPrueba.appendChild(tipo);
  });
  */
});


// appendChild
//1. Seleccio al section padre
let sectionPrueba = document.getElementById("prueba");
// IMAGE
// 2. Creo el nodo img
const imgPokemon = document.createElement("img");
imgPokemon.src = "https://www.serebii.net/pokemongo/pokemon/001.png";
// 3. Agrego el nodo img al section padre id prueba
sectionPrueba.appendChild(imgPokemon);

//NAME
//1. Creo el nodo div
const namePokemon = document.createElement("div");

// 2. Agrego el nodo div al padre section prueba
sectionPrueba.appendChild(namePokemon);
namePokemon.style.backgroundColor = "purple";

// 3. creo el texto del nombre
const textNamePokemon1 = document.createTextNode("Aquí nombre");

// 4.
namePokemon.appendChild(textNamePokemon1);

//NUMBER 
//1. Creo el nodo div
const numberPokemon = document.createElement("div");

// 2. Agrego el nodo div al padre section prueba
sectionPrueba.appendChild(numberPokemon);
numberPokemon.style.backgroundColor = "red";

// 3. creo el texto del nombre
const textNamePokemon2 = document.createTextNode(pokemons.name);

// 4.
numberPokemon.appendChild(textNamePokemon2);


