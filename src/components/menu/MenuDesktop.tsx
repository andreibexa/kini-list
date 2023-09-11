import { Box, Button, Container } from '@mui/material';
import { AllRoutes } from 'types/allRoutes';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'components/Logo';
import SearchInput from 'components/search/SearchInput';
import allRoutes from 'routes/allRoutes';
import ProvidersWrapper from 'components/providers/ProvidersWrapper';
import theme from 'layouts/theme';

// TODO:: de testat fara lazy

const buttons = allRoutes.map(
  (item: AllRoutes) => item.visible && (
  <Button
    component={RouterLink}
    to={item.path}
    key={item.label}
    color="secondary"
    sx={{
      fontSize: 20,
      fontWeight: 'regular',
      height: theme.spacing(12),
    }}
  >
    {item.label}
  </Button>
  ),
);

function MenuDesktop() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: '100%',
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        py: 2,
      }}
    >
      <Box>
        <Logo />
      </Box>
      <SearchInput />
      <Box>{buttons}</Box>
      <ProvidersWrapper />
    </Container>
  );
}

export default MenuDesktop;
