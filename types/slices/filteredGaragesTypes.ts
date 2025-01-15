import { AllGarageByOwner } from './allGarageByOwnerTypes';

export type Garage = AllGarageByOwner;

export interface InitialState {
  filteredGarages: Garage[] | null;
}
