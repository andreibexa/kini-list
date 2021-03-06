import React from 'react';
import { queryClient } from 'App';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import { Provider } from 'types/api/watch';
import { ButtonBase } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useStateValue } from 'state/state';
import { toggleFavoriteProvider } from 'state/reducer';
import { findFavoriteProvider } from 'utils/providers';
import BadgeStyled from './BadgeStyled';
import ImageListItemStyled from './ImageListItemStyled';

const activeBadgeIcon = (
  <CheckCircleIcon
    color="success"
    sx={{
      color: 'success.dark',
      background: 'rgba(255,255,255,.8)',
      borderRadius: '10px',
    }}
  />
);

const inactiveBadgeIcon = <CheckCircleOutlineIcon color="primary" />;

interface Props {
  provider: Provider;
}

export default function ProviderSingle({ provider }: Props) {
  const [{ favoriteProviders }, dispatch] = useStateValue();
  const isActive = Boolean(findFavoriteProvider(favoriteProviders, provider.provider_id));

  const badgeContent = isActive ? activeBadgeIcon : inactiveBadgeIcon;

  const handleClick = () => {
    dispatch(toggleFavoriteProvider(provider, favoriteProviders));
    queryClient.resetQueries({ queryKey: ['moviesTop'] }).catch(() => {});
    queryClient.resetQueries({ queryKey: ['allGenresMovies'] }).catch(() => {});
  };

  return (
    <ImageListItemStyled isActive={isActive}>
      <ButtonBase onClick={handleClick} disableRipple>
        <BadgeStyled badgeContent={badgeContent}>
          <img
            src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
            alt={provider.provider_name}
            width="95%"
            height="95%"
          />
        </BadgeStyled>
      </ButtonBase>
    </ImageListItemStyled>
  );
}
