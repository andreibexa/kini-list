import React, { useEffect } from 'react';

import THE_MOVIE_DB_BASE_URL from 'appConstants';
import { Avatar, AvatarGroup } from '@mui/material';
import useMovieProviders from 'hooks/useMovieProviders';
import { useStateValue } from 'state/state';
import { Provider } from 'types/api/watch';

interface Props {
  movieId: number;
}

export default function MovieProviders({ movieId }: Props) {
  const [{ country }] = useStateValue();
  const { movieProviders } = useMovieProviders(movieId);
  const [providers, setProviders] = React.useState<Provider[] | undefined>();

  useEffect(() => {
    if (movieProviders && country) {
      const countryProviders = movieProviders[country.iso_3166_1];
      const flatProviders = countryProviders?.flatrate;
      setProviders(flatProviders);
    }
  }, [country, movieProviders]);

  if (!providers) {
    return null;
  }

  return (
    <AvatarGroup max={6} spacing={-5}>
      {providers.map((provider) => (
        <Avatar
          variant="square"
          src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
          alt={provider.provider_name}
          key={provider.provider_id}
        />
      ))}
    </AvatarGroup>
  );
}
