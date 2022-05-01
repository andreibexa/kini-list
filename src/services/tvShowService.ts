import { apiClientV3 } from 'utils/httpCommon';

const getTvShowDetails = async <T>(movieId: number) => {
  try {
    const { data } = await apiClientV3.get<T>(`/tv/${movieId}?append_to_response=videos`);

    return data;
  } catch {
    throw new Error('Error! Unable to fetch tv show.');
  }
};

const getTvShowProviders = async <T>(showId: number, signal: AbortSignal | undefined) => {
  try {
    const { data } = await apiClientV3.get<T>(`/tv/${showId}/watch/providers`, { signal });

    return data;
  } catch {
    throw new Error('Error! Unable to get tv show providers.');
  }
};

export { getTvShowDetails, getTvShowProviders };
