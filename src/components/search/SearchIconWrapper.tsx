import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function SearchIconWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        px: 2,
        py: 0,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}
