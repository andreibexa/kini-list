import useCountries from 'hooks/useCountries';
import { useQuery } from 'react-query';
import { getCountryByIp } from 'services/configurationService';
import { useStateValue } from 'state/state';
import { Countries } from 'types/api/configuration';
import { setCountry } from 'state/reducer';
import React from 'react';

function findCountryByIso(countries: Countries | null, countryIso: string | undefined) {
  return countries?.find((item) => item.iso_3166_1 === countryIso);
}

export default function useCountry() {
  const countries = useCountries();
  const [{ country: stateCountry }, dispatch] = useStateValue();

  const queryInfo = useQuery<string, Error>(['country'], () => getCountryByIp(), {
    enabled: !!countries,
  });

  const countryByIp = React.useMemo(
    () => findCountryByIso(countries, queryInfo.data),
    [countries, queryInfo.data],
  );

  React.useEffect(() => {
    if (!stateCountry && countryByIp) {
      dispatch(setCountry(countryByIp));
    }
  }, [countryByIp, dispatch, stateCountry]);

  return {
    ...queryInfo,
    country: stateCountry,
  };
}
