import Link from '@mui/material/Link';
import { SplideSlide } from '@splidejs/react-splide';
import ImgCarousel from 'components/movieThumbnail/ImgCarousel';
import ThumbnailWrapper from 'components/movieThumbnail/ThumbnailWrapper';
import slug from 'helpers/url';
import { Link as RouterLink } from 'react-router-dom';
import { TVListResult } from 'types/api/generic';

interface Props {
  shows: TVListResult[] | undefined;
}

export default function SplideSlideTvShows({ shows }: Props) {
  if (!shows) {
    return null;
  }

  return (
    <>
      {shows.map((show) => (
        <SplideSlide key={show.id}>
          <Link
            component={RouterLink}
            to={`/tv-series/${slug(show.name)}-${show.id}`}
            title={show.name}
          >
            <ThumbnailWrapper
              voteAverage={show.vote_average}
              imgComponent={(
                <ImgCarousel
                  title={show.name}
                  posterPath={show.poster_path || show.backdrop_path}
                />
              )}
            />
          </Link>
        </SplideSlide>
      ))}
    </>
  );
}
