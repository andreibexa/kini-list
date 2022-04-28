import getDiscoverMovie from 'services/discoverService';
import { useStateValue } from 'state/state';
import { QueriesOptions, useQueries } from 'react-query';
import { Movies } from 'types/api/movies';
import useProviders from './useProviders';
import useGenres from './useGenres';
import useCountry from './useCountry';

export default function useMovieGenres() {
  const [{ favoriteProviders }] = useStateValue();
  const { country } = useCountry();
  const { genres } = useGenres();

  const { providers } = useProviders();
  const countryIso = country?.iso_3166_1;
  const favoriteProvidersHash = favoriteProviders
    ?.map((provider) => provider.provider_id)
    .join('|');

  const queries: QueriesOptions<Movies[]> = [];
  genres?.forEach((genre) => queries.push({
    queryKey: ['allGenresMovies', { countryIso, favoriteProvidersHash, genre }],
    queryFn: () => getDiscoverMovie(countryIso, favoriteProviders, genre.id),
    enabled: !!countryIso && !!providers && !!genres,
  }));

  const queryResults = useQueries({ queries });
  const isLoadingMovieGenres = !!queryResults.find((query) => query.isLoading);
  const movieGenres = !isLoadingMovieGenres
    ? (queryResults.map((query) => query.data) as Movies[])
    : undefined;

  return {
    movieGenres,
    isLoadingMovieGenres,
  };
}
