import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const PokedexPage = () => {
  const [pokedexes, setPokedexes] = useState([]);

  const getPokedexesData = async () => {
    const pokedexesData = await pokeapiService.getPokedexes();
    setPokedexes(pokedexesData);
  };

  useEffect(() => {
    getPokedexesData();
  }, []);

  return (
    <div>
      <MainMenu />
      <TitleBar title="Pokédex" />

      <div className="px-4">
        <ul>
          {pokedexes.map((pokedex) => (
            <li key={pokedex.name}>
              <Link href={`/pokedex/${pokedex.name}`}>
                <a className="capitalize">{pokedex.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokedexPage;
