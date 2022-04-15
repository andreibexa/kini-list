import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
