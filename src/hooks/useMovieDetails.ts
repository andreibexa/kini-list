import { useQuery } from 'react-query';
import { getMovieDetails } from 'services/movieService';
import { MovieWithVideos } from 'types/api/movies';

const useMovieDetails = (movieId: number) => {
  const id = Number(movieId);

  if (!movieId || id <= 0) {
    throw new Error('Error! Movie id must be a number.');
  }

  return useQuery<MovieWithVideos, Error>(['movie', String(id)], () => getMovieDetails(id), {});
};

export default useMovieDetails;
