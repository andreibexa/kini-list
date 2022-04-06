import { useQuery } from 'react-query';
import getProvidersMovie from 'services/watchService';
import { useStateValue } from 'state/state';
import { Providers } from 'types/api/watch';

const useProviders = () => {
  const [{ country }] = useStateValue();
  const countryIso = country?.iso_3166_1;

  const queryInfo = useQuery<Providers, Error>(
    ['providers', countryIso],
    () => getProvidersMovie(countryIso),
    {
      enabled: !!countryIso,
    });

  return {
    ...queryInfo,
    providers: queryInfo.data?.results,
  };
};

export default useProviders;
