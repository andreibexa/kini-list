import { useQuery } from 'react-query';
import searchMulti from 'services/searchService';
import { MultiMediaTypeResults } from 'types/api/generic';
import useCountry from './useCountry';

export default function useSearchMulti(query: string) {
  const { country } = useCountry();
  const countryIso = country?.iso_3166_1;

  return useQuery<MultiMediaTypeResults, Error>(
    ['searchMulti'],
    ({ signal }) => searchMulti(query, countryIso, signal),
    { enabled: !!country },
  );
}
