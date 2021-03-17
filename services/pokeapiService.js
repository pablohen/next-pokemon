import axios from 'axios';

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const getPokedexes = async () => {
  try {
    const res = await pokeapi.get('/pokedex?limit=100');
    const pokedexesData = await res.data.results;

    return pokedexesData;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokedex = async (selectedPokedex) => {
  try {
    const res = await pokeapi.get(`/pokedex/${selectedPokedex}`);
    const pokedexData = await res.data;
    return await pokedexData;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemon = async (selectedPokemon) => {
  try {
    const res = await pokeapi.get(`/pokemon/${selectedPokemon}`);
    const pokemonData = await res.data;
    return pokemonData;
  } catch (error) {
    throw new Error(error);
  }
};

const getTypes = async () => {
  try {
    const res = await pokeapi.get('/type');
    const typeData = await res.data.results;

    return typeData;
  } catch (error) {
    throw new Error(error);
  }
};

const getTypeDetails = async (typeId) => {
  try {
    const res = await pokeapi.get(`/type/${typeId}`);
    const typeDetailsData = await res.data;

    return typeDetailsData;
  } catch (error) {
    throw new Error(error);
  }
};

const getMoves = async () => {
  try {
    const res = await pokeapi.get('/move?limit=9999');
    const moves = await res.data.results;

    return moves;
  } catch (error) {
    throw new Error(error);
  }
};

const getMove = async (moveId) => {
  try {
    const res = await pokeapi.get(`/move/${moveId}`);
    const move = await res.data;

    return move;
  } catch (error) {
    throw new Error(error);
  }
};

const pokeapiService = {
  getPokedexes,
  getPokedex,
  getPokemon,
  getTypes,
  getTypeDetails,
  getMoves,
  getMove,
};

export default pokeapiService;
