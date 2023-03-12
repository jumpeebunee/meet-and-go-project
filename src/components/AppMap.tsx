import { YMaps, Map } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import { API_KEY, MAP_CENTER } from '../dataConfig/dataConfig';
import SearchBtn from './SearchBtn';

const AppMap = () => {

  const [isSearchActive, setSearchActive] = useState(false);

  return (
    <YMaps query={{ apikey: API_KEY}}>
      <Map className='app-map' defaultState={MAP_CENTER}>
        <SearchBtn
          isSearchActive={isSearchActive}
          setSearchActive={setSearchActive}
        />
      </Map>
    </YMaps>
  )
}

export default AppMap