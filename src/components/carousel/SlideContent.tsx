import styled from '@emotion/styled';
import { Badge, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { MovieListResult } from 'types/api/generic';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    fontSize: '1.3rem',
    width: '3.5rem',
    height: '3.5rem',
    top: '2rem',
    right: '2rem',
    background: 'rgba(0,0,0,.8)',
    color: 'rgba(245, 197, 24)',
    borderRadius: 0,
  },
}));

interface TypeSlideContent {
  voteAverage: MovieListResult['vote_average'];
  title: MovieListResult['title'];
  posterPath: MovieListResult['poster_path'];
}

export default function SlideContent({ voteAverage, title, posterPath }: TypeSlideContent) {
  return (
    <StyledBadge
      overlap="rectangular"
      badgeContent={<Typography component="span">{voteAverage}</Typography>}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w300/${posterPath}`}
        srcSet={`https://image.tmdb.org/t/p/w780/${posterPath} 2x`}
        alt={title}
      />
    </StyledBadge>
  );
}
