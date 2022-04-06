import { AppBar, Hidden, Toolbar, useScrollTrigger } from '@mui/material';
import MenuDesktop from './menu/MenuDesktop';

export default function Header() {
  /*   const [state, setState] = useState({
    drawerOpen: false,
  })

  const { drawerOpen } = state */

  /**
   * [scrollTrigger - respond to user scroll actions]
   */
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const SxAppBar = {
    transition: 'background .5s',
    pl: '4vw',
    pr: '4vw',
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
        <Hidden smUp initialWidth="xl">
          {/* <MenuMobile /> */}
        </Hidden>
        <Hidden xsDown initialWidth="xl">
          <MenuDesktop />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
