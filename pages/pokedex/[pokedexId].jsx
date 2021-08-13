import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const PokedexPage = ({ pokedex }) => (
  // const router = useRouter();
  // const { pokedexId } = router.query;
  // const [pokedex, setPokedex] = useState({});

  // const getPokedexData = async (selectedPokedex) => {
  //   const pokedexData = await pokeapiService.getPokedex(selectedPokedex);
  //   setPokedex(pokedexData);
  // };

  // useEffect(async () => {
  //   if (pokedexId) {
  //     await getPokedexData(pokedexId);
  //   }
  // }, [pokedexId]);

  <div>
    <MainMenu />
    <TitleBar title={`${pokedex?.names?.[0].name} Dex`} />

    <div className="px-4">
      <ul>
        {pokedex?.pokemon_entries?.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`../pokemon/${pokemon.pokemon_species.name}`}>
              <button type="button" className="capitalize py-2">
                {pokemon.pokemon_species.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

PokedexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokedex: PropTypes.any.isRequired,
};

export const getStaticPaths = async () => {
  const pokedexesData = await pokeapiService.getPokedexes();

  const paths = pokedexesData.map((pokedex) => ({
    params: { pokedexId: pokedex.name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { pokedexId } = params;
  const pokedexData = await pokeapiService.getPokedex(pokedexId);

  return {
    props: {
      pokedex: pokedexData,
    },
  };
};

export default PokedexPage;
