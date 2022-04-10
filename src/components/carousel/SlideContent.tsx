import { Badge, BadgeProps, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { MovieListResult } from 'types/api/generic';
import React from 'react';
import THE_MOVIE_DB_BASE_URL from '../../appConstants';

type PropsBadge = BadgeProps & {
  children: React.ReactNode;
};

function BadgeSx({ children, overlap, badgeContent, anchorOrigin }: PropsBadge) {
  return (
    <Badge
      overlap={overlap}
      badgeContent={badgeContent}
      anchorOrigin={anchorOrigin}
      sx={{
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
      }}>
      {children}
    </Badge>
  );
}

interface PropsSlideContent {
  voteAverage: MovieListResult['vote_average'];
  title: MovieListResult['title'];
  posterPath: MovieListResult['poster_path'];
}

export default function SlideContent({ voteAverage, title, posterPath }: PropsSlideContent) {
  return (
    <BadgeSx
      overlap="rectangular"
      badgeContent={<Typography component="span">{voteAverage}</Typography>}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <CardMedia
        component="img"
        data-splide-lazy={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
        src={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
        alt={title}
      />
    </BadgeSx>
  );
}
