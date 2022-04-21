import React, { useEffect } from 'react';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import { Avatar, AvatarGroup } from '@mui/material';
import { useStateValue } from 'state/state';
import { Provider } from 'types/api/watch';
import useMediaProviders from 'hooks/useMediaProviders';

interface Props {
  mediaId: number;
  type: 'movie' | 'tv'
}

export default function IconProviders({ mediaId, type }: Props) {
  const [{ country }] = useStateValue();
  const { mediaProviders } = useMediaProviders(mediaId, type);
  const [providers, setProviders] = React.useState<Provider[] | undefined>();

  useEffect(() => {
    if (mediaProviders && country) {
      const countryProviders = mediaProviders[country.iso_3166_1];
      const flatProviders = countryProviders?.flatrate;
      setProviders(flatProviders);
    }
  }, [country, mediaProviders]);

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
