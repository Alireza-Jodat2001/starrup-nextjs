'use client';

import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MoveToPosition = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 16, {
      animate: true,
    });
  }, [map, position]);

  return <></>;
};

export default MoveToPosition;
