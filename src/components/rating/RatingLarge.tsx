import { SxProps, Theme } from '@mui/material/styles';
import { Box, Rating, Typography } from '@mui/material';
import { MovieListResult } from 'types/api/generic';

type Props = {
  voteAverage: MovieListResult['vote_average'] | undefined;
  sx?: SxProps<Theme>;
};

export default function RatingLarge({ voteAverage, sx = [] }: Props) {
  if (!voteAverage || voteAverage === 0) {
    return null;
  }

  return (
    <Box
      sx={[
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Rating
        name="half-rating-read"
        defaultValue={0.7}
        max={1}
        precision={0.2}
        size="medium"
        readOnly
        sx={{ verticalAlign: 'sub' }}
      />
      <Typography component="span" variant="h5">
        {voteAverage}
      </Typography>
      <Typography component="span" variant="caption" color="textSecondary">
        /10
      </Typography>
    </Box>
  );
}

RatingLarge.defaultProps = {
  sx: [],
};
