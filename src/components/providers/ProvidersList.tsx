import {
  Alert, CircularProgress, ImageList, Typography,
} from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import useMovieProviders from 'hooks/useMoviesProviders';
import ProviderSingle from './ProviderSingle';

export default function ProvidersList() {
  const { providersMovies, isSuccess } = useMovieProviders();
  const hasEntries = providersMovies ? providersMovies.length : false;

  if (isSuccess && !hasEntries) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        No streaming services found for this country !
      </Alert>
    );
  }

  if (!providersMovies) {
    return (
      <CenteredContent>
        <CircularProgress sx={{ mt: 2, mb: 2 }} />
      </CenteredContent>
    );
  }

  return (
    <>
      <Typography
        component="p"
        variant="body1"
        align="left"
        gutterBottom
        sx={{
          width: '100%',
          pl: 2,
          pt: 2.5,
        }}
      >
        Streaming services
      </Typography>
      <ImageList cols={3} gap={10}>
        {providersMovies.map((provider) => (
          <ProviderSingle provider={provider} key={provider.provider_id} />
        ))}
      </ImageList>
    </>
  );
}
