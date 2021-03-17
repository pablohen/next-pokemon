import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const TypeDetailsPage = () => {
  const router = useRouter();
  const { typeId } = router.query;
  const [type, setType] = useState([]);

  const getTypeDetailsData = async (id) => {
    const typeDatailsData = await pokeapiService.getTypeDetails(id);

    setType(typeDatailsData);
  };

  useEffect(() => {
    if (typeId) {
      getTypeDetailsData(typeId);
    }
  }, [typeId]);

  return (
    <div>
      <MainMenu />
      <TitleBar title={`${type?.name} type`} />

      <div className="bg-gray-200 p-4 rounded-xl">
        <span className="font-semibold">Double damage from:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.double_damage_from?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>Double damage to:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.double_damage_to?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>Half damage from:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.half_damage_from?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>Half damage to:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.half_damage_to?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>No damage from:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.no_damage_from?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>No damage to:</span>
        <div className="space-x-2 pt-2">
          {type?.damage_relations?.no_damage_to?.map((otherType) => (
            <Link key={otherType.name} href={`/types/${otherType.name}`}>
              <button
                type="button"
                className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
              >
                {otherType.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span>Moves:</span>
        <ul>
          {type?.moves?.map((move) => (
            <li key={move.name}>
              <Link href={`/moves/${move.name}`}>
                <button type="button" className="capitalize">
                  {move.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Pokemon:</span>
        <ul>
          {type?.pokemon?.map(({ pokemon }) => (
            <li key={pokemon.name}>
              <Link href={`/pokemon/${pokemon.name}`}>
                <button type="button" className="capitalize">
                  {pokemon.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypeDetailsPage;
