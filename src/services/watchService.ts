import { apiClientV3 } from '../utils/httpCommon';

const getProvidersMovie = async <T>(countryIso: string | undefined) => {
  try {
    if (countryIso === undefined || countryIso.length !== 2) {
      throw new Error("Error ! Invalid country iso");
    }

    const { data } = await apiClientV3.get<T>(`/watch/providers/movie?watch_region=${countryIso}`);
    return data;
  } catch (error) {
    throw new Error("Can't fetch providers");
  }
};

export default getProvidersMovie
