export interface Duties {
  id: number;
  label: string;
  name?: string;
}

export interface InitialState {
  duties: Duties[] | null;
}
