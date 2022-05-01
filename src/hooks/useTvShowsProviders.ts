import { useQuery } from 'react-query';
import { getProvidersTvShows } from 'services/watchService';
import { Providers } from 'types/api/watch';
import useCountry from './useCountry';

const useTvShowsProviders = () => {
  const { country } = useCountry();

  const queryInfo = useQuery<Providers, Error>(
    ['providersTvShow', { country }],
    () => getProvidersTvShows(country?.iso_3166_1),
    {
      enabled: !!country,
    },
  );

  return {
    ...queryInfo,
    providersTvShows: queryInfo.data?.results,
  };
};

export default useTvShowsProviders;
