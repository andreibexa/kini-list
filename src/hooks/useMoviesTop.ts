import getDiscoverMovie from 'services/discoverService';
import { useStateValue } from 'state/state';
import { useQuery } from 'react-query';
import { Movies } from 'types/api/movies';
import useProviders from './useProviders';

export default function useMoviesTop(genreId?: number) {
  const [{ favoriteProviders, country }] = useStateValue();

  const { providers } = useProviders();
  const countryIso = country?.iso_3166_1;

  const queryResults = useQuery<Movies, Error>(
    ['trendingMovies', countryIso, ...favoriteProviders, String(genreId)],
    () => getDiscoverMovie(countryIso, favoriteProviders, genreId),
    { enabled: !!countryIso && !!providers },
  );

  return {
    ...queryResults,
    moviesTop: queryResults.data?.results,
    isLoadingMoviesTop: queryResults.isLoading,
    isSuccessMoviesTop: queryResults.isSuccess,
  };
}
