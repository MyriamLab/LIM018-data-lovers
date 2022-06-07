import data from "./data/pokemon/pokemon.js";

// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

const pokemons = data.pokemon;

let pokemonFire = pokemons.filter((x) => x.type == "fire");
console.log(pokemonFire);

let pokemonEnergy = pokemons.filter((x) => x.egg == "not in eggs");
console.log(pokemonEnergy);
