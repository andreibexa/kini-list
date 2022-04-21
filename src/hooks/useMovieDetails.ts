import { useQuery } from 'react-query';
import { getMovieDetails } from 'services/movieService';
import { MovieWithVideos } from 'types/api/movies';

const useMovieDetails = (id: number) => {
  const movieId = Number(id);

  if (!id || movieId <= 0) {
    throw new Error('Error! Movie id must be a number.');
  }

  return useQuery<MovieWithVideos, Error>(['movie', String(movieId)], () => getMovieDetails(movieId), {});
};

export default useMovieDetails;
