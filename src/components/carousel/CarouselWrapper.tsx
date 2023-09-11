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
          '.splide__slide[aria-hidden=true]:before': {
            position: 'absolute',
            background: 'rgba(16, 16, 17, .8)',
            content: '""',
            width: '100%',
            height: '100%',
            zIndex: 1,
          },
          '.splide__arrow': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 0,
            height: '100%',
            width: '5em',
            transition: 'width 0.3s ease' /* Adaugăm tranziția pentru width */,
          },
          '.splide__arrow svg': {
            fill: red[900],
            width: '2em',
            height: '2em',
            transition:
              'opacity .2s ease-out,transform .2s ease-out,-webkit-transform .2s ease-out',
          },
          '.splide__arrow--next': {
            right: 0,
            paddingRight: '.3em',
          },
          '@media screen and (min-width: 1024px)': {
            '.splide__arrow &:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              width: '9em',
            },
            '.splide__arrow--next:hover > svg': {
              transform: 'scale(2)',
            },
            '.splide__arrow--prev:hover > svg': {
              transform: 'scale(-2)',
            },
          },
          '.splide__arrow--prev': {
            left: 0,
            paddingLeft: '.3em',
            '&>svg': {
              transform: 'scale(-1)',
            },
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
