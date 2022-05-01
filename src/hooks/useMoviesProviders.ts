import { useQuery } from 'react-query';
import { getProvidersMovies } from 'services/watchService';
import { Providers } from 'types/api/watch';
import useCountry from './useCountry';

const useMoviesProviders = () => {
  const { country } = useCountry();

  const queryInfo = useQuery<Providers, Error>(
    ['providersMovies', { country }],
    () => getProvidersMovies(country?.iso_3166_1),
    {
      enabled: !!country,
    },
  );

  return {
    ...queryInfo,
    providersMovies: queryInfo.data?.results,
  };
};

export default useMoviesProviders;
