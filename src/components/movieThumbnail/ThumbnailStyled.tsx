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
