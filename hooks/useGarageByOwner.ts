import { setAllGarageByOwnerSlice } from '@/store/slices/allGarageByOwnerSlice';
import { getAccessToken } from '@/utils/functions/sharedFunctions';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGarageByOwner = () => {
  const [allGarageByOwner, setAllGarageByOwner] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const url = 'http://localhost:8080/garage/get-all-by-owner';
      const headers = { Authorization: `Bearer ${getAccessToken()}` };

      try {
        const response = await axios.get(url, { headers });

        setAllGarageByOwner(response.data);
        dispatch(setAllGarageByOwnerSlice(response.data));
      } catch {}
    })();
  }, []);

  return allGarageByOwner;
};

export default useGarageByOwner;
