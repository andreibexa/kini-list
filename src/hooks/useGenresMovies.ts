import { useQuery } from 'react-query';
import { getMovieGenres } from 'services/genreService';
import { GenresMovieList } from 'types/api/genres';

const useGenresMovies = () => {
  const queryInfo = useQuery<GenresMovieList, Error>(['movieGenres'], () => getMovieGenres(), {});

  return {
    ...queryInfo,
    genresMovies: queryInfo.data?.genres,
    isLoadingGenresMovies: queryInfo.isLoading,
  };
};

export default useGenresMovies;
