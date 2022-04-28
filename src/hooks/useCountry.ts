import useCountries from 'hooks/useCountries';
import { useQuery } from 'react-query';
import { getCountryByIp } from 'services/configurationService';
import { useStateValue } from 'state/state';
import { Countries, Country } from 'types/api/configuration';
import { setCountry } from 'state/reducer';
import React from 'react';

function findCountry(countries: Countries | null, countryIso: string | undefined) {
  return countries?.find((item) => item.iso_3166_1 === countryIso);
}

export default function useCountry() {
  const countries = useCountries();
  const [{ country: stateCountry }, dispatch] = useStateValue();
  const refCountryByIp = React.useRef<Country | undefined>(stateCountry);
  const queryInfo = useQuery<string, Error>(['country'], () => getCountryByIp(), {
    enabled: !!countries,
  });

  const memoFindCountry = React.useMemo(
    () => findCountry(countries, queryInfo.data),
    [countries, queryInfo.data],
  );

  refCountryByIp.current = memoFindCountry;
  React.useEffect(() => {
    if (!stateCountry && refCountryByIp.current) {
      dispatch(setCountry(refCountryByIp.current));
    }
  }, [dispatch, stateCountry]);

  if (!stateCountry) {
    return {
      ...queryInfo,
      country: null,
    };
  }

  return {
    ...queryInfo,
    country: refCountryByIp.current,
  };
}
