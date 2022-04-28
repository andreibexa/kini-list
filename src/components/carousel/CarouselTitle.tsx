import { Typography } from '@mui/material';

interface Props {
  carouselTitle: string;
}

export default function CarouselTitle({ carouselTitle }: Props) {
  return (
    <Typography
      component="h6"
      variant="h6"
      sx={{
        mt: 8,
        p: '0 0 1rem .2rem',
        letterSpacing: '.06em',
      }}
    >
      {carouselTitle}
    </Typography>
  );
}
