import getDiscoverMovie from 'services/discoverService';
import { useStateValue } from 'state/state';
import { useQuery } from 'react-query';
import { Movies } from 'types/api/movies';
import useProviders from './useProviders';
import useCountry from './useCountry';

export default function useMoviesTop() {
  const [{ favoriteProviders }] = useStateValue();
  const { country } = useCountry();
  const { providers } = useProviders();
  const countryIso = country?.iso_3166_1;
  const favoriteProvidersHash = favoriteProviders
    ?.map((provider) => provider.provider_id)
    .join('|');

  const queryResults = useQuery<Movies, Error>(
    ['moviesTop', { countryIso, favoriteProvidersHash }],
    () => getDiscoverMovie(countryIso, favoriteProviders),
    { enabled: !!countryIso && !!providers },
  );

  return {
    ...queryResults,
    moviesTop: queryResults.data?.results,
    isLoadingMoviesTop: queryResults.isLoading,
    isSuccessMoviesTop: queryResults.isSuccess,
  };
}
