import { Typography } from '@mui/material';
import { MovieListResult } from 'types/api/generic';
import BadgeStyled from './BadgeStyled';
import CardMediaStyled from './CardMediaStyled';

interface PropsMovieThumbnail {
  voteAverage: MovieListResult['vote_average'];
  title: MovieListResult['title'];
  posterPath: MovieListResult['poster_path'];
}

export default function MovieThumbnail({ voteAverage, title, posterPath }: PropsMovieThumbnail) {
  if (!posterPath) {
    return null;
  }

  return (
    <BadgeStyled>
      <Typography component="span" variant="h6" className="badge">
        {voteAverage}
      </Typography>
      <CardMediaStyled title={title} posterPath={posterPath} />
    </BadgeStyled>
  );
}
