import Link from '@mui/material/Link';
import { SplideSlide } from '@splidejs/react-splide';
import ImgCarousel from 'components/movieThumbnail/ImgCarousel';
import ThumbnailWrapper from 'components/movieThumbnail/ThumbnailWrapper';
import slug from 'helpers/url';
import { Link as RouterLink } from 'react-router-dom';
import { MovieListResult } from 'types/api/generic';

interface Props {
  movies: MovieListResult[];
}

export default function SplideSlideMovies({ movies }: Props) {
  if (!movies) {
    return null;
  }

  return (
    <>
      {movies.map((movie) => (
        <SplideSlide key={movie.id}>
          <Link
            component={RouterLink}
            to={`/movie/${slug(movie.title)}-${movie.id}`}
            title={movie.title}
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
    </>
  );
}
