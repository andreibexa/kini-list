import Box from '@mui/material/Box';
import red from '@mui/material/colors/red';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import slug from 'helpers/url';
import { MovieListResult } from 'types/api/generic';
import HeroContent from './HeroContent';

interface Props {
  movie: MovieListResult | undefined;
}

export default function Hero({ movie }: Props) {
  if (!movie || !movie.backdrop_path) {
    return null;
  }

  const slugTitle = slug(movie.title);
  const backgroundUrl = `${THE_MOVIE_DB_BASE_URL}w1280/${movie.backdrop_path}`;
  const sxHeroUnit = {
    background: `url(${backgroundUrl}) no-repeat`,
    backgroundSize: 'cover',
    webkitTransition: 'background-image 1s ease-in-out',
    transition: 'background-image 1s ease-in-out',
    height: '100vh',
    minHeight: '710px',
    display: 'flex',
    alignItems: 'center',
    '&:after': {
      boxShadow: 'inset 34px 34px 140px 40px #000000',
      content: '""',
      display: 'block',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
    },
  };

  return (
    <Box sx={sxHeroUnit}>
      <Container maxWidth="xl">
        <Link
          component={RouterLink}
          to={`/movie/${slugTitle}-${movie.id}`}
          title={movie.title}
          underline="none"
          sx={{
            '&:hover .MuiButton-root': {
              backgroundColor: 'common.black',
              color: red[900],
            },
          }}
        >
          <HeroContent movie={movie} />
        </Link>
      </Container>
    </Box>
  );
}
