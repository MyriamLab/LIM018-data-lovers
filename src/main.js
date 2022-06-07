import { sortData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Nuevo código

//Llamando a la sección donde estará la info de los pokémon
let pokemonInfo = document.getElementById("pokemonInfo");

//Almacenando la data en una variable
const pokemons = data.pokemon;
console.log (sortData(pokemons,'name','des'))

//Por cada objeto del array que muestre la info especificada
pokemons.forEach(function (pokemon) {
  pokemonInfo.innerHTML += `<div class="pokemonInfo" ><img src = '${pokemon.img}' alt='foto del pokémon'> <br> <p>${pokemon.name}</p> <p>${pokemon.num}</p> <p>${pokemon.type}</p></div>`;
 
});

/*
let newArray = pokemons.filter(function(pokemon){
return pokemon.type
});
console.log("esto es", newArray);

Fares
let pokemonNames = document.getElementById('root'); // id del div 
const pokemons = data.pokemon;

pokemons.forEach(function(pokemon){
    //console.log(pokemon.name);
    pokemonNames.innerHTML += `<div>${pokemon.name} <img src =  '${pokemon.img}'> <p>${pokemon.type}</p> </div>`
});
*/

/* NAME 
//1. Creo el nodo img - p
const namePokemon = document.createElement("p");

// 2. Seleccio al div padre photo
let pokemonPhoto = document.querySelector(".photo");

// 3. Agrego el nodo p al div padre .photo
pokemonPhoto.appendChild(namePokemon);

// 4. creo el texto del nombre 
const textNamePokemon = document.createTextNode(pokemon.name);

// 5. Injecta la imagen  dentro del div 
namePokemon.appendChild(textNamePokemon);

// IMAGE
//1. Creo el nodo img 
const imgPokemon = document.createElement("img");

// 3. Agrego el nodo img al div padre .photo
pokemonPhoto.appendChild(imgPokemon); 

// 5. Inyecto la imagen de la base de datos 
imgPokemon.appendChild(pokemon.img)
*/
