import { useQuery } from '@tanstack/react-query';
import searchMulti from 'services/searchService';
import { MultiMediaTypeResults } from 'types/api/generic';
import useCountry from './useCountry';

export default function useSearchMulti(query: string) {
  const { country } = useCountry();

  return useQuery<MultiMediaTypeResults, Error>(
    ['searchMulti'],
    ({ signal }) => searchMulti(query, country?.iso_3166_1, signal),
    { enabled: !!country },
  );
}
