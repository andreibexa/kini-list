import { MovieWithVideos } from 'types/api/movies';
import {
  Box, Container, Divider, Grid, Paper, Typography,
} from '@mui/material';
import RatingLarge from 'components/rating/RatingLarge';
import IconProviders from 'components/IconProviders';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import theme from 'layouts/theme';
import MovieMediaContainer from './MovieMediaContainer';

interface Props {
  movie: MovieWithVideos | undefined;
}

export default function MovieContent({ movie }: Props) {
  if (!movie) {
    return null;
  }

  const movieGenres = movie.genres?.map((genre) => genre.name);

  const releaseDate = new Date(movie.release_date);
  const releaseYear = releaseDate.getFullYear() || 'N/A';
  const backdropPath = `${THE_MOVIE_DB_BASE_URL}w92/${
    movie.poster_path || 'assets/img/default-backdrop.jpg'
  }`;

  return (
    <Paper sx={{}}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ md: 8, xs: 2 }}
          sx={{ background: theme.palette.background.paper }}
        >
          <Grid item md={5} xs={2}>
            <MovieMediaContainer movie={movie} />
          </Grid>
          <Grid item md={3} xs={2}>
            <Box sx={{ p: 6 }}>
              <Box sx={{ gap: 4, display: 'flex' }}>
                {/* Poster */}
                <Box
                  component="img"
                  src={backdropPath}
                  alt={movie.original_title}
                  sx={{ width: '92px', height: 'auto', alignSelf: 'self-start' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {/* Title */}
                    <Typography component="h1" variant="h5" sx={{ flexGrow: 2 }}>
                      {movie.title || movie.original_title}
                    </Typography>

                    {/* Rating */}
                    <RatingLarge voteAverage={movie.vote_average} />
                  </Box>

                  {/* Genres */}
                  <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    {`(${releaseYear})`}
                    {' '}
                    {movieGenres?.join(', ')}
                  </Typography>
                </Box>
              </Box>

              {/* Divider */}
              <Divider sx={{ mt: 6, mb: 5 }} />

              {/* Tagline */}
              <Typography component="h2" variant="subtitle1" sx={{ pb: 1 }}>
                {movie.tagline}
              </Typography>

              {/* Overview */}
              <Typography>{movie.overview}</Typography>

              {/* Providers */}
              <Box sx={{ display: 'flex', py: 6 }}>
                <IconProviders type="movie" mediaId={movie.id} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
