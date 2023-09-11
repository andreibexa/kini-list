import useMoviesTop from 'hooks/useMoviesTop';
import CenteredContent from 'components/CenteredContent';
import LoaderEffect from 'components/LoaderEffect';
import { Alert } from '@mui/material';
import useGenresMovies from 'hooks/useGenresMovies';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import MovieList from './components/ListMovie';

export default function ListMoviePage() {
  const { moviesTop, isLoadingMoviesTop } = useMoviesTop();
  const { isLoadingMoviesByGenres } = useMoviesByGenre();
  const { isLoadingGenresMovies } = useGenresMovies();
  const isLoading = isLoadingMoviesTop || isLoadingMoviesByGenres || isLoadingGenresMovies;

  if (moviesTop && moviesTop.length === 0) {
    return (
      <CenteredContent>
        <Alert severity="error">
          No Movies found. Try to filter by another country or provider
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
      <MovieList />
    </LoaderEffect>
  );
}
