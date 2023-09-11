import { getDiscoverTvShow } from 'services/discoverService';
import { useStateValue } from 'state/state';
import { useQuery } from '@tanstack/react-query';
import { Shows } from 'types/api/tv';
import useTvShowsProviders from './useTvShowsProviders';
import useCountry from './useCountry';

export default function useTvShowsTop() {
  const { country } = useCountry();
  const { providersTvShows } = useTvShowsProviders();
  const [{ favoriteProviders }] = useStateValue();

  const queryResults = useQuery<Shows, Error>(
    ['tvShowsTop', { country, favoriteProviders }],
    () => getDiscoverTvShow(country?.iso_3166_1, favoriteProviders),
    { enabled: !!country && !!providersTvShows },
  );

  return {
    ...queryResults,
    tvShowsTop: queryResults.data?.results,
    isLoadingTvShowsTop: queryResults.isLoading,
    isSuccessTvShowsTop: queryResults.isSuccess,
  };
}
