import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  closeModal: () => void;
}

export default function ProviderSingle({ provider, closeModal }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [{ favoriteProviders }, dispatch] = useStateValue();
  const isActive = Boolean(findFavoriteProvider(favoriteProviders, provider.provider_id));
  const badgeContent = isActive ? activeBadgeIcon : inactiveBadgeIcon;
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    dispatch(toggleFavoriteProvider(provider, favoriteProviders));
    queryClient.resetQueries({ queryKey: ['moviesTop'] }).catch(() => {});
    queryClient.resetQueries({ queryKey: ['allGenresMovies'] }).catch(() => {});

    const bodyElement = bodyRef.current;
    if (bodyElement) {
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      bodyElement.dispatchEvent(clickEvent);
    }

    closeModal();

    if (location.pathname !== '/') {
      navigate('/');
    }
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
