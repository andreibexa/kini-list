import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import React from 'react';
import { Box, Modal } from '@mui/material';
import { useStateValue } from 'state/state';
import { filterActiveProviders } from 'utils/providers';
import useMoviesProviders from 'hooks/useMoviesProviders';
import theme from 'layouts/theme';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import useCountry from 'hooks/useCountry';
import CountrySelect from './CountrySelect';
import ProvidersList from './ProvidersList';

export default function ProvidersWrapper() {
  const { country } = useCountry();
  const { providersMovies } = useMoviesProviders();
  const [{ favoriteProviders }] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  if (!country || !providersMovies) {
    return null;
  }

  const activeProviders = filterActiveProviders(providersMovies, favoriteProviders);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeModal = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          height: theme.spacing(12),
          '&>.provider-logo': {
            width: '2.5em',
            ml: 1.5,
          },
        }}
      >
        <FilterListIcon sx={{ ml: 2, fontSize: '1.5rem' }} />
        {activeProviders.map((provider) => (
          <img
            src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
            alt={`${provider.provider_name}`}
            key={provider.provider_id}
            className="provider-logo"
          />
        ))}

        {activeProviders.length === 0 ? (
          <Box
            component="img"
            src={`https://flagcdn.com/56x42/${country.iso_3166_1.toLowerCase()}.png`}
            alt=""
            sx={{ ml: 2, height: 25, width: 'auto' }}
          />
        ) : null}
      </Button>
      <Modal open={open} onClose={closeModal} keepMounted>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={closeModal}
          PaperProps={{
            sx: {
              p: 2,
              horizontal: 'right',
            },
          }}
        >
          <Box
            sx={{
              minWidth: '300px',
              flexDirection: 'column',
            }}
          >
            <CountrySelect />
            <ProvidersList closeModal={closeModal} />
          </Box>
        </Menu>
      </Modal>
    </>
  );
}
