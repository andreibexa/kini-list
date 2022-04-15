import { apiClientV3 } from 'utils/httpCommon';

const searchService = async <T>(
  query: string,
  countryIso: string | undefined,
  signal: AbortSignal | undefined,
) => {
  try {
    const { data } = await apiClientV3.get<T>(
      `/search/multi?query=${query}&country=${countryIso || 'US'}`,
      { signal },
    );

    return data;
  } catch (error) {
    throw new Error('Ups ! Something was wrong with the search query');
  }
};

export default searchService;
