import StarIcon from '@mui/icons-material/Star';
import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MovieListResult } from 'types/api/generic';

type Props = {
  voteAverage: MovieListResult['vote_average'];
  sx?: SxProps<Theme>;
};

export default function RatingSmall({ voteAverage, sx = [] }: Props) {
  if (voteAverage === 0) {
    return null;
  }

  return (
    <Box
      sx={[
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <StarIcon fontSize="small" sx={{ color: '#faaf00', verticalAlign: 'sub', pb: 0.25 }} />
      <Typography component="span">{voteAverage}</Typography>
      <Typography component="span" variant="caption" color="textSecondary">
        /10
      </Typography>
    </Box>
  );
}

RatingSmall.defaultProps = {
  sx: [],
};
