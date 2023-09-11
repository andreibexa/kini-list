import { getDiscoverMovie } from 'services/discoverService';
import { useStateValue } from 'state/state';
import { QueriesOptions, useQueries } from '@tanstack/react-query';
import { Movies } from 'types/api/movies';
import useMoviesProviders from './useMoviesProviders';
import useGenresMovies from './useGenresMovies';
import useCountry from './useCountry';

export default function useMoviesByGenre() {
  const [{ favoriteProviders }] = useStateValue();
  const { country } = useCountry();
  const { providersMovies } = useMoviesProviders();
  const { genresMovies } = useGenresMovies();

  const queries: QueriesOptions<Movies[]> = [];
  genresMovies?.forEach((genre) => queries.push({
    queryKey: ['discoverMovie', { country, favoriteProviders, genre }],
    queryFn: () => getDiscoverMovie(country?.iso_3166_1, favoriteProviders, genre.id),
    enabled: !!country && !!providersMovies,
  }));

  const queryResults = useQueries<Movies[]>({ queries });

  const isLoading = !!queryResults.find((query) => query.isLoading);
  const isSuccess = queryResults.every((query) => query.data !== undefined);

  const moviesByGenre = isSuccess
    ? (queryResults.map((query) => query.data) as Movies[])
    : undefined;

  return {
    isLoadingMoviesByGenres: isLoading,
    isSuccessMoviesByGenres: isSuccess,
    moviesByGenre,
  };
}
