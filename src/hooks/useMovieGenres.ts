import getDiscoverMovie from 'services/discoverService';
import { useStateValue } from 'state/state';
import filterActiveProviders from 'utils/providers';
import { QueriesOptions, useQueries } from 'react-query';
import { Movies } from 'types/api/movies';
import useProviders from './useProviders';
import useGenres from './useGenres';

export default function useMovieGenres() {
  const [{ favoriteProviders, country }] = useStateValue();
  const { genres } = useGenres();

  const { providers } = useProviders();
  const countryIso = country?.iso_3166_1;
  const activeProviders = filterActiveProviders(providers, favoriteProviders);

  const queries: QueriesOptions<Movies[]> = [];
  genres?.forEach((genre) =>
    queries.push({
      queryKey: ['allGenresMovies', countryIso, ...activeProviders, genre.name],
      queryFn: () => getDiscoverMovie(countryIso, activeProviders, genre.id),
      enabled: !!countryIso && !!providers && !!genres,
    })
  );

  const queryResults = useQueries({ queries });
  const isLoadingMovieGenres = queryResults.find((query) => query.isLoading);
  const movieGenres = !isLoadingMovieGenres
    ? (queryResults.map((query) => query.data) as Movies[])
    : null;

  return {
    movieGenres,
    isLoadingMovieGenres,
  };
}
