// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import { MovieListResult } from 'types/api/generic';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ThumbnailWrapper from 'components/movieThumbnail/ThumbnailWrapper';
import ImgCarousel from 'components/movieThumbnail/ImgCarousel';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import slug from 'helpers/url';
import CarouselTitle from './CarouselTitle';

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
  lazyLoad: 'nearby' as const,
  type: 'slide',
  focus: 0,
  rewind: true,
  gap: '.5em',
  arrows: true,
  updateOnMove: false,
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
  carouselTitle: string;
};

export default function CarouselSplide({ movies, carouselTitle }: Props) {
  return (
    <>
      <CarouselTitle carouselTitle={carouselTitle} />
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
            <Link
              component={RouterLink}
              to={`/movie/${slug(movie.title)}-${movie.id}`}
              title={movie.title || movie.original_title}
            >
              <ThumbnailWrapper
                voteAverage={movie.vote_average}
                imgComponent={(
                  <ImgCarousel
                    title={movie.title}
                    posterPath={movie.poster_path || movie.backdrop_path}
                  />
                )}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
