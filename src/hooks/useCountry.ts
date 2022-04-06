import useCountries from 'hooks/useCountries';
import { useQuery } from 'react-query';
import { getCountryByIp } from 'services/configurationService';
import { useStateValue } from 'state/state';

export default function useCountry() {
  const countries = useCountries();
  const [{ country }] = useStateValue();

  const queryInfo = useQuery<string, Error>(
    ['country'], () => getCountryByIp(),
    {
      enabled: !!countries
    });

  const defaultCountry = (countryIso: string | undefined) => {
    if (!countryIso || !countries) {
      return null;
    }

    return countries.find((item) => item.iso_3166_1 === countryIso);
  }

  return {
    ...queryInfo,
    country: country || defaultCountry(queryInfo.data),
  };
}
