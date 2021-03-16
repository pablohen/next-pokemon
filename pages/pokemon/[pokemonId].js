import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import PokemonDetails from '../../components/PokemonDetails';
import MainMenu from '../../components/MainMenu';

const PokemonPage = () => {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async (selectedPokemon) => {
    const pokemonData = await pokeapiService.getPokemon(selectedPokemon);
    setPokemon(pokemonData);
  };

  useEffect(() => {
    if (pokemonId) {
      getPokemonData(pokemonId);
    }
  }, [pokemonId]);

  return (
    <div>
      <MainMenu />
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
};

export default PokemonPage;
