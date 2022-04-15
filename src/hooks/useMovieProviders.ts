import { useQuery } from 'react-query';
import getMovieProvider from 'services/movieService';
import { ResultsMovieProviders } from 'types/api/movies';

const useMovieProviders = (movieId: number) => {
  const queryInfo = useQuery<ResultsMovieProviders, Error>(
    ['providers', movieId],
    ({ signal }) => getMovieProvider(movieId, signal),
    {},
  );

  return {
    ...queryInfo,
    movieProviders: queryInfo.data?.results,
  };
};

export default useMovieProviders;
