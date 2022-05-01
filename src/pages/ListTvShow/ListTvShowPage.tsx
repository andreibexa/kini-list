import useTvShowsTop from 'hooks/useTvShowsTop';
import CenteredContent from 'components/CenteredContent';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import LoaderEffect from 'components/LoaderEffect';
import { Alert } from '@mui/material';
import TvShowList from './components/ListTvShow';
import Hero from './components/Hero';

export default function ListTvShowPage() {
  const { tvShowsTop, isLoadingTvShowsTop } = useTvShowsTop();
  const { isLoadingMovieGenres } = useMoviesByGenre();
  const isLoading = isLoadingTvShowsTop || isLoadingMovieGenres;

  if (tvShowsTop && tvShowsTop.length === 0) {
    return (
      <CenteredContent>
        <Alert severity="error">
          No TV series found. Try to filter by another country or provider
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
      <TvShowList />
    </LoaderEffect>
  );
}
