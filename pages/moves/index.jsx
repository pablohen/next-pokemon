import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const MovesPage = ({ moves }) => (
  // const [moves, setMoves] = useState([]);

  // const getMoves = async () => {
  //   const movesData = await pokeapiService.getMoves();
  //   setMoves(movesData);
  // };

  // useEffect(() => {
  //   getMoves();
  // }, []);
  <div>
    <MainMenu />
    <TitleBar title="Moves" />

    <div className="px-4">
      <ul>
        {moves?.map((move) => (
          <li key={move?.name}>
            <Link href={`/moves/${move?.name}`}>
              <button type="button" className="capitalize py-2">
                {move?.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

MovesPage.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const getStaticProps = async () => {
  const movesData = await pokeapiService.getMoves();

  return {
    props: {
      moves: movesData,
    },
  };
};

export default MovesPage;
