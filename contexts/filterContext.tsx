import { valuesProps } from '@/types/contexts/filterContextTypes';
import { DispatchType } from '@/types/sharedTypes';
import { createContext, useState, useContext, ReactNode } from 'react';

// interfaces
interface FilterContextProviderProps {
  (firstProp: { children: ReactNode }): ReactNode;
}
interface contextInitialValueProps {
  values: valuesProps;
  setValues: DispatchType<valuesProps>;
}

// initial values
const initialState: valuesProps = {
  sortBy: 4,
  accessibly: [],
  cars: [],
  problem: [],
};
const contextInitialValue: contextInitialValueProps = {
  values: initialState,
  setValues: () => {},
};

// create context
const FilterContext = createContext(contextInitialValue);

// function provider
export const FilterContextProvider: FilterContextProviderProps = ({ children }) => {
  const [values, setValues] = useState(initialState);

  const value = { values, setValues };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => useContext(FilterContext);
