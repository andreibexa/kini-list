import useMoviesTop from 'hooks/useMoviesTop';
import useGenres from 'hooks/useGenres';
import useMovieGenres from 'hooks/useMovieGenres';
import CarouselWrapper from 'components/carousel/CarouselWrapper';
import Carousel from 'components/carousel/Carousel';
import { Box, Typography } from '@mui/material';

function slideTilte(title: string) {
  return (
    <Typography component="h6" variant="h6" sx={{ padding: '0 4vw .5rem 4vw' }}>
      {title}
    </Typography>
  );
}

function MovieList() {
  const { moviesTop } = useMoviesTop();
  const { movieGenres } = useMovieGenres();
  const { genres } = useGenres();

  if (!moviesTop || !movieGenres || !genres) {
    return null;
  }

  return (
    <Box sx={{mt:'-25vh'}}>
      <CarouselWrapper>
        {slideTilte('Trending Now')}
        <Carousel movies={moviesTop} />
      </CarouselWrapper>

      {
        movieGenres.map((movies, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CarouselWrapper key={index}>
            {slideTilte(genres[index].name)}
            <Carousel movies={movies.results} />
          </CarouselWrapper>
        ))
      }
    </Box>
  );
}

export default MovieList;
