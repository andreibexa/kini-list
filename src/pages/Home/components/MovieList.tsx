import useGenres from 'hooks/useGenres';
import Carousel from 'components/carousel/Carousel';
import { Container } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import useMovieGenres from 'hooks/useMovieGenres';
import RenderIfVisible from 'react-render-if-visible';

export default function MovieList() {
  const { moviesTop } = useMoviesTop();
  const { movieGenres } = useMovieGenres();
  const { genres } = useGenres();

  if (!moviesTop || !movieGenres || !genres) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '-25vh' }}>
      <RenderIfVisible defaultHeight={400}>
        <Carousel movies={moviesTop} title="Trending Now" />
      </RenderIfVisible>
      {movieGenres.map((movies, index) => (
        <RenderIfVisible defaultHeight={400} key={genres[index].name}>
          <Carousel movies={movies.results} title={genres[index].name} />
        </RenderIfVisible>
      ))}
    </Container>
  );
}
