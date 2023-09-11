import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface Props {
  backgroundUrl: string;
  children: JSX.Element;
}

export default function Hero({ backgroundUrl, children }: Props) {
  const sxHeroUnit = {
    background: `url(${backgroundUrl}) no-repeat`,
    backgroundSize: 'cover',
    webkitTransition: 'background-image 1s ease-in-out',
    transition: 'background-image 1s ease-in-out',
    height: '100vh',
    minHeight: '710px',
    display: 'flex',
    alignItems: 'center',
    '&:after': {
      boxShadow: 'inset 34px 34px 140px 40px #000000',
      content: '""',
      display: 'block',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
    },
  };

  return (
    <Box sx={sxHeroUnit} className="hero">
      <Container maxWidth="xl" className="hero-content">
        {children}
      </Container>
    </Box>
  );
}
