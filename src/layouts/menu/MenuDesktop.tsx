import { Box, Button } from '@mui/material';
import { IPageLinks } from 'types/pageLinks';
import Logo from 'components/Logo';
import SearchInput from 'components/search/SearchInput';
import pageLinks from 'routes/pageLinks';
import ProvidersWrapper from 'components/providers/ProvidersWrapper';
import theme from 'layouts/theme';

const buttons = pageLinks.map(
  (item: IPageLinks) => item.visible && (
  <Button
    href={item.path}
    key={item.label}
    color="secondary"
    sx={{ height: theme.spacing(12) }}
  >
    {item.label}
  </Button>
  ),
);

function MenuDesktop() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box>{buttons}</Box>
      <SearchInput />
      <ProvidersWrapper />
    </Box>
  );
}

export default MenuDesktop;
