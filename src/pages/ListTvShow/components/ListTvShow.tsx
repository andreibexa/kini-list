import Carousel from 'components/carousel/Carousel';
import { Container } from '@mui/material';
import useTvShowsTop from 'hooks/useTvShowsTop';
import RenderIfVisible from 'react-render-if-visible';
import useGenresTvShows from 'hooks/useGenresTvShows';
import useTvShowsByGenre from 'hooks/useTvShowsByGenre';
import SplideSlideTvShows from 'components/carousel/SplideSlideTvShows';

export default function ListTvShow() {
  const { tvShowsTop } = useTvShowsTop();
  const { genresTvShows } = useGenresTvShows();
  const { tvShowsByGenre } = useTvShowsByGenre();

  if (!useTvShowsTop || !genresTvShows || !tvShowsByGenre) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: '-25vh' }}>
      <RenderIfVisible defaultHeight={400}>
        <Carousel carouselTitle="Trending Now">
          <SplideSlideTvShows shows={tvShowsTop} />
        </Carousel>
      </RenderIfVisible>
      {tvShowsByGenre.map(
        (shows, index) => shows.results.length > 0 && (
        <RenderIfVisible defaultHeight={400} key={genresTvShows[index].name}>
          <Carousel carouselTitle={genresTvShows[index].name}>
            <SplideSlideTvShows shows={shows.results} />
          </Carousel>
        </RenderIfVisible>
        ),
      )}
    </Container>
  );
}
