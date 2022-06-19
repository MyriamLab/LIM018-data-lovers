import data from "./data/pokemon/pokemon.js";
import { sortData, filterData, computeStats, searchData } from "./data.js";

//Almacenando la data en una variable
const pokemons = data.pokemon;

//Llamando al div pokemonInfo
let pokemonInfo = document.querySelector("#pokemonInfo");

//Por cada objeto del array que muestre la info especificada "card"
function showInfo(dataPokemon) {
  pokemonInfo.innerHTML = "";
  dataPokemon.forEach(function (pokemon) {
    //Creamos el div pokemon info donde estarán los datos de los pokémon
    const divPokemon = document.createElement("div");
    //Le agregamos clase al nuevo div
    divPokemon.setAttribute("class", "pokeInfo")
    //Agregamos todos los datos de los pokémon al nuevo div
    divPokemon.innerHTML += `<img src = '${pokemon.img}' alt='foto del pokémon'> <h3>${pokemon.name}</h3> <p>${pokemon.num}</p> <p>${pokemon.type}</p>`;
    //Enviamos el div class pokeInfo al div pokemonInfo
    pokemonInfo.appendChild(divPokemon);
  
  });
}
// Se muestran los pokémon en el navegador
showInfo(pokemons);

//Traemos al select donde están A-Z Z-A
let pokemonOrder = document.getElementById ('alphabeticalOrder');

//Al escoger una opción (change) se muestran los pokémon ordenados alfabéticamente
pokemonOrder.addEventListener('change', function (e) {
let alphabeticOrder = e.target.value
const sortedData = sortData(pokemons, alphabeticOrder);
showInfo (sortedData);
});


//Traemos al select donde están las opciones de tipo de pokémon
let pokeTypes = document.getElementById ('pokeTypes');

//Al escoger una opción (change) se muestran los tipos de pokémon escogidos
pokeTypes.addEventListener('change', function (e) {
  let typePokemon = e.target.value 
  const filteredData = filterData(pokemons, typePokemon);
  showInfo(filteredData);
});

//Traemos al select donde están las opciones de porcentaje de pokémon
let pokePercentage = document.getElementById ('pokePercentage');

//Al escoger una opción (change) se muestran el porcentaje de pokémon escogidos
pokePercentage.addEventListener('change', function (e) {
let pokemonPercen = e.target.value
const percenData = computeStats (pokemons, pokemonPercen) // Este valor es de tipo string
console.log ('este es el porcentaje de pokémon tipo ' + pokemonPercen, percenData)

});

//Traemos a la barra de búsqueda
let searchBar = document.querySelector('#searchBar');

//Que la barra busque los pokémon al escribir
searchBar.addEventListener('input', function (e) {
  let searchingBar = e.target.value
  const searchedData = searchData (pokemons,searchingBar)
  if (searchedData.length === 0) {
    alert("Lo siento entrenador, no existen Pokémon");
  } else {
    showInfo(searchedData);
  }
});



 

/*
//Gráfica de prueba
let pokeGraphic = document.getElementById('pokeGraphic').getContext("2d");
let chart = new Chart(pokeGraphic, {
  type: "bar",
  data: {
      labels: ['Fuego', 'Agua', 'Bicho', 'Hierba'],
      dataset: [
          {
            label: 'Gráfica de Pokémon',
            backgroundColor: 'rgb(252,50,6)',
            data: [26,15,9,11]
          }
      ]
  }
})*/








/* appendChild
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
numberPokemon.appendChild(textNamePokemon2);*/