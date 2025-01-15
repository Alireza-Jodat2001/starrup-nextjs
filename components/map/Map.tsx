'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapFunctions from '@/utils/functions/mapFunctions';
import { LatLngExpression } from 'leaflet';
import MoveToPosition from './MoveToPosition';
import { Location } from '@/types/components/mapTypes';
import MapMarker from './MapMarker';
import FloatingMapButton from './FloatingMapButton';

const Map = () => {
  const { filteredGarages, myLocation, isMap } = mapFunctions();

  return (
    <>
      <MapContainer zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {filteredGarages?.map((location: Location, index: number) => (
          <MapMarker location={location} key={index} />
        ))}

        <MoveToPosition position={myLocation as LatLngExpression} />
      </MapContainer>

      {!isMap && <FloatingMapButton />}
    </>
  );
};

export default Map;
