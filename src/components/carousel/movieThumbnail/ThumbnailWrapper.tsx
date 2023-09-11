import { Typography } from '@mui/material';
import ThumbnailStyled from './ThumbnailStyled';

interface Props {
  voteAverage: number;
  imgComponent: JSX.Element;
}

export default function ThumbnailWrapper({ voteAverage, imgComponent }: Props) {
  return (
    <ThumbnailStyled>
      <Typography component="span" variant="h6" className="badge">
        {voteAverage.toFixed(1) || ''}
      </Typography>
      {imgComponent}
    </ThumbnailStyled>
  );
}
