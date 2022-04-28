import { Alert } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import CenteredContent from 'components/CenteredContent';
import useMovieGenres from 'hooks/useMovieGenres';
import LoaderEffect from 'components/LoaderEffect';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

function HomePage() {
  const { moviesTop, isLoadingMoviesTop } = useMoviesTop();
  const { isLoadingMovieGenres } = useMovieGenres();
  const isLoading = isLoadingMoviesTop || isLoadingMovieGenres;

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
      <Hero />
      <MovieList />
    </LoaderEffect>
  );
}

export default HomePage;
