import { useQuery } from 'react-query';
import getMovieGenres from 'services/genreService';
import { GenresMovieList } from 'types/api/genres';

const useGenres = () => {
  const queryInfo = useQuery<GenresMovieList, Error>(['genres'], () => getMovieGenres(), {});

  return {
    ...queryInfo,
    genres: queryInfo.data?.genres,
  };
};

export default useGenres;
