import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredGarages } from '@/store/slices/filteredGaragesSlice';
import axios from 'axios';
import { getAccessToken } from '@/utils/functions/sharedFunctions';
import { Garage } from '@/types/slices/filteredGaragesTypes';
import { garageByUploads } from '@/types/slices/allGarageByOwnerTypes';

const useNearbyGarages = (coords: number[]) => {
  const filteredGarages = useSelector(({ filteredGarages: { filteredGarages } }: any) => filteredGarages);

  const dispatch = useDispatch();
  const [lat, lon] = coords;

  // This function for get filtered garages
  const getFilteredGarages = async (lat: number, lon: number) => {
    try {
      const url = `http://localhost:8080/garage/get-accessibles?lat=${lat}&lon=${lon}&distance=1000`;
      const headers = { Authorization: `Bearer ${getAccessToken()}` };
      const response = await axios.get(url, { headers });
      if (response?.status !== 200) return;
      return response.data;
    } catch {}
  };

  // This function for get garage images and add to the filtered garages
  const getGaragesWithUploads = async (withoutImage: Garage[]) => {
    try {
      const newList = withoutImage.map(({ garage_id }) => {
        const url = `http://localhost:8080/garage/${garage_id}`;
        const headers = { Authorization: `Bearer ${getAccessToken()}` };
        return axios.get(url, { headers });
      });
      const promises = await Promise.all(newList);
      return promises.map(({ data }) => data);
    } catch {}
  };

  // This function for get garage object with image files it
  const getWithImages = async (withUploads: garageByUploads[]) => {
    try {
      const newList = withUploads.map(async item => {
        const url = `http://localhost:8080/garage/upload/${item?.uploads?.[0].upload_id}`;
        const headers = { Authorization: `Bearer ${getAccessToken()}` };
        const responseType = 'blob';
        const response = await axios.get(url, { headers, responseType });
        const imageUrl = URL.createObjectURL(response.data);
        if (response?.status !== 200) return;
        return { ...item, image: imageUrl };
      });
      return await Promise.all(newList);
    } catch {}
  };

  useEffect(() => {
    (async () => {
      try {
        const withoutImage = await getFilteredGarages(lat, lon);
        const getWithUploads = await getGaragesWithUploads(withoutImage);
        const withImage = await getWithImages(getWithUploads!);
        dispatch(setFilteredGarages(withImage));
      } catch {}
    })();
  }, [lat, lon]);

  return filteredGarages;
};

export default useNearbyGarages;
