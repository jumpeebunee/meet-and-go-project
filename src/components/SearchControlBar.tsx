import {  GeolocationControl, SearchControl } from '@pbe/react-yandex-maps';

const SearchControlBar = () => {
  return (
    <>
      <GeolocationControl options={{ float: "left"}}/>
      <SearchControl options={{position: {top: 10, right: 10}, noPlacemark: true}}/>
    </>
  )
}

export default SearchControlBar