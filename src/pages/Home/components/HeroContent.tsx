import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Button, Typography } from '@mui/material';
import theme from 'layouts/theme';
import { MovieListResult } from 'types/api/generic';
import RatingLarge from 'components/rating/RatingLarge';
import useGenresMovies from 'hooks/useGenresMovies';
import IconProviders from 'components/IconProviders';
import useMediaProviders from 'hooks/useMediaProviders';
import red from '@mui/material/colors/red';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import slug from 'helpers/url';

type PropsBox = {
  children: React.ReactNode;
};

function BoxContainer({ children }: PropsBox) {
  return (
    <Box
      sx={{
        background: 'rgba(0,0,0,0.5)',
        borderRadius: theme.shape.borderRadius,
        position: 'relative',
        zIndex: 10,
        px: 8,
        py: 8,
        width: {
          xl: '47%',
          xs: '100%',
        },
      }}
    >
      {children}
    </Box>
  );
}

type Props = {
  movie: MovieListResult;
};

export default function HeroContent({ movie }: Props) {
  const { genresMovies } = useGenresMovies();
  const { mediaProviders } = useMediaProviders(movie.id, 'movie');
  const releaseDate = new Date(movie.release_date);
  const releaseYear = releaseDate.getFullYear() || 'N/A';
  // eslint-disable-next-line max-len
  const currentGenres = genresMovies?.filter((genre) => movie.genre_ids.find((id) => id === genre.id));
  const slugTitle = slug(movie.title);

  if (!genresMovies || !mediaProviders) {
    return null;
  }

  return (
    <Link
      component={RouterLink}
      to={`/movie/${slugTitle}-${movie.id}`}
      title={movie.title}
      underline="none"
      sx={{
        '&:hover .MuiButton-root': {
          backgroundColor: 'common.black',
          color: red[900],
        },
      }}
    >
      <BoxContainer>
        <Box display="flex">
          {/* Title */}
          <Typography component="h5" variant="h5" align="left" color="textPrimary">
            {movie.title}
          </Typography>

          {/* Rating */}
          <Box sx={{ ml: 2 }}>
            <RatingLarge voteAverage={movie.vote_average} />
          </Box>
        </Box>

        {/* Genre */}
        <Typography variant="body1">
          {`(${releaseYear})`}
          {' '}
          {currentGenres?.map((genre) => genre.name).join(', ')}
        </Typography>

        {/* Description */}
        <Typography sx={{ py: 8 }}>{movie.overview}</Typography>

        {/* Play button */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: theme.spacing(4),
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 300,
              backgroundColor: 'primary.contrastText',
            }}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: '3rem', fontWeight: 300 }} />
            &nbsp; Trailer
          </Button>

          {/* Available on: */}
          <Box
            sx={{
              flexGrow: 1,
              alignItems: 'center',
              textAlign: 'right',
            }}
          >
            {/* Movie providers */}
            <IconProviders type="movie" mediaId={movie.id} />
          </Box>
        </Box>
      </BoxContainer>
    </Link>
  );
}
