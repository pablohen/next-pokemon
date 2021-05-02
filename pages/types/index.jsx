import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';
import pokemonService from '../../services/pokeapiService';

const TypesPage = ({ types }) => (
  // const [types, setTypes] = useState([]);

  // const getTypesData = async () => {
  //   const typesData = await pokemonService.getTypes();
  //   setTypes(typesData);
  // };

  // useEffect(() => {
  //   getTypesData();
  // }, []);

  <div>
    <MainMenu />
    <TitleBar title="Types" />

    <div className="px-4">
      <ul>
        {types.map((type) => (
          <li key={type.name}>
            <Link href={`/types/${type.name}`}>
              <button type="button" className="capitalize">
                {type.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TypesPage.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const getStaticProps = async () => {
  const typesData = await pokemonService.getTypes();

  return {
    props: {
      types: typesData,
    },
  };
};

export default TypesPage;
