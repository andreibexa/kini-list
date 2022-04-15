import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import useMoviesTop from 'hooks/useMoviesTop';
import CenteredContent from 'components/CenteredContent';
import React, { useEffect } from 'react';
import { MovieListResult } from 'types/api/generic';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import useMovieGenres from 'hooks/useMovieGenres';
import Loader from 'components/Loader';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

function findFirstMovie(moviesTop: MovieListResult[] | undefined) {
  return moviesTop?.find((movie) => !!movie.backdrop_path);
}

const img = new Image();
function HomePage() {
  const { moviesTop, isLoadingMoviesTop } = useMoviesTop();
  const { isLoadingMovieGenres } = useMovieGenres();
  const [heroMovie, setHeroMovie] = React.useState<MovieListResult | undefined>();

  useEffect(() => {
    if (!moviesTop) {
      return;
    }

    const firstMovie = findFirstMovie(moviesTop);
    if (firstMovie) {
      img.src = `${THE_MOVIE_DB_BASE_URL}w1280/${firstMovie.backdrop_path || 'default.jpg'}`;

      img.onload = () => {
        setHeroMovie(firstMovie);
      };
    }
  }, [moviesTop]);

  if (moviesTop && moviesTop.length === 0) {
    return (
      <CenteredContent>
        <Alert severity="error">
          No movies found. Try to filter by another country or provider
        </Alert>
      </CenteredContent>
    );
  }

  if (!heroMovie) {
    return <Loader />;
  }

  const isLoading = isLoadingMoviesTop || isLoadingMovieGenres;

  return (
    <>
      {isLoading && <Loader />}
      <Box
        sx={[
          {
            minHeight: '100vh',
            div: {
              transition: 'opacity 1s ease-in',
              opacity: '1',
            },
          },
          isLoading
            ? {
              background: '#000',
              div: {
                transition: 'opacity 1s ease-out, background-image 1s ease-out',
                opacity: '.1',
              },
            }
            : {},
        ]}
      >
        <Hero movie={heroMovie} />
        {!isLoading && <MovieList />}
      </Box>
    </>
  );
}

export default HomePage;
