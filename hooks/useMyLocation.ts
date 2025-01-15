'use client';

import { useState, useEffect } from 'react';

export type currentLocation = number[] | undefined;

export default function useMyLocation() {
  const initialLocation = [35.73091216206883, 51.863542892345556];

  const [currLocation, setCurrLocation] = useState<currentLocation>(initialLocation);

  // is there geolocation
  useEffect(
    () =>
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(success, error)
        : alert('موقعیت مکانی پشتیبانی نمی شود\nلطفا موقعیت مکانی خود را فعال نمایید.'),
    []
  );

  // Success callback
  const success: PositionCallback = ({ coords }) => {
    const { latitude, longitude } = coords;
    setCurrLocation([latitude, longitude]);
  };

  // error
  const error: PositionErrorCallback = () =>
    alert('امکان بازیابی موقعیت مکانی شما وجود ندارد\nلطفا موقعیت مکانی خود را فعال نمایید.');

  return currLocation;
}
