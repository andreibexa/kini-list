import { apiClientV3 } from 'utils/httpCommon';

const getMovieProvider = async <T>(movie_id: number, signal: AbortSignal | undefined) => {
  try {
    const { data } = await apiClientV3.get<T>(`/movie/${movie_id}/watch/providers`, { signal });

    return data;
  } catch {
    throw new Error('Error! Unable to get movie providers.');
  }
};

export default getMovieProvider;
