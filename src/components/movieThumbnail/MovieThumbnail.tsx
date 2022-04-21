import slug from 'helpers/url';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BadgeStyled from './BadgeStyled';
import CardMediaStyled from './CardMediaStyled';

interface Props {
  id: number;
  title: string;
  posterPath: string | number | null;
  voteAverage: number;
  mediaType: string;
}

export default function MovieThumbnail({
  id, title, posterPath, voteAverage, mediaType,
}: Props) {
  if (!posterPath) {
    return null;
  }

  const mediaBaseUrl = mediaType === 'movie' ? 'movie' : 'tv-series';

  return (
    <Link component={RouterLink} to={`/${mediaBaseUrl}/${slug(title)}-${id}`} title={title}>
      <BadgeStyled>
        <Typography component="span" variant="h6" className="badge">
          {voteAverage || ''}
        </Typography>
        <CardMediaStyled title={title} posterPath={posterPath} />
      </BadgeStyled>
    </Link>
  );
}
