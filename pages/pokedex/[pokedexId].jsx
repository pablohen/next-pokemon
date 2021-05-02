import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import pokeapiService from '../../services/pokeapiService';
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

      <div className="px-4">
        <ul>
          {pokedex?.pokemon_entries?.map((pokemon) => (
            <li key={pokemon.entry_number}>
              <Link href={`../pokemon/${pokemon.pokemon_species.name}`}>
                <button type="button" className="capitalize p-2">
                  {pokemon.pokemon_species.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PokedexPage;
