export interface InitialState {
  garageData: {
    garage_id: string | null;
    user_id: string | null;
    title: string | null;
    description: string | null;
    address: string | null;
    lat: string | null;
    lon: string | null;
    is_deleted: boolean | null;
    telephone: string | null;
    phone_number: string | null;
    is_phone_number_visible: boolean | null;
  };
}

export interface setGarageIdReducer {
  payload: string;
}
