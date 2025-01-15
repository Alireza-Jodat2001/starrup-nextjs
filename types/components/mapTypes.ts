import { garageByUploads } from '../slices/allGarageByOwnerTypes';

interface garageImage {
  image: string;
}

export interface Location {
  id: number;
  lat: number;
  lon: number;
  title: string;
  distance: string;
  garage_id?: string;
}

type garageWithImage = garageByUploads & garageImage;

export type shownGarageType = garageWithImage | null;

export interface handleMarkerClickFunction {
  (garage_id?: string | undefined): void;
}

export interface MapMarkerProps {
  location: Location;
}
