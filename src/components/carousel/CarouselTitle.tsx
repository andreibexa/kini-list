import { Typography } from '@mui/material';

interface Props {
  title: string;
}

export default function CarouselTitle({ title }: Props) {
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
      {title}
    </Typography>
  );
}
