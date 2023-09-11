import React from 'react';
import Videocam from '@mui/icons-material/Videocam';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';

interface LogoProps {
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

function Logo({ onClick }: LogoProps) {
  return (
    <Link
      component={RouterLink}
      onClick={onClick}
      to="/"
      color="inherit"
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Videocam
        sx={{
          mr: 1.5,
          fontSize: 40,
          color: (theme: Theme) => theme.palette.secondary.dark,
        }}
      />
      <Typography
        variant="h5"
        component="span"
        noWrap
        sx={{
          letterSpacing: 2,
          fontWeight: 500,
          color: (theme: Theme) => theme.palette.secondary.dark,
        }}
      >
        KINILIST
      </Typography>
    </Link>
  );
}

Logo.defaultProps = {
  onClick: () => {},
};

export default React.memo(Logo);
