import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '@/store/slices/carsSlice';
import { getAccessToken } from '@/utils/functions/sharedFunctions';
import { Cars } from '@/types/slices/carsTypes';
import { CarsProps, UseCarsProps } from '@/types/hooks/useCarsTypes';

const useCars = (setSearchedItems: UseCarsProps) => {
  const [searchValue, setSearchValue] = useState('');

  const cars = useSelector(({ cars: { cars } }: CarsProps) => cars);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const url = `http://localhost:8080/garage/get-cars?search=${searchValue}`;
      const headers = {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      };

      const response = await axios.get(url, headers);

      if (response?.status !== 200) return;

      const { data }: { data: Cars[] } = response;
      const withNameField = data.map(item => ({
        ...item,
        name: 'cars',
      }));

      dispatch(setCars(withNameField));
      setSearchedItems(withNameField!);
    })();
  }, [searchValue]);

  return { cars, setSearchValue, searchValue };
};

export default useCars;
