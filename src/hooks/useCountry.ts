import useCountries from 'hooks/useCountries';
import { useQuery } from 'react-query';
import { getCountryByIp } from 'services/configurationService';
import { useStateValue } from 'state/state';
import { Countries } from 'types/api/configuration';

function findCountry(countries: Countries, countryIso: string | undefined) {
  return countries.find((item) => item.iso_3166_1 === countryIso);
}

export default function useCountry() {
  const countries = useCountries();
  const [{ country: stateCountry }] = useStateValue();

  const queryInfo = useQuery<string, Error>(['country'], () => getCountryByIp(), {
    enabled: !!countries,
  });

  const defaultCountry = countries ? findCountry(countries, queryInfo.data) : null;

  return {
    ...queryInfo,
    country: stateCountry || defaultCountry,
  };
}
