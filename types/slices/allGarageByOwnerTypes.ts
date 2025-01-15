import { Garage } from './filteredGaragesTypes';

interface BusinessDate {
  garage_id: string;
  day: number;
  is_closed: boolean;
  open_at: string;
  close_at: string;
}

interface Cars {
  car_id: number;
  garage_id: string;
}

interface Duties {
  duty_id: number;
  price: string;
  garage_id: string;
}

interface Uploads {
  garage_id: string;
  upload_id: number;
  mimetype: string;
  size: number;
}

export interface AllGarageByOwner {
  garage_id: string;
  user_id: string;
  title: string;
  description: string;
  address: string;
  lat: string;
  lon: string;
  is_deleted: boolean;
  is_phone_number_visible: boolean;
  telephone: string;
  business_date: BusinessDate[];
  cars: Cars[];
  duties: Duties[];
  uploads: Uploads[];
}

export interface InitialState {
  allGarageByOwner: AllGarageByOwner[];
}

export type garageByUploads = Garage & Uploads;
