import { apiClientV3 } from 'utils/httpCommon';
import validateCountryIso from 'utils/validator';

const getProvidersMovies = async <T>(countryIso: string | undefined) => {
  try {
    validateCountryIso(countryIso);

    const { data } = await apiClientV3.get<T>(
      `/watch/providers/movie?watch_region=${countryIso || 'us'}`,
    );
    return data;
  } catch (error) {
    throw new Error("Can't fetch movie providers");
  }
};

const getProvidersTvShows = async <T>(countryIso: string | undefined) => {
  try {
    validateCountryIso(countryIso);

    const { data } = await apiClientV3.get<T>(
      `/watch/providers/tv?watch_region=${countryIso || 'us'}`,
    );
    return data;
  } catch (error) {
    throw new Error("Can't fetch tv providers");
  }
};

export { getProvidersMovies, getProvidersTvShows };
