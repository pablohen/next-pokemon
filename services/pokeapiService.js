import axios from 'axios';

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const getPokedexes = async () => {
  try {
    const res = await pokeapi.get(`/pokedex?limit=100`);
    const pokedexesData = await res.data.results;

    return pokedexesData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getPokedex = async (selectedPokedex) => {
  try {
    const res = await pokeapi.get(`/pokedex/${selectedPokedex}`);
    const pokedexData = await res.data;
    return await pokedexData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getPokemon = async (selectedPokemon) => {
  try {
    const res = await pokeapi.get(`/pokemon/${selectedPokemon}`);
    const pokemonData = await res.data;
    return pokemonData;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const getTypes = async () => {
  try {
    const res = await pokeapi.get(`/type`);
    const typeData = await res.data.results;

    return typeData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getTypeDetails = async (typeId) => {
  try {
    const res = await pokeapi.get(`/type/${typeId}`);
    const typeDetailsData = await res.data;

    return typeDetailsData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const pokeapiService = {
  getPokedexes,
  getPokedex,
  getPokemon,
  getTypes,
  getTypeDetails,
};

export default pokeapiService;
