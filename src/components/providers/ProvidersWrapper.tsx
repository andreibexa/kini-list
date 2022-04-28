import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import React from 'react';
import { Box, Modal } from '@mui/material';
import { useStateValue } from 'state/state';
import { filterActiveProviders } from 'utils/providers';
import useProviders from 'hooks/useProviders';
import theme from 'layouts/theme';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import useCountry from 'hooks/useCountry';
import CountrySelect from './CountrySelect';
import ProvidersList from './ProvidersList';

export default function ProvidersWrapper() {
  const { country } = useCountry();
  const { providers } = useProviders();
  const [{ favoriteProviders }] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  if (!country || !providers) {
    return null;
  }

  const activeProviders = filterActiveProviders(providers, favoriteProviders);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
            width: '2.5rem',
            ml: 1,
          },
        }}
      >
        {activeProviders.map((provider) => (
          <img
            src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
            alt={`${provider.provider_name}`}
            key={provider.provider_id}
            className="provider-logo"
          />
        ))}
        <FilterListIcon sx={{ ml: 2, mr: 2 }} />
        <img
          loading="lazy"
          height="40"
          src={`https://flagcdn.com/56x42/${country.iso_3166_1.toLowerCase()}.png`}
          alt=""
        />
      </Button>
      <Modal open={open} onClose={handleClose} keepMounted>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
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
            <ProvidersList />
          </Box>
        </Menu>
      </Modal>
    </>
  );
}
