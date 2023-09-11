import { getDiscoverMovie } from 'services/discoverService';
import { useStateValue } from 'state/state';
import { useQuery } from '@tanstack/react-query';
import { Movies } from 'types/api/movies';
import useMoviesProviders from './useMoviesProviders';
import useCountry from './useCountry';

export default function useMoviesTop() {
  const { country } = useCountry();
  const { providersMovies } = useMoviesProviders();
  const [{ favoriteProviders }] = useStateValue();

  const queryResults = useQuery<Movies, Error>(
    ['moviesTop', { country, favoriteProviders }],
    () => getDiscoverMovie(country?.iso_3166_1, favoriteProviders),
    { enabled: !!country && !!providersMovies },
  );

  return {
    ...queryResults,
    moviesTop: queryResults.data?.results,
    isLoadingMoviesTop: queryResults.isLoading,
    isSuccessMoviesTop: queryResults.isSuccess,
  };
}
