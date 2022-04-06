import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import Logo from 'components/Logo';
import Search from 'components/SearchInput';
import pageLinks from 'routes/pageLinks';

const listItems = pageLinks.map((item) => (
  <ListItem button component="a" href={item.path} key={item.label}>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.label} />
  </ListItem>
));

export default function MenuMobile() {
  const [toggleMenu, setToggleMenu] = useState(false);
  /*
      onClick={toggleMenu}
        aria-label="menu"
        aria-haspopup
        edge="start" */
  const handleClose = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <IconButton>
        <MenuIcon />
        Menu
      </IconButton>

      <Drawer
        {...{
          anchor: 'left',
          toggleMenu,
          onClose: handleClose,
        }}>
        <Box
          sx={{
            padding: '1px',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <List component="nav" aria-label="Home Movies Series Browse...">
            <Logo />
            <Search />
            {listItems}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
