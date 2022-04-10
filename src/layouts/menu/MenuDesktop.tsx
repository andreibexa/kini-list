import { Box, Button } from '@mui/material';
import { IPageLinks } from 'types/pageLinks';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import pageLinks from 'routes/pageLinks';
import ProvidersContainer from 'components/Providers/ProvidersContainer';
import theme from 'layouts/theme';

const buttons = pageLinks.map((item: IPageLinks) => (
  <Button href={item.path} key={item.label} color="secondary" sx={{ height: theme.spacing(12) }}>
    {item.label}
  </Button>
));

export default function MenuDesktop() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}>
      <Box>
        <Logo />
      </Box>
      <Box>{buttons}</Box>
      <SearchInput />
      <ProvidersContainer />
    </Box>
  );
}
