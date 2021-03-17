import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const NaturePage = () => {
  const router = useRouter();
  const { natureId } = router.query;
  const [nature, setNature] = useState([]);

  const getNatureData = async (id) => {
    const natureData = await pokeapiService.getNature(id);
    setNature(natureData);
  };

  useEffect(() => {
    if (natureId) {
      getNatureData(natureId);
    }
  }, [natureId]);
  return (
    <div>
      <MainMenu />
      <TitleBar title={nature?.name} />

      <div className="px-4">
        <p>
          <span className="font-semibold">Increased stat: </span>
          <span className="capitalize">
            {nature?.increased_stat?.name ? nature?.increased_stat?.name : '-'}
          </span>
        </p>
        <p>
          <span className="font-semibold">Decreased stat: </span>
          <span className="capitalize">
            {nature?.decreased_stat?.name ? nature?.decreased_stat?.name : '-'}
          </span>
        </p>
        <p>
          <span className="font-semibold">Likes flavor: </span>
          <span className="capitalize">
            {nature?.likes_flavor?.name ? nature?.likes_flavor?.name : '-'}
          </span>
        </p>
        <p>
          <span className="font-semibold">Hates flavor: </span>
          <span className="capitalize">
            {nature?.hates_flavor?.name ? nature?.hates_flavor?.name : '-'}
          </span>
        </p>

        <div className="bg-gray-200 p-4 my-4 rounded-xl space-y-2">
          <p className="text-xl font-semibold">Other languages:</p>
          {nature?.names?.map((natureName) => (
            <div
              key={natureName?.language?.name + natureName?.name}
              className=""
            >
              <p className="capitalize font-semibold">
                {natureName?.language?.name}
              </p>
              <p className="text-sm">{natureName?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NaturePage;
