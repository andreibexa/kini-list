import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

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
            width: '4vw',
            height: '100%',
            opacity: 0,
          },
          '&:hover .splide__arrow': {
            opacity: 1,
          },
          '.splide__arrow--next': {
            right: 0,
            '&:hover>svg': {
              transform: 'scale(2)',
            },
          },
          '.splide__arrow--prev': {
            left: 0,
            transfom: 'scale(-1)',
            '&:hover>svg': {
              transform: 'scale(-2)',
            },
          },
          '.splide__arrow svg': {
            fill: '#f2f2f2',
            transition:
              'opacity .2s ease-out,transform .2s ease-out,-webkit-transform .2s ease-out',
          },
        },
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
