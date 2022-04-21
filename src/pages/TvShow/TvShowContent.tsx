import { ShowWithVideos } from 'types/api/tv';
import {
  Box, Container, Divider, Paper, Typography,
} from '@mui/material';
import RatingLarge from 'components/rating/RatingLarge';
import IconProviders from 'components/IconProviders';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import TvMediaContainer from './TvShowMediaContainer';

interface Props {
  show: ShowWithVideos | undefined;
}

export default function TvContent({ show }: Props) {
  if (!show || !show.id) {
    return null;
  }

  const showGenres = show.genres?.map((genre) => genre.name);
  const backdropPath = `${THE_MOVIE_DB_BASE_URL}w92/${
    show.poster_path || 'assets/img/default-backdrop.jpg'
  }`;
  const firstAirDate = show.first_air_date ? new Date(show.first_air_date) : null;
  const releaseYear = firstAirDate ? firstAirDate.getFullYear() : 'N/A';

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 33.3%',
      }}
    >
      <TvMediaContainer show={show} />
      <Paper sx={{ p: 6 }}>
        <Box sx={{ gap: 4, display: 'flex' }}>
          {/* Poster */}
          <Box
            component="img"
            src={backdropPath}
            alt={show.name}
            sx={{ width: '92px', height: 'auto', alignSelf: 'self-start' }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              {/* Title */}
              <Typography component="h1" variant="h5" sx={{ flexGrow: 2 }}>
                {show.name}
              </Typography>

              {/* Rating */}
              <RatingLarge voteAverage={show.vote_average} />
            </Box>

            {/* Genres */}
            <Typography variant="body1" sx={{ py: 2, color: 'secondary.main' }}>
              {`(${releaseYear})`}
              {' '}
              {showGenres?.join(', ')}
            </Typography>

            {/* Providers */}
            <Box sx={{ display: 'flex', marginTop: 'auto', justifyContent: 'left' }}>
              <IconProviders type="tv" mediaId={show.id} />
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ mt: 6, mb: 5 }} />

        {/* Tagline */}
        <Typography component="h2" variant="subtitle1" sx={{ pb: 1 }}>
          {show.tagline}
        </Typography>

        {/* Overview */}
        <Typography>{show.overview}</Typography>
      </Paper>
    </Container>
  );
}
