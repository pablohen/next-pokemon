import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const TypePage = ({ type }) => (
  // const [type, setType] = useState([]);

  // const getTypeDetailsData = async (id) => {
  //   const typeDatailsData = await pokeapiService.getTypeDetails(id);

  //   setType(typeDatailsData);
  // };

  // useEffect(() => {
  //   if (typeId) {
  //     getTypeDetailsData(typeId);
  //   }
  // }, [typeId]);

  <div>
    <MainMenu />
    <TitleBar title={`${type?.name} type`} />

    <div className="bg-gray-200 p-4 rounded-xl">
      <span className="font-semibold">Double damage from:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.double_damage_from?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>Double damage to:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.double_damage_to?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>Half damage from:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.half_damage_from?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>Half damage to:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.half_damage_to?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>No damage from:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.no_damage_from?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>No damage to:</span>
      <div className="space-x-2 pt-2">
        {type?.damage_relations?.no_damage_to?.map((otherType) => (
          <Link key={otherType.name} href={`/types/${otherType.name}`}>
            <button
              type="button"
              className="px-6 py-1 bg-gray-800 rounded-xl text-white capitalize"
            >
              {otherType.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div>
      <span>Moves:</span>
      <ul>
        {type?.moves?.map((move) => (
          <li key={move.name}>
            <Link href={`/moves/${move.name}`}>
              <button type="button" className="capitalize">
                {move.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <span>Pokemon:</span>
      <ul>
        {type?.pokemon?.map(({ pokemon }) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <button type="button" className="capitalize">
                {pokemon.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TypePage.propTypes = {
  type: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export const getStaticPaths = async () => {
  const typesData = await pokeapiService.getTypes();
  const paths = typesData.map((type) => ({
    params: {
      typeId: type.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { typeId } = params;
  const typeData = await pokeapiService.getType(typeId);

  return {
    props: {
      type: typeData,
    },
  };
};

export default TypePage;
