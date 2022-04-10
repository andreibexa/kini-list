import { apiClientV3 } from 'utils/httpCommon';

const getMovieGenres = async <T>() => {
  try {
    const { data } = await apiClientV3.get<T>(`/genre/movie/list`);

    return data;
  } catch {
    throw new Error('Error! Unable to get movie genres.');
  }
};

export default getMovieGenres;
