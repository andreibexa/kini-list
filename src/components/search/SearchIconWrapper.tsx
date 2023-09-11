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
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
}
