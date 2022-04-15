import { useQuery } from 'react-query';
import searchMulti from 'services/searchService';
import { useStateValue } from 'state/state';
import { Movies } from 'types/api/movies';

export default function useSearchMulti(query: string) {
  const [{ country }] = useStateValue();
  const countryIso = country?.iso_3166_1;

  const results = useQuery<Movies, Error>(
    ['searchMulti'],
    ({ signal }) => searchMulti(query, countryIso, signal),
    { enabled: !!country },
  );

  return {
    ...results,
    movies: results.data,
  };
}
