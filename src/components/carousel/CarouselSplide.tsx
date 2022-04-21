// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MovieListResult } from 'types/api/generic';
import SlideContent from 'components/movieThumbnail/MovieThumbnail';

const options = {
  perPage: 6,
  perMove: 6,
  breakpoints: {
    2400: { perPage: 6, perMove: 6 },
    1378: { perPage: 6, perMove: 6 },
    998: { perPage: 4, perMove: 4 },
    625: { perPage: 3, perMove: 3 },
    330: { perPage: 2, perMove: 2 },
    0: { perPage: 1.5, perMove: 1.5 },
  },
  lazyLoad: 'sequential' as const,
  type: 'slide',
  focus: 0,
  rewind: true,
  gap: '.5em',
  arrows: true,
  updateOnMove: true,
  pagination: false,
};

const toggleLeftArrow = (index = 0) => {
  const leftArrowCollection: HTMLCollectionOf<Element> = document.getElementsByClassName(
    'splide__arrow splide__arrow--prev',
  );

  const leftArrow = leftArrowCollection[0];
  if (leftArrow instanceof HTMLElement) {
    leftArrow.style.display = index === 0 ? 'none' : 'block';
  }
};

type Props = {
  movies: MovieListResult[];
};

export default function CarouselSplide({ movies }: Props) {
  return (
    <Splide
      options={options}
      onMove={(_splide, index) => {
        toggleLeftArrow(index);
      }}
      onMounted={() => {
        toggleLeftArrow();
      }}
    >
      {movies.map((movie) => (
        <SplideSlide key={movie.id}>
          <SlideContent
            voteAverage={movie.vote_average}
            title={movie.title}
            posterPath={movie.poster_path || movie.backdrop_path}
            id={movie.id}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}