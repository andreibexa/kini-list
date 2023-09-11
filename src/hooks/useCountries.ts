import { useQuery } from '@tanstack/react-query';
import { getCountries } from 'services/configurationService';
import { Countries } from 'types/api/configuration';

const useCountries = () => {
  const { data } = useQuery<Countries, Error>(['countries'], () => getCountries(), {});

  if (data) {
    return data;
  }

  return null;
};

export default useCountries;
