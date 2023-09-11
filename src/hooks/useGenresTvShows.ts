import { useQuery } from '@tanstack/react-query';
import { getTvShowGenres } from 'services/genreService';
import { GenresTVList } from 'types/api/genres';

const useGenresTvShows = () => {
  const queryInfo = useQuery<GenresTVList, Error>(['movieGenres'], () => getTvShowGenres(), {});

  return {
    ...queryInfo,
    genresTvShows: queryInfo.data?.genres,
    isLoadingGenresTvShows: queryInfo.isLoading,
  };
};

export default useGenresTvShows;
