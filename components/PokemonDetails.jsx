import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetails = ({ pokemon }) => (
  <div className="bg-blue-400 pt-14">
    <div className="bg-white rounded-t-3xl p-4 md:p-8 relative">
      <div className="flex flex-col md:flex-row items-center">
        <span className="capitalize font-semibold text-xl absolute top-4 md:top-8 left-4 md:left-8">
          {pokemon.name}
        </span>

        <span className="font-semibold text-xl absolute top-4 md:top-8 right-4 md:right-8">
          {`# ${pokemon.id}`}
        </span>

        <img
          src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
          alt={pokemon.name}
          style={{ filter: 'drop-shadow(5px -5px 5px #00000077)' }}
          className="w-11/12 md:w-4/12 mt-10"
        />

        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-2 space-y-2 md:space-y-0">
          <span className="bg-gray-600 px-6 py-1 rounded-xl text-white text-center uppercase shadow">
            {pokemon?.types?.[1]?.type?.name
              ? `${pokemon?.types?.[0]?.type?.name} / ${pokemon?.types?.[1]?.type?.name}`
              : pokemon?.types?.[0]?.type?.name}
          </span>
          <div className="flex space-x-2">
            <span className="bg-gray-500 px-6 py-1 rounded-xl text-white text-center shadow">
              {`${Number(pokemon?.height) / 10}m`}
            </span>

            <span className="bg-gray-500 px-6 py-1 rounded-xl text-white text-center shadow">
              {`${Number(pokemon?.weight) / 10}Kg`}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

PokemonDetails.defaultProps = {
  pokemon: '',
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape(),
};

export default PokemonDetails;
