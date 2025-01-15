export interface Cars {
  id: number;
  label: string;
  name?: string;
}

export interface InitialState {
  cars: Cars[] | null;
}
