import Carousel from 'components/carousel/Carousel';
import { Container, Typography } from '@mui/material';
import useMoviesTop from 'hooks/useMoviesTop';
import RenderIfVisible from 'react-render-if-visible';
import useGenresMovies from 'hooks/useGenresMovies';
import useMoviesByGenre from 'hooks/useMoviesByGenre';
import SplideSlideMedia from 'components/carousel/SplideSlideMedia';

export default function ListTvShow() {
  const { moviesTop } = useMoviesTop();
  const { genresMovies } = useGenresMovies();
  const { moviesByGenre } = useMoviesByGenre();

  if (!useMoviesTop || !genresMovies || !moviesByGenre) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '15vh' }}>
      <Typography variant="h1" component="h1">
        Movies
      </Typography>
      <RenderIfVisible defaultHeight={400}>
        <Carousel carouselTitle="Trending Now">
          <SplideSlideMedia mediaList={moviesTop} />
        </Carousel>
      </RenderIfVisible>

      {moviesByGenre.map(
        (shows, index) => shows.results.length > 0 && (
        <RenderIfVisible defaultHeight={400} key={genresMovies[index].name}>
          <Carousel carouselTitle={genresMovies[index].name}>
            <SplideSlideMedia mediaList={shows.results} />
          </Carousel>
        </RenderIfVisible>
        ),
      )}
    </Container>
  );
}
