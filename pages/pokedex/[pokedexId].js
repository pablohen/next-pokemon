import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import Link from 'next/link';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const PokedexPage = () => {
  const router = useRouter();
  const { pokedexId } = router.query;
  const [pokedex, setPokedex] = useState({});

  const getPokedexData = async (selectedPokedex) => {
    const pokedexData = await pokeapiService.getPokedex(selectedPokedex);
    setPokedex(pokedexData);
  };

  useEffect(async () => {
    if (pokedexId) {
      await getPokedexData(pokedexId);
    }
  }, [pokedexId]);

  return (
    <div>
      <MainMenu />
      <TitleBar title={`${pokedex?.names?.[0].name} Dex`} />

      <ul>
        {pokedex?.pokemon_entries?.map((pokemon) => (
          <li key={pokemon.entry_number} className="capitalize">
            <Link href={`../pokemon/${pokemon.pokemon_species.name}`}>
              <a>{pokemon.pokemon_species.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PokedexPage;
