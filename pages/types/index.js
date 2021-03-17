import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokemonService from '../../services/pokeapiService';

const TypesPage = () => {
  const [types, setTypes] = useState([]);

  const getTypesData = async () => {
    const typesData = await pokemonService.getTypes();
    setTypes(typesData);
  };

  useEffect(() => {
    getTypesData();
  }, []);

  return (
    <div>
      <MainMenu />
      <TitleBar title="Types" />

      <div className="px-4">
        <ul>
          {types.map((type) => (
            <li key={type.name}>
              <Link href={`/types/${type.name}`}>
                <a className="capitalize">{type.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypesPage;
