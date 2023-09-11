import { Container, Link, Typography } from '@mui/material';
import logoTmdb from 'assets/img/logo-tmdb.svg';

export default function Footer() {
  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        gap: 4,
        height: '4rem',
        pb: 6,
        mt: 30,
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography>
        This product uses the TMDB API but is not endorsed or certified by
        {' '}
        <Link
          href="https://www.themoviedb.org/"
          title="The Movie Database"
          rel="noopener noreferrer"
          target="_blank"
        >
          TMDB
        </Link>
        .
      </Typography>
      <Link
        href="https://www.themoviedb.org/"
        title="The Movie Database"
        rel="noopener noreferrer"
        target="_blank"
        sx={{ height: 'inherit', maxHeight: '1.5rem' }}
      >
        <img src={logoTmdb} loading="lazy" alt="The Movie Database" height="100%" />
      </Link>
    </Container>
  );
}
