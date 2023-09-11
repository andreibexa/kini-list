import {
  AppBar, Container, Toolbar, useScrollTrigger,
} from '@mui/material';
import MenuDesktop from '../components/menu/MenuDesktop';
import MenuMobile from '../components/menu/MenuMobile';

export default function Header() {
  /**
   * [scrollTrigger - respond to user scroll actions]
   */
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const SxAppBar = {
    transition: 'background .5s',
    background: '#000000',
    ...(!scrollTrigger && {
      boxShadow: 'none',
      background: 'transparent',
      transition: 'background .5',
    }),
  };

  return (
    <AppBar position="fixed" sx={SxAppBar}>
      <Toolbar disableGutters>
        <Container sx={{ display: { md: 'none', xs: 'block' } }}>
          <MenuMobile />
        </Container>
        <Container maxWidth="xl" disableGutters sx={{ display: { md: 'block', xs: 'none' } }}>
          <MenuDesktop />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
