import { Rating, Typography } from '@mui/material';
import { MovieListResult } from 'types/api/generic';

type RatingSmallProps = {
  voteAverage: MovieListResult['vote_average'];
};

export default function MovieRating({ voteAverage }: RatingSmallProps) {
  return (
    <>
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
    </>
  );
}
