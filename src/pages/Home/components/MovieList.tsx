import useGenres from 'hooks/useGenres';
import Carousel from 'components/carousel/Carousel';
import { Container } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import useMovieGenres from 'hooks/useMovieGenres';

export default function MovieList() {
  const { moviesTop } = useMoviesTop();
  const { movieGenres } = useMovieGenres();
  const { genres } = useGenres();

  if (!moviesTop || !movieGenres || !genres) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '-25vh' }}>
      <Carousel movies={moviesTop} title="Trending Now" />
      {movieGenres.map((movies, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Carousel movies={movies.results} key={index} title={genres[index].name} />
      ))}
    </Container>
  );
}
