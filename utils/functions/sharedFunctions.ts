// search function
export const searchFunction = <AllDataProps>(
  query: string,
  allData: AllDataProps[],
  name: keyof AllDataProps
): AllDataProps[] => allData.filter(item => (item[name] as string).includes(query));

// origin date (1970)
export const originDate = () => {
  const originTime = new Date(0);
  const setHourZero = new Date(originTime.setHours(0));
  const setMinuteZero = new Date(setHourZero.setMinutes(0));
  return setMinuteZero.toISOString();
};

// get access token
export const getAccessToken = () => localStorage.getItem('accessToken');
