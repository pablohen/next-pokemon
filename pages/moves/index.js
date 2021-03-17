import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const MovesPage = () => {
  const [moves, setMoves] = useState([]);

  const getMoves = async () => {
    const movesData = await pokeapiService.getMoves();
    setMoves(movesData);
  };

  useEffect(() => {
    getMoves();
  }, []);
  return (
    <div>
      <MainMenu />
      <TitleBar title="Moves" />

      <div className="px-4">
        <ul>
          {moves?.map((move) => (
            <li>
              <Link href={`/moves/${move?.name}`}>
                <a className="capitalize">{move?.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovesPage;
