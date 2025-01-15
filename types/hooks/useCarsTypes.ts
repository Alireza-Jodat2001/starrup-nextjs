import { Cars } from '@/types/slices/carsTypes';
import { DispatchType } from '../sharedTypes';

export interface CarsProps {
  cars: { cars: Cars[] | null };
}

export type UseCarsProps = DispatchType<Cars[]>;
