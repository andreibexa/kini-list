import { Alert } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import CenteredContent from 'components/CenteredContent';
import React, { useLayoutEffect } from 'react';
import { MovieListResult } from 'types/api/generic';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import useMovieGenres from 'hooks/useMovieGenres';
import Loader from 'components/Loader';
import LoaderEffect from 'components/LoaderEffect';
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

  useLayoutEffect(() => {
    if (!moviesTop) {
      return;
    }

    const firstMovie = findFirstMovie(moviesTop);
    if (firstMovie) {
      img.src = `${THE_MOVIE_DB_BASE_URL}w1280/${
        firstMovie.backdrop_path || 'assets/img/default-backdrop.jpg'
      }`;

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
    <LoaderEffect
      isLoading={isLoading}
      sx={{
        pt: 0,
        px: 0,
      }}
    >
      <Hero movie={heroMovie} />
      {!isLoading && <MovieList />}
    </LoaderEffect>
  );
}

export default HomePage;
