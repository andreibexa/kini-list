import Carousel from 'components/carousel/Carousel';
import { Container, Typography } from '@mui/material';
import useTvShowsTop from 'hooks/useTvShowsTop';
import RenderIfVisible from 'react-render-if-visible';
import useGenresTvShows from 'hooks/useGenresTvShows';
import useTvShowsByGenre from 'hooks/useTvShowsByGenre';
import SplideSlideMedia from 'components/carousel/SplideSlideMedia';

export default function ListTvShow() {
  const { tvShowsTop } = useTvShowsTop();
  const { genresTvShows } = useGenresTvShows();
  const { tvShowsByGenre } = useTvShowsByGenre();

  if (!useTvShowsTop || !genresTvShows || !tvShowsByGenre) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '15vh' }}>
      <Typography variant="h1" component="h1">
        TV Series
      </Typography>
      <RenderIfVisible defaultHeight={400}>
        <Carousel carouselTitle="Trending Now">
          <SplideSlideMedia mediaList={tvShowsTop} />
        </Carousel>
      </RenderIfVisible>

      {tvShowsByGenre.map(
        (shows, index) => shows.results.length > 0 && (
        <RenderIfVisible defaultHeight={400} key={genresTvShows[index].name}>
          <Carousel carouselTitle={genresTvShows[index].name}>
            <SplideSlideMedia mediaList={shows.results} />
          </Carousel>
        </RenderIfVisible>
        ),
      )}
    </Container>
  );
}
