import { getDiscoverTvShow } from 'services/discoverService';
import { useStateValue } from 'state/state';
import { QueriesOptions, useQueries } from 'react-query';
import { Shows } from 'types/api/tv';
import useGenresTvShows from './useGenresTvShows';
import useCountry from './useCountry';
import useTvShowsProviders from './useTvShowsProviders';

export default function useTvShowsByGenre() {
  const [{ favoriteProviders }] = useStateValue();
  const { country } = useCountry();
  const { providersTvShows } = useTvShowsProviders();
  const { genresTvShows } = useGenresTvShows();

  const queries: QueriesOptions<Shows[]> = [];
  genresTvShows?.forEach((genre) => queries.push({
    queryKey: ['discoverTvShow', { country, favoriteProviders, genre }],
    queryFn: () => getDiscoverTvShow(country?.iso_3166_1, favoriteProviders, genre.id),
    enabled: !!country && !!providersTvShows,
  }));

  const queryResults = useQueries<Shows[]>({ queries });

  const isLoading = !!queryResults.find((query) => query.isLoading);
  const isSuccess = queryResults.every((query) => query.data !== undefined);

  const tvShowsByGenre = isSuccess
    ? (queryResults.map((query) => query.data) as Shows[])
    : undefined;

  return {
    isLoadingTvShowsGenres: isLoading,
    isSuccessTvShowsGenres: isSuccess,
    tvShowsByGenre,
  };
}
