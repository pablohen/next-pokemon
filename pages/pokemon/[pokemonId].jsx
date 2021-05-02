import React from 'react';
import PropTypes from 'prop-types';
import pokeapiService from '../../services/pokeapiService';
import PokemonDetails from '../../components/PokemonDetails';
import MainMenu from '../../components/MainMenu';

const PokemonPage = ({ pokemon }) => (
  // const router = useRouter();
  // const { pokemonId } = router.query;
  // const [pokemon, setPokemon] = useState({});

  // const getPokemonData = async (selectedPokemon) => {
  //   const pokemonData = await pokeapiService.getPokemon(selectedPokemon);
  //   setPokemon(pokemonData);
  // };

  // useEffect(() => {
  //   if (pokemonId) {
  //     getPokemonData(pokemonId);
  //   }
  // }, [pokemonId]);

  <div>
    <MainMenu />
    <PokemonDetails pokemon={pokemon} />
  </div>
);

PokemonPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.any.isRequired,
};

export const getStaticPaths = async () => {
  const pokedex = await pokeapiService.getPokedex('national');
  const paths = pokedex.pokemon_entries.map((pokemon) => ({
    params: {
      pokemonId: String(pokemon.entry_number),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { pokemonId } = params;

  const pokemonData = await pokeapiService.getPokemon(pokemonId);

  return {
    props: {
      pokemon: pokemonData,
    },
  };
};

export default PokemonPage;
