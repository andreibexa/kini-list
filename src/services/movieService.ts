import { apiClientV3 } from 'utils/httpCommon';

const getMovieProviders = async <T>(movie_id: number, signal: AbortSignal | undefined) => {
  try {
    const { data } = await apiClientV3.get<T>(`/movie/${movie_id}/watch/providers`, { signal });

    return data;
  } catch {
    throw new Error('Error! Unable to get movie providers.');
  }
};

const getMovieDetails = async <T>(movie_id: number) => {
  try {
    const { data } = await apiClientV3.get<T>(`/movie/${movie_id}?append_to_response=videos`);

    return data;
  } catch {
    throw new Error('Error! Unable to fetch movie.');
  }
};

const getMovieVideos = async <T>(movie_id: number) => {
  try {
    const { data } = await apiClientV3.get<T>(`/movie/${movie_id}/videos`);

    return data;
  } catch {
    throw new Error('Error! Unable to fetch movie videos.');
  }
};

export { getMovieProviders, getMovieDetails, getMovieVideos };
