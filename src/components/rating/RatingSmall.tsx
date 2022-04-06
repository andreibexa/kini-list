import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import { MovieListResult } from 'types/api/generic';

type RatingSmallProps = {
  voteAverage: MovieListResult['vote_average'];
};

export default function RatingSmall({ voteAverage }: RatingSmallProps) {
  return (
    <>
      <StarIcon fontSize="small" sx={{ color: '#faaf00', verticalAlign: 'sub', pb: 0.25 }} />
      <Typography component="span">{voteAverage}</Typography>
      <Typography component="span" variant="caption" color="textSecondary">
        /10
      </Typography>
    </>
  );
}
