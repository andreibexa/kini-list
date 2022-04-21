import { useQuery } from 'react-query';
import searchMulti from 'services/searchService';
import { useStateValue } from 'state/state';
import { MultiMediaTypeResults } from 'types/api/generic';

export default function useSearchMulti(query: string) {
  const [{ country }] = useStateValue();
  const countryIso = country?.iso_3166_1;

  return useQuery<MultiMediaTypeResults, Error>(
    ['searchMulti'],
    ({ signal }) => searchMulti(query, countryIso, signal),
    { enabled: !!country },
  );
}
