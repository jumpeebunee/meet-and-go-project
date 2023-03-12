import { YMaps, Map } from '@pbe/react-yandex-maps';
import { API_KEY, MAP_CENTER } from '../dataConfig/dataConfig';

const AppMap = () => {
  return (
    <YMaps query={{ apikey: API_KEY}}>
      <Map 
        className='app-map'
        defaultState={MAP_CENTER}>

      </Map>
    </YMaps>
  )
}

export default AppMap