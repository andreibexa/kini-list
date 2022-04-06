import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useStateValue } from 'state/state';
import { setCountry } from 'state/reducer';
import useCountry from 'hooks/useCountry';
import filterActiveProviders from 'utils/providers';
import useProviders from 'hooks/useProviders';
import CountrySelect from './CountrySelect';
import ProvidersList from './ProvidersList';

function ProvidersContainer() {
  const { country } = useCountry();
  const { providers } = useProviders();
  const [{ favoriteProviders }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if(country){
      dispatch(setCountry(country));
    }
  }, [country, dispatch]);

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
          '&>img': {
            width: '2.5rem',
            ml: 1,
          },
        }}>
        {
        filterActiveProviders(providers, favoriteProviders)
          .slice(0, 3)
          .sort((a, b) => a.display_priority - b.display_priority)
          .map((provider) => (
            <img
              src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`}
              alt={`${provider.provider_name}`}
              key={provider.provider_id}
            />
          ))
          }
        <FilterListIcon sx={{ ml: 2, mr: 2 }} />
        <Typography>Filter</Typography>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 2,
          },
        }}
        >
        <Box
          sx={{
            minWidth: '300px',
            flexDirection: 'column',
          }}>
          <CountrySelect />
          <ProvidersList />
        </Box>
      </Menu>
    </>
  );
}

export default ProvidersContainer;
