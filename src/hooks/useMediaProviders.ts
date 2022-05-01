import { useQuery } from 'react-query';
import { getMovieProviders } from 'services/movieService';
import { getTvShowProviders } from 'services/tvShowService';
import { ResultsMovieProviders } from 'types/api/movies';
import { ResultsShowProviders } from 'types/api/tv';

const useMediaProviders = (movieId: number, type: 'movie' | 'tv') => {
  const queryInfo = useQuery<ResultsMovieProviders | ResultsShowProviders, Error>(
    ['mediaProviders', movieId],
    ({ signal }) => {
      if (type === 'movie') {
        return getMovieProviders(movieId, signal);
      }
      return getTvShowProviders(movieId, signal);
    },
  );

  return {
    ...queryInfo,
    mediaProviders: queryInfo.data?.results,
  };
};

export default useMediaProviders;
