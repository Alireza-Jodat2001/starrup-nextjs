import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDuties } from '@/store/slices/dutiesSlice';
import { getAccessToken } from '@/utils/functions/sharedFunctions';
import { Duties } from '@/types/slices/dutiesTypes';
import { UseCarsProps } from '@/types/hooks/useCarsTypes';

interface DutiesProps {
  duties: { duties: Duties[] | null };
}

const useDuties = (setSearchedItems: UseCarsProps) => {
  const [searchValue, setSearchValue] = useState('');

  const duties = useSelector(({ duties: { duties } }: DutiesProps) => duties);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const url = `http://localhost:8080/garage/get-duties?search=${searchValue}`;
      const headers = {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      };

      const response = await axios.get(url, headers);

      if (response?.status !== 200) return;

      const { data }: { data: Duties[] } = response;
      const withNameField = data.map(item => ({
        ...item,
        name: 'problems',
      }));

      dispatch(setDuties(withNameField));
      setSearchedItems(withNameField);
    })();
  }, [searchValue]);

  return { duties, setSearchValue, searchValue };
};

export default useDuties;
