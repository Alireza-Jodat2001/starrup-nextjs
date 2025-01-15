'use client';

import { useState } from 'react';
import L from 'leaflet';
import useMyLocation from '@/hooks/useMyLocation';
import useNearbyGarages from '@/hooks/useNearbyGarages';
import { usePathname } from 'next/navigation';
import { handleMarkerClickFunction, shownGarageType } from '@/types/components/mapTypes';

const mapFunctions = () => {
  const [shownGarage, setShownGarage] = useState<shownGarageType>(null);

  const customIcon = new L.Icon({
    iconUrl: '/public/images/map/marker.svg',
    iconSize: [38, 38],
    iconAnchor: [20, 22],
    popupAnchor: [-3, -76],
  });

  const pathname = usePathname();
  const isMap = pathname === '/mapScreen';
  const myLocation = useMyLocation();
  const filteredGarages = useNearbyGarages(myLocation!);

  const handleMarkerClick: handleMarkerClickFunction = garage_id => {
    const foundGarage = filteredGarages.find(
      ({ garage_id: loop_garage_id }: { garage_id: string }) => loop_garage_id === garage_id
    );
    setShownGarage(foundGarage);
  };

  return {
    customIcon,
    handleMarkerClick,
    filteredGarages,
    setShownGarage,
    shownGarage,
    myLocation,
    isMap,
  };
};

export default mapFunctions;
