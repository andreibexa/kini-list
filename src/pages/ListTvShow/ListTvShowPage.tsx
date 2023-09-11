import useTvShowsTop from 'hooks/useTvShowsTop';
import CenteredContent from 'components/CenteredContent';
import LoaderEffect from 'components/LoaderEffect';
import { Alert } from '@mui/material';
import useGenresTvShows from 'hooks/useGenresTvShows';
import useTvShowsByGenre from 'hooks/useTvShowsByGenre';
import TvShowList from './components/ListTvShow';

export default function ListTvShowPage() {
  const { tvShowsTop, isLoadingTvShowsTop } = useTvShowsTop();
  const { isLoadingTvShowsByGenres } = useTvShowsByGenre();
  const { isLoadingGenresTvShows } = useGenresTvShows();
  const isLoading = isLoadingTvShowsTop || isLoadingTvShowsByGenres || isLoadingGenresTvShows;

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
      <TvShowList />
    </LoaderEffect>
  );
}
