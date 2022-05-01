import Box from '@mui/material/Box';
import red from '@mui/material/colors/red';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { TVListResult } from 'types/api/generic';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import slug from 'helpers/url';
import useTvShowsTop from 'hooks/useTvShowsTop';
import HeroContent from './HeroContent';

function findFirstTvShow(moviesTop: TVListResult[] | undefined) {
  return moviesTop?.find((movie) => !!movie.backdrop_path);
}

const img = new Image();
export default function Hero() {
  const { tvShowsTop } = useTvShowsTop();
  const [heroTvShow, setHeroTvShow] = React.useState<TVListResult | undefined>();

  useEffect(() => {
    const firstTvShow = findFirstTvShow(tvShowsTop);
    if (firstTvShow) {
      img.src = `${THE_MOVIE_DB_BASE_URL}w1280/${
        firstTvShow.backdrop_path || 'assets/img/default-backdrop.jpg'
      }`;

      img.onload = () => {
        setHeroTvShow(firstTvShow);
      };
    }
  }, [tvShowsTop]);

  if (!heroTvShow || !heroTvShow.backdrop_path) {
    return null;
  }

  const slugTitle = slug(heroTvShow.name);
  const backgroundUrl = `${THE_MOVIE_DB_BASE_URL}w1280/${heroTvShow.backdrop_path}`;
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
          to={`/movie/${slugTitle}-${heroTvShow.id}`}
          title={heroTvShow.name}
          underline="none"
          sx={{
            '&:hover .MuiButton-root': {
              backgroundColor: 'common.black',
              color: red[900],
            },
          }}
        >
          <HeroContent show={heroTvShow} />
        </Link>
      </Container>
    </Box>
  );
}
