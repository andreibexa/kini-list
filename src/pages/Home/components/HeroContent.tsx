import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {
  Avatar, AvatarGroup, Box, Button, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import theme from 'layouts/theme';
import { MovieListResult } from 'types/api/generic';
import RatingLarge from 'components/rating/RatingLarge';
import { red } from '@mui/material/colors';
import useMovieProviders from 'hooks/useMovieProviders';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import { useStateValue } from 'state/state';
import { Provider } from 'types/api/watch';
import useGenres from 'hooks/useGenres';

type PropsBox = {
  children: React.ReactNode;
};

function BoxContainer({ children }: PropsBox) {
  return (
    <Box
      sx={{
        padding: theme.spacing(3, 3),
        margin: theme.spacing(0, 0, 0, -3),
        background: 'rgba(0,0,0,0.5)',
        borderRadius: theme.shape.borderRadius,
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
  const [{ country }] = useStateValue();
  const { movieProviders } = useMovieProviders(movie.id);
  const { genres } = useGenres();
  const [providers, setProviders] = React.useState<Provider[] | undefined>();
  const currentGenres = genres?.filter((genre) => movie.genre_ids.find((id) => id === genre.id));

  useEffect(() => {
    if (movieProviders && country) {
      const countryProviders = movieProviders[country.iso_3166_1];
      const flatProviders = countryProviders?.flatrate;
      setProviders(flatProviders);
    }
  }, [country, movieProviders]);

  return (
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
      <Typography variant="caption" gutterBottom>
        {currentGenres && currentGenres.map((genre) => genre.name).join(' | ')}
      </Typography>

      {/* Description */}
      <Box sx={{ mt: 3 }}>
        <Typography>{movie.overview}</Typography>
      </Box>

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
            '&:hover': {
              backgroundColor: 'common.black',
              '.MuiSvgIcon-root': {
                color: red[900],
              },
            },
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: '3rem', fontWeight: 300 }} />
          &nbsp; Play trailer
        </Button>
        {/* Available on: */}
        <Box
          sx={{
            flexGrow: 1,
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <AvatarGroup max={6} spacing={-5}>
            {providers?.map((provider) => (
              <Avatar
                variant="square"
                src={`${THE_MOVIE_DB_BASE_URL}w92${provider.logo_path}`}
                alt={provider.provider_name}
                key={provider.provider_id}
              />
            ))}
          </AvatarGroup>
        </Box>
      </Box>
    </BoxContainer>
  );
}
