import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import { Provider } from 'types/api/watch';
import { Badge, BadgeProps, ButtonBase, ImageListItem } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useStateValue } from 'state/state';
import { toggleFavoriteProvider } from 'state/reducer';
import React from 'react';

type PropsBadge = BadgeProps & {
  children: React.ReactNode;
};

function BadgeSx({ children, badgeContent, anchorOrigin }: PropsBadge) {
  return (
    <Badge
      badgeContent={badgeContent}
      anchorOrigin={anchorOrigin}
      sx={{
        '& .MuiBadge-badge': {
          right: '22%',
          bottom: '20%',
        },
      }}>
      {children}
    </Badge>
  );
}

const sxImageListItem = {
  my: 0.4,
  opacity: 0.3,
  img: {
    borderRadius: 2,
  },
  ':hover': {
    opacity: 1,
    transform: 'scale(1.05)',
    '.MuiBadge-standard': {
      opacity: '1',
    },
  },
  '&.active': {
    opacity: 1,
    '.MuiBadge-standard': {
      opacity: 1,
    },
  },
  '.MuiBadge-standard': {
    opacity: 0,
  },
};

interface Props {
  provider: Provider;
}

export default function ProviderSingle({ provider }: Props) {
  const [{ favoriteProviders }, dispatch] = useStateValue();
  const isActive = favoriteProviders.find(
    (favProvider) => favProvider.provider_id === provider.provider_id
  );

  const badgeContent = isActive ? (
    <CheckCircleIcon
      color="success"
      sx={{
        color: 'success.dark',
        background: 'rgba(255,255,255,.8)',
        borderRadius: '10px',
      }}
    />
  ) : (
    <CheckCircleOutlineIcon color="primary" />
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(toggleFavoriteProvider(provider, favoriteProviders));
  };

  return (
    <ImageListItem
      className={isActive ? 'active' : undefined}
      sx={sxImageListItem}
      key={provider.provider_id}>
      <ButtonBase onClick={(e) => handleClick(e)} disableRipple>
        <BadgeSx
          badgeContent={badgeContent}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <img
            src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
            srcSet={`${THE_MOVIE_DB_BASE_URL}original${provider.logo_path} 2x`}
            alt={provider.provider_name}
            width="95%"
            height="95%"
          />
        </BadgeSx>
      </ButtonBase>
    </ImageListItem>
  );
}
