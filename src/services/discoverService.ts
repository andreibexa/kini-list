import { Provider } from 'types/api/watch';
import { apiClientV3 } from 'utils/httpCommon';
import validateCountryIso from 'utils/validator';

const getDiscoverMovie = async <T>(
  countryIso: string | undefined,
  providers: Provider[],
  genreId?: number,
) => {
  try {
    validateCountryIso(countryIso);

    const providerIds = providers.map((provider) => provider.provider_id);
    const pipeProviderIds = providerIds.join('|');

    const { data } = await apiClientV3.get<T>(
      `/discover/movie?watch_region=${
        countryIso || 'us'
      }&with_watch_providers=${pipeProviderIds}&with_genres=${genreId || ''}`,
    );

    return data;
  } catch {
    throw new Error('Error! Unable to discover movies.');
  }
};

const getDiscoverTvShow = async <T>(
  countryIso: string | undefined,
  providers: Provider[],
  genreId?: number,
) => {
  try {
    validateCountryIso(countryIso);

    const providerIds = providers.map((provider) => provider.provider_id);
    const pipeProviderIds = providerIds.join('|');

    const { data } = await apiClientV3.get<T>(
      `/discover/tv?watch_region=${
        countryIso || 'us'
      }&with_watch_providers=${pipeProviderIds}&with_genres=${genreId || ''}`,
    );

    return data;
  } catch {
    throw new Error('Error! Unable to discover movies.');
  }
};

export { getDiscoverMovie, getDiscoverTvShow };
