import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const PokedexPage = ({ pokedexes }) => (
  <div>
    <MainMenu />
    <TitleBar title="Pokédex" />

    <div className="px-4">
      <ul>
        {pokedexes.map((pokedex) => (
          <li key={pokedex.name}>
            <Link href={`/pokedex/${pokedex.name}`}>
              <button type="button" className="capitalize">
                {pokedex.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

PokedexPage.propTypes = {
  pokedexes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const getStaticProps = async () => {
  const pokedexesData = await pokeapiService.getPokedexes();

  return {
    props: {
      pokedexes: pokedexesData,
    },
  };
};

export default PokedexPage;
