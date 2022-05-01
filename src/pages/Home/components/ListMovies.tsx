import useGenresMovies from 'hooks/useGenresMovies';
import Carousel from 'components/carousel/Carousel';
import { Container } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import RenderIfVisible from 'react-render-if-visible';
import SplideSlideMovies from 'components/carousel/SplideSlideMovies';

export default function ListMovies() {
  const { moviesTop } = useMoviesTop();
  const { genresMovies } = useGenresMovies();
  const { moviesByGenre } = useMoviesByGenre();

  if (!moviesTop || !genresMovies || !moviesByGenre) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '-25vh' }}>
      <RenderIfVisible defaultHeight={400}>
        <Carousel carouselTitle="Trending Now">
          <SplideSlideMovies movies={moviesTop} />
        </Carousel>
      </RenderIfVisible>
      {moviesByGenre.map(
        (movies, index) => movies.results.length > 0 && (
        <RenderIfVisible defaultHeight={400} key={genresMovies[index].name}>
          <Carousel carouselTitle={genresMovies[index].name}>
            <SplideSlideMovies movies={movies.results} />
          </Carousel>
        </RenderIfVisible>
        ),
      )}
    </Container>
  );
}
