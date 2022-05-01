import useMoviesTop from 'hooks/useMoviesTop';
import CenteredContent from 'components/CenteredContent';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import LoaderEffect from 'components/LoaderEffect';
import Alert from '@mui/material/Alert';
import useGenresMovies from 'hooks/useGenresMovies';
import Hero from './components/Hero';
import ListMovies from './components/ListMovies';

function HomePage() {
  const { moviesTop, isLoadingMoviesTop } = useMoviesTop();
  const { isLoadingMovieGenres } = useMoviesByGenre();
  const { isLoadingGenresMovies } = useGenresMovies();
  const isLoading = isLoadingMoviesTop || isLoadingMovieGenres || isLoadingGenresMovies;

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
      <ListMovies />
    </LoaderEffect>
  );
}

export default HomePage;
