import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const BerriesPage = () => {
  const [berries, setBerries] = useState([]);

  const getBerriesData = async () => {
    const berriesData = await pokeapiService.getBerries();
    setBerries(berriesData);
  };

  useEffect(() => {
    getBerriesData();
  }, []);

  return (
    <div>
      <MainMenu />
      <TitleBar title="Berries" />

      <div className="px-4">
        <ul>
          {berries.map((berry) => (
            <li key={berry?.name}>
              <Link href={`/berries/${berry?.name}`}>
                <button type="button" className="capitalize">
                  {berry?.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BerriesPage;
