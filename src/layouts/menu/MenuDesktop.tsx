import { Box, Button } from '@mui/material';
import { IPageLinks } from 'types/pageLinks';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import pageLinks from 'routes/pageLinks';
import ProvidersContainer from 'components/Providers/ProvidersContainer';

const buttons = pageLinks.map((item: IPageLinks) => (
  <Button href={item.path} key={item.label} variant="text" color="secondary">
    {item.label}
  </Button>
));

export default function MenuDesktop() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Box>
        <Logo />
      </Box>
      <Box mr={2} ml={3}>
        {buttons}
      </Box>
      <SearchInput />
      <ProvidersContainer />
    </Box>
  );
}
