import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import Logo from 'components/Logo';
import Search from 'components/search/SearchInput';
import allRoutes from 'routes/allRoutes';
import { AllRoutes } from 'types/allRoutes';
import { styled } from '@mui/material/styles';
import ProvidersWrapper from 'components/providers/ProvidersWrapper';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between;',
}));

const menuItems = allRoutes.map(
  (item: AllRoutes) => item.visible && (
  <ListItemButton key={String(item.uid)} component="a" href={item.path}>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 18 }} />
  </ListItemButton>
  ),
);

export default function MenuMobile() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
        <Box sx={{ display: 'flex', gap: 6 }}>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer}
            sx={{ ...(mobileOpen && { display: 'none' }) }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Logo />
        </Box>
        <ProvidersWrapper />
      </Box>
      <Drawer
        sx={{
          width: '100%',
          minWidth: '240px',
          maxWidth: '500px',
          flexShrink: 0,
        }}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
      >
        <DrawerHeader>
          <Logo onClick={toggleDrawer} />
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            padding: '1px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <List component="nav" aria-label="Home Movies Series Browse...">
            {menuItems}
            <Box sx={{ px: 3.5, pt: 4 }}>
              <Search />
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
