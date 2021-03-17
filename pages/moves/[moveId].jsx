import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import TitleBar from '../../components/TitleBar';
import MainMenu from '../../components/MainMenu';

const MovePage = () => {
  const router = useRouter();
  const { moveId } = router.query;
  const [move, setMove] = useState([]);

  const getMove = async (id) => {
    const moveData = await pokeapiService.getMove(id);
    setMove(moveData);
  };

  useEffect(() => {
    if (moveId) {
      getMove(moveId);
    }
  }, [moveId]);
  return (
    <div>
      <MainMenu />
      <TitleBar title={move?.name} />

      <div className="px-4">
        <p>
          <span className="font-semibold">Type: </span>
          <span className="capitalize">{move?.type?.name}</span>
        </p>

        <p>
          <span className="font-semibold">Power: </span>
          <span className="capitalize">{move?.power ? move?.power : '-'}</span>
        </p>

        <p>
          <span className="font-semibold">PP: </span>
          <span className="capitalize">{move?.pp}</span>
        </p>
        <p>
          <span className="font-semibold">Accuracy: </span>
          <span className="capitalize">
            {move?.accuracy ? move?.accuracy : '-'}
          </span>
        </p>

        <div className="bg-gray-200 p-4 my-4 rounded-xl space-y-2">
          <p className="text-xl font-semibold">Ingame description:</p>
          {move?.flavor_text_entries?.map((entry) => (
            <div
              key={entry?.version_group?.name + entry?.flavor_text}
              className=""
            >
              <p className="capitalize font-semibold">
                {entry?.version_group?.name}
              </p>
              <p className="text-sm">{entry?.flavor_text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovePage;
