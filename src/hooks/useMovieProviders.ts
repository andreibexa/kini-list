import { useQuery } from 'react-query';
import { getMovieProviders } from 'services/movieService';
import { ResultsMovieProviders } from 'types/api/movies';

const useMovieProviders = (movieId: number) => {
  const queryInfo = useQuery<ResultsMovieProviders, Error>(
    ['providers', String(movieId)],
    ({ signal }) => getMovieProviders(movieId, signal),
    {},
  );

  return {
    ...queryInfo,
    movieProviders: queryInfo.data?.results,
  };
};

export default useMovieProviders;
