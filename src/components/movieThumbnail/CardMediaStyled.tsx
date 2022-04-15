import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import { MovieListResult } from 'types/api/generic';
import React from 'react';
import THE_MOVIE_DB_BASE_URL from 'appConstants';

type PropsCardMedia = CardMediaProps & {
  posterPath: MovieListResult['poster_path'];
  title: MovieListResult['title'];
};

export default function CardMediaStyled({ posterPath, title }: PropsCardMedia) {
  return (
    <CardMedia
      sx={{
        border: '5px solid #000000',
        backgroundColor: '#000000',
      }}
      component="img"
      data-splide-lazy={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
      src={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
      alt={title}
      width={222}
      height={335}
      loading="lazy"
    />
  );
}
