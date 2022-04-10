import { Box, Link, Typography } from '@mui/material';
import logoTmdb from 'assets/img/logo-tmdb.svg';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '2rem',
        mb: '2rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Typography>
        This product uses the TMDB API but is not endorsed or certified by{' '}
        <Link
          href="https://www.themoviedb.org/"
          title="The Movie Database"
          rel="noopener noreferrer"
          target="_blank">
          TMDB
        </Link>
        .
      </Typography>
      <Link
        href="https://www.themoviedb.org/"
        title="The Movie Database"
        rel="noopener noreferrer"
        target="_blank"
        sx={{ height: '100%' }}>
        <img src={logoTmdb} loading="lazy" alt="The Movie Database" height="100%" />
      </Link>
    </Box>
  );
}
