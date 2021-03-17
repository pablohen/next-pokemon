import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokeapiService from '../../services/pokeapiService';
import MainMenu from '../../components/MainMenu';
import TitleBar from '../../components/TitleBar';

const BerryPage = () => {
  const router = useRouter();
  const { berryId } = router.query;
  const [berry, setBerry] = useState([]);

  const getBerryData = async (id) => {
    const berryData = await pokeapiService.getBerry(id);
    setBerry(berryData);
  };

  useEffect(() => {
    if (berryId) {
      getBerryData(berryId);
    }
  }, [berryId]);
  return (
    <div>
      <MainMenu />
      <TitleBar title={berry?.name} />

      <div className="px-4">
        <p>
          <span className="font-semibold">Size: </span>
          <span className="capitalize">{`${berry?.size}mm`}</span>
        </p>

        <p>
          <span className="font-semibold">Firmness: </span>
          <span className="capitalize">{berry?.firmness?.name}</span>
        </p>

        <p>
          <span className="font-semibold">Growth time (cycle): </span>
          <span className="capitalize">{`${berry?.growth_time}h`}</span>
        </p>

        <p>
          <span className="font-semibold">Growth time (total): </span>
          <span className="capitalize">
            {`${Number(berry?.growth_time) * 4}h`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BerryPage;
