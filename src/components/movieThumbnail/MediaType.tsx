import { MultiMediaType } from 'types/api/generic';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import slug from 'helpers/url';
import ThumbnailWrapper from './ThumbnailWrapper';
import ImgThumbnail from './ImgThumbnail';

interface Props {
  movie: MultiMediaType;
}

export default function MediaType({ movie }: Props) {
  let title = null;
  let baseSlug = null;

  switch (movie.media_type) {
    case 'movie':
      title = movie.title || movie.original_title;
      baseSlug = 'movie';
      break;
    case 'tv':
      title = movie.name || movie.original_name;
      baseSlug = 'tv-series';
      break;
    case 'person':
      return null;
    default:
      throw new Error('Unknown media type');
  }

  const posterPath = movie.poster_path || movie.backdrop_path;
  if (!posterPath) {
    return null;
  }

  return (
    <Link component={RouterLink} to={`/${baseSlug}/${slug(title)}-${movie.id}`} title={title}>
      <ThumbnailWrapper
        voteAverage={movie.vote_average}
        imgComponent={<ImgThumbnail title={title} posterPath={posterPath} />}
      />
    </Link>
  );
}
