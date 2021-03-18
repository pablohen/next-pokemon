import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const BerriesPage = ({ berries }) => (
  // const [berries, setBerries] = useState([]);

  // const getBerriesData = async () => {
  //   const berriesData = await pokeapiService.getBerries();
  //   setBerries(berriesData);
  // };

  // useEffect(() => {
  //   getBerriesData();
  // }, []);

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

export const getStaticProps = async () => {
  const berriesData = await pokeapiService.getBerries();

  return {
    props: {
      berries: berriesData,
    },
  };
};

BerriesPage.propTypes = {
  berries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BerriesPage;
