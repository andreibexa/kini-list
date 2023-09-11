import { Box, BadgeProps } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';

type PropsBadge = BadgeProps & {
  children: React.ReactNode;
};

function ThumbnailStyled({ children }: PropsBadge) {
  return (
    <Box
      sx={{
        background: '#000',
        position: 'relative',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        '&:hover>img': {
          opacity: '.68',
        },
        '> img': {
          border: '5px solid #000000',
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        },
        '> .badge': {
          position: 'absolute',
          textAlign: 'center',
          fontWeight: 'normal',
          width: '3.5rem',
          height: '3.5rem',
          lineHeight: '3.5rem',
          top: 0,
          right: 0,
          background: 'rgba(0,0,0,.8)',
          color: 'rgba(245, 197, 24)',
          zIndex: 1,
          fontSize: '1.2em',
        },
        '> .splide__spinner': {
          borderColor: red[900],
          borderLeftColor: 'transparent',
          width: '4rem',
          height: '4rem',
        },
      }}
    >
      {children}
    </Box>
  );
}

export default ThumbnailStyled;
