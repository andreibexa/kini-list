import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import red from '@mui/material/colors/red';

type PropsCarouselWrapper = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

function CarouselWrapper({ sx = [], children }: PropsCarouselWrapper) {
  return (
    <Box
      sx={[
        {
          position: 'relative',
          'span.MuiBadge-root': {
            border: '2px solid transparent',
            height: '100%',
          },
          '.is-active': {
            border: 'unset',
          },
          '&:first-of-type .is-active>span': {
            border: '2px solid #ffffff',
          },
          '.is-active img': {
            border: '5px solid #000000',
          },
          '.splide__slide[aria-hidden=true]:before': {
            position: 'absolute',
            background: 'rgba(16, 16, 17, .8)',
            content: '""',
            width: '100%',
            height: '100%',
            zIndex: 1,
          },
          '.splide__arrow': {
            background: 'transparent',
            height: '100%',
          },
          '.splide__arrow--next': {
            right: '-27px',
            '&:hover>svg': {
              transform: 'scale(2)',
            },
          },
          '.splide__arrow--prev': {
            left: '-27px',
            '&>svg': {
              transform: 'scale(-1)',
            },
            '&:hover>svg': {
              transform: 'scale(-2)',
            },
          },
          '.splide__arrow svg': {
            fill: red[900],
            width: '1.4em',
            height: '1.4em',
            transition:
              'opacity .2s ease-out,transform .2s ease-out,-webkit-transform .2s ease-out',
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}

export default CarouselWrapper;

CarouselWrapper.defaultProps = {
  sx: [],
};
