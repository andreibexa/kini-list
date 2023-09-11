import CenteredContent from 'components/CenteredContent';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import LoaderEffect from 'components/LoaderEffect';
import Alert from '@mui/material/Alert';
import React, { useEffect } from 'react';
import { MovieListResult } from 'types/api/generic';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import useMoviesTop from 'hooks/useMoviesTop';
import useGenresMovies from 'hooks/useGenresMovies';
import ListMovies from './components/ListMovies';
import Hero from '../../components/Hero';
import HeroContent from './components/HeroContent';

const img = new Image();
function findFirstMovie(moviesTop: MovieListResult[] | undefined) {
  return moviesTop?.find((movie) => !!movie.backdrop_path);
}

function HomePage() {
  const { moviesTop, isLoadingMoviesTop } = useMoviesTop();
  const { isLoadingMoviesByGenres } = useMoviesByGenre();
  const { isLoadingGenresMovies } = useGenresMovies();
  const [heroMovie, setHeroMovie] = React.useState<MovieListResult | undefined>();

  useEffect(() => {
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

  const isLoading = isLoadingMoviesTop || isLoadingMoviesByGenres || isLoadingGenresMovies;

  if (moviesTop && moviesTop.length === 0) {
    return (
      <CenteredContent>
        <Alert severity="error">
          No movies found. Try to filter by another country or provider
        </Alert>
      </CenteredContent>
    );
  }

  return (
    <LoaderEffect
      isLoading={isLoading}
      sx={{
        pt: 0,
        px: 0,
      }}
    >
      {heroMovie && (
        <Hero backgroundUrl={img.src}>
          <HeroContent movie={heroMovie} />
        </Hero>
      )}
      <ListMovies />
    </LoaderEffect>
  );
}

export default HomePage;
