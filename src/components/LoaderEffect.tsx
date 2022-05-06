import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import React from 'react';

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function LoaderEffect({ isLoading, children, sx = [] }: Props) {
  return (
    <Box
      sx={[
        {
          pt: 30,
          div: {
            transition: 'opacity 1s ease-in',
            opacity: '1',
          },
        },
        isLoading && {
          background: '#000',
          minHeight: '100vh',
          div: {
            transition: 'opacity 1s ease-out, background-image 1s ease-out',
            opacity: '.1',
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

LoaderEffect.defaultProps = {
  sx: [],
};
