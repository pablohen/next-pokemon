import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const TypeDetailsPage = () => {
  const router = useRouter();
  const { typeId } = router.query;
  const [type, setType] = useState([]);

  const getTypeDetailsData = async (id) => {
    const typeDatailsData = await pokeapiService.getTypeDetails(id);

    setType(typeDatailsData);
  };

  useEffect(() => {
    if (typeId) {
      getTypeDetailsData(typeId);
    }
  }, [typeId]);

  return (
    <div>
      <MainMenu />
      <TitleBar title={`${type?.name} type`} />

      <div>
        <span>Double damage from:</span>
        <ul>
          {type?.damage_relations?.double_damage_from?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Double damage to:</span>
        <ul>
          {type?.damage_relations?.double_damage_to?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Half damage from:</span>
        <ul>
          {type?.damage_relations?.half_damage_from?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Half damage to:</span>
        <ul>
          {type?.damage_relations?.half_damage_to?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>No damage from:</span>
        <ul>
          {type?.damage_relations?.no_damage_from?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>No damage to:</span>
        <ul>
          {type?.damage_relations?.no_damage_to?.map((otherType) => (
            <li key={otherType.name}>{otherType.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Moves:</span>
        <ul>
          {type?.moves?.map((move) => (
            <li key={move.name}>{move.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Pokemon:</span>
        <ul>
          {type?.pokemon?.map((item) => (
            <li key={item.pokemon.name}>{item.pokemon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypeDetailsPage;
