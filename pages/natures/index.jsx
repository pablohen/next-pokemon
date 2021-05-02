import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokeapiService from '../../services/pokeapiService';

const NaturesPage = ({ natures }) => (
  // const [natures, setNatures] = useState([]);
  // const getNaturesData = async () => {
  //   const naturesData = await pokeapiService.getNatures();
  //   setNatures(naturesData);
  // };

  // useEffect(() => {
  //   getNaturesData();
  // }, []);

  <div>
    <MainMenu />
    <TitleBar title="Natures" />

    <div className="px-4">
      <ul>
        {natures?.map((nature) => (
          <li key={nature?.name}>
            <Link href={`/natures/${nature?.name}`}>
              <button type="button" className="capitalize py-2">
                {nature?.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

NaturesPage.propTypes = {
  natures: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const getStaticProps = async () => {
  const naturesData = await pokeapiService.getNatures();

  return {
    props: {
      natures: naturesData,
    },
  };
};

export default NaturesPage;
