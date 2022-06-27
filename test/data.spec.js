import { sortData, filterData, computeStats, searchData } from "../src/data.js";

const testArray = [{ name: "arcanine", type: "fire" }, { name: "caterpie", type: "bug" }, { name: "aipom", type: "normal" }, { name: "pineco", type: "bug" }, { name: "metapod", type: "bug" }, { name: "pinsir", type: "bug" }];
const arrTypeTest = [{ name: "caterpie", type: "bug" }, { name: "pineco", type: "bug" }, { name: "metapod", type: "bug" }, { name: "pinsir", type: "bug" }];
const newTestArray = [...testArray];
const sortedTest = newTestArray.sort((a, b) => a.name < b.name ? -1 : 1);
const filteredTest = testArray.filter((x) => x.type == "bug");
const computeTest = `${((arrTypeTest.length) * 100 / 251).toFixed(2)}%`;
const searchTest = testArray.filter((x) => x.name.toLowerCase().startsWith("a"));

describe("sortData", () => {
  it("Debería ser una función", () => {
    expect(typeof sortData).toBe("function");
  });

  it("Debería retornar `Un arreglo con los nombres de los pokémon en orden ascendente`", () => {
    expect(sortData(testArray, 1)).toEqual(sortedTest);
  });

  it("Debería retornar `Un arreglo con los nombres de los pokémon en orden descendente`", () => {
    expect(sortData(testArray, 1)).toEqual(sortedTest);
  });

});

describe("filterData", () => {
  it("Debería ser una función", () => {
    expect(typeof filterData).toBe("function");
  });

  it("Debería retornar `Un arreglo con los pokémon de tipo bug`", () => {
    expect(filterData(testArray, "bug")).toEqual(filteredTest);
  });
});

describe("computeStats", () => {
  it("Debería ser una función", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("Debería retornar `Un string con el porcentaje de pokémon de tipo bug`", () => {
    expect(computeStats(testArray, "bug")).toBe(computeTest);
  });
});

describe("searchData", () => {
  it("Debería ser una función", () => {
    expect(typeof searchData).toBe("function");
  });

  it("Debería retornar  `Un arreglo con los pokémon que empiezan por la letra a`", () => {
    expect(searchData(testArray, "a")).toEqual(searchTest);
  });
});