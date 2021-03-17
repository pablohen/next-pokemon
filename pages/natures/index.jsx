import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const NaturesPage = () => {
  const [natures, setNatures] = useState([]);
  const getNaturesData = async () => {
    const naturesData = await pokeapiService.getNatures();
    setNatures(naturesData);
  };

  useEffect(() => {
    getNaturesData();
  }, []);

  return (
    <div>
      <MainMenu />
      <TitleBar title="Natures" />

      <div className="px-4">
        <ul>
          {natures?.map((nature) => (
            <li key={nature?.name}>
              <Link href={`/natures/${nature?.name}`}>
                <button type="button" className="capitalize">
                  {nature?.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NaturesPage;
