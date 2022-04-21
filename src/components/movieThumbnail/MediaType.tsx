import { MultiMediaType } from 'types/api/generic';
import SlideContent from './MovieThumbnail';

interface Props {
  movie: MultiMediaType;
}

export default function MediaType({ movie }: Props) {
  let title = '';

  switch (movie.media_type) {
    case 'movie':
      title = movie.title || movie.original_title;
      break;
    case 'tv':
      title = movie.name || movie.original_name;
      break;
    case 'person':
      return null;
    default:
      throw new Error('Unknown media type');
  }

  return (
    <SlideContent
      id={movie.id}
      title={title}
      posterPath={movie.poster_path}
      voteAverage={movie.vote_average}
    />
  );
}
