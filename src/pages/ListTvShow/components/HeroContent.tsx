import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Button, Typography } from '@mui/material';
import theme from 'layouts/theme';
import { TVListResult } from 'types/api/generic';
import RatingLarge from 'components/rating/RatingLarge';
import useGenresTvShows from 'hooks/useGenresTvShows';
import IconProviders from 'components/IconProviders';
import useMediaProviders from 'hooks/useMediaProviders';
import slug from 'helpers/url';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import red from '@mui/material/colors/red';

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
  show: TVListResult;
};

export default function HeroContent({ show }: Props) {
  const { genresTvShows } = useGenresTvShows();
  const releaseDate = new Date(show.first_air_date);
  const releaseYear = releaseDate.getFullYear() || 'N/A';
  const { mediaProviders } = useMediaProviders(show.id, 'tv');
  const slugTitle = slug(show.name);
  // eslint-disable-next-line max-len
  const currentGenres = genresTvShows?.filter((genre) => show.genre_ids.find((id) => id === genre.id));

  if (!genresTvShows || !mediaProviders) {
    return null;
  }

  return (
    <Link
      component={RouterLink}
      to={`/tv-series/${slugTitle}-${show.id}`}
      title={show.name}
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
            {show.name}
          </Typography>

          {/* Rating */}
          <Box sx={{ ml: 2 }}>
            <RatingLarge voteAverage={show.vote_average} />
          </Box>
        </Box>

        {/* Genre */}
        <Typography variant="body1">
          {`(${releaseYear})`}
          {' '}
          {currentGenres?.map((genre) => genre.name).join(', ')}
        </Typography>

        {/* Description */}
        <Typography sx={{ py: 8 }}>{show.overview}</Typography>

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
            {/* TvShow providers */}
            <IconProviders type="movie" mediaId={show.id} />
          </Box>
        </Box>
      </BoxContainer>
    </Link>
  );
}
