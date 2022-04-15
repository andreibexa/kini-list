import { Box, BadgeProps } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';

type PropsBadge = BadgeProps & {
  children: React.ReactNode;
};

function BadgeStyled({ children }: PropsBadge) {
  return (
    <Box
      sx={{
        background: '#000',
        height: '100%',
        '> .badge': {
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'normal',
          alignItems: 'center',
          width: '3.5rem',
          height: '3.5rem',
          top: 0,
          right: 0,
          background: 'rgba(0,0,0,.8)',
          color: 'rgba(245, 197, 24)',
          borderRadius: 0,
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

export default BadgeStyled;
